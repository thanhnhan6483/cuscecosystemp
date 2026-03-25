import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Phone, Mail, User } from 'lucide-react';

const teamMembers = [
  {
    name: "Nguyễn Thanh Nhàn",
    position: "Trưởng nhóm KDPM",
    responsibility: "Phụ trách chung",
    phone: "0939 511 445",
    email: "nhannguyen@ctu.edu.vn",
    image: new URL('../assets/images/profile_ntnhan.jpg', import.meta.url).href
  },
  {
    name: "Nguyễn Thị Trúc Linh",
    position: "Chuyên viên tư vấn phần mềm",
    responsibility: "Giáo dục thông minh",
    phone: "0837 912 349",
    email: "nttruclinh@ctu.edu.vn",
    image: new URL('../assets/images/profile_nttlinh.jpg', import.meta.url).href
  },
  {
    name: "Lê Khánh Linh",
    position: "Chuyên viên tư vấn phần mềm",
    responsibility: "Giáo dục thông minh",
    phone: "0939 361 720",
    email: "lklinh@ctu.edu.vn",
    image: new URL('../assets/images/profile_lklinh.jpg', import.meta.url).href
  },
  {
    name: "Trần Hoài Thương",
    position: "Chuyên viên tư vấn phần mềm",
    responsibility: "Chính quyền & Doanh nghiệp",
    phone: "0907 993 964",
    email: "ththuong@ctu.edu.vn",
    image: new URL('../assets/images/profile_ttthuong.jpg', import.meta.url).href
  },
  {
    name: "Lê Vũ Luân",
    position: "Chuyên viên tư vấn phần mềm",
    responsibility: "Chính quyền & Doanh nghiệp",
    phone: "0366 183 317",
    email: "lvluan@ctu.edu.vn",
    image: new URL('../assets/images/profile_lvluan.jpg', import.meta.url).href
  },
  {
    name: "Huỳnh Hằng Ny",
    position: "Chuyên viên CSKH",
    responsibility: "Hỗ trợ chung",
    phone: "0917 502 148",
    email: "hhny@ctu.edu.vn",
    image: new URL('../assets/images/profile_hhny.jpg', import.meta.url).href
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <SEO
        title="Liên hệ CUSC - Đội ngũ tư vấn chuyên gia"
        description="Liên hệ CUSC Software: 0292 3731072 | cusc.sales@ctu.edu.vn. Đội ngũ tư vấn chuyên nghiệp, hỗ trợ chuyển đổi số, giải pháp phần mềm giáo dục."
        keywords="liên hệ CUSC, số điện thoại CUSC, email CUSC, tư vấn phần mềm, hỗ trợ khách hàng, chuyển đổi số"
      />
      <Navbar />
      
      <main className="py-20 px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-black text-cusc-blue mb-4 uppercase tracking-tighter">
              Đội ngũ tư vấn viên
            </h1>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto font-medium leading-relaxed">
              Đội ngũ tư vấn viên chuyên nghiệp, tận tâm, trách nhiệm, giàu kinh nghiệm và luôn nhiệt tình hỗ trợ khách hàng tại CUSC
            </p>
            <div className="w-24 h-1 bg-cusc-gold mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white rounded-[3rem] p-8 shadow-[0_30px_70px_rgba(27,75,163,0.1)] border border-slate-100 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                {/* Profile Image - Even Larger */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-cusc-gold/20 rounded-full blur-3xl group-hover:bg-cusc-gold/40 transition-colors duration-700"></div>
                  <div className="relative w-56 h-56 rounded-full border-[8px] border-cusc-blue p-2 bg-white shadow-2xl overflow-hidden ring-8 ring-cusc-blue/5">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Name - Bold and Large */}
                <h3 className="text-3xl font-black text-cusc-blue mb-1 tracking-tighter uppercase leading-tight">
                  {member.name}
                </h3>

                {/* Position - Compact Pill */}
                <div className="bg-cusc-blue/5 text-cusc-blue px-4 py-1 rounded-full text-[10px] font-black mb-3 border border-cusc-blue/10 uppercase tracking-[0.15em]">
                  {member.position}
                </div>

                {/* Responsibility - Compact & Professional */}
                <div className="mb-6">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Lĩnh vực phụ trách</span>
                  <span className="text-sm font-black text-cusc-gold uppercase tracking-tight">{member.responsibility}</span>
                </div>

                {/* Contact Info - Compact Layout */}
                <div className="w-full pt-6 border-t border-slate-100 grid grid-cols-1 gap-2">
                  <div className="flex items-center justify-center gap-3 text-slate-600 group-hover:text-cusc-blue transition-colors">
                    <Phone size={14} className="text-cusc-gold" />
                    <span className="text-sm font-bold tracking-wide">{member.phone}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-slate-600 group-hover:text-cusc-blue transition-colors">
                    <Mail size={14} className="text-cusc-gold" />
                    <span className="text-sm font-bold tracking-wide">{member.email}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
