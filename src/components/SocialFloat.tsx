const SOCIALS = [
  {
    label: 'Điện thoại',
    href: 'tel:02923731072',
    bg: 'bg-cusc-blue',
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
      </svg>
    ),
  },
  {
    label: 'Zalo OA',
    href: 'https://oa.zalo.me/cuscsoftware',
    bg: 'bg-[#0068ff]',
    external: true,
    icon: <span className="text-white text-xs font-black tracking-tight">Zalo</span>,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/cuscsoftware',
    bg: 'bg-[#1877f2]',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    ),
  },
];

export const SocialFloat = () => (
  <div className="fixed right-4 bottom-8 z-50 flex flex-col gap-2">
    {SOCIALS.map(({ label, href, bg, external, icon }) => (
      <a
        key={label}
        href={href}
        title={label}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={`${bg} text-white w-12 h-12 rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.35)] border-2 border-white hover:scale-110 hover:-translate-y-0.5 transition-transform duration-200`}
      >
        {icon}
      </a>
    ))}
  </div>
);
