import { useState } from "react";

export default function LoginPage() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Attempting login with:", credentials);
    // Add your Auth logic here (e.g., Supabase/Firebase)
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <form 
        onSubmit={handleLogin}
        className="w-full max-w-sm p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Access</h2>
        <input 
          type="email"
          className="w-full p-3 mb-4 bg-black/50 rounded border border-gray-700 focus:border-blue-500 outline-none"
          placeholder="Email" 
          onChange={(e) => setCredentials({...credentials, email: e.target.value})}
        />
        <input 
          type="password"
          className="w-full p-3 mb-6 bg-black/50 rounded border border-gray-700 focus:border-blue-500 outline-none"
          placeholder="Password" 
          onChange={(e) => setCredentials({...credentials, password: e.target.value})}
        />
        <button className="w-full py-3 bg-blue-600 rounded-lg font-bold hover:bg-blue-700 transition">
          Sign In
        </button>
      </form>
    </div>
  );
}