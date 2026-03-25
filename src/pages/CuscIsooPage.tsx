import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import { Navbar } from '../components/Navbar';
import { Footer, ContactCTA } from '../components/Footer';
import { FileCheck, ShieldCheck, Zap, BarChart3, Users, CheckCircle2, ClipboardList, Settings, Search, HelpCircle, ChevronDown, Clock, DollarSign, AlertTriangle, Lightbulb, Check, CreditCard, Info, FolderPlus, Shield, Share2, Boxes, Building2, User, Server, RefreshCw, ArrowRightLeft, Workflow, LayoutGrid, Database, Building, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function CuscIsooPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const showcaseImages = [
    { url: new URL('../assets/images/cusc-isoo_home.jpg', import.meta.url).href, title: "Tổng quan hệ thống Dashboard" },
    { url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000", title: "Quản lý quy trình ISO" },
    { url: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=2000", title: "Báo cáo thống kê chi tiết" },
    { url: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000", title: "Thiết lập quy trình động" },
    { url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=2000", title: "Tra cứu hồ sơ thông minh" },
    { url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000", title: "Phân quyền & Bảo mật" },
  ];

  const features = [
    { 
      icon: CreditCard, 
      title: "Số hóa HTQLCL ISO 9001:2015", 
      desc: "Triển khai hoàn thiện hệ thống chính quyền điện tử tại cơ quan, đơn vị. Thay thế hoàn toàn quy trình giấy tờ truyền thống.",
      color: "bg-blue-600"
    },
    { 
      icon: Info, 
      title: "Trang thông tin ISO", 
      desc: "Cung cấp tài liệu nhận thức, hướng dẫn về ISO và thao tác trên hệ thống một cách trực quan.",
      color: "bg-orange-500"
    },
    { 
      icon: FolderPlus, 
      title: "Xây dựng hồ sơ thông minh", 
      desc: "Hỗ trợ HTQLCL năm mới bằng cách tái sử dụng hồ sơ năm trước, tiết kiệm thời gian và công sức.",
      color: "bg-slate-600"
    },
    { 
      icon: Shield, 
      title: "Kiểm soát tài liệu", 
      desc: "Trích xuất các hồ sơ phục vụ cho việc đánh giá nội bộ, kiểm tra giám sát, lưu trữ một cách chính xác.",
      color: "bg-blue-600"
    },
    { 
      icon: Share2, 
      title: "Quy trình động", 
      desc: "Cấu hình kéo thả trực quan, tùy chỉnh quy trình theo đặc thù của từng cơ quan, đơn vị.",
      color: "bg-orange-500"
    },
    { 
      icon: Boxes, 
      title: "Kiến trúc Microservice", 
      desc: "Sử dụng công nghệ hiện đại, tích hợp dễ dàng với các hệ thống khác, đảm bảo tính ổn định cao.",
      color: "bg-slate-600"
    }
  ];

  const challenges = [
    {
      icon: Clock,
      title: "Tốn thời gian",
      desc: "Quy trình thủ công mất nhiều thời thực hiện, kiểm soát tài liệu phức tạp, theo dõi tiến độ khó khăn phải đến tận cơ sở",
      color: "bg-slate-600"
    },
    {
      icon: DollarSign,
      title: "Chi phí cao",
      desc: "In ấn, lưu trữ giấy tờ, nhân lực quản lý tài liệu, chi phí duy trì hệ thống hàng năm tốn kém",
      color: "bg-orange-500"
    },
    {
      icon: AlertTriangle,
      title: "Rủi ro mất mát",
      desc: "Tài liệu giấy dễ thất lạc, hư hỏng, thông tin không đồng bộ giữa các bộ phận",
      color: "bg-blue-600"
    }
  ];

  const steps = [
    { icon: Search, title: "Khảo sát & Phân tích", desc: "Đánh giá hiện trạng quy trình ISO và nhu cầu số hóa của đơn vị." },
    { icon: Settings, title: "Thiết lập hệ thống", desc: "Cấu hình danh mục, quy trình, biểu mẫu và phân quyền người dùng." },
    { icon: ClipboardList, title: "Đào tạo & Chuyển giao", desc: "Hướng dẫn sử dụng cho quản trị viên và người dùng cuối." },
    { icon: CheckCircle2, title: "Vận hành chính thức", desc: "Hỗ trợ đơn vị đưa hệ thống vào sử dụng thực tế và đánh giá hiệu quả." },
  ];

  const faqs = [
    { q: "CUSC-ISOO có hỗ trợ các tiêu chuẩn ISO nào?", a: "Hệ thống được thiết kế linh hoạt để hỗ trợ đa dạng các tiêu chuẩn như ISO 9001, ISO 14001, ISO 27001, ISO 45001 và các tiêu chuẩn quản lý chất lượng đặc thù khác." },
    { q: "Dữ liệu trên hệ thống có được bảo mật không?", a: "CUSC-ISOO áp dụng các tiêu chuẩn bảo mật cao nhất, mã hóa dữ liệu truyền tải và lưu trữ, cùng hệ thống phân quyền đa lớp đảm bảo an toàn tuyệt đối." },
    { q: "Phần mềm có thể tích hợp với các hệ thống khác không?", a: "Có, CUSC-ISOO cung cấp API mở để tích hợp với các hệ thống ERP, HRM, E-Office hiện có của doanh nghiệp." },
    { q: "Thời gian triển khai trung bình là bao lâu?", a: "Tùy thuộc vào quy mô và độ phức tạp của quy trình, thời gian triển khai trung bình từ 4-8 tuần." },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-cusc-blue selection:text-white bg-slate-50">
      <SEO
        title="CUSC-ISOO - Phần mềm ISO điện tử | Quản lý chất lượng ISO 9001:2015"
        description="Phần mềm ISO điện tử CUSC-ISOO: Số hóa quy trình ISO, quản lý hồ sơ thông minh, kiểm soát tài liệu, quy trình động. Giải pháp ISO 9001:2015 cho cơ quan, trường học."
        keywords="CUSC-ISOO, ISO điện tử, phần mềm ISO 9001:2015, quản lý chất lượng, kiểm soát tài liệu, quy trình động, ISO điện tử đại học, số hóa ISO"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-cusc-blue text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-cusc-gold/20 text-cusc-gold px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm mb-6 border border-cusc-gold/30">
                <FileCheck size={18} />
                Giải pháp Chính quyền & Doanh nghiệp
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-lg">
                CUSC-ISOO <br/>
                <span className="text-cusc-gold text-3xl md:text-5xl">Phần mềm ISO điện tử</span>
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
                Giải pháp số hóa toàn diện quy trình quản lý chất lượng theo tiêu chuẩn TCVN ISO 9001. Giúp cơ quan, đơn vị tối ưu hóa vận hành, tiết kiệm thời gian và nâng cao hiệu quả công việc.
              </p>
              <div className="flex gap-4">
                <button className="bg-cusc-gold text-slate-900 px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-yellow-400 transition-all hover:scale-105 shadow-lg">
                  Đăng ký dùng thử
                </button>
                <button className="bg-white/10 text-white border border-white/30 px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white/20 transition-all backdrop-blur-sm">
                  Tải Brochure
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
              <img
                src={new URL('../assets/images/cusc-isoo_home.jpg', import.meta.url).href}
                alt="Giao diện Dashboard phần mềm ISO điện tử CUSC-ISOO"
                className="relative rounded-2xl shadow-2xl border border-white/10 aspect-[16/10] object-cover"
              />
              
              {/* Floating feature cards */}
              <div className="absolute -bottom-6 -left-6 bg-white text-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Bảo mật</p>
                  <p className="text-sm font-black">An toàn dữ liệu</p>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white text-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <div className="w-10 h-10 bg-blue-100 text-cusc-blue rounded-full flex items-center justify-center">
                  <Zap size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Hiệu suất</p>
                  <p className="text-sm font-black">Tối ưu quy trình</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(27,75,163,0.03),transparent_50%)]"></div>
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-black text-cusc-blue uppercase tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
                Thách thức trong triển khai Hệ thống Quản lý Chất lượng theo TCVN ISO 9001:2015 thủ công
              </h2>
              <div className="w-16 h-1 bg-cusc-gold mx-auto rounded-full"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-100 rounded-[3rem] overflow-hidden shadow-2xl">
            {challenges.map((challenge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className={`p-12 flex flex-col items-center text-center group transition-all duration-500 ${
                  idx !== challenges.length - 1 ? 'border-b md:border-b-0 md:border-r border-slate-100' : ''
                } hover:bg-slate-50`}
              >
                <div className="relative mb-10">
                  <div className={`absolute inset-0 ${challenge.color} opacity-10 blur-2xl rounded-full group-hover:opacity-20 transition-opacity`}></div>
                  <div className={`w-20 h-20 ${challenge.color} text-white rounded-[2rem] flex items-center justify-center relative z-10 shadow-xl group-hover:rotate-6 transition-transform duration-500`}>
                    <challenge.icon size={36} />
                  </div>
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-300 font-black text-xl shadow-sm border border-slate-50">
                    0{idx + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-6 uppercase tracking-tight group-hover:text-cusc-blue transition-colors">
                  {challenge.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-base">
                  {challenge.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Solution Section */}
      <section className="py-24 bg-slate-50/50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/10 -skew-x-12 translate-x-1/4"></div>
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-cusc-blue uppercase tracking-tight mb-6">
                Giải pháp toàn diện
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Hệ thống Quản lý Chất lượng - ISO điện tử theo TCVN ISO 9001:2015 được thiết kế phục vụ thực hiện Chính quyền số
              </p>
              
              <div className="space-y-6">
                {[
                  "Số hóa hoàn toàn quy trình ISO 9001:2015",
                  "Tích hợp liền mạch với hệ thống chính quyền điện tử",
                  "Giao diện thân thiện, dễ sử dụng",
                  "Kiến trúc Microservice hiện đại",
                  "Đảm bảo cấp độ bảo mật ATTT theo quy định Nhà nước"
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 size={16} />
                    </div>
                    <p className="text-slate-700 font-medium text-lg">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Browser Mockup */}
              <div className="relative z-10 bg-white rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border border-slate-200 overflow-hidden">
                <div className="bg-slate-800 p-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-grow mx-4 bg-slate-700 rounded-md py-1 px-3 text-[10px] text-slate-400 font-mono">
                    isov2.cusc.vn
                  </div>
                </div>
                <div className="p-1 bg-slate-100">
                   <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
                    alt="Giao diện phần mềm quản lý ISO điện tử CUSC-ISOO"
                    className="w-full rounded-lg shadow-inner aspect-[16/10] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-2xl animate-pulse z-20">
                <BarChart3 size={48} />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cusc-blue rounded-2xl shadow-2xl z-0 rotate-12" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Priority Procurement Product Section */}
      <section className="py-12 bg-slate-50/50">
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-500 to-cusc-gold rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-2xl relative overflow-hidden group text-white"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            
            <div className="relative shrink-0">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl rotate-3 group-hover:rotate-0 transition-transform duration-500 border border-white/30">
                <ShieldCheck size={48} className="text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-cusc-blue rounded-full flex items-center justify-center text-white border-4 border-white shadow-lg">
                <Check size={20} strokeWidth={4} />
              </div>
            </div>
 
            <div className="flex-grow text-center md:text-left">
              <div className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 backdrop-blur-sm border border-white/20">
                Chứng nhận tin cậy
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">
                Sản phẩm ưu tiên mua sắm
              </h3>
              <p className="text-orange-50 text-lg leading-relaxed max-w-3xl">
                CUSC-ISOO tự hào là sản phẩm CNTT đạt tiêu chí <span className="font-black underline decoration-white/50 underline-offset-4">ưu tiên đầu tư, thuê, mua sắm</span> trong cơ quan nhà nước theo quy định của <span className="font-bold">Thông tư 40/2020/TT-BTTTT</span>.
              </p>
            </div>
 
            <div className="shrink-0">
              <a 
                href="https://mst.gov.vn/thong-tin-ghi-nhan-viec-cong-bo-san-pham-cntt-dat-tieu-chi-uu-tien-dau-tu-thue-mua-sam-theo-quy-dinh-thong-tu-402020tt-btttt-197152208.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 border border-white/30 rounded-2xl px-8 py-5 flex flex-col items-center justify-center gap-2 transition-all backdrop-blur-sm group/btn shadow-xl"
              >
                <ExternalLink size={28} className="text-white group-hover/btn:scale-110 transition-transform" />
                <span className="text-white text-sm font-black uppercase tracking-widest">Xem thêm</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Electronic ISO System Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-cusc-blue uppercase tracking-tight mb-4">
              Mô hình hệ thống
            </h2>
            <div className="w-24 h-1.5 bg-cusc-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
            {/* Column 1: Participants */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-lg font-black text-cusc-blue mb-6 flex items-center gap-2">
                <Users size={20} />
                Đối tượng tham gia
              </h3>
              {[
                { icon: Building2, label: "Ban Chỉ đạo ISO" },
                { icon: Building, label: "Sở Ban ngành" },
                { icon: Building2, label: "UBND Xã/Phường" },
                { icon: Building, label: "Đơn vị sự nghiệp" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-cusc-blue/10 text-cusc-blue rounded-lg flex items-center justify-center">
                    <item.icon size={20} />
                  </div>
                  <span className="font-bold text-slate-700 text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Column 2: Central System */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-cusc-blue rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                <div className="text-center mb-10">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
                    <Settings size={32} />
                  </div>
                  <h3 className="text-2xl font-black mb-2">ISO điện tử</h3>
                  <p className="text-blue-200 text-sm">Hệ thống trung tâm</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: User, label: "Lãnh đạo", sub: "Phân công/Phê duyệt" },
                    { icon: User, label: "Thư ký ISO", sub: "Quản lý HTQLCL" },
                    { icon: Users, label: "CB Quản lý", sub: "Quản lý hệ thống" },
                    { icon: FileCheck, label: "Cán bộ Kiểm soát", sub: "Tài liệu/Hồ sơ" }
                  ].map((role, idx) => (
                    <div key={idx} className="bg-white/10 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
                      <role.icon size={20} className="text-cusc-gold mb-2" />
                      <h4 className="font-bold text-sm">{role.label}</h4>
                      <p className="text-[10px] text-blue-200">{role.sub}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Column 3: Infrastructure */}
            <div className="lg:col-span-4 space-y-6">
              <h3 className="text-lg font-black text-cusc-blue mb-6 flex items-center gap-2">
                <LayoutGrid size={20} className="text-orange-500" />
                Hạ tầng kỹ thuật
              </h3>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-orange-500 rounded-2xl p-6 text-white shadow-xl relative group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <CreditCard size={24} />
                  </div>
                  <div>
                    <h4 className="font-black">Một cửa điện tử</h4>
                    <p className="text-xs text-orange-100">Hệ thống tích hợp</p>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg py-2 px-4 flex items-center justify-center gap-2 text-xs font-bold">
                  <ArrowRightLeft size={14} />
                  Liên thông dữ liệu
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center">
                    <Database size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-800">Web Server</h4>
                    <p className="text-xs text-slate-400">& Database</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-blue-50 text-cusc-blue rounded-lg py-2 px-4 flex items-center justify-center gap-2 text-[10px] font-bold">
                    <Search size={12} />
                    Truy xuất dữ liệu
                  </div>
                  <div className="bg-orange-50 text-orange-600 rounded-lg py-2 px-4 flex items-center justify-center gap-2 text-[10px] font-bold">
                    <RefreshCw size={12} />
                    Đồng bộ hóa
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* Software Showcase Section */}
      <section className="py-8 bg-slate-50 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-orange-500 rounded-full" />
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Giao diện <span className="text-orange-500">CUSC-ISOO</span>
              </h2>
            </div>
            <p className="hidden md:block text-slate-500 text-xs font-medium max-w-[300px] text-right">
              Hệ thống quản lý trực quan, hiện đại, tối ưu hóa mọi thao tác nghiệp vụ ISO.
            </p>
          </div>

          <div className="relative group">
            <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
              {showcaseImages.map((img, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setSelectedImage(idx)}
                  className="relative flex-none w-[280px] md:w-[400px] aspect-video group cursor-pointer overflow-hidden rounded-xl shadow-md snap-start bg-slate-200 border border-slate-200"
                >
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <p className="text-white font-bold text-sm leading-tight">{img.title}</p>
                    <div className="flex items-center gap-1 text-white/70 text-[10px] mt-1 font-bold uppercase tracking-wider">
                      <Search size={10} /> Xem chi tiết
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Scroll indicators/hints */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-lg text-slate-800">
                <ChevronLeft size={20} />
              </div>
              <div className="w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-lg text-slate-800">
                <ChevronRight size={20} />
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
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110] p-2 hover:bg-white/10 rounded-full"
            >
              <X size={32} />
            </button>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev !== null ? (prev - 1 + showcaseImages.length) % showcaseImages.length : null));
              }}
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] p-4 hover:bg-white/10 rounded-full hidden md:block"
            >
              <ChevronLeft size={48} />
            </button>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev !== null ? (prev + 1) % showcaseImages.length : null));
              }}
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] p-4 hover:bg-white/10 rounded-full hidden md:block"
            >
              <ChevronRight size={48} />
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
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <h3 className="text-white text-2xl md:text-4xl font-black tracking-tight">{showcaseImages[selectedImage].title}</h3>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-white/60 font-medium">Hình ảnh {selectedImage + 1} / {showcaseImages.length}</p>
                  <div className="flex gap-4 md:hidden">
                    <button 
                      onClick={() => setSelectedImage((prev) => (prev !== null ? (prev - 1 + showcaseImages.length) % showcaseImages.length : null))}
                      className="text-white p-2 bg-white/10 rounded-full"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={() => setSelectedImage((prev) => (prev !== null ? (prev + 1) % showcaseImages.length : null))}
                      className="text-white p-2 bg-white/10 rounded-full"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Features Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-cusc-blue uppercase tracking-tight mb-4">Tính năng nổi bật</h2>
            <div className="w-24 h-1.5 bg-cusc-gold mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all group"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-2xl shadow-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-black text-slate-800 mb-3 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.1),transparent_50%)]"></div>
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">Quy trình triển khai</h2>
            <div className="w-24 h-1.5 bg-cusc-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-cusc-gold/50 to-transparent z-0"></div>
                )}
                <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center mb-6 relative z-10 backdrop-blur-md border border-white/10 group-hover:bg-cusc-gold group-hover:text-slate-900 transition-all duration-500">
                  <step.icon size={40} />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-cusc-gold text-slate-900 rounded-full flex items-center justify-center font-black text-sm border-4 border-slate-900">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="text-xl font-black mb-3 text-cusc-gold uppercase tracking-tight">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical Customers */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-cusc-blue uppercase tracking-tight mb-4">Khách hàng tiêu biểu</h2>
            <div className="w-24 h-1.5 bg-cusc-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              "Thành phố Cần Thơ",
              "Tỉnh Cà Mau",
              "Tỉnh Trà Vinh",
              "Tỉnh Bình Thuận",
              "Tỉnh Gia Lai",
              "Tỉnh Quảng Trị",
              "Tỉnh Ninh Bình",
              "Tỉnh Quảng Ninh"
            ].map((name, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex justify-center p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md hover:border-cusc-blue/20 transition-all group"
              >
                <span className="text-slate-400 font-black text-center group-hover:text-cusc-blue transition-colors uppercase tracking-tighter text-sm">
                  {name}
                </span>
              </motion.div>
            ))}
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
