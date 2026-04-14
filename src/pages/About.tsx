import React from 'react';
import { motion } from 'motion/react';
import { Award, Target, Eye, ShieldCheck, History, Heart, Zap, TrendingUp, RefreshCw, Code, GraduationCap, Lightbulb, CheckCircle2, Phone, Mail, Handshake } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Giới thiệu về CUSC - 25+ năm phát triển phần mềm"
        description="Trung tâm Công nghệ Phần mềm Đại học Cần Thơ thành lập 2001. ISO 9001:2015, ISO 27001:2022. Tiên phong chuyển đổi số, phát triển phần mềm và đào tạo nhân lực CNTT."
        keywords="giới thiệu CUSC, trung tâm phần mềm đại học cần thơ, ISO 9001:2015, ISO 27001:2022, phát triển phần mềm, đào tạo CNTT, chuyển đổi số"
      />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[250px] md:h-[500px] bg-slate-900 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={new URL('../assets/images/cusctapthe.jpg', import.meta.url).href}
              alt="Đội ngũ CUSC - Trung tâm Công nghệ Phần mềm Đại học Cần Thơ"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="absolute bottom-12 left-12 z-20 hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-white/40" />
              <p className="text-white/60 text-xs font-black uppercase tracking-[0.4em]">
                TRUNG TÂM CÔNG NGHỆ PHẦN MỀM ĐẠI HỌC CẦN THƠ
              </p>
            </div>
          </div>
        </section>

        {/* Introduction & Our Story */}
        <section className="py-16 md:py-32 bg-white overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-8 md:gap-16 items-start">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7 space-y-8 md:space-y-12"
              >
                <div className="space-y-4 md:space-y-6">
                  <div className="inline-block px-4 py-1 bg-cusc-blue/10 text-cusc-blue rounded-full text-xs font-black uppercase tracking-[0.3em]">
                    Hành trình phát triển
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-cusc-blue leading-[1.2] tracking-tighter">
                    Trung tâm Công nghệ phần mềm Đại học Cần Thơ
                  </h2>
                  <div className="w-16 md:w-20 h-1.5 md:h-2 bg-cusc-gold rounded-full" />
                </div>

                <div className="space-y-6 md:space-y-8">
                  <div className="relative pl-8 border-l-2 border-slate-100">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cusc-gold border-4 border-white shadow-sm" />
                    <p className="text-base md:text-xl text-slate-700 leading-relaxed font-medium">
                      Được thành lập vào <span className="text-cusc-blue font-black">ngày 29/03/2001</span>, CUSC tự hào là trung tâm phần mềm đầu tiên tại Đồng bằng sông Cửu Long, đánh dấu bước ngoặt quan trọng trong việc thúc đẩy ứng dụng CNTT tại khu vực.
                    </p>
                  </div>

                  <p className="text-base md:text-lg text-slate-500 leading-relaxed">
                    Với hơn 25 năm hình thành và phát triển, CUSC không ngừng khẳng định vai trò của mình trong hai lĩnh vực cốt lõi <span className="font-bold text-[#d4af37]">đào tạo nhân lực và phát triển phần mềm</span>. CUSC tập trung đào tạo nguồn nhân lực chất lượng cao, đáp ứng nhu cầu thực tiễn của thị trường lao động, đồng thời cung cấp các giải pháp phần mềm hiệu quả, hỗ trợ cơ quan, doanh nghiệp nâng cao năng lực quản lý và chuyển đổi số.
                  </p>
                </div>

                {/* ISO Certificates - Prominent & Compact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-4 md:pt-6">
                  <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-sm hover:shadow-md transition-all group">
                    <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-lg md:rounded-xl bg-blue-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md shadow-blue-600/20">
                      <Award className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <div className="text-base md:text-lg font-black text-slate-800 tracking-tight">ISO 9001:2015</div>
                      <div className="text-[10px] md:text-xs font-medium text-slate-500 mt-0.5">Hệ thống Quản lý Chất lượng</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 shadow-sm hover:shadow-md transition-all group">
                    <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-lg md:rounded-xl bg-emerald-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md shadow-emerald-600/20">
                      <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <div className="text-base md:text-lg font-black text-slate-800 tracking-tight">ISO 27001:2022</div>
                      <div className="text-[10px] md:text-xs font-medium text-slate-500 mt-0.5">Hệ thống Quản lý An toàn Thông tin</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Visuals */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-5 relative"
              >
                <div className="relative z-10">
                  <div className="aspect-[4/5] rounded-[24px] md:rounded-[60px] overflow-hidden shadow-xl md:shadow-2xl border-[6px] md:border-[12px] border-white rotate-2 hover:rotate-0 transition-transform duration-700">
                    <img
                      src={new URL('../assets/images/longchim.jpg', import.meta.url).href}
                      alt="Văn phòng hiện đại của CUSC - Trung tâm Công nghệ Phần mềm Đại học Cần Thơ"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-cusc-blue text-white p-6 md:p-10 rounded-[20px] md:rounded-[40px] shadow-xl md:shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="text-3xl md:text-5xl font-black mb-0.5 md:mb-1">25+</div>
                    <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] opacity-80">Năm kinh nghiệm</div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 md:-top-20 md:-right-20 w-32 h-32 md:w-64 md:h-64 bg-cusc-gold/10 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 w-32 h-32 md:w-64 md:h-64 bg-cusc-blue/10 rounded-full blur-3xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Philosophy, Mission, Vision */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-4 md:gap-8">
              {/* Mission */}
              <motion.div
                whileHover={{ y: -10 }}
                className="p-6 md:p-10 bg-cusc-blue rounded-3xl md:rounded-[40px] shadow-xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-bl-full -mr-12 md:-mr-16 -mt-12 md:-mt-16 transition-all group-hover:scale-150"></div>
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg shadow-white/10">
                  <Target className="w-6 h-6 md:w-8 md:h-8 text-cusc-blue" />
                </div>
                <h3 className="text-lg md:text-2xl font-black text-white mb-4 md:mb-6 uppercase tracking-tight">Sứ mệnh</h3>
                <p className="text-sm md:text-base text-blue-100 leading-relaxed font-medium">
                  <span className="text-white italic">"Xây dựng một môi trường năng động, sáng tạo vì sự phát triển nền công nghiệp phần mềm và dịch vụ công nghệ thông tin vùng Đồng bằng sông Cửu Long và Việt Nam"</span>
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                whileHover={{ y: -10 }}
                className="p-6 md:p-10 bg-white rounded-3xl md:rounded-[40px] shadow-xl border border-slate-100 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-cusc-blue/5 rounded-bl-full -mr-12 md:-mr-16 -mt-12 md:-mt-16 transition-all group-hover:scale-150"></div>
                <div className="w-12 h-12 md:w-14 md:h-14 bg-cusc-blue rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg shadow-cusc-blue/20">
                  <Eye className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg md:text-2xl font-black text-cusc-blue mb-4 md:mb-6 uppercase tracking-tight">Tầm nhìn</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  <span className="text-cusc-blue font-bold italic">"Trở thành một đơn vị xuất sắc của ngành Công nghiệp phần mềm Việt Nam, đáp ứng nhu cầu của thị trường trong nước và quốc tế"</span>
                </p>
              </motion.div>

              {/* Philosophy */}
              <motion.div
                whileHover={{ y: -10 }}
                className="p-6 md:p-10 bg-white rounded-3xl md:rounded-[40px] shadow-xl border border-slate-100 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-cusc-gold/10 rounded-bl-full -mr-12 md:-mr-16 -mt-12 md:-mt-16 transition-all group-hover:scale-150"></div>
                <div className="w-12 h-12 md:w-14 md:h-14 bg-cusc-gold rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg shadow-cusc-gold/20">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-cusc-blue" />
                </div>
                <h3 className="text-lg md:text-2xl font-black text-cusc-blue mb-4 md:mb-6 uppercase tracking-tight">Phương châm</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  <span className="text-cusc-blue font-bold italic">"<span className="text-cusc-gold">Chất lượng là hàng đầu</span>."</span>
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24 bg-white overflow-hidden relative">
          <div className="max-w-[1200px] mx-auto px-4 relative z-10">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-2xl md:text-3xl md:text-4xl font-black text-cusc-blue uppercase tracking-tight mb-3 md:mb-4">Giá trị cốt lõi</h2>
              <div className="w-20 md:w-24 h-1 md:h-1.5 bg-cusc-gold mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
              {[
                {
                  label: 'Chính trực',
                  icon: ShieldCheck,
                  color: 'bg-blue-600',
                  desc: 'Chúng tôi cam kết tạo dựng quan hệ tốt, lâu dài với khách hàng và đối tác. Xây dựng niềm tin bằng sự chân thật qua lời nói và việc làm.'
                },
                {
                  label: 'Sự hài lòng của khách hàng',
                  icon: Zap,
                  color: 'bg-amber-500',
                  desc: 'Chúng tôi luôn lắng nghe và đặt yêu cầu của khách hàng lên hàng đầu, luôn theo đuổi các tiêu chuẩn cao nhất nhằm cung cấp, chuyển giao sản phẩm và dịch vụ đúng hạn với chất lượng tốt nhất.'
                },
                {
                  label: 'Phát triển nhân viên',
                  icon: TrendingUp,
                  color: 'bg-emerald-600',
                  desc: 'Chúng tôi cam kết tạo dựng môi trường làm việc chuyên nghiệp, đồng tâm hiệp lực, phát hiện và bồi dưỡng nguồn nhân lực thông qua các hoạt động chuyên môn cao và các khóa đào tạo trong và ngoài nước.'
                },
                {
                  label: 'Cải tiến',
                  icon: RefreshCw,
                  color: 'bg-indigo-600',
                  desc: 'Chúng tôi luôn tin tưởng có phương cách tốt hơn để giải quyết vấn đề. Ở CUSC không chỉ có công nghệ mà còn ý tưởng mới, dịch vụ mới để làm cho mọi việc tốt hơn. Chúng tôi không chỉ đáp ứng yêu cầu mà làm tốt nhất có thể để vượt sự mong đợi của khách hàng.'
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 md:p-8 bg-slate-50 rounded-2xl md:rounded-[32px] border border-slate-100 flex gap-4 md:gap-6 group hover:bg-white hover:shadow-2xl hover:border-transparent transition-all duration-500"
                >
                  <div className={`w-12 h-12 md:w-16 md:h-16 shrink-0 ${item.color} rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-xl font-black text-cusc-blue uppercase mb-2 md:mb-3 tracking-tight">{item.label}</h4>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cusc-blue via-blue-800 to-indigo-900 rounded-3xl md:rounded-[40px] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl"
            >
              {/* Background decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-cusc-gold/20 rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-xl md:text-3xl lg:text-5xl font-black text-white mb-4 md:mb-6 uppercase tracking-tight leading-tight">
                  Hợp tác cùng <span className="text-cusc-gold">CUSC</span>
                </h2>

                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-6 md:mb-8">
                  <span className="px-3 py-1.5 md:px-5 md:py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold tracking-widest text-xs md:text-sm uppercase backdrop-blur-sm shadow-inner">Niềm tin</span>
                  <span className="hidden md:block w-2 h-2 rounded-full bg-cusc-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]"></span>
                  <span className="px-3 py-1.5 md:px-5 md:py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold tracking-widest text-xs md:text-sm uppercase backdrop-blur-sm shadow-inner">Đam mê</span>
                  <span className="hidden md:block w-2 h-2 rounded-full bg-cusc-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]"></span>
                  <span className="px-3 py-1.5 md:px-5 md:py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold tracking-widest text-xs md:text-sm uppercase backdrop-blur-sm shadow-inner">Trách nhiệm</span>
                </div>

                <p className="text-sm md:text-lg md:text-xl text-blue-100 mb-6 md:mb-10 leading-relaxed">
                  Hãy để chúng tôi đồng hành cùng sự phát triển của doanh nghiệp bạn. Từ đào tạo nguồn nhân lực chất lượng cao đến các giải pháp phần mềm toàn diện, CUSC cam kết mang lại giá trị thực tiễn và bền vững.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                  <a href="tel:02923731072" className="w-full sm:w-auto bg-cusc-gold text-cusc-blue px-6 py-3 md:px-10 md:py-4 rounded-full text-sm md:text-base font-black uppercase tracking-wider md:tracking-widest hover:bg-yellow-400 transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                    Liên hệ ngay
                  </a>
                  <a href="mailto:cusc.sales@ctu.edu.vn" className="w-full sm:w-auto bg-white/10 text-white border border-white/20 px-6 py-3 md:px-10 md:py-4 rounded-full text-sm md:text-base font-bold uppercase tracking-wider md:tracking-widest hover:bg-white/20 transition-all backdrop-blur-sm flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4 md:w-5 md:h-5" />
                    Gửi yêu cầu
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
