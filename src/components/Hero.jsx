import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-12 flex flex-col items-center justify-center text-white px-4 z-10 overflow-hidden">
      
      {/* Container for animated text */}
      <div className="text-center max-w-6xl mx-auto z-10">
        
        {/* WELCOME TO sliding in smoothly from the left */}
        <motion.h2 
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wider text-white uppercase font-sans mb-2"
        >
          WELCOME TO
        </motion.h2>
        
        {/* THE CODEWEBX sliding in smoothly with 3D depth from the right */}
        <motion.h1 
          initial={{ opacity: 0, x: 120, rotateX: 25 }}
          animate={{ opacity: 1, x: 0, rotateX: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-widest uppercase font-sans mb-4 leading-none flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 perspective-1000"
        >
          <span className="outline-text">THE</span>
          <span className="text-[#00c853] drop-shadow-[0_0_40px_rgba(0,200,83,0.6)]">CODEWEBX</span>
        </motion.h1>

        {/* Subtitle sliding up */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl font-medium text-emerald-100/90 tracking-wide max-w-2xl mx-auto mb-10"
        >
          Your Professional Credential Portal. Pure tech, zero friction.
        </motion.p>

        {/* Floating 3D Showcase Image of Digital Verification Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
          transition={{ 
            opacity: { duration: 1, delay: 0.7 },
            scale: { duration: 1, delay: 0.7 },
            y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1.7 }
          }}
          className="relative w-full max-w-2xl mx-auto mt-2 cursor-pointer filter drop-shadow-[0_20px_50px_rgba(0,200,83,0.3)] group"
        >
          <div className="absolute inset-0 bg-[#00c853]/20 rounded-3xl blur-3xl group-hover:bg-[#00c853]/35 transition-all" />
          <img 
            src="/form-3d.png" 
            alt="CodeWebX 3D Digital Verification Form Showcase" 
            className="relative z-10 w-full h-auto max-h-[420px] rounded-2xl border border-emerald-500/40 object-contain mx-auto shadow-2xl transform group-hover:scale-[1.03] transition-transform duration-500"
          />
        </motion.div>

      </div>
    </section>
  );
}