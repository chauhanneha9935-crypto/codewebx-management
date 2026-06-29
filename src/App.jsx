import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ActionCards from './components/ActionCards';
import GenerateForm from './components/GenerateForm';
import LoginPage from './components/LoginPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-gradient-to-b from-[#06140b] via-[#040905] to-[#020302] relative overflow-hidden text-white flex flex-col justify-between selection:bg-[#00c853] selection:text-black">
        
        {/* --- Background Geometric Decor & Accent Graphics --- */}
        
        {/* Dot Grid Patterns */}
        <div className="absolute top-0 left-0 w-80 h-80 dot-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 dot-grid-pattern opacity-30 pointer-events-none" />

        {/* Diagonal Stripes accents */}
        <div className="absolute -top-10 -left-10 w-96 h-96 diagonal-stripes opacity-40 pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 diagonal-stripes opacity-30 pointer-events-none" />

        {/* Floating Rotated 3D Diamonds */}
        <div className="absolute top-28 left-12 w-16 h-16 diamond-shape opacity-70 pointer-events-none animate-pulse" />
        <div className="absolute top-64 right-16 w-20 h-20 diamond-shape opacity-60 pointer-events-none" />
        <div className="absolute bottom-44 left-8 w-14 h-14 diamond-shape opacity-50 pointer-events-none" />
        <div className="absolute top-12 left-1/3 w-10 h-10 diamond-shape opacity-40 pointer-events-none" />

        {/* Glowing Electric Green Lens Flares */}
        <div className="absolute top-24 right-1/4 w-72 h-72 bg-[#00c853]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-10 w-80 h-80 bg-[#00e676]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-emerald-500/15 rounded-full blur-[90px] pointer-events-none" />
        
        {/* Light sparkles */}
        <div className="absolute top-36 right-24 w-4 h-4 bg-emerald-200 rounded-full blur-[2px] shadow-[0_0_20px_#00c853] pointer-events-none" />
        <div className="absolute top-80 left-20 w-3 h-3 bg-green-100 rounded-full blur-[1px] shadow-[0_0_15px_#00e676] pointer-events-none" />

        {/* --- Header & Navigation --- */}
        <Navbar />

        {/* --- Main Content View --- */}
        <main className="relative z-10 flex-1 flex flex-col pt-8">
          <Routes>
            <Route path="/" element={
              <div className="flex flex-col items-center w-full">
                <Hero />
                <ActionCards />
                <GenerateForm />
              </div>
            } />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<LoginPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}