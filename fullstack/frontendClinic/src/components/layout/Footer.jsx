import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, PhoneCall, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const tiktokUrl = "https://www.tiktok.com/@dr.dejene.vet.clinic?_r=1&_d=f4d81mff4c5222&sec_uid=MS4wLjABAAAAYQvGUT4OoUvggJ6Dy7ctVkK2IQccP56dajOZPfeeLtcxMv1s9pLKtgSasioDclbc&share_author_id=7180385807302362117&sharer_language=en&source=h5_m&u_code=e32eb225a3f998&timestamp=1790947025&user_id=7124758507995890693&sec_user_id=MS4wLjABAAAA0PIF3fECJIjHGRg0AXL3VCLeLTpG5xk-uoTuG69H9vOmfKQIpH7gbhuou5sNX0Dt&item_author_type=2&utm_source=telegram&utm_campaign=client_share&utm_medium=android&share_iid=7689918418715674374&share_link_id=afa1e90f-081b-43f1-9715-6e4a10e548b2&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b6880%2Cb5836&social_share_type=5&share_enter_from=others_homepage&item_author_type=2&enable_checksum=1";

  return (
    <footer className="bg-forest text-white pt-16 pb-8 border-t border-forest-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="bg-white text-forest p-2 rounded-xl">
              <PawPrint className="h-6 w-6" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-white">
              Dejene Animal <span className="text-coral">Clinic</span>
            </span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Providing compassionate, state-of-the-art veterinary care for your beloved pets. Your pet's health and happiness is our ultimate mission.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-3 pt-2">
            {/* TikTok */}
            <a 
              href={tiktokUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="TikTok" 
              className="p-2.5 bg-white/10 hover:bg-coral rounded-xl transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743 2.895 2.895 0 0 1 3.203-4.512V9.454a6.338 6.338 0 0 0-1.127-.1 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.336 6.336 0 0 0 6.326-5.834V8.528a8.217 8.217 0 0 0 4.014 1.583V6.686z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="p-2.5 bg-white/10 hover:bg-coral rounded-xl transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="p-2.5 bg-white/10 hover:bg-coral rounded-xl transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* X / Twitter */}
            <a href="#" aria-label="X (Twitter)" className="p-2.5 bg-white/10 hover:bg-coral rounded-xl transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="p-2.5 bg-white/10 hover:bg-coral rounded-xl transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-4 border-b border-forest-800 pb-2">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-coral transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-coral transition">About Our Clinic</Link></li>
            <li><Link to="/services" className="hover:text-coral transition">Veterinary Services</Link></li>
            <li><Link to="/pharmacy" className="hover:text-coral transition">Pharmacy & Supplies</Link></li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h4 className="text-lg font-bold mb-4 border-b border-forest-800 pb-2">Working Hours</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex justify-between"><span>Mon - Fri:</span> <span className="font-medium text-white">8:00 AM - 8:00 PM</span></li>
            <li className="flex justify-between"><span>Saturday:</span> <span className="font-medium text-white">9:00 AM - 6:00 PM</span></li>
            <li className="flex justify-between"><span>Sunday:</span> <span className="font-medium text-white">10:00 AM - 4:00 PM</span></li>
            <li className="pt-2 text-coral font-bold flex items-center space-x-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-coral"></span>
              </span>
              <span>24/7 Emergency Care Available</span>
            </li>
          </ul>
        </div>

        {/* Contact Emergency */}
        <div>
          <h4 className="text-lg font-bold mb-4 border-b border-forest-800 pb-2">Emergency Contact</h4>
          <div className="space-y-3 text-sm text-gray-300">
            <p className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-coral shrink-0" />
              <span>Addis Abeba</span>
            </p>

            <div className="mt-4 p-4 rounded-xl bg-white/10 border border-white/10">
              <p className="text-xs text-gray-300 uppercase tracking-wider font-semibold">24/7 Hotline</p>
              <a href="tel:+251910115175" className="text-xl font-extrabold text-coral flex items-center space-x-2 mt-1">
                <PhoneCall className="w-5 h-5" />
                <span className="text-sm sm:text-base">
                  +251910115175 / +251910037682
                </span>
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-12 pt-6 border-t border-forest-800 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Dr Dejene Animal Clinic . All rights reserved.
      </div>
    </footer>
  );
}