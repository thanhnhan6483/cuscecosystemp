import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import cuscLogo from '../assets/images/cusc-logo.jpg';

export const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-gradient-to-r from-white via-white/95 to-white/90 backdrop-blur-md border-b border-cusc-blue/10 shadow-sm">
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        {/* Logo + Title Section */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="relative">
            <div className="absolute inset-0 bg-cusc-blue/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="bg-white rounded-2xl shadow-md p-2 group-hover:shadow-lg transition-all duration-300 relative z-10">
              <img 
                src={cuscLogo} 
                alt="CUSC Software" 
                className="h-12 md:h-14 w-auto object-contain" 
              />
            </div>
          </div>
          <div className="border-l-2 border-cusc-gold/50 pl-4 py-1">
            <h1 className="text-cusc-blue font-black text-2xl md:text-3xl lg:text-4xl leading-tight uppercase tracking-tight">
              ECOSYSTEM
            </h1>
            <p className="text-xs md:text-sm text-cusc-gold uppercase tracking-widest font-bold">
              Hệ sinh thái giải pháp số
            </p>
          </div>
        </Link>

        {/* Navigation Menu */}
        <div className="hidden md:flex gap-1 text-base font-bold uppercase tracking-wider text-slate-500 bg-slate-100/50 px-4 py-2 rounded-lg">
          <Link to="/" className="px-4 py-2 hover:text-cusc-blue hover:bg-white rounded-md transition-all duration-200">Trang chủ</Link>
          <Link to="/about" className="px-4 py-2 hover:text-cusc-blue hover:bg-white rounded-md transition-all duration-200">Giới thiệu</Link>
          <Link to="/contact" className="px-4 py-2 hover:text-cusc-blue hover:bg-white rounded-md transition-all duration-200">Liên hệ</Link>
        </div>

        {/* Hotline */}
        <a
          href="tel:02923731072"
          className="hidden sm:flex items-center gap-2.5 bg-cusc-gold text-slate-900 px-5 py-3 rounded-full text-sm font-bold tracking-wider hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          <Phone size={18} className="animate-pulse" />
          <span>0292 3731072</span>
        </a>
      </div>
    </div>
  </nav>
);
