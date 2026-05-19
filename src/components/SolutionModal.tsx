import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageSquare, Cpu, CheckCircle2, ArrowRight, User, Bot, Sparkles, Lightbulb, ShieldCheck, Trophy, FileText, Users } from 'lucide-react';
import { AISolution } from '../data/aiSolutions';

interface SolutionModalProps {
  isOpen: boolean;
  onClose: () => void;
  solution: AISolution | null;
}

export const SolutionModal: React.FC<SolutionModalProps> = ({ isOpen, onClose, solution }) => {
  if (!solution) return null;

  const Icon = solution.icon;
  const hasRightColumn = solution.example || (solution.benefits && solution.benefits.length > 0) || (solution.technologies && solution.technologies.length > 0);
  const isService = solution.type === 'service';

  const theme = {
    header: isService ? 'bg-gradient-to-r from-cusc-blue to-blue-700 text-white' : 'bg-cusc-blue text-white',
    accent: isService ? 'bg-white/20' : 'bg-cusc-gold',
    accentText: isService ? 'text-white' : 'text-slate-900',
    subtitle: isService ? 'text-blue-100' : 'text-blue-100',
    closeBtn: isService ? 'bg-white/15 text-white hover:bg-white/25' : 'bg-white/10 text-white hover:bg-white/20',
    bodyBg: 'bg-white',
    heading: 'text-cusc-blue',
    iconColor: isService ? 'text-cusc-blue' : 'text-cusc-gold',
    card: 'bg-slate-50 border-slate-200',
    featureIconBg: isService ? 'bg-cusc-blue/10' : 'bg-cusc-blue/10',
    featureIconColor: 'text-cusc-blue',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className={`${theme.header} px-6 py-5 flex justify-between items-center shrink-0 relative overflow-hidden`}>
              {!isService && <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />}
              <div className="flex items-center gap-4 relative z-10">
                <div className={`${theme.accent} rounded-2xl w-14 h-14 flex items-center justify-center ${theme.accentText} shadow-sm shrink-0`}>
                  <Icon size={30} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight">{solution.name}</h2>
                  <p className={`${theme.subtitle} text-sm font-semibold uppercase tracking-[0.15em] mt-0.5`}>{solution.subtitle}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Đóng"
                className={`w-10 h-10 rounded-full ${theme.closeBtn} flex items-center justify-center transition-colors relative z-10 shrink-0`}
              >
                <X size={22} />
              </button>
            </div>

            {/* Body */}
            <div className={`flex-grow overflow-y-auto p-6 md:p-8 ${theme.bodyBg}`}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Left Column */}
                <div className={`${!hasRightColumn ? 'lg:col-span-12' : solution.longDescription ? 'lg:col-span-8' : 'lg:col-span-7'} space-y-8`}>

                  {/* Overview */}
                  <section>
                    <h3 className={`text-base font-black ${theme.heading} uppercase mb-3 flex items-center gap-2 tracking-wide`}>
                      <Sparkles size={18} className={theme.iconColor} />
                      Giới thiệu giải pháp
                    </h3>
                    <div className={`${theme.card} p-5 rounded-2xl border`}>
                      <p className="text-slate-700 leading-relaxed text-[15px]">
                        {solution.overview}
                      </p>
                    </div>
                  </section>

                  {/* Features or Long Description */}
                  {solution.longDescription ? (
                    <section>
                      <h3 className={`text-base font-black ${theme.heading} uppercase mb-3 flex items-center gap-2 tracking-wide`}>
                        <FileText size={18} className={theme.iconColor} />
                        Mô tả dịch vụ
                      </h3>
                      <div className={`${theme.card} p-6 rounded-2xl border`}>
                        <div className="text-slate-700 leading-relaxed whitespace-pre-line text-[15px] text-justify">
                          {solution.longDescription}
                        </div>
                      </div>
                    </section>
                  ) : (
                    <section>
                      <h3 className={`text-base font-black ${theme.heading} uppercase mb-3 flex items-center gap-2 tracking-wide`}>
                        <Lightbulb size={18} className={theme.iconColor} />
                        Tính năng nổi bật
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {solution.features.map((feature, idx) => (
                          <div key={idx} className={`${theme.card} flex gap-3 p-4 rounded-2xl border hover:border-cusc-blue/30 hover:shadow-sm transition-all`}>
                            <div className={`w-10 h-10 ${theme.featureIconBg} rounded-xl flex items-center justify-center ${theme.featureIconColor} shrink-0`}>
                              <feature.icon size={20} />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-800 text-sm leading-snug">{feature.title}</h4>
                              <p className="text-xs text-slate-600 mt-1 leading-snug">{feature.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Differences */}
                  {solution.differences && (
                    <section>
                      <h3 className={`text-base font-black ${theme.heading} uppercase mb-3 flex items-center gap-2 tracking-wide`}>
                        <ShieldCheck size={18} className="text-emerald-600" />
                        Điểm khác biệt
                      </h3>
                      <div className="space-y-2">
                        {solution.differences.map((diff, idx) => (
                          <div key={idx} className="flex items-start gap-3 bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                            <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                            <span className="text-sm font-semibold text-emerald-900 leading-snug">{diff}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                </div>

                {/* Right Column */}
                {hasRightColumn && (
                  <div className={`${solution.longDescription ? 'lg:col-span-4' : 'lg:col-span-5'} space-y-6`}>

                    {/* Example Interaction */}
                    {solution.example && (
                      <section className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                        <div className="bg-slate-800 px-4 py-3 text-white flex items-center gap-2">
                          <MessageSquare size={16} className={theme.iconColor} />
                          <span className="text-xs font-bold uppercase tracking-widest">Ví dụ thực tế</span>
                        </div>
                        <div className={`p-5 space-y-5 ${isService ? 'bg-white' : 'bg-slate-50'}`}>
                          {/* User Query */}
                          <div className="flex gap-2 justify-end">
                            <div className={`${isService ? 'bg-slate-200 text-slate-800' : 'bg-cusc-blue text-white'} p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[85%]`}>
                              <p className="text-[11px] font-bold uppercase tracking-wider opacity-70 mb-1 text-right">{solution.example.inputLabel}</p>
                              <p className="text-sm font-medium italic leading-snug">"{solution.example.input}"</p>
                            </div>
                            <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 shrink-0">
                              <User size={15} />
                            </div>
                          </div>

                          {/* Bot Response */}
                          <div className="flex gap-2">
                            <div className={`${isService ? 'bg-slate-800 text-white' : 'bg-cusc-gold text-slate-900'} rounded-full w-8 h-8 flex items-center justify-center shrink-0`}>
                              <Bot size={15} />
                            </div>
                            <div className={`bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border ${isService ? 'border-slate-200' : 'border-slate-200'} max-w-[85%]`}>
                              <p className={`text-[11px] font-bold ${isService ? 'text-slate-500' : 'text-cusc-blue'} mb-2 uppercase tracking-wider`}>{solution.example.outputLabel}:</p>
                              <ul className="space-y-2">
                                {solution.example.output.map((action, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 leading-snug">
                                    <ArrowRight size={13} className={`${isService ? 'text-slate-400' : 'text-cusc-gold'} shrink-0 mt-0.5`} />
                                    <span>{action}</span>
                                  </li>
                                ))}
                              </ul>
                              {solution.example.note && (
                                <div className="mt-3 pt-3 border-t border-slate-100">
                                  <p className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                                    <Sparkles size={11} />
                                    {solution.example.note}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </section>
                    )}

                    {/* Benefits */}
                    {solution.benefits && solution.benefits.length > 0 && (
                      <section className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                        <h3 className={`text-sm font-black ${theme.heading} uppercase mb-4 flex items-center gap-2 tracking-wide`}>
                          <Trophy size={18} className={theme.iconColor} />
                          Giá trị mang lại
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                          {solution.benefits.map((benefit, idx) => (
                            <div key={idx} className={`text-center p-4 rounded-xl ${benefit.color === 'emerald' ? 'bg-emerald-50 border border-emerald-200' : 'bg-blue-50 border border-blue-200'}`}>
                              <p className={`text-2xl font-black ${benefit.color === 'emerald' ? 'text-emerald-600' : 'text-blue-600'}`}>{benefit.value}</p>
                              <p className={`text-xs ${benefit.color === 'emerald' ? 'text-emerald-800' : 'text-blue-800'} font-bold uppercase leading-tight mt-1`}>{benefit.label}</p>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

                    {/* Clients */}
                    {solution.clients && solution.clients.length > 0 && (
                      <section className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                        <h3 className={`text-sm font-black ${theme.heading} uppercase mb-3 flex items-center gap-2 tracking-wide`}>
                          <Users size={16} className={theme.iconColor} />
                          Khách hàng tiêu biểu
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {solution.clients.map((client, idx) => (
                            <span key={idx} className="px-3 py-1.5 bg-white border border-blue-200 rounded-full text-xs font-semibold text-blue-800">
                              {client}
                            </span>
                          ))}
                        </div>
                      </section>
                    )}

                    {/* Tech Stack */}
                    {solution.technologies && solution.technologies.length > 0 && (
                      <section className="bg-slate-900 rounded-2xl p-5 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cusc-gold/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                        <h3 className={`text-xs font-bold uppercase tracking-widest ${isService ? 'text-slate-400' : 'text-cusc-gold'} mb-3 flex items-center gap-2`}>
                          <Cpu size={16} />
                          Công nghệ cốt lõi
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {solution.technologies.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-slate-200 border border-white/15">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </section>
                    )}
                  </div>
                )}
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
