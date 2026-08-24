import { NextResponse } from "next/server";

export interface GitHubData {
  username: string;
  publicRepos: number;
  totalContributions: number;
  stars: number;
  currentStreak: number;
  activityStatus: string;
  days: { date: string; level: number }[];
  updatedAt: string;
}

export async function GET() {
  const username = "thedeorasidharth";

  try {
    const headers = {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
      Accept: "application/vnd.github.v3+json",
    };

    // 1. Fetch user profile & repos in parallel
    const [userRes, reposRes, contribRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers, next: { revalidate: 3600 } }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100`, { headers, next: { revalidate: 3600 } }),
      fetch(`https://github.com/users/${username}/contributions`, { headers, next: { revalidate: 3600 } }),
    ]);

    let publicRepos = 0;
    let stars = 0;

    if (userRes.ok) {
      const userData = await userRes.json();
      publicRepos = userData.public_repos ?? 0;
    }

    if (reposRes.ok) {
      const reposData = await reposRes.json();
      if (Array.isArray(reposData)) {
        stars = reposData.reduce((acc: number, repo: any) => acc + (repo.stargazers_count ?? 0), 0);
      }
    }

    // 2. Parse real GitHub contributions HTML
    const days: { date: string; level: number }[] = [];
    let totalContributions = 0;

    if (contribRes.ok) {
      const html = await contribRes.text();

      // Extract total contributions string
      const totalMatch = html.match(/([\d,]+)\s+contributions\s+in/i);
      if (totalMatch) {
        totalContributions = parseInt(totalMatch[1].replace(/,/g, ""), 10);
      }

      // Parse data-date and data-level attributes from HTML table
      const regex = /data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="(\d)"/g;
      let match;
      while ((match = regex.exec(html)) !== null) {
        days.push({
          date: match[1],
          level: parseInt(match[2], 10),
        });
      }
    }

    // Sort days chronologically
    days.sort((a, b) => (a.date > b.date ? 1 : -1));

    // Calculate current streak
    let currentStreak = 0;
    for (let i = days.length - 1; i >= 0; i--) {
      if (days[i].level > 0) {
        currentStreak++;
      } else {
        // Skip today if it has 0 contributions yet
        if (i === days.length - 1) continue;
        break;
      }
    }

    // Determine activity status from recent 30-day activity density
    const recent30 = days.slice(-30);
    const activeDays30 = recent30.filter((d) => d.level > 0).length;
    let activityStatus = "NOMINAL";
    if (activeDays30 >= 15) activityStatus = "HIGH_ACTIVITY";
    else if (activeDays30 >= 5) activityStatus = "ACTIVE";

    const payload: GitHubData = {
      username,
      publicRepos,
      totalContributions,
      stars,
      currentStreak,
      activityStatus,
      days,
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Failed to fetch GitHub live data:", error);
    return NextResponse.json(
      { error: "Failed to load GitHub activity data" },
      { status: 500 }
    );
  }
}
