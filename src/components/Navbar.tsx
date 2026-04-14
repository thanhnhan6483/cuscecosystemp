import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import cuscLogo from '../assets/images/cusc-logo.jpg';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
  <nav className="sticky top-0 z-50 bg-gradient-to-r from-white via-white/95 to-white/90 backdrop-blur-md border-b border-cusc-blue/10 shadow-sm">
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        {/* Logo + Title Section */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-cusc-blue/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="bg-white rounded-2xl shadow-md p-1.5 group-hover:shadow-lg transition-all duration-300 relative z-10">
              <img
                src={cuscLogo}
                alt="CUSC Software"
                className="h-10 md:h-14 w-auto object-contain"
              />
            </div>
          </div>
          <div className="border-l-2 border-cusc-gold/50 pl-3 py-1">
            <h1 className="text-slate-500 font-bold text-xs md:text-xs uppercase tracking-wider leading-none">
              ĐẠI HỌC CẦN THƠ
            </h1>
            <p className="text-cusc-blue font-black text-base md:text-xl lg:text-2xl leading-tight uppercase tracking-tight">
              TRUNG TÂM CÔNG NGHỆ PHẦN MỀM
            </p>
          </div>
        </Link>

        {/* Right side: Navigation + Hotline + Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex gap-1 text-base font-bold uppercase tracking-wider text-slate-500 bg-slate-100/50 px-4 py-2 rounded-lg">
            <Link to="/" className="px-4 py-2 hover:text-cusc-blue hover:bg-white rounded-md transition-all duration-200">Trang chủ</Link>
            <Link to="/about" className="px-4 py-2 hover:text-cusc-blue hover:bg-white rounded-md transition-all duration-200">Giới thiệu</Link>
            <Link to="/contact" className="px-4 py-2 hover:text-cusc-blue hover:bg-white rounded-md transition-all duration-200">Liên hệ</Link>
          </div>

          {/* Hotline */}
          <a
            href="tel:02923731072"
            className="hidden sm:flex items-center gap-2 bg-cusc-gold text-slate-900 px-4 py-2.5 rounded-full text-sm font-bold tracking-wider hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <Phone size={16} className="animate-pulse" />
            <span>0292 3731072</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 text-cusc-blue hover:bg-slate-200 transition-colors"
            aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md py-4 space-y-1">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-3 text-base font-bold uppercase tracking-wider text-slate-600 hover:text-cusc-blue hover:bg-slate-50 rounded-lg transition-colors"
          >
            Trang chủ
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-3 text-base font-bold uppercase tracking-wider text-slate-600 hover:text-cusc-blue hover:bg-slate-50 rounded-lg transition-colors"
          >
            Giới thiệu
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-3 text-base font-bold uppercase tracking-wider text-slate-600 hover:text-cusc-blue hover:bg-slate-50 rounded-lg transition-colors"
          >
            Liên hệ
          </Link>
          <div className="pt-2 px-4">
            <a
              href="tel:02923731072"
              className="flex items-center justify-center gap-2 bg-cusc-gold text-slate-900 px-4 py-3 rounded-full text-sm font-bold tracking-wider hover:bg-yellow-400 transition-all shadow-md"
            >
              <Phone size={16} />
              <span>0292 3731072</span>
            </a>
          </div>
        </div>
      )}
    </div>
  </nav>
  );
};
