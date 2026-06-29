import { motion } from "framer-motion";

export default function ActionCards() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 z-10 perspective-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1: OFFER LETTER */}
        <motion.div
          whileHover={{ y: -8, scale: 1.03, rotateX: 6, rotateY: -6 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="glass-card rounded-2xl p-6 h-52 flex justify-between items-start relative overflow-hidden cursor-pointer group hover:border-[#00c853]/60 transition-colors shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
        >
          <div className="z-10 pt-2">
            <h3 className="text-xl md:text-2xl font-black tracking-wider text-white uppercase font-sans">
              OFFER LETTER
            </h3>
            <p className="text-xs text-emerald-200/70 mt-2 max-w-[130px]">Instant corporate onboarding verification</p>
          </div>
          <div className="absolute right-3 bottom-3 w-32 h-36 flex items-center justify-center filter drop-shadow-[0_10px_20px_rgba(0,200,83,0.3)] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
            {/* Offer Letter Illustration SVG */}
            <svg viewBox="0 0 100 120" className="w-full h-full">
              <rect x="15" y="10" width="70" height="95" rx="4" fill="#F8F6F0" stroke="#00c853" strokeWidth="1.5"/>
              <line x1="25" y1="25" x2="65" y2="25" stroke="#0f291e" strokeWidth="4" strokeLinecap="round"/>
              <line x1="25" y1="38" x2="75" y2="38" stroke="#5a7a6e" strokeWidth="3.5" strokeLinecap="round"/>
              <line x1="25" y1="48" x2="75" y2="48" stroke="#5a7a6e" strokeWidth="3.5" strokeLinecap="round"/>
              <line x1="25" y1="58" x2="65" y2="58" stroke="#5a7a6e" strokeWidth="3.5" strokeLinecap="round"/>
              <line x1="25" y1="68" x2="55" y2="68" stroke="#5a7a6e" strokeWidth="3.5" strokeLinecap="round"/>
              {/* Green Tech Seal */}
              <circle cx="68" cy="85" r="14" fill="url(#greenSealGrad)" stroke="#00e676" strokeWidth="1.5"/>
              <path d="M62 96 L65 112 L68 106 L71 112 L74 96" fill="#00a843"/>
              <circle cx="68" cy="85" r="10" fill="none" stroke="#FFF" strokeWidth="1" strokeDasharray="2 1"/>
              <defs>
                <linearGradient id="greenSealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00e676" />
                  <stop offset="50%" stopColor="#00c853" />
                  <stop offset="100%" stopColor="#00796b" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>

        {/* Card 2: CERTIFICATE */}
        <motion.div
          whileHover={{ y: -8, scale: 1.03, rotateX: 6, rotateY: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="glass-card rounded-2xl p-6 h-52 flex justify-between items-start relative overflow-hidden cursor-pointer group hover:border-[#00c853]/60 transition-colors shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
        >
          <div className="z-10 pt-2">
            <h3 className="text-xl md:text-2xl font-black tracking-wider text-white uppercase font-sans">
              CERTIFICATE
            </h3>
            <p className="text-xs text-emerald-200/70 mt-2 max-w-[130px]">Tamper-proof digital credentials</p>
          </div>
          <div className="absolute right-2 bottom-2 w-36 h-36 flex items-center justify-center filter drop-shadow-[0_10px_20px_rgba(0,200,83,0.3)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            {/* Scroll Certificate Illustration SVG */}
            <svg viewBox="0 0 120 100" className="w-full h-full">
              <rect x="15" y="15" width="90" height="70" rx="3" fill="#F4EAD3" stroke="#00c853" strokeWidth="1.5"/>
              <rect x="8" y="10" width="104" height="8" rx="4" fill="url(#greenRodGrad)"/>
              <rect x="8" y="82" width="104" height="8" rx="4" fill="url(#greenRodGrad)"/>
              <rect x="25" y="25" width="70" height="50" fill="none" stroke="#00c853" strokeWidth="1" strokeDasharray="3 2"/>
              <line x1="35" y1="35" x2="85" y2="35" stroke="#0a3822" strokeWidth="3" strokeLinecap="round"/>
              <line x1="40" y1="45" x2="80" y2="45" stroke="#2e6649" strokeWidth="2" strokeLinecap="round"/>
              <line x1="35" y1="55" x2="85" y2="55" stroke="#2e6649" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="82" cy="65" r="11" fill="url(#greenSealGrad)"/>
              <path d="M77 74 L80 88 L82 83 L84 88 L87 74" fill="#00796b"/>
              <defs>
                <linearGradient id="greenRodGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0a2e1d" />
                  <stop offset="50%" stopColor="#00c853" />
                  <stop offset="100%" stopColor="#061f13" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>

        {/* Card 3: CREDENTIAL VERIFICATION WITH GENERATED 3D BADGE IMAGE */}
        <motion.div
          whileHover={{ y: -8, scale: 1.03, rotateX: 6, rotateY: 6 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="glass-card rounded-2xl p-6 h-52 flex justify-between items-start relative overflow-hidden cursor-pointer group hover:border-[#00c853]/60 transition-colors shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
        >
          <div className="z-10 pt-2">
            <h3 className="text-xl md:text-2xl font-black tracking-wider text-white uppercase font-sans leading-tight">
              CREDENTIAL<br />VERIFICATION
            </h3>
            <p className="text-xs text-emerald-200/80 lowercase tracking-normal font-normal mt-1">
              (the one more thing)
            </p>
          </div>

          {/* AI Generated 3D Floating Credential Badge Image */}
          <div className="absolute right-3 bottom-2 w-28 h-32 flex items-center justify-center filter drop-shadow-[0_10px_25px_rgba(0,200,83,0.5)] group-hover:scale-115 transition-all duration-300">
            <img 
              src="/credentials-3d.png" 
              alt="3D Floating Credential" 
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}