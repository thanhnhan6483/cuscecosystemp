import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SEO } from './components/SEO';
import sliderUIIS from './assets/images/slider_UIIS.png';
import sliderIES from './assets/images/slider_IES.png';
import sliderSTM from './assets/images/slider_STM.png';
import {
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Youtube,
  Linkedin,
  Zap,
  Users,
  Building2,
  GraduationCap,
  Code2,
  Network,
  Settings,
  Globe,
  Database,
  Layers,
  Bot,
  CircleDollarSign,
  ShieldCheck,
  Trophy,
  Award,
  Star,
  PhoneCall
} from 'lucide-react';
import { ECOSYSTEM_DATA } from './constants';
import { Navbar } from './components/Navbar';
import { Footer, ContactCTA } from './components/Footer';
import { SolutionModal } from './components/SolutionModal';
import { AI_SOLUTIONS, AISolution } from './data/aiSolutions';
import { OTHER_SERVICES } from './data/otherServices';

const CoreCircle = () => (
  <div className="relative w-48 h-48 mx-auto mb-8">
    <div className="absolute inset-0 rounded-full border-4 border-dashed border-white/20 animate-[spin_20s_linear_infinite]" />
    <div className="absolute inset-4 rounded-full bg-white shadow-2xl flex items-center justify-center z-10">
      <div className="text-center">
        <div className="w-12 h-12 bg-cusc-blue rounded-lg mx-auto flex items-center justify-center text-white mb-1 shadow-lg">
          <Zap size={20} />
        </div>
        <span className="text-xs font-black text-cusc-blue tracking-tighter">CUSC DX</span>
      </div>
    </div>
    {ECOSYSTEM_DATA.core.map((item, idx) => {
      const angles = [225, 315, 45, 135];
      const angle = angles[idx];
      const radius = 70;
      const x = Math.cos((angle * Math.PI) / 180) * radius;
      const y = Math.sin((angle * Math.PI) / 180) * radius;
      return (
        <div 
          key={item.name}
          className="absolute w-20 h-20 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-2 z-20 border border-slate-100"
          style={{ 
            left: `calc(50% + ${x}px - 40px)`, 
            top: `calc(50% + ${y}px - 40px)` 
          }}
        >
          <item.icon size={20} className={`${item.color} mb-1`} />
          <span className="text-sm font-black text-slate-700 text-center leading-tight">{item.name}</span>
        </div>
      );
    })}
  </div>
);

const SmartUniversityGrid = () => {
  return (
    <div className="relative w-full max-w-[650px] mx-auto p-4">
      {/* Grid Layout */}
      <div className="grid grid-cols-2 gap-4 relative">
        {/* Pillar 1 - Top Left - Blue */}
        <div className="bg-[#c3d4e9] rounded-2xl p-6 min-h-[180px] flex flex-col items-start justify-start text-left shadow-lg border-2 border-white/40 transition-all duration-300 hover:shadow-xl hover:bg-[#b8d0e8] group">
          <div className="w-12 h-12 bg-white/50 rounded-xl flex items-center justify-center mb-3 shadow-sm group-hover:bg-white/60 transition-colors">
            <Users size={24} className="text-blue-700" />
          </div>
          <span className="text-[11px] font-bold text-blue-800/90 mb-1 tracking-widest">TRỤ CỘT 1</span>
          <p className="text-slate-900 font-black text-base leading-tight uppercase tracking-tight">
            CÔNG TÁC TUYỂN SINH,<br/>
            QUẢN LÝ SINH VIÊN
          </p>
        </div>

        {/* Pillar 2 - Top Right - Orange */}
        <div className="bg-[#f9d8c4] rounded-2xl p-6 min-h-[180px] flex flex-col items-end justify-start text-right shadow-lg border-2 border-white/40 transition-all duration-300 hover:shadow-xl hover:bg-[#f5cdbb] group">
          <div className="w-12 h-12 bg-white/50 rounded-xl flex items-center justify-center mb-3 shadow-sm group-hover:bg-white/60 transition-colors">
            <GraduationCap size={24} className="text-orange-700" />
          </div>
          <span className="text-[11px] font-bold text-orange-800/90 mb-1 tracking-widest">TRỤ CỘT 2</span>
          <p className="text-orange-900 font-black text-base leading-tight uppercase tracking-tight">
            CÔNG TÁC ĐÀO TẠO,<br/>
            NGHIÊN CỨU KHOA HỌC
          </p>
        </div>

        {/* Pillar 3 - Bottom Left - Yellow */}
        <div className="bg-[#ffebad] rounded-2xl p-6 min-h-[180px] flex flex-col items-start justify-end text-left shadow-lg border-2 border-white/40 transition-all duration-300 hover:shadow-xl hover:bg-[#ffe59a] group">
          <div className="w-12 h-12 bg-white/50 rounded-xl flex items-center justify-center mb-3 shadow-sm group-hover:bg-white/60 transition-colors">
            <CircleDollarSign size={24} className="text-amber-700" />
          </div>
          <span className="text-[11px] font-bold text-amber-800/90 mb-1 tracking-widest">TRỤ CỘT 3</span>
          <p className="text-amber-900 font-black text-base leading-tight uppercase tracking-tight">
            CÔNG TÁC<br/>
            TÀI CHÍNH
          </p>
        </div>

        {/* Pillar 4 - Bottom Right - Green */}
        <div className="bg-[#cde4c6] rounded-2xl p-6 min-h-[180px] flex flex-col items-end justify-end text-right shadow-lg border-2 border-white/40 transition-all duration-300 hover:shadow-xl hover:bg-[#c2dcb9] group">
          <div className="w-12 h-12 bg-white/50 rounded-xl flex items-center justify-center mb-3 shadow-sm group-hover:bg-white/60 transition-colors">
            <Building2 size={24} className="text-emerald-700" />
          </div>
          <span className="text-[11px] font-bold text-emerald-800/90 mb-1 tracking-widest">TRỤ CỘT 4</span>
          <p className="text-emerald-900 font-black text-base leading-tight uppercase tracking-tight">
            CÔNG TÁC ĐIỀU HÀNH VÀ<br/>
            HOẠT ĐỘNG CHUYÊN MÔN
          </p>
        </div>

        {/* Center Core - CUSC-UIIS (Focal Point) */}
        <Link to="/cusc-uiis" target="_blank" rel="noopener noreferrer" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-white to-blue-50 shadow-[0_12px_40px_rgba(27,75,163,0.25)] border-4 border-cusc-blue flex flex-col items-center justify-center z-10 rounded-full ring-4 ring-cusc-gold/30 backdrop-blur-sm transition-all hover:scale-110 group/core cursor-pointer">
          <div className="absolute inset-0 rounded-full bg-cusc-blue/5 animate-pulse" />
          <div className="w-14 h-14 bg-gradient-to-br from-cusc-blue to-blue-600 rounded-full flex items-center justify-center text-white mb-2 group-hover/core:scale-110 group-hover/core:rotate-6 transition-all shadow-lg">
            <GraduationCap size={28} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col items-center relative z-10">
            <span className="text-xl font-black text-cusc-blue uppercase tracking-tight leading-none drop-shadow-sm">CUSC-UIIS</span>
            <div className="h-1 w-12 bg-gradient-to-r from-cusc-gold to-yellow-500 mt-2 rounded-full shadow-sm" />
            <div className="flex items-center gap-1.5 text-[8px] font-bold text-cusc-blue mt-1.5 uppercase tracking-widest opacity-0 group-hover/core:opacity-100 transition-all">
              Xem chi tiết <ExternalLink size={9} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

const slides = [
  {
    image: sliderUIIS,
    title: "Hệ thống Tích hợp thông tin Quản lý đào tạo (CUSC-UIIS)",
    subtitle: "Giải pháp chuyển đổi số toàn diện dành cho Trường Đại học, Cao đẳng, kiến tạo hệ sinh thái giáo dục thông minh"
  },
  {
    image: sliderIES,
    title: "Phần mềm Quản lý Sáng kiến Thông minh",
    subtitle: "Tối ưu quy trình từ đăng ký, chấm điểm đến công nhận và mở rộng phạm vi ảnh hưởng sáng kiến"
  },
  {
    image: sliderSTM,
    title: "Phần mềm Quản lý đề tài nghiệm vụ KH&CN",
    subtitle: "Giải pháp toàn diện theo dõi, đánh giá và tổng kết vòng đời đề tài NCKH từ đăng ký đến nghiệm thu"
  },
  {
    image: "https://newgensoft.com/wp-content/uploads/2025/03/Workflow-Management-scaled.jpg",
    title: "Tự động hóa quy trình bằng AI Agent",
    subtitle: "Tự động hóa luồng công việc theo quy trình, giảm thao tác thủ công và tăng tốc độ xử lý nghiệp vụ"
  },
  {
    image: "https://www.cumanagement.com/sites/default/files/2021-08/hand-chatbot-technology-background.jpg",
    title: "Ứng dụng AI trong thực tiễn",
    subtitle: "Ứng dụng AI, Chatbot và phân tích dữ liệu thông minh"
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="intro" className="relative w-full h-[250px] md:h-[400px] lg:h-[670px] overflow-hidden bg-slate-700">
      {slides.map((slide, idx) => (
        <motion.div
          key={idx}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: idx === current ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6 md:px-16 lg:px-24 z-10">
            <h2 className="text-white font-black text-xl md:text-3xl lg:text-4xl leading-tight max-w-3xl drop-shadow-lg mb-2">
              {slide.title}
            </h2>
            <p className="text-white/90 text-sm md:text-base lg:text-lg max-w-2xl mb-5 drop-shadow">
              {slide.subtitle}
            </p>
            <a
              href="#ecosystem"
              className="self-start flex items-center gap-2 bg-cusc-gold text-cusc-blue px-5 py-2.5 rounded-full text-sm font-bold hover:bg-yellow-400 transition-all shadow-lg"
            >
              Khám phá giải pháp <ChevronRight size={16} />
            </a>
          </div>
        </motion.div>
      ))}
      
      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-all ${idx === current ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Prev / Next Arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer"
        aria-label="Slide trước"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer"
        aria-label="Slide tiếp"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

const Ecosystem = ({ onSolutionClick }: { onSolutionClick: (name: string) => void }) => (
  <section id="ecosystem" className="py-12 bg-white min-h-screen">
    <div className="max-w-[1600px] mx-auto px-4 relative">

      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-black text-cusc-blue uppercase tracking-tight">
          Hệ sinh thái giải pháp số
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-cusc-blue to-cusc-gold mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Visual Connectors Layer */}
      {/* Top Section: Three Main Clusters */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4 relative z-10">
        
        {/* Cluster 1: CHÍNH QUYỀN VÀ DOANH NGHIỆP (CUSC Blue) */}
        <div className="lg:col-span-4 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl p-6 text-white shadow-lg flex flex-col relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
          <h3 className="text-lg font-black uppercase tracking-wider mb-5 flex items-center gap-3 border-b border-white/20 pb-4 min-h-[60px]">
            <Building2 size={24} className="text-cusc-gold shrink-0" />
            {ECOSYSTEM_DATA.government.title}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {ECOSYSTEM_DATA.government.items.map((item) => {
              const CardContent = (
                <div className="group/card relative bg-white rounded-xl p-3.5 hover:bg-blue-50 transition-all duration-300 cursor-pointer border border-white/60 hover:border-cusc-gold/60 hover:shadow-md hover:-translate-y-1 overflow-hidden h-full">
                  <div className="relative z-10 flex items-center gap-3 h-full">
                    <div className="w-9 h-9 bg-cusc-blue/10 rounded-lg flex items-center justify-center group-hover/card:scale-110 group-hover/card:bg-cusc-gold/20 transition-all duration-300 shrink-0">
                      <item.icon size={18} className="text-cusc-blue group-hover/card:text-cusc-gold transition-colors" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-sm font-black text-cusc-blue leading-tight">{item.name}</h4>
                      <p className="text-xs text-slate-600 leading-tight">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );

              if (item.name === 'CUSC-ISOO') {
                return (
                  <Link key={item.name} to="/cusc-isoo" target="_blank" rel="noopener noreferrer" className="block h-full">
                    {CardContent}
                  </Link>
                );
              }

              if (item.name === 'e-Office') {
                return (
                  <a key={item.name} href="https://cusc.vn/landing-pages/CUSC-eOffice/" target="_blank" rel="noopener noreferrer" className="block h-full">
                    {CardContent}
                  </a>
                );
              }

              if (item.name === 'CUSC-IES') {
                return (
                  <a key={item.name} href="https://cusc.vn/landing-pages/CUSC-IES/" target="_blank" rel="noopener noreferrer" className="block h-full">
                    {CardContent}
                  </a>
                );
              }

              if (item.name === 'C-GATE') {
                return (
                  <Link key={item.name} to="/c-gate" target="_blank" rel="noopener noreferrer" className="block h-full">
                    {CardContent}
                  </Link>
                );
              }

              return (
                <div key={item.name} className="h-full">
                  {CardContent}
                </div>
              );
            })}
          </div>
          {/* Connection Port */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-cusc-gold/30 rounded-t-full" />
        </div>

        {/* Cluster 2: Giải pháp đại học thông minh (CUSC Gold) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-amber-400 to-cusc-gold rounded-2xl p-6 shadow-lg relative overflow-hidden group flex flex-col">
          <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
          <h3 className="text-lg font-black uppercase tracking-wider mb-5 flex items-center gap-3 border-b border-white/30 pb-4 text-white min-h-[60px]">
            <GraduationCap size={24} className="text-white shrink-0" />
            {ECOSYSTEM_DATA.smartUniversity.title}
          </h3>

          <div className="flex-grow flex items-center justify-center py-6">
            <SmartUniversityGrid />
          </div>

          {/* Connection Port */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-cusc-blue/30 rounded-t-full" />
        </div>

        {/* Cluster 3: Ứng dụng AI (CUSC Blue) */}
        <div className="lg:col-span-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
          <h3 className="text-lg font-black uppercase tracking-wider mb-5 flex items-center gap-3 border-b border-white/20 pb-4 min-h-[60px]">
            <Bot size={24} className="text-cusc-gold shrink-0" />
            {ECOSYSTEM_DATA.aiApplications.title}
          </h3>
          <div className="flex flex-col gap-3">
            {ECOSYSTEM_DATA.aiApplications.items.map((item) => (
              <div 
                key={item.name} 
                onClick={() => onSolutionClick(item.name)}
                className="bg-white rounded-xl p-4 flex items-center gap-4 hover:bg-blue-50 transition-all duration-300 cursor-pointer border border-white/60 hover:border-cusc-gold/60 hover:shadow-md hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-cusc-blue/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-cusc-gold/20 transition-colors">
                  <item.icon size={20} className="text-cusc-blue" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-cusc-blue leading-tight">{item.name}</h4>
                  <p className="text-xs text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Backbone (Data Interconnection Axis) - Redesigned for compact visual flow */}
        <div className="lg:col-span-9 relative group/backbone">
          {/* Connection Ports (Top) */}
          <div className="absolute top-0 left-[27.7%] w-4 h-1 bg-white/30 rounded-b-full z-20" />
          <div className="absolute top-0 left-[72.2%] w-4 h-1 bg-white/30 rounded-b-full z-20" />
          
          <div className="bg-gradient-to-r from-cusc-gold via-amber-500 to-cusc-gold rounded-2xl p-4 shadow-lg relative overflow-hidden border border-white/30">
            
            <div className="relative z-30 flex items-center justify-around gap-4 px-8">
              {ECOSYSTEM_DATA.dataBackbone.services.map((service, idx) => (
                <div key={service} className="flex items-center gap-3 group/service">
                  <div className="w-12 h-12 rounded-full bg-white/40 border border-white/50 flex items-center justify-center group-hover/service:scale-110 group-hover/service:bg-white/60 transition-all shadow relative">
                    <div className="absolute inset-0 rounded-full border border-white/40 animate-ping opacity-20" />
                    
                    {service === 'Tích hợp SSO' && <ShieldCheck size={22} className="text-cusc-blue" />}
                    {service === 'Kho dữ liệu dùng chung' && <Database size={22} className="text-cusc-blue" />}
                    {service === 'Cơ sở dữ liệu chuyên ngành' && <Layers size={22} className="text-cusc-blue" />}
                    {service === 'Cơ sở dữ liệu chia sẻ' && <Network size={22} className="text-cusc-blue" />}
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-sm font-black text-white uppercase tracking-tighter block leading-none">
                      {service}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Connection Port (Right) */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1 h-4 bg-white/30 rounded-l-full z-20" />
        </div>

        {/* Cluster 4: Chia sẻ dữ liệu */}
        <div className="lg:col-span-3 lg:row-span-2 bg-slate-50 rounded-2xl p-5 shadow-lg relative overflow-hidden group border border-slate-200">
          <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2 text-cusc-blue">
            <Globe size={16} className="text-cusc-blue" />
            {ECOSYSTEM_DATA.dataSharing.title}
          </h3>

          <div className="flex flex-col gap-3">
            {ECOSYSTEM_DATA.dataSharing.items.map((item, idx) => (
              <div
                key={item.name}
                className="relative p-3 rounded-xl border border-slate-200 bg-white hover:border-cusc-blue/30 hover:shadow-sm transition-all hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-cusc-blue/10 text-cusc-blue">
                    <Database size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-wide">{item.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Infra + Hardware (Light theme) */}
        <div className="lg:col-span-9 bg-slate-100 rounded-xl p-4 shadow-md relative overflow-hidden border border-slate-200">
          <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-full -mr-16 -mt-16" />

          <h3 className="text-slate-900 font-black uppercase tracking-wide text-base mb-4 flex items-center gap-3">
            <Database size={20} className="text-cusc-blue" />
            HẠ TẦNG VÀ THIẾT BỊ
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 relative z-10">
            {[...ECOSYSTEM_DATA.infraServices, ...ECOSYSTEM_DATA.hardware].map((item) => (
              <div key={item.name} className="bg-white rounded-lg p-3 flex items-center gap-3 hover:bg-slate-50 transition-all border border-slate-100 hover:shadow-md">
                <div className="w-10 h-10 bg-cusc-blue/10 rounded-lg flex items-center justify-center text-cusc-blue shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900 leading-tight">{item.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: Dịch vụ khác */}
      <div className="mt-8 bg-white rounded-xl p-6 shadow-md border border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16" />
        <h3 className="text-slate-900 font-black uppercase tracking-wide text-lg mb-6 flex items-center gap-3 relative z-10">
          <Settings size={24} className="text-cusc-gold" />
          {ECOSYSTEM_DATA.otherServices.title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {ECOSYSTEM_DATA.otherServices.items.map((item) => (
            <div 
              key={item.name} 
              onClick={() => onSolutionClick(item.name)}
              className="bg-slate-50 rounded-xl p-5 flex items-center gap-4 hover:bg-slate-100 transition-all cursor-pointer border border-slate-100 hover:shadow-md"
            >
              <div className="w-14 h-14 bg-cusc-blue/10 rounded-lg flex items-center justify-center text-cusc-blue shrink-0">
                <item.icon size={28} />
              </div>
              <div>
                <h4 className="text-base font-black text-slate-900 leading-tight">{item.name}</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default function App() {
  const [selectedSolution, setSelectedSolution] = useState<AISolution | null>(null);

  const handleSolutionClick = (name: string) => {
    const solutionId = name.toLowerCase().replace(/ /g, '-');
    if (AI_SOLUTIONS[solutionId]) {
      setSelectedSolution(AI_SOLUTIONS[solutionId]);
    } else if (OTHER_SERVICES[solutionId]) {
      setSelectedSolution(OTHER_SERVICES[solutionId]);
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-cusc-blue selection:text-white">
      <SEO
        title="Hệ sinh thái giải pháp số - Chuyển đổi số Đại học"
        description="Giải pháp chuyển đổi số toàn diện cho trường Đại học, Cao đẳng: Quản lý đào tạo, ISO điện tử, AI Chatbot, tích hợp SSO. CUSC-ISOO, CUSC-UIIS, CUSC-IES với hơn 25 năm kinh nghiệm."
        keywords="hệ sinh thái giải pháp số, chuyển đổi số đại học, CUSC-ISOO, CUSC-UIIS, quản lý đào tạo, ISO điện tử, AI chatbot, tích hợp SSO, phần mềm giáo dục, đại học thông minh"
      />
      <Navbar />
      <main>
        <HeroSlider />
        <Ecosystem onSolutionClick={handleSolutionClick} />
        <ContactCTA />
      </main>
      <Footer />

      <SolutionModal
        isOpen={!!selectedSolution}
        onClose={() => setSelectedSolution(null)}
        solution={selectedSolution}
      />
    </div>
  );
}
