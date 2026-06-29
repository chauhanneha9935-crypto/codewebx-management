export default function Navbar() {
  return (
    <nav className="w-full max-w-7xl mx-auto p-4 md:p-6 flex justify-between items-center z-50 relative">
      {/* Brand Logo */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-[#00c853] flex items-center justify-center font-black text-black text-sm tracking-tighter shadow-[0_0_15px_rgba(0,200,83,0.5)]">
          CX
        </div>
        <div className="flex flex-col">
          <span className="text-base font-black tracking-wider text-white leading-none">CODEWEBX</span>
          <span className="text-[9px] font-bold tracking-widest text-[#00c853] uppercase leading-tight">TECHNOLOGIES</span>
        </div>
      </div>

      {/* Center Navigation Pill Container */}
      <div className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-md border border-white/10 p-1.5 rounded-full px-4">
        <a href="/" className="px-4 py-1.5 rounded-full bg-[#00c853] text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_0_10px_rgba(0,200,83,0.4)]">
          HOME
        </a>
        <a href="#portal" className="px-4 py-1.5 text-xs font-bold text-gray-300 hover:text-white uppercase tracking-wider transition-colors">
          PORTAL
        </a>
        <a href="#verification" className="px-4 py-1.5 text-xs font-bold text-gray-300 hover:text-white uppercase tracking-wider transition-colors">
          VERIFICATION
        </a>
        
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-4">
        <a 
          href="/admin" 
          className="text-xs font-bold tracking-widest text-emerald-100/80 hover:text-white uppercase transition-colors hidden sm:inline-block"
        >
          ADMIN
        </a>
        <a 
          href="/login" 
          className="px-5 py-2 text-xs font-extrabold tracking-widest text-white uppercase border border-[#00c853]/40 rounded-full hover:border-[#00c853] hover:bg-[#00c853]/10 transition-all shadow-[0_0_15px_rgba(0,200,83,0.2)]"
        >
          LOGIN
        </a>
      </div>
    </nav>
  );
}