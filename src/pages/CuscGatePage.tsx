import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import { Navbar } from '../components/Navbar';
import { Footer, ContactCTA } from '../components/Footer';
import {
  Globe,
  FileText,
  ShieldCheck,
  CreditCard,
  Smartphone,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Users,
  Building2,
  LayoutGrid,
  Database,
  Link as LinkIcon,
  Send,
  BarChart3,
  Search,
  Lock,
  Clock,
  MonitorCheck,
  ArrowRight,
  BookOpen,
  UserCheck,
  Zap,
  Cloud,
  Package
} from 'lucide-react';
import { useState } from 'react';

export default function CuscGatePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const targetUsers = [
    {
      title: 'Cá nhân & Doanh nghiệp',
      desc: 'Thực hiện thủ tục hành chính mọi lúc, mọi nơi. Theo dõi tiến độ, nhận kết quả trực tuyến hoặc qua bưu chính.',
      icon: Users,
      color: 'from-blue-500 to-indigo-600',
      features: ['Đăng ký hồ sơ online', 'Theo dõi tiến độ real-time', 'Thanh toán trực tuyến', 'Nhận kết quả tại nhà']
    },
    {
      title: 'Cán bộ một cửa',
      desc: 'Tiếp nhận, xử lý và trả kết quả hồ sơ điện tử. Tự động hóa quy trình, giảm chi phí hành chính và văn bản giấy.',
      icon: UserCheck,
      color: 'from-emerald-500 to-teal-600',
      features: ['Tiếp nhận hồ sơ tự động', 'Xử lý liên thông', 'Cảnh báo quá hạn', 'Báo cáo thống kê']
    },
    {
      title: 'Lãnh đạo & Quản lý',
      desc: 'Giám sát, đánh giá toàn bộ hoạt động giải quyết TTHC. Dashboard lãnh đạo với dữ liệu real-time phục vụ ra quyết định.',
      icon: Building2,
      color: 'from-amber-500 to-orange-600',
      features: ['Dashboard lãnh đạo', 'Báo cáo real-time', 'Đánh giá chỉ số', 'Cảnh báo tự động']
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Đăng ký & Nộp hồ sơ',
      desc: 'Người dùng tra cứu TTHC, điền thông tin và nộp hồ sơ trực tuyến qua website hoặc ứng dụng di động.',
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-500'
    },
    {
      step: 2,
      title: 'Ký số & Thanh toán',
      desc: 'Xác thực hồ sơ bằng chữ ký số đa nền tảng, thanh toán phí/lệ phí trực tuyến hoặc chọn dịch vụ bưu chính.',
      icon: ShieldCheck,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-500'
    },
    {
      step: 3,
      title: 'Tiếp nhận & Xử lý',
      desc: 'Cơ quan nhà nước tiếp nhận, xử lý hồ sơ, cập nhật trạng thái và thời gian thực lên hệ thống.',
      icon: MonitorCheck,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-500'
    },
    {
      step: 4,
      title: 'Đồng bộ & Liên thông',
      desc: 'Dữ liệu được đẩy tự động lên Cổng DVCQG và các hệ thống chuyên ngành liên quan, đảm bảo liên thông.',
      icon: LinkIcon,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-500'
    },
    {
      step: 5,
      title: 'Trả kết quả',
      desc: 'Kết quả được thông báo, tải xuống trực tuyến hoặc chuyển phát qua bưu chính công ích. Dữ liệu lưu kho để tái sử dụng.',
      icon: CheckCircle2,
      color: 'text-cusc-blue',
      bgColor: 'bg-blue-50',
      borderColor: 'border-cusc-blue'
    }
  ];

  const modules = [
    {
      name: 'Cổng tra cứu & tiếp nhận hồ sơ',
      desc: 'Giao diện web và mobile app cho phép người dùng tra cứu, đăng ký và theo dõi TTHC.',
      icon: Globe
    },
    {
      name: 'Quản lý & xử lý hồ sơ điện tử',
      desc: 'Tiếp nhận, phân loại, luân chuyển và xử lý hồ sơ theo quy trình một cửa liên thông.',
      icon: FileText
    },
    {
      name: 'Đồng bộ & liên thông DVCQG',
      desc: 'Tích hợp với Cổng dịch vụ công quốc gia, tự động đồng bộ dữ liệu, tiến độ và kết quả.',
      icon: LinkIcon
    },
    {
      name: 'Thanh toán trực tuyến',
      desc: 'Tích hợp Payment Platform, Paygov và các nền tảng thanh toán phí, lệ phí điện tử.',
      icon: CreditCard
    },
    {
      name: 'Chữ ký số & xác thực',
      desc: 'Hỗ trợ đa nền tảng: Token, SIM, VGCA, eSign Viettel, VNPT, FPT, BKAV, MISA.',
      icon: ShieldCheck
    },
    {
      name: 'Dịch vụ bưu chính công ích',
      desc: 'Tích hợp nhận và trả kết quả hồ sơ tại nhà qua dịch vụ bưu chính công ích.',
      icon: Send
    },
    {
      name: 'Khảo sát & đánh giá',
      desc: 'Thu thập ý kiến phản hồi, đánh giá mức độ hài lòng của người dùng về chất lượng dịch vụ.',
      icon: BarChart3
    }
  ];

  const features = [
    {
      title: 'Đồng bộ TTHC dùng chung',
      desc: 'Tích hợp và đồng bộ bộ thủ tục hành chính với Cổng dịch vụ công quốc gia, minh bạch trình tự và hồ sơ.',
      icon: Database,
      color: 'text-cusc-blue'
    },
    {
      title: 'Kho dữ liệu số hóa',
      desc: 'Lưu trữ điện tử cá nhân/tổ chức đồng bộ với Kho quốc gia, cho phép trích lục, tìm kiếm và tái sử dụng.',
      icon: Cloud,
      color: 'text-emerald-600'
    },
    {
      title: 'Tracking real-time',
      desc: 'Theo dõi tiến độ xử lý hồ sơ theo thời gian thực, cảnh báo tự động khi sắp quá hạn.',
      icon: Clock,
      color: 'text-amber-600'
    },
    {
      title: 'API mở liên thông',
      desc: 'Hệ thống API cho phép tích hợp dễ dàng với các hệ thống chuyên ngành, CSDL ngành.',
      icon: LinkIcon,
      color: 'text-purple-600'
    },
    {
      title: 'Ứng dụng di động',
      desc: 'Hỗ trợ đầy đủ trên nền tảng Android và iOS, thực hiện thủ tục mọi lúc, mọi nơi.',
      icon: Smartphone,
      color: 'text-blue-600'
    },
    {
      title: 'Báo cáo BI thông minh',
      desc: 'Dashboard lãnh đạo với thống kê, biểu đồ và dự báo xu hướng phục vụ ra quyết định.',
      icon: BarChart3,
      color: 'text-red-600'
    },
    {
      title: 'Chữ ký số đa nền tảng',
      desc: 'Hỗ trợ tất cả nhà cung cấp CKS: Token, SIM, Viettel, VNPT, FPT, BKAV, MISA.',
      icon: Lock,
      color: 'text-indigo-600'
    },
    {
      title: 'Tuân thủ chuẩn Chính phủ',
      desc: 'Đáp ứng Thông tư 22/2019, Nghị định 107/2021, QĐ 766 về đánh giá thời gian thực.',
      icon: ShieldCheck,
      color: 'text-teal-600'
    }
  ];

  const faqs = [
    {
      q: 'C-GATE tuân thủ những quy định pháp lý nào?',
      a: 'C-GATE tuân thủ đầy đủ khung pháp lý của Chính phủ và Bộ TT&TT (2019-2022), bao gồm Thông tư 22/2019/TT-BTTTT, Nghị định 107/2021/NĐ-CP và QĐ 766/QĐ-TTg. Hệ thống đảm bảo kết nối liên thông với Cổng dịch vụ công quốc gia.'
    },
    {
      q: 'Hệ thống có hỗ trợ chữ ký số nào?',
      a: 'C-GATE hỗ trợ đa dạng chữ ký số bao gồm: Token, SIM, VGCA, eSign Viettel, VNPT, FPT, BKAV, MISA. Người dùng có thể lựa chọn nhà cung cấp phù hợp nhất.'
    },
    {
      q: 'Cổng dịch vụ công quốc gia được liên thông như thế nào?',
      a: 'Hệ thống tự động đồng bộ hóa bộ TTHC dùng chung, tiến độ xử lý, thống kê báo cáo, khảo sát ý kiến, thông tin bưu chính và thanh toán với Cổng dịch vụ công quốc gia qua API chuẩn.'
    },
    {
      q: 'Thời gian triển khai C-GATE là bao lâu?',
      a: 'Tùy theo quy mô và yêu cầu tích hợp của cơ quan, thời gian triển khai thường từ 3-6 tháng bao gồm cấu hình, tích hợp hệ thống, tập huấn và chuyển giao.'
    },
    {
      q: 'Người dân có thể thực hiện thủ tục trên điện thoại không?',
      a: 'Có, C-GATE cung cấp ứng dụng di động trên cả hai nền tảng Android và iOS, cho phép người dùng tra cứu, đăng ký, theo dõi tiến độ và nhận kết quả mọi lúc, mọi nơi.'
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-cusc-blue selection:text-white bg-slate-50">
      <SEO
        title="C-GATE - Hệ thống TTGQ TTHC | Cổng thông tin một cửa liên thông"
        description="Giải pháp một cửa liên thông giải quyết thủ tục hành chính. Tích hợp DVCQG, chữ ký số đa nền tảng, thanh toán trực tuyến. CUSC C-GATE."
        keywords="C-GATE, hệ thống một cửa, giải quyết thủ tục hành chính, TTHC, dịch vụ công quốc gia, DVCQG, chữ ký số, thanh toán trực tuyến, CUSC"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-cusc-blue text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1920&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-cusc-gold/20 text-cusc-gold px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm mb-6 border border-cusc-gold/30">
                <Globe size={18} />
                Chính quyền và doanh nghiệp
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight tracking-tight drop-shadow-lg">
                C-GATE <br/>
                <span className="text-cusc-gold text-3xl md:text-5xl">Hệ thống thông tin giải quyết TTHC</span>
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
                Giải pháp một cửa liên thông toàn diện, hiện thực hóa Đề án 468/QĐ-TTg. Kết nối liên thông Cổng DVCQG, chữ ký số đa nền tảng, thanh toán trực tuyến — kiến tạo chính quyền số.
              </p>
              <div className="flex gap-4">
                <a
                  href="tel:02923731072"
                  className="bg-cusc-gold text-slate-900 px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-yellow-400 transition-all hover:scale-105 shadow-lg"
                >
                  Yêu cầu Demo
                </a>
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
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop"
                  alt="Hệ thống thông tin giải quyết thủ tục hành chính C-GATE"
                  className="rounded-xl aspect-[16/10] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-6 -right-6 bg-white text-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-black text-xl">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Tuân thủ</p>
                  <p className="text-sm font-black">QĐ 468/QĐ-TTg</p>
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
              Giới thiệu C-GATE
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
                  <span className="text-cusc-gold">C-GATE</span> là giải pháp một cửa liên thông được CUSC phát triển, giúp hiện thực hóa Đề án 468/QĐ-TTg về đổi mới cơ chế giải quyết thủ tục hành chính, hướng tới Chính phủ số.
                </p>
              </div>

              {/* Feature List */}
              <div className="space-y-4">
                {[
                  {
                    icon: LinkIcon,
                    text: 'Liên thông dữ liệu với Cổng DVCQG, Bộ/ngành và hệ thống chuyên ngành',
                    color: 'text-blue-600'
                  },
                  {
                    icon: ShieldCheck,
                    text: 'Hỗ trợ chữ ký số đa nền tảng: Token, SIM, Viettel, VNPT, FPT, BKAV, MISA',
                    color: 'text-emerald-600'
                  },
                  {
                    icon: CreditCard,
                    text: 'Tích hợp thanh toán trực tuyến phí/lệ phí qua Payment Platform, Paygov',
                    color: 'text-amber-600'
                  },
                  {
                    icon: Smartphone,
                    text: 'Ứng dụng di động Android & iOS — thực hiện thủ tục mọi lúc, mọi nơi',
                    color: 'text-purple-600'
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-50 p-5 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="shrink-0 w-10 h-10 flex items-center justify-center">
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
                  src="https://images.unsplash.com/photo-1507208773393-4027fc1f7e8e?q=80&w=1920&auto=format&fit=crop"
                  alt="Cổng thông tin dịch vụ công trực tuyến"
                  className="w-full h-full object-cover rounded-[2.5rem]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-cusc-gold rounded-2xl -z-10 animate-pulse"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-cusc-blue uppercase tracking-tight mb-2">
              Đối tượng sử dụng
            </h2>
            <div className="w-24 h-1.5 bg-cusc-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targetUsers.map((user, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${user.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                  <user.icon size={32} />
                </div>
                <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight mb-3">{user.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{user.desc}</p>
                <div className="space-y-3">
                  {user.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <div className="w-5 h-5 bg-cusc-gold/20 rounded-full flex items-center justify-center">
                        <CheckCircle2 size={12} className="text-cusc-gold" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-cusc-blue uppercase tracking-tight mb-2">
              Quy trình giải quyết TTHC
            </h2>
            <div className="w-24 h-1.5 bg-cusc-gold mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-2 xl:gap-4 relative pt-8 lg:pt-16 pb-8">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex-1 drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 ${
                  idx % 2 === 0 ? 'lg:mt-16' : 'lg:mt-8'
                } relative z-${idx + 10}`}
              >
                <div className={`${step.bgColor} h-full p-8 ${
                  idx < processSteps.length - 1
                    ? 'lg:pr-12 rounded-2xl lg:rounded-none lg:[clip-path:polygon(0%_0%,_90%_0%,_100%_50%,_90%_100%,_0%_100%)]'
                    : 'rounded-2xl'
                } ${idx === 0 ? 'lg:pl-8' : 'lg:pl-12'} ${step.borderColor} border-t-8 flex flex-col items-center text-center group`}>
                  <div className={`w-20 h-20 mb-6 ${step.color} ${step.bgColor} rounded-full p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <step.icon className="w-full h-full" strokeWidth={1.5} />
                  </div>
                  <div className={`text-sm font-black ${step.color} mb-2 uppercase tracking-wider`}>BƯỚC {step.step}</div>
                  <h3 className={`text-xl font-bold ${step.color} mb-4`}>{step.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-cusc-blue uppercase tracking-tight mb-2">
              Phân hệ chính
            </h2>
            <div className="w-24 h-1.5 bg-cusc-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modules.map((mod, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-cusc-blue/10 rounded-xl flex items-center justify-center text-cusc-blue mb-4 group-hover:bg-cusc-blue group-hover:text-white transition-all duration-300 shadow-sm">
                  <mod.icon size={28} />
                </div>
                <h3 className="text-base font-black text-slate-800 uppercase tracking-tight mb-2 leading-tight">{mod.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{mod.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-cusc-blue uppercase tracking-tight mb-2">
              Tính năng nổi bật
            </h2>
            <div className="w-24 h-1.5 bg-cusc-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center ${feat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feat.icon size={28} />
                </div>
                <h3 className="text-base font-black text-slate-800 mb-2 leading-tight">{feat.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-cusc-blue uppercase tracking-tight mb-2">
              Lợi ích mang lại
            </h2>
            <div className="w-24 h-1.5 bg-cusc-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white shadow-xl"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4">Người dùng</h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start gap-2 text-sm"><ArrowRight size={16} className="shrink-0 mt-0.5" />Giảm thời gian chờ đợi, chi phí đi lại</li>
                <li className="flex items-start gap-2 text-sm"><ArrowRight size={16} className="shrink-0 mt-0.5" />Thực hiện thủ tục mọi lúc, mọi nơi</li>
                <li className="flex items-start gap-2 text-sm"><ArrowRight size={16} className="shrink-0 mt-0.5" />Tiếp cận & giám sát tiến độ dễ dàng</li>
                <li className="flex items-start gap-2 text-sm"><ArrowRight size={16} className="shrink-0 mt-0.5" />Không phụ thuộc địa giới hành chính</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white shadow-xl"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Building2 size={28} />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4">Cơ quan quản lý</h3>
              <ul className="space-y-3 text-emerald-100">
                <li className="flex items-start gap-2 text-sm"><ArrowRight size={16} className="shrink-0 mt-0.5" />Tăng năng suất cán bộ/công chức</li>
                <li className="flex items-start gap-2 text-sm"><ArrowRight size={16} className="shrink-0 mt-0.5" />Tự động hóa quy trình, xử lý nhanh</li>
                <li className="flex items-start gap-2 text-sm"><ArrowRight size={16} className="shrink-0 mt-0.5" />Giảm chi phí hành chính & văn bản giấy</li>
                <li className="flex items-start gap-2 text-sm"><ArrowRight size={16} className="shrink-0 mt-0.5" />Dữ liệu lớn phục vụ AI/ML & ra quyết định</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-white shadow-xl"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Globe size={28} />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4">Xã hội</h3>
              <ul className="space-y-3 text-amber-100">
                <li className="flex items-start gap-2 text-sm"><ArrowRight size={16} className="shrink-0 mt-0.5" />Nâng cao chỉ số cạnh tranh PCI</li>
                <li className="flex items-start gap-2 text-sm"><ArrowRight size={16} className="shrink-0 mt-0.5" />Tăng tính minh bạch, tin cậy chính quyền</li>
                <li className="flex items-start gap-2 text-sm"><ArrowRight size={16} className="shrink-0 mt-0.5" />Thúc đẩy công dân/doanh nghiệp số</li>
                <li className="flex items-start gap-2 text-sm"><ArrowRight size={16} className="shrink-0 mt-0.5" />Hội nhập quốc tế hiệu quả</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[900px] mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-cusc-blue uppercase tracking-tight mb-2">
              Câu hỏi thường gặp
            </h2>
            <div className="w-24 h-1.5 bg-cusc-gold mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-cusc-blue/10 rounded-lg flex items-center justify-center text-cusc-blue shrink-0">
                      <HelpCircle size={20} />
                    </div>
                    <h3 className="text-base font-bold text-slate-800 leading-tight pr-4">{faq.q}</h3>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-slate-400 shrink-0 transition-transform duration-300 ${
                      activeFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100">
                        <div className="pt-4 pl-14">{faq.a}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-cusc-blue to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-[1000px] mx-auto px-4 relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-white/20">
            <Package size={16} />
            Liên hệ tư vấn
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight drop-shadow-lg">
            Triển khai C-GATE cho cơ quan của bạn
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Liên hệ chuyên viên tư vấn để được hỗ trợ cấu hình, tích hợp và triển khai hệ thống phù hợp quy mô đơn vị.
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-lg mx-auto border border-white/20">
            <div className="text-left space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cusc-gold/20 rounded-lg flex items-center justify-center text-cusc-gold shrink-0">
                  <UserCheck size={20} />
                </div>
                <div>
                  <p className="text-xs text-blue-200 uppercase tracking-wider">Chuyên viên tư vấn</p>
                  <p className="text-lg font-bold">Nguyễn Thanh Nhàn</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cusc-gold/20 rounded-lg flex items-center justify-center text-cusc-gold shrink-0">
                  <Zap size={20} />
                </div>
                <div>
                  <p className="text-xs text-blue-200 uppercase tracking-wider">Di động</p>
                  <a href="tel:0939511445" className="text-white font-bold hover:text-cusc-gold transition-colors">0939 511 445</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cusc-gold/20 rounded-lg flex items-center justify-center text-cusc-gold shrink-0">
                  <CreditCard size={20} />
                </div>
                <div>
                  <p className="text-xs text-blue-200 uppercase tracking-wider">Điện thoại</p>
                  <a href="tel:02923731072" className="text-white font-bold hover:text-cusc-gold transition-colors">0292 3731072 (ext.515)</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cusc-gold/20 rounded-lg flex items-center justify-center text-cusc-gold shrink-0">
                  <Send size={20} />
                </div>
                <div>
                  <p className="text-xs text-blue-200 uppercase tracking-wider">Email</p>
                  <a href="mailto:nhannguyen@ctu.edu.vn" className="text-white font-bold hover:text-cusc-gold transition-colors">nhannguyen@ctu.edu.vn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </div>
  );
}
