import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
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
    <div className="relative w-full max-w-[500px] mx-auto p-2">
      {/* Grid Layout */}
      <div className="grid grid-cols-2 gap-3 relative">
        {/* Pillar 1 - Top Left - Blue */}
        <motion.div 
          whileHover={{ scale: 1.02, backgroundColor: '#b0c7e1' }}
          whileTap={{ scale: 0.98 }}
          className="bg-[#c3d4e9] rounded-2xl p-5 min-h-[150px] flex flex-col items-start justify-start text-left shadow-md border border-white/30 cursor-pointer transition-shadow hover:shadow-xl group"
        >
          <div className="w-10 h-10 bg-white/40 rounded-xl flex items-center justify-center mb-3 shadow-sm group-hover:bg-white/60 transition-colors">
            <Users size={20} className="text-blue-700" />
          </div>
          <span className="text-[10px] font-bold text-blue-800/60 mb-1 tracking-widest">TRỤ CỘT 1</span>
          <p className="text-slate-900 font-black text-sm leading-tight uppercase tracking-tight">
            CÔNG TÁC TUYỂN SINH,<br/>
            QUẢN LÝ SINH VIÊN
          </p>
        </motion.div>

        {/* Pillar 2 - Top Right - Orange */}
        <motion.div 
          whileHover={{ scale: 1.02, backgroundColor: '#f5c9ae' }}
          whileTap={{ scale: 0.98 }}
          className="bg-[#f9d8c4] rounded-2xl p-5 min-h-[150px] flex flex-col items-end justify-start text-right shadow-md border border-white/30 cursor-pointer transition-shadow hover:shadow-xl group"
        >
          <div className="w-10 h-10 bg-white/40 rounded-xl flex items-center justify-center mb-3 shadow-sm group-hover:bg-white/60 transition-colors">
            <GraduationCap size={20} className="text-orange-700" />
          </div>
          <span className="text-[10px] font-bold text-orange-800/60 mb-1 tracking-widest">TRỤ CỘT 2</span>
          <p className="text-orange-900 font-black text-sm leading-tight uppercase tracking-tight">
            CÔNG TÁC ĐÀO TẠO,<br/>
            NGHIÊN CỨU KHOA HỌC
          </p>
        </motion.div>

        {/* Pillar 3 - Bottom Left - Yellow */}
        <motion.div 
          whileHover={{ scale: 1.02, backgroundColor: '#f7e197' }}
          whileTap={{ scale: 0.98 }}
          className="bg-[#ffebad] rounded-2xl p-5 min-h-[150px] flex flex-col items-start justify-end text-left shadow-md border border-white/30 cursor-pointer transition-shadow hover:shadow-xl group"
        >
          <div className="w-10 h-10 bg-white/40 rounded-xl flex items-center justify-center mb-3 shadow-sm group-hover:bg-white/60 transition-colors">
            <CircleDollarSign size={20} className="text-amber-700" />
          </div>
          <span className="text-[10px] font-bold text-amber-800/60 mb-1 tracking-widest">TRỤ CỘT 3</span>
          <p className="text-amber-900 font-black text-sm leading-tight uppercase tracking-tight">
            CÔNG TÁC<br/>
            TÀI CHÍNH
          </p>
        </motion.div>

        {/* Pillar 4 - Bottom Right - Green */}
        <motion.div 
          whileHover={{ scale: 1.02, backgroundColor: '#bcdbb3' }}
          whileTap={{ scale: 0.98 }}
          className="bg-[#cde4c6] rounded-2xl p-5 min-h-[150px] flex flex-col items-end justify-end text-right shadow-md border border-white/30 cursor-pointer transition-shadow hover:shadow-xl group"
        >
          <div className="w-10 h-10 bg-white/40 rounded-xl flex items-center justify-center mb-3 shadow-sm group-hover:bg-white/60 transition-colors">
            <Building2 size={20} className="text-emerald-700" />
          </div>
          <span className="text-[10px] font-bold text-emerald-800/60 mb-1 tracking-widest">TRỤ CỘT 4</span>
          <p className="text-emerald-900 font-black text-sm leading-tight uppercase tracking-tight">
            CÔNG TÁC ĐIỀU HÀNH VÀ<br/>
            HOẠT ĐỘNG CHUYÊN MÔN
          </p>
        </motion.div>

        {/* Center Core - Circle */}
        <Link to="/cusc-uiis" target="_blank" rel="noopener noreferrer" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white shadow-[0_15px_45px_rgba(27,75,163,0.3)] border-4 border-cusc-blue flex flex-col items-center justify-center z-10 rounded-full ring-4 ring-white/50 backdrop-blur-sm transition-transform hover:scale-105 group/core">
          <div className="w-10 h-10 bg-cusc-blue/10 rounded-full flex items-center justify-center text-cusc-blue mb-1 group-hover/core:scale-110 transition-transform">
            <GraduationCap size={24} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-base font-black text-cusc-blue uppercase tracking-tight leading-none">CUSC-UIIS</span>
            <div className="h-0.5 w-8 bg-cusc-gold mt-1.5 rounded-full group-hover/core:w-12 transition-all" />
            <div className="flex items-center gap-1 text-[7px] font-bold text-slate-400 mt-1 uppercase tracking-widest opacity-0 group-hover/core:opacity-100 transition-opacity">
              Chi tiết <ExternalLink size={7} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

const slides = [
  {
    image: "https://images.unsplash.com/photo-1523050335392-9bc567597280?q=80&w=1920&auto=format&fit=crop",
    title: "Hệ thống Tích hợp thông tin Quản lý đào tạo",
    subtitle: "Giải pháp chuyển đổi số toàn diện, kiến tạo hệ sinh thái giáo dục thông minh"
  },
  {
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1920&auto=format&fit=crop",
    title: "Tự động hóa quy trình quản lý",
    subtitle: "Kết nối dữ liệu liên thông, chia sẻ tài nguyên số và tối ưu hóa vận hành"
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1920&auto=format&fit=crop",
    title: "Chuyển đổi số bền vững",
    subtitle: "Nâng tầm hiệu quả cho các trường Đại học, Cao đẳng trên toàn quốc"
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="intro" className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-slate-900">
      {slides.map((slide, idx) => (
        <motion.div
          key={idx}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: idx === current ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: idx === current ? 0 : 20, opacity: idx === current ? 1 : 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg"
            >
              {slide.title}
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: idx === current ? 0 : 20, opacity: idx === current ? 1 : 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-slate-200 max-w-2xl font-medium drop-shadow-md"
            >
              {slide.subtitle}
            </motion.p>
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
    </div>
  );
};

const Ecosystem = ({ onSolutionClick }: { onSolutionClick: (name: string) => void }) => (
  <section id="ecosystem" className="py-12 bg-slate-100 min-h-screen">
    <div className="max-w-[1600px] mx-auto px-4 relative">
      
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-black text-cusc-blue uppercase tracking-tight">Hệ sinh thái giải pháp số</h2>
        <div className="w-24 h-1 bg-cusc-gold mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Visual Connectors Layer */}
      {/* Top Section: Three Main Clusters */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4 relative z-10">
        
        {/* Cluster 1: CHÍNH QUYỀN VÀ DOANH NGHIỆP (CUSC Blue) */}
        <div className="lg:col-span-4 bg-cusc-blue rounded-2xl p-6 text-white shadow-2xl flex flex-col relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
          <h3 className="text-lg font-black uppercase tracking-wider mb-5 flex items-center gap-3 border-b border-white/20 pb-4">
            <Building2 size={24} className="text-cusc-gold" />
            {ECOSYSTEM_DATA.government.title}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {ECOSYSTEM_DATA.government.items.map((item) => {
              const CardContent = (
                <div className="group/card relative bg-white/5 backdrop-blur-md rounded-xl p-3.5 hover:bg-white/10 transition-all duration-300 cursor-pointer border border-white/10 hover:border-cusc-gold/50 hover:shadow-[0_8px_30px_rgba(255,193,7,0.15)] hover:-translate-y-1 overflow-hidden h-full">
                  {/* Decorative gradient blob on hover */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-cusc-gold/20 to-transparent opacity-0 group-hover/card:opacity-100 blur-xl transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover/card:scale-110 group-hover/card:bg-cusc-gold/20 transition-all duration-300 shadow-inner shrink-0 mt-0.5">
                        <item.icon size={16} className="text-cusc-gold" />
                      </div>
                      <h4 className="text-sm font-black text-white group-hover/card:text-cusc-gold transition-colors leading-tight">{item.name}</h4>
                    </div>
                    <p className="text-xs text-white/60 leading-tight group-hover/card:text-white/80 transition-colors">{item.desc}</p>
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
        <div className="lg:col-span-5 bg-cusc-gold rounded-2xl p-6 shadow-2xl relative overflow-hidden group flex flex-col">
          <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
          <h3 className="text-lg font-black uppercase tracking-wider mb-4 flex items-center gap-3 border-b border-black/10 pb-4 text-slate-900">
            <GraduationCap size={24} className="text-cusc-blue" />
            {ECOSYSTEM_DATA.smartUniversity.title}
          </h3>
          
          <div className="flex-grow flex items-center justify-center py-4">
            <SmartUniversityGrid />
          </div>

          {/* Connection Port */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-cusc-blue/30 rounded-t-full" />
        </div>

        {/* Cluster 3: Ứng dụng AI (Deep Blue/Slate) */}
        <div className="lg:col-span-3 bg-indigo-700 rounded-2xl p-6 text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
          <h3 className="text-lg font-black uppercase tracking-wider mb-8 flex items-center gap-3 border-b border-white/20 pb-4">
            <Bot size={24} className="text-cusc-gold" />
            {ECOSYSTEM_DATA.aiApplications.title}
          </h3>
          <div className="flex flex-col gap-3">
            {ECOSYSTEM_DATA.aiApplications.items.map((item) => (
              <div 
                key={item.name} 
                onClick={() => onSolutionClick(item.name)}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:translate-x-2 transition-transform cursor-pointer border border-white/10"
              >
                <div className="w-10 h-10 bg-cusc-gold/20 rounded-lg flex items-center justify-center text-cusc-gold shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-white">{item.name}</h4>
                  <p className="text-xs text-white/70">{item.desc}</p>
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
          
          <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 rounded-2xl p-4 shadow-2xl relative overflow-hidden border border-orange-400/30">
            
            <div className="relative z-30 flex items-center justify-around gap-4 px-8">
              {ECOSYSTEM_DATA.dataBackbone.services.map((service, idx) => (
                <div key={service} className="flex items-center gap-3 group/service">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover/service:scale-110 group-hover/service:bg-white/30 transition-all shadow-lg relative">
                    {/* Pulsing Ring */}
                    <div className="absolute inset-0 rounded-full border border-white/40 animate-ping opacity-20" />
                    
                    {service === 'Tích hợp SSO' && <ShieldCheck size={22} className="text-white" />}
                    {service === 'Kho dữ liệu dùng chung' && <Database size={22} className="text-white" />}
                    {service === 'Cơ sở dữ liệu chuyên ngành' && <Layers size={22} className="text-white" />}
                    {service === 'Cơ sở dữ liệu chia sẻ' && <Network size={22} className="text-white" />}
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-sm font-black text-white uppercase tracking-tighter block leading-none opacity-80 group-hover/service:opacity-100 transition-opacity">
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

        {/* Cluster 4: Chia sẻ dữ liệu (Teal/Emerald) - Redesigned as separate cards */}
        <div className="lg:col-span-3 lg:row-span-2 bg-emerald-900 rounded-2xl p-5 text-white shadow-2xl relative overflow-hidden group border border-emerald-400/20">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
          
          <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2 text-emerald-300">
            <Globe size={16} />
            {ECOSYSTEM_DATA.dataSharing.title}
          </h3>

          <div className="flex flex-col gap-3">
            {ECOSYSTEM_DATA.dataSharing.items.map((item, idx) => (
              <div 
                key={item.name} 
                className={`
                  relative p-3 rounded-xl border transition-all hover:scale-[1.02]
                  ${idx === 0 ? 'bg-emerald-800/40 border-emerald-500/30' : ''}
                  ${idx === 1 ? 'bg-teal-800/40 border-teal-500/30' : ''}
                  ${idx === 2 ? 'bg-cyan-800/40 border-cyan-500/30' : ''}
                `}
              >
                <div className="flex items-center gap-3">
                  <div className={`
                    w-10 h-10 rounded-lg flex items-center justify-center shadow-inner
                    ${idx === 0 ? 'bg-emerald-500/20 text-emerald-300' : ''}
                    ${idx === 1 ? 'bg-teal-500/20 text-teal-300' : ''}
                    ${idx === 2 ? 'bg-cyan-500/20 text-cyan-300' : ''}
                  `}>
                    <Database size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-wider">{item.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Infra + Hardware (Now styled like "Dịch vụ khác") */}
        <div className="lg:col-span-9 bg-slate-800 rounded-xl p-6 shadow-xl relative overflow-hidden border border-slate-700">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
          
          <h3 className="text-white font-black uppercase tracking-widest text-sm mb-6 flex items-center gap-3">
            <Database size={20} className="text-cusc-gold" />
            HẠ TẦNG VÀ THIẾT BỊ
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {[...ECOSYSTEM_DATA.infraServices, ...ECOSYSTEM_DATA.hardware].map((item) => (
              <div key={item.name} className="bg-white/5 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 transition-all border border-white/5 hover:shadow-md">
                <div className="w-12 h-12 bg-cusc-gold/20 rounded-lg flex items-center justify-center text-cusc-gold shrink-0">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-white leading-tight">{item.name}</h4>
                  <p className="text-xs text-white/40 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: Dịch vụ khác */}
      <div className="mt-8 bg-white rounded-xl p-6 shadow-xl border border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16" />
        <h3 className="text-slate-800 font-black uppercase tracking-widest text-lg mb-6 flex items-center gap-3 relative z-10">
          <Settings size={24} className="text-cusc-blue" />
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
                <h4 className="text-base font-black text-slate-800 leading-tight">{item.name}</h4>
                <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">{item.desc}</p>
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
