import { useState } from "react";

export default function GeneratorForm() {
  const [fullName, setFullName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim()) return;
    setIsGenerated(true);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 pb-16 pt-2 z-10 relative">
      {/* Glow highlight behind container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#00c853]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="glass-panel rounded-[2rem] p-6 md:p-10 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Offer Letter Live Preview Snippet */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="w-full max-w-[240px] bg-[#FAF8F5] text-slate-800 rounded-xl p-4 shadow-2xl border border-emerald-300/60 transform lg:-rotate-2 hover:rotate-0 transition-transform duration-300">
              {/* Mini Company Header */}
              <div className="flex flex-col items-center border-b border-slate-200 pb-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-emerald-800/20 flex items-center justify-center mb-1">
                  <div className="w-3 h-3 rotate-45 bg-[#00c853]" />
                </div>
                <span className="text-[9px] font-bold tracking-widest text-slate-800 uppercase">CODEWEBX</span>
                <span className="text-[7px] text-emerald-700 font-semibold">TECHNOLOGIES</span>
              </div>
              
              <div className="text-right text-[7px] text-slate-400 mb-2">Date: Schedule 2026</div>
              
              <h4 className="text-[11px] font-extrabold text-slate-900 mb-2 border-b border-slate-200 pb-1">Offer Letter</h4>
              <p className="text-[8px] text-slate-600 leading-tight mb-2">
                Dear <span className="font-semibold text-slate-900">{fullName || "Candidate"}</span>,
              </p>
              <p className="text-[7.5px] text-slate-500 leading-relaxed mb-4">
                We are pleased to offer you the position. We were impressed with your credentials and skills during our verification process.
              </p>
              
              <div className="flex justify-between items-end pt-2 border-t border-slate-100">
                <div className="text-[7px] text-slate-400">
                  <p className="font-serif italic text-slate-700 text-[9px]">Authorized Sign</p>
                  <p>HR Department</p>
                </div>
                <div className="w-7 h-7 rounded-full bg-emerald-600/15 border border-emerald-600/30 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#00c853] flex items-center justify-center text-[6px] text-black font-bold">✓</div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: Form Inputs & Submit Button */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="mb-4 flex items-center gap-3 bg-[#00c853]/10 border border-[#00c853]/30 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(0,200,83,0.2)]">
              <img src="/form-3d.png" alt="Form Icon" className="w-6 h-6 object-contain animate-pulse" />
              <span className="text-xs font-bold tracking-wider text-emerald-300 uppercase">CREDENTIAL REQUEST FORM</span>
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
              <div>
                <input 
                  type="text" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-[#041008]/90 border border-[#00c853]/40 rounded-xl px-5 py-4 text-center text-emerald-100 font-medium placeholder-emerald-200/40 uppercase tracking-wider focus:outline-none focus:border-[#00c853] focus:ring-2 focus:ring-[#00c853]/20 transition-all shadow-inner text-sm md:text-base" 
                  placeholder="FULL NAME"
                  required
                />
              </div>
              
              <div>
                <input 
                  type="text" 
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  className="w-full bg-[#041008]/90 border border-[#00c853]/40 rounded-xl px-5 py-4 text-center text-emerald-100 font-medium placeholder-emerald-200/40 uppercase tracking-wider focus:outline-none focus:border-[#00c853] focus:ring-2 focus:ring-[#00c853]/20 transition-all shadow-inner text-sm md:text-base" 
                  placeholder="EMAIL/PHONE NUMBER"
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full btn-green-solid py-4 rounded-xl font-black text-xs md:text-sm uppercase tracking-widest transition-all duration-300 cursor-pointer"
              >
                GENERATE & ACCESS MY CREDENTIALS
              </button>
            </form>

            {isGenerated && (
              <div className="mt-4 p-3 rounded-xl bg-[#00c853]/15 border border-[#00c853]/40 text-emerald-200 text-xs text-center animate-fade-in">
                ✓ Credentials successfully verified for {fullName}! Downloading certificate...
              </div>
            )}
          </div>

          {/* Right Column: Certificate Live Preview Snippet */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="w-full max-w-[240px] bg-[#FAF8F5] text-slate-800 rounded-xl p-4 shadow-2xl border-4 border-double border-emerald-600/40 transform lg:rotate-2 hover:rotate-0 transition-transform duration-300 relative overflow-hidden">
              {/* Corner Ornate Accents */}
              <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-emerald-700" />
              <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-emerald-700" />
              <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-emerald-700" />
              <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-emerald-700" />

              <div className="text-center pt-2">
                <h4 className="font-serif text-base font-bold text-slate-900 tracking-wide mb-1">Certificate</h4>
                <p className="text-[8px] text-slate-500 italic mb-2">This personalized certificate to</p>
                
                <div className="my-3 py-1 border-b border-emerald-400/50">
                  <p className="font-serif text-xs font-bold text-emerald-900 truncate">
                    {fullName || "Your Name Here"}
                  </p>
                </div>
                
                <p className="text-[7.5px] text-slate-500 leading-tight mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>

                <div className="w-6 h-6 mx-auto rounded-full bg-emerald-700/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#00c853]" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}