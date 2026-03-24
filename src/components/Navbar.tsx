import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

export const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-cusc-blue/10">
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        <Link to="/" className="flex items-center gap-3">
          <div>
            <h1 className="text-cusc-blue font-black text-3xl md:text-4xl leading-tight uppercase tracking-tight">ECOSYSTEM</h1>
            <p className="text-sm md:text-base text-cusc-gold uppercase tracking-widest font-bold mt-0.5">Hệ sinh thái giải pháp số</p>
          </div>
        </Link>
        <div className="hidden md:flex gap-8 text-base font-bold uppercase tracking-wider text-slate-500">
          <Link to="/" className="hover:text-cusc-blue transition-colors">Trang chủ</Link>
          <Link to="/about" className="hover:text-cusc-blue transition-colors">Giới thiệu</Link>
          <Link to="/contact" className="hover:text-cusc-blue transition-colors">Liên hệ</Link>
        </div>
        <a href="tel:02923731072" className="flex items-center gap-2.5 bg-cusc-blue text-white px-6 py-2.5 rounded text-base font-bold tracking-wider hover:bg-blue-700 transition-all shadow-sm">
          <Phone size={18} className="animate-pulse" />
          <span>0292 3731072</span>
        </a>
      </div>
    </div>
  </nav>
);
