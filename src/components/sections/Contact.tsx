"use client";

import { motion } from "framer-motion";
import { MessageSquare, Send, Link, Camera } from "lucide-react";

export default function Contact() {
    const whatsappUrl = "https://wa.me/919001890408?text=Hi%20Sidharth%2C%20I%20want%20to%20connect%20regarding%20your%20portfolio";
    const linkedinUrl = "https://linkedin.com/in/thedeorasidharth";
    const instagramUrl = "https://instagram.com/thedeorasidharth";

    return (
        <div className="relative py-20">
            <h2 className="hud-text text-3xl mb-16 tracking-[0.5em] text-center">
                ESTABLISH_COMM_LINK // RADAR_SIGNAL
            </h2>

            <div className="max-w-3xl mx-auto glass p-12 border-2 border-sky-500/20 relative overflow-hidden group">
                {/* Radar Scanning UI Background */}
                <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 border border-sky-500 rounded-full scale-[1.5]" />
                    <div className="absolute inset-0 border border-sky-500 rounded-full scale-[2.5]" />
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-transparent origin-center"
                    />
                </div>

                <div className="relative z-10 text-center">
                    <motion.div
                        animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="inline-block p-4 border border-sky-500/30 rounded-full mb-8"
                    >
                        <div className="w-4 h-4 bg-red-500 rounded-full shadow-[0_0_20px_#ef4444] animate-pulse" />
                    </motion.div>

                    <h3 className="text-4xl font-black text-white italic tracking-tighter mb-4">AWAITING ORDERS.</h3>
                    <p className="text-slate-400 text-lg mb-12 max-w-md mx-auto leading-relaxed">
                        Frequency open for collaboration, deployment, or mission inquiries.
                        Transmit your signal below.
                    </p>

                    <div className="flex flex-col gap-4 max-w-sm mx-auto">
                        <a
                            href="mailto:deorasidharth@gmail.com"
                            className="w-full px-10 py-4 bg-sky-500 text-slate-950 font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_20px_rgba(56,189,248,0.4)] flex items-center justify-center gap-3"
                        >
                            <Send size={18} />
                            SEND SIGNAL
                        </a>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-4 border-2 border-green-500 text-green-500 font-black uppercase tracking-[0.1em] text-[10px] hover:bg-green-500/10 transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] active:scale-95"
                            >
                                <MessageSquare size={16} />
                                WHATSAPP
                            </a>
                            <a
                                href={linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-4 border-2 border-blue-500 text-blue-500 font-black uppercase tracking-[0.1em] text-[10px] hover:bg-blue-500/10 transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] active:scale-95"
                            >
                                <Link size={16} />
                                LINKEDIN
                            </a>
                            <a
                                href={instagramUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-4 border-2 border-pink-500 text-pink-500 font-black uppercase tracking-[0.1em] text-[10px] hover:bg-pink-500/10 transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] active:scale-95"
                            >
                                <Camera size={16} />
                                INSTA_FEED
                            </a>
                        </div>
                    </div>

                    <div className="mt-16 flex justify-center gap-12 opacity-40">
                        <div className="flex flex-col">
                            {/* <span className="hud-text text-[8px]">FREQ_BAND</span> */}
                            {/* <span className="hud-text">X-BAND_SAT</span> */}
                        </div>
                        <div className="flex flex-col">
                            {/* <span className="hud-text text-[8px]">SIGNAL_STRENGTH</span> */}
                            {/* <span className="hud-text">MAXIMAL</span> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
