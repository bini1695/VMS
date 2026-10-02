import React from 'react';
import { ShieldCheck, Heart, Award, Clock } from 'lucide-react';

// Import the image file from your project assets
import drDejeneImg from '../assets/dejene.png';

export default function About() {
  const team = [
    { 
      name: 'Dr. Dejene', 
      role: 'Chief Veterinarian', 
      exp: '12 Years Exp.', 
      img: drDejeneImg 
    },
    { 
      name: 'Dr. Marcus Vance', 
      role: 'Veterinary Surgeon', 
      exp: '9 Years Exp.', 
      img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80' 
    },
    { 
      name: 'Dr. Sophia Reyes', 
      role: 'Feline Specialist', 
      exp: '7 Years Exp.', 
      img: 'https://images.unsplash.com/photo-1594824813566-888242a85e15?auto=format&fit=crop&w=300&q=80' 
    },
  ];

  const values = [
    { icon: <ShieldCheck className="w-6 h-6 text-forest" />, title: 'Modern Tech', desc: 'Cutting-edge diagnostic and surgical equipment.' },
    { icon: <Heart className="w-6 h-6 text-forest" />, title: 'Loving Environment', desc: 'Stress-free handling for all pets.' },
    { icon: <Award className="w-6 h-6 text-forest" />, title: 'Certified Vets', desc: 'Highly trained and experienced medical specialists.' },
    { icon: <Clock className="w-6 h-6 text-forest" />, title: '24/7 Emergency', desc: 'Round the clock urgent support when needed.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Mission */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold text-gray-900">About Us </h1>
          <p className="text-gray-600 leading-relaxed">
            At Dejene Animal clinic, we believe every pet is a cherished member of the family who deserves the highest standard of compassionate care. Our dedicated team of experienced veterinarians and skilled staff combine advanced medical expertise with a gentle touch to keep your pets healthy, happy, and thriving at every stage of life. From routine wellness exams and preventive care to advanced diagnostics and emergency treatment, we are committed to providing personalized, stress-free medical care tailored to your pet’s unique needs. When you step through our doors, you aren't just visiting a clinic—you're joining a community that treats your pets as if they were our own.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=600&q=80"
          alt="Clinic staff"
          className="rounded-2xl shadow-lg border border-sage-200"
        />
      </div>

      {/* Values Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {values.map((v, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-sage-200 shadow-sm space-y-2">
            <div className="p-2.5 bg-cream-200 rounded-xl w-fit">{v.icon}</div>
            <h3 className="font-bold text-gray-900">{v.title}</h3>
            <p className="text-xs text-gray-500">{v.desc}</p>
          </div>
        ))}
      </div>

      {/* Team */}
      <div className="space-y-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">Meet Our Veterinary Specialists</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((doc, i) => (
            <div key={i} className="bg-white rounded-2xl border border-sage-200 overflow-hidden shadow-sm text-center p-6 space-y-4">
              <img src={doc.img} alt={doc.name} className="w-28 h-28 rounded-full object-cover mx-auto ring-4 ring-cream-200" />
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{doc.name}</h3>
                <p className="text-xs text-forest font-semibold">{doc.role}</p>
                <p className="text-xs text-gray-400 mt-1">{doc.exp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}