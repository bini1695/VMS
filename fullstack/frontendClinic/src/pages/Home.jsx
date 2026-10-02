import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, ShieldCheck, HeartPulse, Clock, PhoneCall, MapPin } from 'lucide-react';

// Importing your uploaded photos
import clinicSignImg from '../assets/photo_2026-10-01_16-58-58.jpg';
import treatmentImg from '../assets/photo_2026-10-01_16-59-10.jpg';
import surgeryImg from '../assets/photo_2026-10-01_16-59-03.jpg';
import img1 from '../assets/img1.avif';
import injection1 from '../assets/img1.avif';
import injection2 from '../assets/img1.avif';
import lav1 from '../assets/lab1.webp';
import lav2 from '../assets/lab2.webp';
import pre1 from '../assets/pre1.webp';
import pre2 from '../assets/pre2.webp';
import pre3 from '../assets/pre3.webp';

export default function Home() {
  const showcaseItems = [
    {
      img: clinicSignImg,
      alt: 'Animal Clinic Sign Entrance',
      title: 'Our Clinic Facility',
      desc: 'Fully equipped animal clinic and pharmacy ready to serve your domestic animals and pets.',
    },
    {
      img: surgeryImg,
      alt: 'Veterinary Surgery Procedure',
      title: 'Surgical Care',
      desc: 'Professional surgical operations performed with strict sterile standards and complete patient monitoring.',
    },
    {
      img: treatmentImg,
      alt: 'Patient IV Treatment',
      title: 'In-Patient & IV Therapy',
      desc: 'Comfortable outdoor and indoor treatment spaces for recovery, IV fluids, and medication administration.',
    },
    {
      img: img1,
      alt: 'Medical Diagnostics',
      title: 'Diagnostics & Monitoring',
      desc: 'Comprehensive animal wellness checks, health monitoring, and active disease diagnosis.',
    },
    {
      img: lav1,
      alt: 'Laboratory Testing',
      title: 'Laboratory Services',
      desc: 'In-house diagnostic tests and routine fluid analysis for fast and accurate results.',
    },
    {
      img: pre1,
      alt: 'Preventative Care',
      title: 'Preventative & Prescriptions',
      desc: 'Customized treatment plans, essential vaccinations, and pharmacy supplies.',
    },
  ];

  return (
    <div className="space-y-16 pb-16 overflow-x-hidden">
      
      {/* Marquee Keyframe Animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forest-900 via-forest to-forest-800 text-white overflow-hidden py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-coral text-sm font-semibold border border-white/10">
              <ShieldCheck className="w-4 h-4" />
              <span>Professional & Compassionate Animal Care</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Expert Veterinary Care for Your <span className="text-coral">Beloved Pets</span>
            </h1>
            
            <p className="text-gray-200 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              From general health checkups and surgical procedures to emergency treatments and pharmacy supplies, we deliver state-of-the-art care for all animals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-coral hover:bg-coral-600 text-white font-bold rounded-xl shadow-lg transition-all text-center flex items-center justify-center space-x-2"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Contact us</span>
              </Link>
              <a
                href="https://maps.app.goo.gl/w47AghFpfT8w34LH8?g_st=atm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all text-center flex items-center justify-center space-x-2"
              >
                <MapPin className="w-5 h-5 text-coral" />
                <span>Get Directions</span>
              </a>
            </div>

            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/10 text-left">
              <div>
                <p className="text-2xl font-extrabold text-coral">100%</p>
                <p className="text-xs text-gray-300">Dedicated Service</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-coral">24/7</p>
                <p className="text-xs text-gray-300">Emergency Response</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-coral">Expert</p>
                <p className="text-xs text-gray-300">Surgeons & Staff</p>
              </div>
            </div>
          </div>

          {/* Featured Hero Photo */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src={treatmentImg}
                alt="Veterinary Treatment"
                className="w-full h-[450px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="text-sm font-semibold text-coral">On-site Treatment</p>
                  <p className="text-lg font-bold">Gentle IV Infusions & Medical Care</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Horizontal Marquee Clinic Showcase Section */}
      <section className="w-full overflow-hidden py-6">
        <div className="text-center max-w-3xl mx-auto mb-12 px-4">
          <h2 className="text-3xl font-extrabold text-forest">Our Clinic Facilities & Surgery</h2>
          <p className="text-gray-600 mt-2">Take a look inside our clinic and surgical procedures</p>
        </div>

        {/* Marquee Track (Duplicates cards array to ensure continuous looping) */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee gap-8 px-4">
            {[...showcaseItems, ...showcaseItems].map((item, index) => (
              <div
                key={index}
                className="w-[320px] sm:w-[380px] shrink-0 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-forest mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Services Grid */}
      <section className="bg-forest-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-forest">Comprehensive Veterinary Services</h2>
            <p className="text-gray-600 mt-2">Everything your animal needs to stay healthy and happy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
              <div className="w-12 h-12 bg-forest-100 text-forest rounded-xl flex items-center justify-center">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-forest">General Diagnostics</h3>
              <p className="text-sm text-gray-600">Thorough physical examinations, health screenings, and preventative care.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
              <div className="w-12 h-12 bg-coral-50 text-coral rounded-xl flex items-center justify-center">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-forest">Surgical Operations</h3>
              <p className="text-sm text-gray-600">Soft tissue surgery, emergency procedures, and neutering/spaying services.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
              <div className="w-12 h-12 bg-forest-100 text-forest rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-forest">Vaccinations</h3>
              <p className="text-sm text-gray-600">Essential rabies and multi-disease vaccines for dogs, cats, and livestock.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
              <div className="w-12 h-12 bg-coral-50 text-coral rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-forest">24/7 Emergency Care</h3>
              <p className="text-sm text-gray-600">Round-the-clock emergency assistance and urgent medical care.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}