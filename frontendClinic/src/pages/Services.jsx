import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Tag, Stethoscope, Sparkles, Activity, Scissors, ShieldAlert, HeartPulse } from 'lucide-react';
import FAQAccordion from '../components/ui/FAQAccordion';

export default function Services() {
  const services = [
    {
      title: 'Preventive Care',
      category: 'General',
    
     
     
      desc: 'Routine wellness examinations, body condition scoring, parasite prevention, and nutritional counseling.'
    },
    {
      title: 'Dental Cleaning & Oral Care',
      category: 'Dental',
     
     

      desc: 'Comprehensive tartar removal, ultrasonic scaling, polishing, and oral health examinations under anesthesia.'
    },
    {
      title: 'Soft Tissue & Surgical Procedures',
      category: 'Surgery',
     
    
      
      desc: 'Spay/neuter routines, soft tissue surgeries, mass removals, and emergency surgical interventions.'
    },
    {
      title: 'Pet Grooming & Spa Treatments',
      category: 'Grooming',
     
      
    
      desc: 'Hydrating baths, breed-specific haircuts, nail trimming, ear cleaning, and gland expressions.'
    },
    {
      title: 'Digital Radiography & Imaging',
      category: 'Diagnostics',
      
     
      
      desc: 'High-definition digital X-rays and ultrasound diagnostics for quick, accurate internal evaluations.'
    },
    {
      title: 'Vaccinations & Immunization',
      category: 'Preventive',
      
     
     
      desc: 'Core and non-core vaccines tailored to protect your dog or cat against preventable contagious diseases.'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-forest/10 text-forest font-bold text-xs uppercase tracking-wider">
          Comprehensive Medical Solutions
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Our Veterinary Services</h1>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          From preventive checkups to complex surgeries and spa grooming, we offer dedicated clinical care tailored to your pet's exact health needs.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((srv, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-2xl p-6 border border-sage-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="p-3 bg-cream-200 rounded-xl">
                  {srv.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-forest/10 text-forest rounded-full">
                  {srv.category}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900">{srv.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-2">{srv.desc}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-xs text-gray-500 flex items-center">
                  {/* <Clock className="w-3.5 h-3.5 mr-1" /> {srv.duration} */}
                </div>
                <div className="text-lg font-extrabold text-coral flex items-center">
                  {/* <Tag className="w-4 h-4 mr-1" /> {srv.price} */}
                </div>
              </div>

              <Link
                to="/contact"
                // className="bg-forest hover:bg-forest-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm transition"
              >
               
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Accordion Section */}
      <div className="pt-10 border-t border-sage-200">
        <FAQAccordion />
      </div>

    </div>
  );
}