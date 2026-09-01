import React, { useState } from "react";
import { motion } from "motion/react";
import { OTPVerificationScreen } from "./components/OTPVerificationScreen";
import ProducerMasterFlowNavigator from "./components/producer-dashboard/ProducerMasterFlowNavigator";
import { Toaster } from "./components/ui/sonner";
import tradieLogo from "figma:asset/f956260347dc5e875bfaa9ef290c3ac5a8e7e3d9.png";
import { designTokens } from "./design-system";

const { colors, typography } = designTokens;

type AppState = "splash" | "otp" | "entry" | "full-journey";

// ── Phases summary shown on the entry screen ───────────────────────────────

const PHASE_OVERVIEW = [
  { label: "① Setup",         desc: "Profile · Dashboard",                                           color: "#6366F1" },
  { label: "② Farm & Crops",  desc: "Crop selection · Activities · Cost tracking · Health",           color: "#10B981" },
  { label: "③ Harvest & Lot", desc: "Harvest listing · Lot management",                              color: "#F59E0B" },
  { label: "④ Quality",       desc: "Sampling · AI check · Grading · Traceability · Tokenization",   color: "#8B5CF6" },
  { label: "⑤ Store / Sell",  desc: "Decision · Storage facility",                                   color: "#EF4444" },
  { label: "⑥ Selling",       desc: "Marketplace · Matchmaking · Agent · Buyer · Order",             color: "#F97316" },
  { label: "⑦ Transaction",   desc: "Auction · Transport · Destination · Settlement",                color: "#0EA5E9" },
  { label: "⑧ Complete",      desc: "Transaction history · AI insights",                             color: "#22C55E" },
];

// ── App ────────────────────────────────────────────────────────────────────

export default function App() {
  const [appState, setAppState] = useState<AppState>("splash");

  // ── Splash ──────────────────────────────────────────────────────────────

  if (appState === "splash") {
    return (
      <div
        className="min-h-screen w-full overflow-x-hidden flex flex-col items-center justify-between px-5"
        style={{
          background: "linear-gradient(160deg, #F7FAFC 0%, #D9F2FF 50%, #B3E0FF 100%)",
          paddingTop: "calc(40px + env(safe-area-inset-top, 0px))",
          paddingBottom: "calc(40px + env(safe-area-inset-bottom, 0px))",
        }}
      >
        <div />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center w-full max-w-sm"
        >
          <img src={tradieLogo} alt="TRADIE" className="w-24 h-24 mx-auto mb-6 rounded-2xl shadow-xl" />
          <h1
            className="text-4xl font-black mb-2"
            style={{ fontFamily: typography.fonts.heading, color: colors.blue.primary }}
          >
            TRADIE
          </h1>
          <p className="text-base font-medium mb-1" style={{ color: colors.blue.primary }}>
            Producer Platform
          </p>
          <p className="text-sm" style={{ color: `${colors.blue.primary}80` }}>
            Farm · Harvest · Sell · Prosper
          </p>
          <div className="flex justify-center gap-3 mt-6 flex-wrap">
            {["🌾 Farmers", "🤝 Traders", "📦 Buyers"].map(tag => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-xs font-medium"
                style={{ backgroundColor: `${colors.blue.primary}12`, color: colors.blue.primary }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full max-w-sm space-y-3"
        >
          <button
            onClick={() => setAppState("otp")}
            className="w-full py-4 rounded-2xl font-bold text-lg transition-all active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #003E6D, #0072C6)",
              color: "white",
              boxShadow: "0 6px 24px rgba(0,62,109,0.35)",
            }}
          >
            Get Started →
          </button>
          <button
            onClick={() => setAppState("entry")}
            className="w-full py-3 rounded-2xl font-semibold text-sm border-2 transition-all"
            style={{ borderColor: `${colors.blue.primary}40`, color: colors.blue.primary }}
          >
            I already have an account
          </button>
          <p className="text-center text-xs" style={{ color: colors.text.muted }}>
            Multi-language · AI-Powered · Secure
          </p>
        </motion.div>

        <Toaster />
      </div>
    );
  }

  // ── OTP ─────────────────────────────────────────────────────────────────

  if (appState === "otp") {
    return (
      <>
        <OTPVerificationScreen
          onVerifySuccess={() => setAppState("entry")}
          onBackToSignUp={() => setAppState("splash")}
          mobile="98765 43210"
          countryCode="+91"
        />
        <Toaster />
      </>
    );
  }

  // ── Full Journey ─────────────────────────────────────────────────────────

  if (appState === "full-journey") {
    return (
      <div className="min-h-screen w-full overflow-x-hidden" style={{ backgroundColor: "#F7FAFC" }}>
        <ProducerMasterFlowNavigator onBack={() => setAppState("entry")} />
        <Toaster />
      </div>
    );
  }

  // ── Entry — single CTA ───────────────────────────────────────────────────

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden"
      style={{
        background: "linear-gradient(160deg, #F7FAFC 0%, #D9F2FF 100%)",
        paddingTop: "env(safe-area-inset-top, 0px)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      {/* Top bar */}
      <div
        className="sticky top-0 z-40 flex items-center px-4 border-b bg-white"
        style={{
          borderColor: "#E5E7EB",
          paddingTop: "calc(12px + env(safe-area-inset-top, 0px))",
          paddingBottom: 12,
        }}
      >
        <img src={tradieLogo} alt="TRADIE" className="w-7 h-7 rounded-lg flex-shrink-0 mr-2" />
        <span
          className="font-black text-base"
          style={{ fontFamily: typography.fonts.heading, color: colors.blue.primary }}
        >
          TRADIE
        </span>
      </div>

      {/* Centered content, capped at mobile width */}
      <div className="w-full max-w-[430px] mx-auto px-5 py-8 flex flex-col gap-6">

        {/* Producer identity card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl p-5 flex items-center gap-4"
          style={{
            backgroundColor: "white",
            border: `2px solid ${colors.accent.gold}40`,
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-3xl flex-shrink-0"
            style={{ background: `linear-gradient(135deg, ${colors.blue.primary}, #0072C6)` }}
          >
            👨‍🌾
          </div>
          <div className="min-w-0">
            <p
              className="font-bold text-lg truncate"
              style={{ fontFamily: typography.fonts.heading, color: colors.blue.primary }}
            >
              Ravi Kumar
            </p>
            <p className="text-xs truncate" style={{ color: colors.text.muted }}>
              📍 Anantapur, Andhra Pradesh
            </p>
            <span
              className="inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: "#10B98118", color: "#10B981" }}
            >
              ✓ KYC Verified Producer
            </span>
          </div>
        </motion.div>

        {/* Primary CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          onClick={() => setAppState("full-journey")}
          className="w-full p-5 rounded-2xl text-center font-bold text-lg transition-all active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, #FFD700 0%, #F59E0B 100%)",
            color: colors.blue.primary,
            boxShadow: "0 4px 20px rgba(255,215,0,0.45)",
          }}
        >
          🌾 Open Complete Producer Journey
          <p className="text-sm font-normal mt-1 opacity-80">26-stage flow · All steps in one place</p>
        </motion.button>

        {/* Journey overview card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="rounded-2xl p-4"
          style={{ backgroundColor: "white", border: "1px solid #E5E7EB" }}
        >
          <p className="text-xs font-bold mb-3" style={{ color: colors.blue.primary }}>
            Journey Overview · 26 stages · 8 phases
          </p>
          <div className="space-y-2">
            {PHASE_OVERVIEW.map(phase => (
              <div key={phase.label} className="flex items-start gap-2">
                <div
                  className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: phase.color }}
                />
                <div className="min-w-0">
                  <span className="text-xs font-semibold" style={{ color: colors.text.primary }}>
                    {phase.label}
                  </span>
                  <span className="text-xs ml-1" style={{ color: colors.text.muted }}>
                    · {phase.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      <Toaster />
    </div>
  );
}
