import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Globe } from 'lucide-react';

export const ContactCTA = () => (
  <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-br from-cusc-blue to-blue-600">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
    <div className="max-w-[1000px] mx-auto px-4 relative z-10 text-center">
      <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
        Sẵn Sàng Chuyển Đổi Số Cùng CUSC?
      </h2>
      <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto font-medium">
        Liên hệ ngay với đội ngũ chuyên gia của chúng tôi để nhận tư vấn giải pháp công nghệ tối ưu nhất cho cơ quan, tổ chức của bạn
      </p>

      {/* Social Proof */}
      <div className="flex flex-wrap justify-center gap-8 mb-10">
        {[
          { value: '25+', label: 'Năm kinh nghiệm' },
          { value: '1000+', label: 'Khách hàng' },
          { value: '100+', label: 'Giải pháp triển khai' },
          { value: '24/7', label: 'Hỗ trợ kỹ thuật' },
        ].map(({ value, label }) => (
          <div key={label} className="text-center">
            <div className="text-3xl font-black text-cusc-gold">{value}</div>
            <div className="text-sm text-white/90 font-medium">{label}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="tel:02923731072"
          className="flex items-center justify-center gap-2 bg-cusc-gold text-cusc-blue px-8 py-4 rounded-full font-bold uppercase hover:bg-yellow-400 transition-all hover:scale-105 shadow-lg min-w-[200px]"
        >
          <Phone size={20} />
          Tư vấn ngay
        </a>
        <a
          href="mailto:sales@cusc.ctu.edu.vn"
          className="flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-bold uppercase hover:bg-white hover:text-cusc-blue transition-all hover:scale-105 min-w-[200px]"
        >
          <Mail size={20} />
          Gửi yêu cầu
        </a>
      </div>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="bg-cusc-blue text-white py-4">
    <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center justify-center gap-1 text-center">
      <div className="text-white font-black text-base uppercase">
        TRUNG TÂM CÔNG NGHỆ PHẦN MỀM ĐẠI HỌC CẦN THƠ
      </div>

      <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-white/90">
        <MapPin size={14} className="text-white/70 shrink-0" />
        <span>Số 01 Lý Tự Trọng, phường Ninh Kiều, thành phố Cần Thơ</span>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-6 text-xs sm:text-sm text-white/90">
        <div className="flex items-center gap-1.5">
          <Phone size={14} className="text-white/70 shrink-0" />
          <span>Điện thoại: <a href="tel:02923731072" className="text-white font-medium hover:text-cusc-gold transition-colors">0292 3731072</a></span>
        </div>
        <div className="flex items-center gap-1.5">
          <Mail size={14} className="text-white/70 shrink-0" />
          <span>Email: <a href="mailto:sales@cusc.ctu.edu.vn" className="text-white font-medium hover:text-cusc-gold transition-colors">sales@cusc.ctu.edu.vn</a></span>
        </div>
        <div className="flex items-center gap-1.5">
          <Globe size={14} className="text-white/70 shrink-0" />
          <span>Website: <a href="https://www.cusc.vn" target="_blank" rel="noreferrer" className="text-white font-medium hover:text-cusc-gold transition-colors">www.cusc.vn</a></span>
        </div>
      </div>
    </div>
  </footer>
);
