import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageSquare, Cpu, CheckCircle2, ArrowRight, User, Bot, Sparkles, Lightbulb, ShieldCheck, Trophy, FileText } from 'lucide-react';
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

  // Theme colors
  const theme = {
    header: isService ? 'bg-slate-50 text-slate-900 border-b border-slate-200' : 'bg-cusc-blue text-white',
    accent: isService ? 'bg-slate-200' : 'bg-cusc-gold',
    accentText: isService ? 'text-cusc-blue' : 'text-slate-900',
    subtitle: isService ? 'text-slate-500' : 'text-blue-100',
    closeBtn: isService ? 'bg-slate-200 text-slate-500 hover:bg-slate-300' : 'bg-white/10 text-white hover:bg-white/20',
    bodyBg: isService ? 'bg-white' : 'bg-slate-50/50',
    heading: isService ? 'text-slate-900' : 'text-cusc-blue',
    iconColor: isService ? 'text-slate-400' : 'text-cusc-gold',
    card: isService ? 'bg-slate-50/50 border-slate-200' : 'bg-white border-slate-100',
    featureIconBg: isService ? 'bg-slate-200/50' : 'bg-cusc-blue/5',
    featureIconColor: isService ? 'text-slate-600' : 'text-cusc-blue'
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
            <div className={`${theme.header} p-6 flex justify-between items-center shrink-0 relative overflow-hidden`}>
              {!isService && <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />}
              <div className="flex items-center gap-4 relative z-10">
                <div className={`${theme.accent} rounded-2xl w-14 h-14 flex items-center justify-center ${theme.accentText} shadow-sm`}>
                  <Icon size={32} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">{solution.name}</h2>
                  <p className={`${theme.subtitle} text-sm font-bold uppercase tracking-[0.2em]`}>{solution.subtitle}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className={`w-10 h-10 rounded-full ${theme.closeBtn} flex items-center justify-center transition-colors relative z-10`}
              >
                <X size={24} />
              </button>
            </div>

            {/* Body */}
            <div className={`flex-grow overflow-y-auto p-6 md:p-10 ${theme.bodyBg}`}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* Left Column: Intro & Features (7 or 8 or 12 cols) */}
                <div className={`${!hasRightColumn ? 'lg:col-span-12' : solution.longDescription ? 'lg:col-span-8' : 'lg:col-span-7'} space-y-10`}>
                  {/* Overview */}
                  <section>
                    <h3 className={`text-xl font-black ${theme.heading} uppercase mb-4 flex items-center gap-2`}>
                      <Sparkles size={22} className={theme.iconColor} />
                      Giới thiệu dịch vụ
                    </h3>
                    <div className={`${theme.card} p-6 rounded-2xl shadow-sm border`}>
                      <p className="text-slate-600 leading-relaxed font-medium">
                        {solution.overview}
                      </p>
                    </div>
                  </section>

                  {/* Features or Long Description */}
                  {solution.longDescription ? (
                    <section>
                      <h3 className={`text-xl font-black ${theme.heading} uppercase mb-4 flex items-center gap-2`}>
                        <FileText size={22} className={theme.iconColor} />
                        Mô tả dịch vụ
                      </h3>
                      <div className={`${theme.card} p-8 rounded-2xl shadow-sm border prose prose-slate max-w-none`}>
                        <div className="text-slate-700 leading-relaxed whitespace-pre-line font-medium text-justify">
                          {solution.longDescription}
                        </div>
                      </div>
                    </section>
                  ) : (
                    <section>
                      <h3 className={`text-xl font-black ${theme.heading} uppercase mb-4 flex items-center gap-2`}>
                        <Lightbulb size={22} className={theme.iconColor} />
                        Tính năng nổi bật
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {solution.features.map((feature, idx) => (
                          <div key={idx} className={`${theme.card} flex gap-4 p-4 rounded-2xl border shadow-sm hover:shadow-md transition-shadow`}>
                            <div className={`w-10 h-10 ${theme.featureIconBg} rounded-xl flex items-center justify-center ${theme.featureIconColor} shrink-0`}>
                              <feature.icon size={20} />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-800 text-sm">{feature.title}</h4>
                              <p className="text-xs text-slate-500 mt-1 leading-tight">{feature.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Differences */}
                  {solution.differences && (
                    <section>
                      <h3 className={`text-xl font-black ${theme.heading} uppercase mb-4 flex items-center gap-2`}>
                        <ShieldCheck size={22} className="text-emerald-500" />
                        Điểm khác biệt
                      </h3>
                      <div className="space-y-3">
                        {solution.differences.map((diff, idx) => (
                          <div key={idx} className="flex items-start gap-3 bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                            <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                            <span className="text-sm font-bold text-emerald-900">{diff}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}
                </div>

                {/* Right Column: Example & Benefits (5 or 4 cols) */}
                {hasRightColumn && (
                  <div className={`${solution.longDescription ? 'lg:col-span-4' : 'lg:col-span-5'} space-y-8`}>
                    
                    {/* Example Interaction */}
                    {solution.example && (
                      <section className={`${theme.card} rounded-3xl shadow-md border overflow-hidden`}>
                        <div className="bg-slate-800 p-4 text-white flex items-center gap-2">
                          <MessageSquare size={18} className={theme.iconColor} />
                          <span className="text-sm font-bold uppercase tracking-widest">Ví dụ thực tế</span>
                        </div>
                        <div className={`p-6 space-y-6 ${isService ? 'bg-white' : 'bg-slate-50'}`}>
                          {/* User Query / Input */}
                          <div className="flex gap-3 justify-end">
                            <div className={`${isService ? 'bg-slate-200 text-slate-800' : 'bg-cusc-blue text-white'} p-4 rounded-2xl rounded-tr-none shadow-sm max-w-[85%]`}>
                              <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1 text-right">{solution.example.inputLabel}</p>
                              <p className="text-sm font-medium italic">“{solution.example.input}”</p>
                            </div>
                            <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 shrink-0">
                              <User size={16} />
                            </div>
                          </div>

                          {/* Bot Response / Output */}
                          <div className="flex gap-3">
                            <div className={`${isService ? 'bg-slate-800 text-white' : 'bg-cusc-gold text-slate-900'} rounded-full w-8 h-8 flex items-center justify-center shrink-0`}>
                              <Bot size={16} />
                            </div>
                            <div className={`bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border ${isService ? 'border-slate-200' : 'border-slate-100'} max-w-[85%]`}>
                              <p className={`text-[10px] font-black ${isService ? 'text-slate-400' : 'text-cusc-blue'} mb-3 uppercase tracking-wider opacity-60`}>{solution.example.outputLabel}:</p>
                              <ul className="space-y-2">
                                {solution.example.output.map((action, idx) => (
                                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                                    <ArrowRight size={14} className={isService ? 'text-slate-400' : 'text-cusc-gold'} shrink-0 />
                                    <span>{action}</span>
                                  </li>
                                ))}
                              </ul>
                              {solution.example.note && (
                                <div className="mt-4 pt-4 border-t border-slate-100">
                                  <p className="text-xs font-black text-slate-500 flex items-center gap-1">
                                    <Sparkles size={12} />
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
                      <section className={`${theme.card} p-6 rounded-3xl shadow-sm border`}>
                        <h3 className={`text-lg font-black ${theme.heading} uppercase mb-6 flex items-center gap-2`}>
                          <Trophy size={20} className={theme.iconColor} />
                          Giá trị mang lại
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          {solution.benefits.map((benefit, idx) => (
                            <div key={idx} className={`text-center p-4 rounded-2xl ${benefit.color === 'emerald' ? 'bg-emerald-50 border border-emerald-100' : 'bg-blue-50 border border-blue-100'}`}>
                              <p className={`text-2xl font-black ${benefit.color === 'emerald' ? 'text-emerald-600' : 'text-blue-600'}`}>{benefit.value}</p>
                              <p className={`text-[10px] ${benefit.color === 'emerald' ? 'text-emerald-800' : 'text-blue-800'} font-black uppercase leading-tight mt-1`}>{benefit.label}</p>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

                    {/* Tech Stack */}
                    {solution.technologies && solution.technologies.length > 0 && (
                      <section className="bg-slate-900 rounded-3xl p-6 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cusc-gold/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                        <h3 className={`text-sm font-bold uppercase tracking-widest ${isService ? 'text-slate-400' : 'text-cusc-gold'} mb-4 flex items-center gap-2`}>
                          <Cpu size={18} />
                          Công nghệ cốt lõi
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {solution.technologies.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold text-slate-300 border border-white/10">
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
