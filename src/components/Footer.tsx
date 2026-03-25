import { PhoneCall, Mail, MapPin, Phone, Globe, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContactCTA = () => (
  <section id="contact" className="py-20 bg-cusc-blue relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
    <div className="max-w-[1000px] mx-auto px-4 relative z-10 text-center">
      <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
        Sẵn Sàng Chuyển Đổi Số Cùng CUSC?
      </h2>
      <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
        Liên hệ ngay với đội ngũ chuyên gia của chúng tôi để nhận tư vấn giải pháp công nghệ tối ưu nhất cho cơ quan, tổ chức của bạn
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="tel:02923731072"
          className="flex items-center gap-2 bg-cusc-gold text-slate-900 px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-yellow-400 transition-all hover:scale-105 shadow-lg"
        >
          <Phone size={20} />
          <span className="hidden sm:inline">Tư vấn ngay </span>
        </a>
        <a 
          href="mailto:cusc.sales@ctu.edu.vn"
          className="flex items-center gap-2 bg-white/10 text-white border border-white/30 px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white/20 transition-all hover:scale-105 backdrop-blur-sm"
        >
          <Mail size={20} />
          Gửi yêu cầu
        </a>
      </div>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="bg-black text-white py-4">
    <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center justify-center gap-1 text-center">
      <div className="text-cusc-gold font-black text-base uppercase tracking-wider">
        TRUNG TÂM CÔNG NGHỆ PHẦN MỀM ĐẠI HỌC CẦN THƠ
      </div>
      
      <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-slate-300">
        <MapPin size={14} className="text-slate-400 shrink-0" />
        <span>Khu III, Đại học Cần Thơ, Số 01 Lý Tự Trọng, phường Ninh Kiều, thành phố Cần Thơ</span>
      </div>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-6 text-xs sm:text-sm text-slate-300">
        <div className="flex items-center gap-1.5">
          <Phone size={14} className="text-slate-400 shrink-0" />
          <span>Điện thoại: <a href="tel:02923731072" className="text-cusc-gold font-medium hover:underline">0292 3731072</a></span>
        </div>
        <div className="flex items-center gap-1.5">
          <Mail size={14} className="text-slate-400 shrink-0" />
          <span>Email: <a href="mailto:cusc.sales@ctu.edu.vn" className="text-cusc-gold font-medium hover:underline">cusc.sales@ctu.edu.vn</a></span>
        </div>
        <div className="flex items-center gap-1.5">
          <Globe size={14} className="text-slate-400 shrink-0" />
          <span>Website: <a href="https://www.cusc.vn" target="_blank" rel="noreferrer" className="text-cusc-gold font-medium hover:underline">www.cusc.vn</a></span>
        </div>
      </div>
    </div>
  </footer>
);
