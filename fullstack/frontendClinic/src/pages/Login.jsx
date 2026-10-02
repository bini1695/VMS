import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail, ArrowLeft, PawPrint } from 'lucide-react';

export default function Login() {
  const [role, setRole] = useState('owner');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-cream-50">
      
      {/* Left Brand Illustration Banner */}
      <div className="hidden lg:flex flex-col justify-between p-12 bg-forest text-white relative overflow-hidden">
        <div className="z-10">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-white text-forest p-2 rounded-xl">
              <PawPrint className="h-6 w-6" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight">VetCare Clinic</span>
          </Link>
        </div>
        
        <div className="z-10 space-y-4 max-w-md">
          <h1 className="text-4xl font-extrabold leading-tight">Welcome to the VetCare Portal</h1>
          <p className="text-cream-200 text-sm leading-relaxed">
            Manage your pet's medical records, schedule appointments, order prescriptions, or access clinical records seamlessly.
          </p>
        </div>

        <div className="z-10 text-xs text-forest-50">
          © VetCare Clinic Portal System
        </div>

        {/* Decorative background circle */}
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Right Glassmorphism Form Area */}
      <div className="flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-lg p-8 rounded-3xl border border-sage-200 shadow-xl space-y-6">
          
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-extrabold text-gray-900">Account Access</h2>
            <p className="text-xs text-gray-500">Select your account role to continue</p>
          </div>

          {/* Role Toggle Tabs */}
          <div className="grid grid-cols-2 p-1 bg-cream-200 rounded-xl text-xs font-bold">
            <button
              onClick={() => setRole('owner')}
              className={`py-2.5 rounded-lg transition ${
                role === 'owner' ? 'bg-forest text-white shadow-sm' : 'text-gray-600 hover:text-forest'
              }`}
            >
              Pet Owner
            </button>
            <button
              onClick={() => setRole('staff')}
              className={`py-2.5 rounded-lg transition ${
                role === 'staff' ? 'bg-forest text-white shadow-sm' : 'text-gray-600 hover:text-forest'
              }`}
            >
              Staff / Veterinarian
            </button>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Email / Username</label>
              <div className="relative">
                <Mail className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-forest focus:outline-none text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-forest focus:outline-none text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center space-x-2 text-gray-600 cursor-pointer">
                <input type="checkbox" className="rounded text-forest focus:ring-forest" />
                <span>Remember Me</span>
              </label>
              <a href="#" className="text-coral hover:underline font-semibold">Forgot Password?</a>
            </div>

            <button className="w-full bg-coral hover:bg-coral-600 text-white font-bold py-3 rounded-xl shadow-md transition">
              Log In as {role === 'owner' ? 'Pet Owner' : 'Staff'}
            </button>
          </form>

          <div className="text-center pt-2">
            <Link to="/" className="inline-flex items-center text-xs text-gray-500 hover:text-forest font-semibold">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}