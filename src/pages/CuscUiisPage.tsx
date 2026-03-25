import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer, ContactCTA } from '../components/Footer';
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  CreditCard, 
  FileText, 
  Search, 
  Settings, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  LayoutGrid, 
  Database, 
  Globe, 
  Bot,
  X, 
  ChevronLeft, 
  ChevronRight,
  Monitor,
  Smartphone,
  Cpu,
  Cloud,
  Award,
  Trophy,
  ExternalLink,
  Check,
  Target,
  School,
  Link as LinkIcon,
  Laptop,
  Network,
  MonitorCheck,
  Headset,
  Server,
  MonitorSmartphone,
  Share2,
  Wrench,
  Shield,
  Building2,
  Apple,
  Play,
  UserCheck
} from 'lucide-react';
import { useState } from 'react';

export default function CuscUiisPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  const showcaseImages = [
    { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000", title: "Quản lý đào tạo & Thời khóa biểu" },
    { url: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000", title: "Giao diện quản lý nhân sự" },
    { url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=2000", title: "Quản lý tài chính & Học phí" },
    { url: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=2000", title: "Hệ thống E-learning tích hợp" },
  ];

  const pillars = [
    {
      title: "CÔNG TÁC TUYỂN SINH, QUẢN LÝ SINH VIÊN",
      desc: "Số hóa toàn bộ quy trình từ đăng ký xét tuyển trực tuyến đến quản lý hồ sơ sinh viên, khen thưởng, kỷ luật và tốt nghiệp.",
      icon: Users,
      color: "bg-[#f4a261]", // Orange-ish
      modules: [
        { 
          category: "DỰ TUYỂN", 
          items: [
            { name: "Cổng thông tin Tuyển sinh", icon: Globe },
            { name: "Hồ sơ Thí sinh dự tuyển điện tử", icon: FileText }
          ] 
        },
        { 
          category: "NHẬP HỌC", 
          items: [
            { name: "Quản lý Xét tuyển", icon: ShieldCheck },
            { name: "Quản lý Tiếp nhận sinh viên", icon: Users }
          ] 
        },
        { 
          category: "QUẢN LÝ SINH VIÊN", 
          items: [
            { name: "Hồ sơ sinh viên", icon: FileText },
            { name: "Quá trình học tập", icon: BookOpen },
            { name: "NC Khoa học", icon: Cpu },
            { name: "Đăng ký đề tài luận văn", icon: GraduationCap },
            { name: "Ý kiến, phản ánh", icon: HelpCircle },
            { name: "Đoàn viên", icon: Users },
            { name: "Hoạt động ngoại khóa", icon: Zap },
            { name: "Ký túc xá", icon: School },
            { name: "Điểm rèn luyện", icon: Target },
            { name: "Khen thưởng, kỷ luật", icon: Award }
          ] 
        },
        { 
          category: "CỰU SINH VIÊN", 
          items: [
            { name: "Hồ sơ cựu sinh viên", icon: FileText }
          ] 
        }
      ]
    },
    {
      title: "CÔNG TÁC ĐÀO TẠO, NGHIÊN CỨU KHOA HỌC",
      desc: "Quản lý chương trình đào tạo, lập thời khóa biểu thông minh, đăng ký học phần trực tuyến và quản lý tiến độ nghiên cứu khoa học.",
      icon: GraduationCap,
      color: "bg-[#ffcd3c]", // Yellow-ish
      modules: [
        { 
          category: "QUẢN LÝ ĐÀO TẠO", 
          items: [
            { name: "Chương trình đào tạo", icon: BookOpen },
            { name: "Kế hoạch đào tạo", icon: FileText },
            { name: "Thời khóa biểu", icon: LayoutGrid },
            { name: "Đăng ký học phần", icon: CheckCircle2 }
          ] 
        },
        { 
          category: "QUẢN LÝ THI & ĐIỂM", 
          items: [
            { name: "Tổ chức thi", icon: Settings },
            { name: "Quản lý điểm", icon: BarChart3 },
            { name: "Xét tốt nghiệp", icon: Award },
            { name: "Cấp bằng", icon: Trophy }
          ] 
        },
        { 
          category: "NGHIÊN CỨU KHOA HỌC", 
          items: [
            { name: "Quản lý đề tài", icon: Target },
            { name: "Quản lý bài báo", icon: FileText },
            { name: "Hội nghị hội thảo", icon: Globe }
          ] 
        }
      ]
    },
    {
      title: "CÔNG TÁC TÀI CHÍNH",
      desc: "Tự động hóa tính toán học phí, tích hợp thanh toán trực tuyến đa kênh và quản lý các khoản thu chi chi tiết.",
      icon: CreditCard,
      color: "bg-[#a2d18c]", // Green-ish
      modules: [
        { 
          category: "QUẢN LÝ HỌC PHÍ", 
          items: [
            { name: "Định mức học phí", icon: CreditCard },
            { name: "Thu học phí trực tuyến", icon: Globe },
            { name: "Miễn giảm học phí", icon: ShieldCheck },
            { name: "Quyết toán học phí", icon: BarChart3 }
          ] 
        },
        { 
          category: "TÀI CHÍNH NỘI BỘ", 
          items: [
            { name: "Quản lý thu chi", icon: Database },
            { name: "Quản lý quỹ", icon: CreditCard },
            { name: "Báo cáo tài chính", icon: FileText }
          ] 
        }
      ]
    },
    {
      title: "CÔNG TÁC ĐIỀU HÀNH VÀ HOẠT ĐỘNG CHUYÊN MÔN",
      desc: "Hệ thống văn phòng điện tử, quản lý nhân sự, đánh giá KPI và các báo cáo thống kê phục vụ ra quyết định.",
      icon: LayoutGrid,
      color: "bg-[#8da9d9]", // Blue-ish
      modules: [
        { 
          category: "VĂN PHÒNG ĐIỆN TỬ", 
          items: [
            { name: "Quản lý văn bản", icon: FileText },
            { name: "Lịch công tác", icon: LayoutGrid },
            { name: "Quản lý tài sản", icon: Database },
            { name: "Quản lý công việc", icon: CheckCircle2 }
          ] 
        },
        { 
          category: "QUẢN LÝ NHÂN SỰ", 
          items: [
            { name: "Hồ sơ cán bộ", icon: Users },
            { name: "Đánh giá KPI", icon: Target },
            { name: "Quản lý lương", icon: CreditCard },
            { name: "Bảo hiểm xã hội", icon: ShieldCheck }
          ] 
        },
        { 
          category: "BÁO CÁO BI", 
          items: [
            { name: "Thống kê tổng hợp", icon: BarChart3 },
            { name: "Dự báo xu hướng", icon: Zap },
            { name: "Dashboard lãnh đạo", icon: Monitor }
          ] 
        }
      ]
    }
  ];

  const faqs = [
    { q: "Tại sao chọn CUSC?", a: "Xuất phát từ cơ sở giáo dục đại học, chúng tôi am hiểu sâu sắc công tác quản lý để xây dựng một hệ thống vận hành hiệu quả. Bên cạnh đó, hệ thống được thiết kế module hóa linh hoạt giúp nhà trường chủ động lựa chọn phân hệ cần thiết, và có khả năng tích hợp mở rộng không giới hạn các tính năng mới." },
    { q: "Hệ thống có hỗ trợ đào tạo theo tín chỉ không?", a: "Có, CUSC-UIIS hỗ trợ hoàn hảo quy trình đào tạo theo tín chỉ, niên chế hoặc kết hợp, tuân thủ đầy đủ các quy định hiện hành của Bộ Giáo dục và Đào tạo." },
    { q: "Dữ liệu có thể tích hợp với các hệ thống khác không?", a: "CUSC-UIIS cung cấp hệ thống API mở, cho phép tích hợp dễ dàng với các cổng thanh toán, hệ thống thư viện, bảo hiểm xã hội và các phần mềm chuyên ngành khác." },
    { q: "Thời gian triển khai một hệ thống UIIS toàn diện là bao lâu?", a: "Tùy theo quy mô và các phân hệ lựa chọn, thời gian triển khai thường kéo dài từ 6 tháng đến 1 năm để đảm bảo hệ thống vận hành ổn định và chuyển giao đầy đủ." },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-cusc-blue selection:text-white bg-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-cusc-blue text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050335392-9bc567597280?q=80&w=1920&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-cusc-gold/20 text-cusc-gold px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm mb-6 border border-cusc-gold/30">
                <GraduationCap size={18} />
                Giải pháp Giáo dục Thông minh
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-lg">
                CUSC-UIIS <br/>
                <span className="text-cusc-gold text-4xl md:text-6xl">Hệ thống Tích hợp thông tin Quản lý đào tạo</span>
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
                Giải pháp chuyển đổi số toàn diện cho các trường Đại học, Cao đẳng. Kiến tạo hệ sinh thái giáo dục thông minh, tối ưu hóa quy trình quản lý và nâng cao chất lượng đào tạo.
              </p>
              <div className="flex gap-4">
                <button className="bg-cusc-gold text-slate-900 px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-yellow-400 transition-all hover:scale-105 shadow-lg">
                  Yêu cầu Demo
                </button>
                <button className="bg-white/10 text-white border border-white/30 px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white/20 transition-all backdrop-blur-sm">
                  Tìm hiểu thêm
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cusc-gold/30 to-cusc-blue/30 rounded-2xl blur-3xl"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2000" 
                  alt="CUSC-UIIS Ecosystem" 
                  className="rounded-xl aspect-[16/10] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating stats */}
              <div className="absolute -bottom-6 -right-6 bg-white text-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 text-cusc-blue rounded-full flex items-center justify-center font-black text-xl">
                  30+
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Đối tác</p>
                  <p className="text-sm font-black">Trường ĐH/CĐ</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-cusc-blue uppercase tracking-tight mb-2">
              Giới thiệu CUSC-UIIS
            </h2>
            <div className="w-24 h-1.5 bg-cusc-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Highlight Box */}
              <div className="bg-gradient-to-r from-blue-600 to-emerald-500 p-8 rounded-2xl text-white shadow-xl">
                <p className="text-lg font-bold leading-relaxed">
                  <span className="text-cusc-gold">CUSC-UIIS</span> là hệ sinh thái giáo dục thông minh, giải pháp chuyển đổi số toàn diện kiến tạo mô hình Đại học thông minh cho các trường Đại học, Cao đẳng.
                </p>
              </div>

              {/* Feature List */}
              <div className="space-y-4">
                {[
                  { 
                    icon: Target, 
                    text: "Hơn 40 modules quản lý tổng thể tất cả các hoạt động của nhà Trường",
                    color: "text-red-500"
                  },
                  { 
                    icon: School, 
                    text: "Quản lý đồng thời đa bậc đào tạo: Trung cấp, Cao đẳng, Đại học và Sau Đại học. Đáp ứng nhu cầu quản lý chuyên ngành Giáo dục Y tế, Sư phạm, Kinh tế,...",
                    color: "text-red-800"
                  },
                  { 
                    icon: Smartphone, 
                    text: "Truy cập mọi lúc, mọi nơi thông qua đa nền tảng thiết bị website hay mobile",
                    color: "text-cyan-500"
                  },
                  { 
                    icon: LinkIcon, 
                    text: "Tích hợp với hệ thống CSDL HEMIS của Bộ GD&ĐT và tích hợp dữ liệu lớn thông qua trục tích hợp LGSP",
                    color: "text-slate-800"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-50 p-5 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                    <div className={`shrink-0 w-10 h-10 flex items-center justify-center`}>
                      <item.icon size={28} className={item.color} />
                    </div>
                    <p className="text-slate-700 font-medium leading-snug">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-blue-50 rounded-[3rem] p-4 aspect-square flex items-center justify-center overflow-hidden shadow-inner border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1920&auto=format&fit=crop" 
                  alt="Smart University Environment" 
                  className="w-full h-full object-cover rounded-[2.5rem]"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-cusc-gold rounded-2xl -z-10 animate-pulse"></div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Digital Transformation Stages Section */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          {/* Title */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-cusc-blue uppercase tracking-tight mb-2">
                GIAI ĐOẠN CHUYỂN ĐỔI SỐ
              </h2>
              <div className="w-24 h-1.5 bg-cusc-gold mx-auto rounded-full"></div>
            </motion.div>
          </div>

          {/* Stages Flow - Arrow & Staircase Design */}
          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-2 xl:gap-4 relative pt-8 lg:pt-16 pb-8">
            {/* Stage 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              className="flex-1 drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 lg:mt-24 relative z-10"
            >
              <div className="bg-white h-full p-8 lg:pr-12 rounded-2xl lg:rounded-none lg:[clip-path:polygon(0%_0%,_90%_0%,_100%_50%,_90%_100%,_0%_100%)] border-t-8 border-[#f97316] flex flex-col items-center text-center group">
                <div className="w-20 h-20 mb-6 text-[#f97316] bg-orange-50 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                  <Laptop className="w-full h-full" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl xl:text-2xl font-bold text-[#f97316] mb-4">Tin học hóa</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm xl:text-base">
                  Ứng dụng các phần mềm phục vụ công tác, công việc chuyên môn đặc thù
                </p>
              </div>
            </motion.div>

            {/* Mobile Arrow */}
            <div className="lg:hidden flex justify-center text-slate-300 -my-2 relative z-50">
              <ChevronDown size={32} />
            </div>

            {/* Stage 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex-1 drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 lg:mt-16 relative z-20"
            >
              <div className="bg-white h-full p-8 lg:pl-12 lg:pr-12 rounded-2xl lg:rounded-none lg:[clip-path:polygon(0%_0%,_90%_0%,_100%_50%,_90%_100%,_0%_100%,_10%_50%)] border-t-8 border-[#eab308] flex flex-col items-center text-center group">
                <div className="w-20 h-20 mb-6 text-[#eab308] bg-yellow-50 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                  <Network className="w-full h-full" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl xl:text-2xl font-bold text-[#eab308] mb-4">Hệ thống liên thông</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm xl:text-base">
                  Kết nối tạo lập hệ thống dữ liệu dùng chung, chia sẻ tài nguyên giữa các hệ thống chuyên môn
                </p>
              </div>
            </motion.div>

            {/* Mobile Arrow */}
            <div className="lg:hidden flex justify-center text-slate-300 -my-2 relative z-50">
              <ChevronDown size={32} />
            </div>

            {/* Stage 3 */}
            <motion.div 
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1 drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 lg:mt-8 relative z-30"
            >
              <div className="bg-white h-full p-8 lg:pl-12 lg:pr-12 rounded-2xl lg:rounded-none lg:[clip-path:polygon(0%_0%,_90%_0%,_100%_50%,_90%_100%,_0%_100%,_10%_50%)] border-t-8 border-[#22c55e] flex flex-col items-center text-center group">
                <div className="w-20 h-20 mb-6 text-[#22c55e] bg-green-50 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                  <MonitorCheck className="w-full h-full" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl xl:text-2xl font-bold text-[#22c55e] mb-4">Cơ sở giáo dục số</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm xl:text-base">
                  Chuyển đổi quy trình làm việc để tối ưu hóa và tự động hóa từ khâu thu thập, xử lý thông tin
                </p>
              </div>
            </motion.div>

            {/* Mobile Arrow */}
            <div className="lg:hidden flex justify-center text-slate-300 -my-2 relative z-50">
              <ChevronDown size={32} />
            </div>

            {/* Stage 4 */}
            <motion.div 
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex-1 drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 lg:mt-0 relative z-40"
            >
              <div className="bg-white h-full p-8 lg:pl-12 rounded-2xl lg:rounded-none lg:[clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_0%_100%,_10%_50%)] border-t-8 border-[#3b82f6] flex flex-col items-center text-center group">
                <div className="w-20 h-20 mb-6 text-[#3b82f6] bg-blue-50 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-full h-full" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl xl:text-2xl font-bold text-[#3b82f6] mb-4">Giáo dục thông minh</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm xl:text-base">
                  Ứng dụng AI để phân tích, đề xuất giải pháp cải tiến hoạt động dựa trên Cơ sở giáo dục số
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section - Modern House Model */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cusc-gold rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-white uppercase tracking-tight mb-2">
                Cơ sở giáo dục số
              </h2>
              <div className="w-24 h-1.5 bg-cusc-gold mx-auto mt-6 rounded-full shadow-lg"></div>
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column: Vertical Tabs */}
            <div className="w-full lg:w-1/3 xl:w-1/4 flex flex-col gap-4">
              <button 
                onClick={() => setActiveTab(0)}
                className={`flex items-center justify-between p-5 rounded-2xl font-extrabold transition-all duration-300 border ${
                  activeTab === 0 
                  ? 'bg-[#2d5296] text-white shadow-md border-transparent' 
                  : 'bg-white text-[#1e3a8a] hover:bg-slate-50 border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-4">
                  <LayoutGrid size={22} className={activeTab === 0 ? "text-white" : "text-[#1e3a8a]"} />
                  <span className="text-left text-[15px] uppercase">Tổng quan</span>
                </div>
                {activeTab === 0 && <ChevronRight size={20} />}
              </button>
              
              {pillars.map((pillar, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveTab(idx + 1)}
                  className={`flex items-center justify-between p-5 rounded-2xl font-extrabold transition-all duration-300 border ${
                    activeTab === idx + 1 
                    ? `${pillar.color} text-slate-900 shadow-md border-transparent` 
                    : 'bg-white text-[#1e3a8a] hover:bg-slate-50 border-slate-200 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <pillar.icon size={22} className={activeTab === idx + 1 ? "text-slate-900" : "text-[#1e3a8a]"} />
                    <span className="text-left text-[15px] uppercase">{pillar.title}</span>
                  </div>
                  {activeTab === idx + 1 && <ChevronRight size={20} />}
                </button>
              ))}

              <button 
                onClick={() => setActiveTab(5)}
                className={`flex items-center justify-between p-5 rounded-2xl font-extrabold transition-all duration-300 border ${
                  activeTab === 5 
                  ? 'bg-red-600 text-white shadow-md border-transparent' 
                  : 'bg-white text-red-600 hover:bg-red-50 border-red-200 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-4">
                  <LinkIcon size={22} className={activeTab === 5 ? "text-white" : "text-red-600"} />
                  <span className="text-left text-[15px] uppercase">Liên kết ngoài</span>
                </div>
                {activeTab === 5 && <ChevronRight size={20} />}
              </button>

              <button 
                onClick={() => setActiveTab(6)}
                className={`flex items-center justify-between p-5 rounded-2xl font-extrabold transition-all duration-300 border ${
                  activeTab === 6 
                  ? 'bg-purple-600 text-white shadow-md border-transparent' 
                  : 'bg-white text-purple-600 hover:bg-purple-50 border-purple-200 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-4">
                  <MonitorCheck size={22} className={activeTab === 6 ? "text-white" : "text-purple-600"} />
                  <span className="text-left text-[15px] uppercase">Tiện ích mở rộng</span>
                </div>
                {activeTab === 6 && <ChevronRight size={20} />}
              </button>
            </div>

            {/* Right Column: Content */}
            <div className="w-full lg:w-2/3 xl:w-3/4">
              <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 min-h-[650px] flex flex-col">
                <AnimatePresence mode="wait">
                  {activeTab === 0 ? (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="w-full my-auto"
                    >
                      {/* House Structure */}
                      <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
                        {/* 1. The Roof (Triangular) */}
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9, y: 20 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="w-full relative z-30"
                        >
                          <div 
                            className="w-full h-24 md:h-32 bg-[#2d5296] relative flex items-end justify-center overflow-hidden shadow-2xl"
                            style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                          >
                            {/* Roof Inner Decoration */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
                            <div className="absolute bottom-0 w-full h-1 bg-white/20"></div>
                          </div>
                        </motion.div>

                        {/* 2. The Header (4 TRỤ CỘT Cơ sở giáo dục số) */}
                        <motion.div 
                          initial={{ opacity: 0, width: "80%" }}
                          whileInView={{ opacity: 1, width: "100%" }}
                          viewport={{ once: true }}
                          className="w-full bg-[#2d5296] py-4 md:py-6 relative z-20 shadow-xl border-t-4 border-white/10"
                        >
                          <div className="text-center px-4">
                            <h3 className="text-white text-xl md:text-3xl font-black uppercase tracking-tight drop-shadow-lg">
                              <span className="text-yellow-400 text-2xl md:text-4xl mr-2">4 TRỤ CỘT</span> 
                              <span className="opacity-90">Cơ sở giáo dục số</span>
                            </h3>
                          </div>
                          {/* Decorative lines */}
                          <div className="absolute top-2 left-2 right-2 bottom-2 border border-white/10 pointer-events-none"></div>
                        </motion.div>

                        {/* 3. The Pillars */}
                        <div className="w-full bg-white/40 backdrop-blur-sm p-4 relative z-10 border-x-8 border-[#2d5296] shadow-2xl">
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {pillars.map((pillar, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15, duration: 0.6 }}
                                className="relative group h-full cursor-pointer"
                                onClick={() => setActiveTab(idx + 1)}
                              >
                                {/* Pillar Body */}
                                <div className={`h-full min-h-[250px] ${pillar.color} p-4 flex flex-col items-center justify-center text-center transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-2 rounded-lg border-b-8 border-black/10`}>
                                  
                                  {/* Icon Container */}
                                  <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner">
                                    <pillar.icon size={32} className="text-slate-900" />
                                  </div>

                                  {/* Title */}
                                  <h4 className="text-slate-900 font-black text-sm md:text-base leading-tight uppercase tracking-tight mb-4">
                                    {pillar.title}
                                  </h4>

                                  {/* Pillar Cap Decoration */}
                                  <div className="absolute top-0 left-0 w-full h-2 bg-white/20"></div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* 4. The Foundation (Base) */}
                        <motion.div 
                          initial={{ opacity: 0, scaleX: 0.8 }}
                          whileInView={{ opacity: 1, scaleX: 1 }}
                          viewport={{ once: true }}
                          className="w-full h-8 md:h-12 bg-gradient-to-r from-[#1e3a8a] via-[#2d5296] to-[#1e3a8a] rounded-b-2xl shadow-2xl relative z-20 flex items-center justify-center"
                        >
                          <div className="w-[98%] h-[60%] border border-white/10 rounded-lg"></div>
                        </motion.div>

                        {/* 5. Ground Shadow */}
                        <div className="w-[90%] h-6 bg-black/10 blur-xl rounded-[100%] mt-[-8px]"></div>
                      </div>
                    </motion.div>
                  ) : activeTab === 5 ? (
                    <motion.div
                      key="external-links"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="w-full flex-1 flex flex-col"
                    >
                      <div className="mb-8 flex items-center gap-4">
                        <div className={`w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg`}>
                          <LinkIcon size={32} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-black text-cusc-blue uppercase tracking-tight">
                            LIÊN KẾT NGOÀI
                          </h3>
                          <p className="text-slate-500 font-bold mt-1">
                            Tích hợp với các dịch vụ thanh toán, ngân hàng, hóa đơn điện tử và chữ ký số
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 flex-grow content-start min-h-[250px] ">
                        {/* Ngân hàng */}
                        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-h-[250px]">
                          <div className="bg-[#cc0000] text-white text-center py-3 font-bold text-[15px] uppercase tracking-wide">
                            Liên kết thu học phí qua Ngân hàng
                          </div>
                          <div className="p-3 grid grid-cols-3 gap-1 items-center justify-items-center bg-[#f5f5f5] min-h-[210px]">
                            <img src={new URL('../assets/images/cusc-uiis/vcb.png', import.meta.url).href} alt="Vietcombank" className="h-10 object-contain" />
                            <img src={new URL('../assets/images/cusc-uiis/bidv.png', import.meta.url).href} alt="BIDV" className="h-10 object-contain" />
                            <img src={new URL('../assets/images/cusc-uiis/ocb.png', import.meta.url).href} alt="OCB" className="h-10 object-contain" />
                            <img src={new URL('../assets/images/cusc-uiis/hdbank.png', import.meta.url).href} alt="HDBank" className="h-10 object-contain" />
                            <img src={new URL('../assets/images/cusc-uiis/namabank.png', import.meta.url).href} alt="NAM A BANK" className="h-10 object-contain" />
                            <img src={new URL('../assets/images/cusc-uiis/vietinbank.png', import.meta.url).href} alt="VietinBank" className="h-10 object-contain" />
                            <img src={new URL('../assets/images/cusc-uiis/argibank.png', import.meta.url).href} alt="AGRIBANK" className="h-10 object-contain" />
                            <img src={new URL('../assets/images/cusc-uiis/pvcombank.png', import.meta.url).href} alt="PVcomBank" className="h-12 object-contain" />
                            <img src={new URL('../assets/images/cusc-uiis/kienlongbank.png', import.meta.url).href} alt="KienlongBank" className="h-10 object-contain" />
                          </div>
                        </div>

                        {/* Hóa đơn điện tử */}
                        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-h-[250px]">
                          <div className="bg-[#d97726] text-white text-center py-3 font-bold text-[15px] uppercase tracking-wide">
                            Liên kết xuất hóa đơn điện tử
                          </div>
                          <div className="p-1 flex flex-col gap-0 items-center justify-center bg-[#faebd7] min-h-[210px]">
                            <img src={new URL('../assets/images/cusc-uiis/misaInvoid.png', import.meta.url).href} alt="MISA meInvoice" className="h-16 object-contain" />
                            <img src={new URL('../assets/images/cusc-uiis/viettel.png', import.meta.url).href} alt="Viettel" className="h-16 object-contain" />
                            <img src={new URL('../assets/images/cusc-uiis/vnpt.png', import.meta.url).href} alt="VNPT" className="h-16 object-contain" />
                          </div>
                        </div>

                        {/* Cổng thanh toán & Ví điện tử */}
                        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-h-[230px]">
                          <div className="bg-[#b8860b] text-white text-center py-3 font-bold text-[15px] uppercase tracking-wide">
                            Liên kết cổng thanh toán & Ví điện tử
                          </div>
                          <div className="p-2 flex flex-col gap-0 items-center justify-center bg-[#fff8dc] min-h-[220px]">
                            <div className="flex gap-6 items-center justify-center flex-wrap">
                              <img src={new URL('../assets/images/cusc-uiis/vnpay.png', import.meta.url).href} alt="VNPAY" className="h-25 object-contain" />
                              <img src={new URL('../assets/images/cusc-uiis/viettelpay.png', import.meta.url).href} alt="Viettel Pay" className="h-25 object-contain" />
                            </div>
                            <div className="flex gap-6 items-center justify-center flex-wrap">
                              <img src={new URL('../assets/images/cusc-uiis/vnptpay.png', import.meta.url).href} alt="VNPT Pay" className="h-8 object-contain" />
                            </div>
                          </div>
                        </div>

                        {/* Chữ ký số */}
                        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-h-[230px]">
                          <div className="bg-[#4f46e5] text-white text-center py-3 font-bold text-[15px] uppercase tracking-wide">
                            Tích hợp chữ ký số
                          </div>
                          <div className="p-2 flex flex-col gap-3 items-center justify-center bg-[#e0e7ff] min-h-[200px]">
                            <img src={new URL('../assets/images/cusc-uiis/vgca.png', import.meta.url).href} alt="Cục Cơ yếu Chính phủ" className="h-16 object-contain" />
                            <div className="w-16 h-px bg-indigo-300"></div>
                            <div className="flex flex-col items-center">
                              <div className="font-bold text-indigo-900 text-lg text-center uppercase tracking-wide">Ký số công cộng</div>
                              <div className="text-indigo-700 font-bold mt-2 text-sm">(VNPT, Viettel, FPT,...)</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : activeTab === 6 ? (
                    <motion.div
                      key="extensions"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="w-full flex-1 flex flex-col"
                    >
                      <div className="mb-8 flex items-center gap-4">
                        <div className={`w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center shadow-lg`}>
                          <MonitorCheck size={32} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-black text-cusc-blue uppercase tracking-tight">
                            TIỆN ÍCH MỞ RỘNG
                          </h3>
                          <p className="text-slate-500 font-bold mt-1">
                            Nâng cao trải nghiệm người dùng với các tính năng vượt trội
                          </p>
                        </div>
                      </div>

                      <div className="flex-grow flex flex-col">
                        {/* Mobile App */}
                        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg flex flex-col h-full">
                          <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white text-center py-4 font-black text-[16px] uppercase tracking-wider shadow-md">
                            <Smartphone className="inline-block mr-2 -mt-1" size={20} />
                            Ứng dụng di động
                          </div>
                          <div className="p-8 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex-grow relative overflow-hidden">
                            {/* Decorative background circles */}
                            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-100/40 rounded-full blur-2xl"></div>

                            {/* App Cards - Centered */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full relative z-10 max-w-4xl">
                              {/* Giảng viên */}
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300 hover:-translate-y-1"
                              >
                                <div className="flex flex-col items-center text-center">
                                  <div className="relative mb-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                      <UserCheck size={32} strokeWidth={2} />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow">
                                      <div className="w-3.5 h-3.5 bg-green-500 rounded-full"></div>
                                    </div>
                                  </div>
                                  <h4 className="font-black text-blue-900 text-lg mb-3">Giảng viên</h4>
                                  <div className="flex gap-2">
                                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md flex items-center gap-1">
                                      <Apple size={10} /> iOS
                                    </span>
                                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md flex items-center gap-1">
                                      <Play size={10} /> Android
                                    </span>
                                  </div>
                                </div>
                              </motion.div>

                              {/* Sinh viên */}
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="group bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-300 hover:-translate-y-1"
                              >
                                <div className="flex flex-col items-center text-center">
                                  <div className="relative mb-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                      <GraduationCap size={32} strokeWidth={2} />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow">
                                      <div className="w-3.5 h-3.5 bg-green-500 rounded-full"></div>
                                    </div>
                                  </div>
                                  <h4 className="font-black text-emerald-900 text-lg mb-3">Sinh viên</h4>
                                  <div className="flex gap-2">
                                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md flex items-center gap-1">
                                      <Apple size={10} /> iOS
                                    </span>
                                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md flex items-center gap-1">
                                      <Play size={10} /> Android
                                    </span>
                                  </div>
                                </div>
                              </motion.div>

                              {/* Phụ huynh */}
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="group bg-gradient-to-br from-purple-50 to-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300 hover:-translate-y-1"
                              >
                                <div className="flex flex-col items-center text-center">
                                  <div className="relative mb-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                      <Users size={32} strokeWidth={2} />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow">
                                      <div className="w-3.5 h-3.5 bg-green-500 rounded-full"></div>
                                    </div>
                                  </div>
                                  <h4 className="font-black text-purple-900 text-lg mb-3">Phụ huynh</h4>
                                  <div className="flex gap-2">
                                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md flex items-center gap-1">
                                      <Apple size={10} /> iOS
                                    </span>
                                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md flex items-center gap-1">
                                      <Play size={10} /> Android
                                    </span>
                                  </div>
                                </div>
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="w-full flex-1 flex flex-col"
                    >
                      {pillars[activeTab - 1] && (
                        <div className="flex flex-col h-full">
                          <div className="mb-8 flex items-center gap-4">
                            <div className={`w-16 h-16 ${pillars[activeTab - 1].color} rounded-2xl flex items-center justify-center shadow-lg`}>
                              {(() => {
                                const Icon = pillars[activeTab - 1].icon;
                                return <Icon size={32} className="text-slate-900" />;
                              })()}
                            </div>
                            <div>
                              <h3 className="text-2xl font-black text-cusc-blue uppercase tracking-tight">
                                {pillars[activeTab - 1].title}
                              </h3>
                              <p className="text-slate-500 font-bold mt-1">
                                {pillars[activeTab - 1].desc}
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 flex-grow content-start">
                            {pillars[activeTab - 1].modules.flatMap(cat => cat.items).map((item: any, j) => (
                              <div key={j} className="bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-cusc-blue/30 transition-all group flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 text-cusc-blue flex items-center justify-center group-hover:bg-cusc-blue group-hover:text-white transition-colors shrink-0">
                                  <item.icon size={24} strokeWidth={1.5} />
                                </div>
                                <div className="flex-1">
                                  <p className="font-black text-slate-800 text-sm leading-tight">{item.name}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Showcase Section */}
      <section className="py-16 bg-slate-50 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-blue-600 rounded-full" />
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Giao diện <span className="text-blue-600">CUSC-UIIS</span>
              </h2>
            </div>
            <p className="hidden md:block text-slate-500 text-xs font-medium max-w-[300px] text-right uppercase tracking-widest">
              Trải nghiệm hệ sinh thái giáo dục số hiện đại
            </p>
          </div>

          <div className="relative group">
            <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
              {showcaseImages.map((img, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setSelectedImage(idx)}
                  className="relative flex-none w-[300px] md:w-[450px] aspect-video group cursor-pointer overflow-hidden rounded-2xl shadow-lg snap-start bg-slate-200 border border-slate-200"
                >
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <p className="text-white font-black text-lg leading-tight">{img.title}</p>
                    <div className="flex items-center gap-2 text-cusc-gold text-xs mt-2 font-black uppercase tracking-widest">
                      <Search size={14} /> Xem chi tiết
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Scroll indicators */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-xl text-slate-800">
                <ChevronLeft size={24} />
              </div>
              <div className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-xl text-slate-800">
                <ChevronRight size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110] p-2 hover:bg-white/10 rounded-full">
              <X size={32} />
            </button>

            {/* Prev Button */}
            <button 
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] p-3 hover:bg-white/10 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev === 0 ? showcaseImages.length - 1 : prev! - 1));
              }}
            >
              <ChevronLeft size={40} />
            </button>

            {/* Next Button */}
            <button 
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] p-3 hover:bg-white/10 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev === showcaseImages.length - 1 ? 0 : prev! + 1));
              }}
            >
              <ChevronRight size={40} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-900"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={showcaseImages[selectedImage].url} 
                alt={showcaseImages[selectedImage].title} 
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <h3 className="text-white text-3xl font-black tracking-tight">{showcaseImages[selectedImage].title}</h3>
                <p className="text-white/60 mt-2">Hình ảnh {selectedImage + 1} / {showcaseImages.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Outstanding Features Section (Công nghệ - Dịch vụ) */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-cusc-blue uppercase tracking-tight mb-4">
                Tính năng nổi bật
              </h2>
              <div className="w-24 h-1.5 bg-cusc-gold mx-auto rounded-full"></div>
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-4 xl:gap-12">
            
            {/* Left Column */}
            <div className="w-full lg:w-[450px] xl:w-[500px] flex flex-col gap-12">
              {/* Item 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row lg:flex-row items-center lg:items-start gap-6 text-center lg:text-right"
              >
                <div className="order-2 lg:order-1 flex-1">
                  <h3 className="text-xl font-bold text-[#0056a0] mb-3">Kết nối với Cơ sở dữ liệu HEMIS</h3>
                  <ul className="text-slate-600 text-[15px] space-y-2.5 flex flex-col items-center lg:items-end">
                    <li className="flex items-start lg:flex-row-reverse gap-2.5 text-center lg:text-right">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#d9a05b] shrink-0"></div>
                      <span className="leading-relaxed">Đồng bộ dữ liệu trực tiếp với hệ thống HEMIS của Bộ Giáo dục và Đào tạo.</span>
                    </li>
                    <li className="flex items-start lg:flex-row-reverse gap-2.5 text-center lg:text-right">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#d9a05b] shrink-0"></div>
                      <span className="leading-relaxed">Đảm bảo tính chính xác, thống nhất và toàn vẹn dữ liệu báo cáo.</span>
                    </li>
                  </ul>
                </div>
                <div className="order-1 lg:order-2 shrink-0 relative">
                  <div className="w-24 h-24 bg-[#0056a0] rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-xl rounded-bl-xl flex items-center justify-center shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                    <Database size={40} className="text-white transform rotate-6" strokeWidth={1.5} />
                  </div>
                </div>
              </motion.div>

              {/* Item 2 */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col md:flex-row lg:flex-row items-center lg:items-start gap-6 text-center lg:text-right"
              >
                <div className="order-2 lg:order-1 flex-1">
                  <h3 className="text-xl font-bold text-[#0056a0] mb-3">Tích hợp các phần mềm khác</h3>
                  <ul className="text-slate-600 text-[15px] space-y-2.5 flex flex-col items-center lg:items-end">
                    <li className="flex items-start lg:flex-row-reverse gap-2.5 text-center lg:text-right">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#d9a05b] shrink-0"></div>
                      <span className="leading-relaxed">Tích hợp liền mạch với các hệ thống Moodle, LMS, OJS.</span>
                    </li>
                    <li className="flex items-start lg:flex-row-reverse gap-2.5 text-center lg:text-right">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#d9a05b] shrink-0"></div>
                      <span className="leading-relaxed">Tạo hệ sinh thái giáo dục toàn diện, kết nối học tập và quản lý.</span>
                    </li>
                  </ul>
                </div>
                <div className="order-1 lg:order-2 shrink-0 relative">
                  <div className="w-24 h-24 bg-[#facc15] rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-xl rounded-bl-xl flex items-center justify-center shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                    <Share2 size={40} className="text-slate-800 transform rotate-6" strokeWidth={1.5} />
                  </div>
                </div>
              </motion.div>

              {/* Item 3 */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col md:flex-row lg:flex-row items-center lg:items-start gap-6 text-center lg:text-right"
              >
                <div className="order-2 lg:order-1 flex-1">
                  <h3 className="text-xl font-bold text-[#0056a0] mb-3">Kiến trúc hệ thống tối ưu</h3>
                  <ul className="text-slate-600 text-[15px] space-y-2.5 flex flex-col items-center lg:items-end">
                    <li className="flex items-start lg:flex-row-reverse gap-2.5 text-center lg:text-right">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#d9a05b] shrink-0"></div>
                      <span className="leading-relaxed">Phát triển trên nền tảng kiến trúc Microservices hiện đại.</span>
                    </li>
                    <li className="flex items-start lg:flex-row-reverse gap-2.5 text-center lg:text-right">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#d9a05b] shrink-0"></div>
                      <span className="leading-relaxed">Tích hợp dữ liệu lớn thông qua trục tích hợp LGSP.</span>
                    </li>
                  </ul>
                </div>
                <div className="order-1 lg:order-2 shrink-0 relative">
                  <div className="w-24 h-24 bg-[#1d4ed8] rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-xl rounded-bl-xl flex items-center justify-center shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                    <Server size={40} className="text-white transform rotate-6" strokeWidth={1.5} />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Center Circle */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="hidden lg:flex shrink-0 items-center justify-center relative mx-4 xl:mx-8"
            >
              {/* Outer dashed circle */}
              <div className="absolute w-[340px] h-[340px] border-[3px] border-dashed border-slate-300 rounded-full animate-[spin_40s_linear_infinite]"></div>
              
              {/* Inner solid circle */}
              <div className="w-[280px] h-[280px] bg-white rounded-full shadow-[0_0_40px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center z-10 border-[8px] border-[#0056a0] relative">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-[#eef2ff] rounded-full flex items-center justify-center mb-4">
                    <GraduationCap size={48} className="text-[#0056a0]" strokeWidth={2} />
                  </div>
                  <div className="text-3xl font-black text-[#0056a0] tracking-tight mb-3 uppercase">CUSC-UIIS</div>
                  <div className="w-16 h-1.5 bg-[#d9a05b] rounded-full"></div>
                </div>
              </div>
            </motion.div>

            {/* Right Column */}
            <div className="w-full lg:w-[450px] xl:w-[500px] flex flex-col gap-12">
              {/* Item 4 */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row lg:flex-row items-center lg:items-start gap-6 text-center lg:text-left"
              >
                <div className="shrink-0 relative">
                  <div className="w-24 h-24 bg-[#38bdf8] rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-xl rounded-br-xl flex items-center justify-center shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
                    <Target size={40} className="text-white transform -rotate-6" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0056a0] mb-3">Xây dựng Chuẩn đầu ra</h3>
                  <ul className="text-slate-600 text-[15px] space-y-2.5 flex flex-col items-center lg:items-start">
                    <li className="flex items-start gap-2.5 text-center lg:text-left">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#d9a05b] shrink-0"></div>
                      <span className="leading-relaxed">Quản lý và đánh giá sinh viên theo chuẩn đầu ra.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-center lg:text-left">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#d9a05b] shrink-0"></div>
                      <span className="leading-relaxed">Hỗ trợ xây dựng chương trình đào tạo và Đề cương chi tiết học phần.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Item 5 */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col md:flex-row lg:flex-row items-center lg:items-start gap-6 text-center lg:text-left"
              >
                <div className="shrink-0 relative">
                  <div className="w-24 h-24 bg-[#facc15] rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-xl rounded-br-xl flex items-center justify-center shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
                    <Wrench size={40} className="text-slate-800 transform -rotate-6" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0056a0] mb-3">Tính linh hoạt của phần mềm</h3>
                  <ul className="text-slate-600 text-[15px] space-y-2.5 flex flex-col items-center lg:items-start">
                    <li className="flex items-start gap-2.5 text-center lg:text-left">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#d9a05b] shrink-0"></div>
                      <span className="leading-relaxed">Sẵn sàng tùy chỉnh theo quy trình công tác đặc thù của trường.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-center lg:text-left">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#d9a05b] shrink-0"></div>
                      <span className="leading-relaxed">Đáp ứng đầy đủ các bậc đào tạo và loại hình đào tạo.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Item 6 */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col md:flex-row lg:flex-row items-center lg:items-start gap-6 text-center lg:text-left"
              >
                <div className="shrink-0 relative">
                  <div className="w-24 h-24 bg-[#0ea5e9] rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-xl rounded-br-xl flex items-center justify-center shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
                    <Shield size={40} className="text-white transform -rotate-6" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0056a0] mb-3">Đảm bảo an toàn thông tin</h3>
                  <ul className="text-slate-600 text-[15px] space-y-2.5 flex flex-col items-center lg:items-start">
                    <li className="flex items-start gap-2.5 text-center lg:text-left">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#d9a05b] shrink-0"></div>
                      <span className="leading-relaxed">Tuân thủ nghiêm ngặt các tiêu chuẩn an toàn thông tin.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-center lg:text-left">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#d9a05b] shrink-0"></div>
                      <span className="leading-relaxed">Cơ chế sao lưu, backup cơ sở dữ liệu thường xuyên.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* System Capacity Stats */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-cusc-gold/10 rounded-full blur-3xl animate-pulse"></div>
              <h2 className="text-3xl md:text-4xl font-black text-cusc-blue uppercase tracking-tight mb-8">
                Đồng hành cùng giáo dục
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <Building2 size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-800 mb-2">Gần 30 Trường ĐH/CĐ</h4>
                    <p className="text-slate-500">Hệ thống đã được triển khai và vận hành thành công tại nhiều cơ sở giáo dục Đại học và Cao đẳng trên toàn quốc.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <Award size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-800 mb-2">25+ Năm kinh nghiệm</h4>
                    <p className="text-slate-500">CUSC tự hào với hơn 25 năm kinh nghiệm trong lĩnh vực phát triển phần mềm giáo dục.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="bg-cusc-blue rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                <Server size={28} className="text-cusc-gold" />
                Năng lực vận hành hệ thống
              </h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-black text-cusc-gold mb-2">50.000+</div>
                  <p className="text-blue-100 text-sm font-bold uppercase tracking-widest">Sinh viên</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-black text-cusc-gold mb-2">5.000+</div>
                  <p className="text-blue-100 text-sm font-bold uppercase tracking-widest">Lớp học phần</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-black text-cusc-gold mb-2">2.000+</div>
                  <p className="text-blue-100 text-sm font-bold uppercase tracking-widest">Cán bộ</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-black text-cusc-gold mb-2">24/7</div>
                  <p className="text-blue-100 text-sm font-bold uppercase tracking-widest">Hoạt động</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Certification Banner */}
      <section className="py-8 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="bg-gradient-to-r from-[#ff7a00] to-[#eab308] rounded-3xl p-6 md:p-8 shadow-xl flex flex-col lg:flex-row items-center gap-6 md:gap-8 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            
            {/* Icon */}
            <div className="relative shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 border border-white/30 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-inner">
                <ShieldCheck size={40} className="text-white md:w-12 md:h-12" strokeWidth={2.5} />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#0d47a1] rounded-full border-[3px] border-[#f59e0b] flex items-center justify-center shadow-md">
                <Check size={16} className="text-white" strokeWidth={3} />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left z-10">
              <div className="inline-block px-4 py-1.5 bg-white/20 border border-white/30 rounded-full text-white text-xs font-black uppercase tracking-widest mb-3 backdrop-blur-sm shadow-sm">
                Chứng nhận tin cậy
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight mb-2 drop-shadow-sm">
                Sản phẩm ưu tiên mua sắm
              </h3>
              <p className="text-white/95 text-base md:text-lg font-medium leading-relaxed max-w-4xl drop-shadow-sm">
                CUSC-UIIS tự hào là sản phẩm CNTT đạt tiêu chí <span className="font-bold underline decoration-2 underline-offset-4">ưu tiên đầu tư, thuê, mua sắm</span> trong cơ quan nhà nước theo quy định của <span className="font-bold">Thông tư 40/2020/TT-BTTTT</span>.
              </p>
            </div>

            {/* Action Button */}
            <a 
              href="https://mst.gov.vn/thong-tin-ghi-nhan-viec-cong-bo-san-pham-cntt-dat-tieu-chi-uu-tien-dau-tu-thue-mua-sam-theo-quy-dinh-thong-tu-402020tt-btttt-197152208.htm" 
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/30 rounded-xl text-white font-black uppercase tracking-widest transition-all backdrop-blur-sm flex flex-col items-center justify-center gap-1.5 group shadow-md hover:shadow-lg z-10 min-w-[140px]"
            >
              <ExternalLink size={24} className="group-hover:scale-110 transition-transform group-hover:-translate-y-1" strokeWidth={2} />
              <span className="text-xs mt-1">Xem thêm</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[800px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-cusc-blue uppercase tracking-tight mb-4">Câu hỏi thường gặp</h2>
            <div className="w-24 h-1.5 bg-cusc-gold mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <span className="font-black text-slate-800 flex items-center gap-3">
                    <HelpCircle size={20} className="text-cusc-blue" />
                    {faq.q}
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={`text-slate-400 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} 
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: activeFaq === idx ? 'auto' : 0, opacity: activeFaq === idx ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                    {faq.a}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </div>
  );
}
