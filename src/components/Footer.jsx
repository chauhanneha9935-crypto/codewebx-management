export default function GeneratorForm() {
  return (
    <div className="p-8 w-full max-w-4xl mx-auto">
      <div className="bg-white/5 border border-gold/30 p-10 rounded-3xl backdrop-blur-md shadow-2xl">
        <input 
          className="w-full bg-[#1a0f06] border border-gold/30 p-4 mb-4 rounded-lg text-white outline-none focus:border-gold" 
          placeholder="FULL NAME" 
        />
        <input 
          className="w-full bg-[#1a0f06] border border-gold/30 p-4 mb-6 rounded-lg text-white outline-none focus:border-gold" 
          placeholder="EMAIL/PHONE NUMBER" 
        />
        <button className="w-full bg-gradient-to-r from-bronze to-gold p-4 rounded-lg font-bold text-black uppercase hover:scale-[1.02] transition-transform">
          Generate & Access My Credentials
        </button>
      </div>
    </div>
  );
}