import { 
  Building2, 
  GraduationCap, 
  Code2, 
  Layers, 
  FileCheck, 
  Users, 
  Globe, 
  Briefcase, 
  MonitorCheck, 
  SearchCheck, 
  ShieldCheck,
  ScanFace,
  LayoutDashboard,
  Cloud,
  Settings,
  Cpu,
  Database,
  Network,
  HardDrive,
  Printer,
  Wrench,
  Bot,
  BarChart3,
  BookOpen,
  Stethoscope,
  Plane,
  Scale,
  Languages,
  PenTool,
  HeartPulse,
  Radio,
  Lightbulb,
  Activity
} from 'lucide-react';

export const ECOSYSTEM_DATA = {
  // Core: CUSC DX Center
  core: [
    { name: 'ISOO', icon: FileCheck, color: 'text-blue-600' },
    { name: 'UIIS', icon: GraduationCap, color: 'text-amber-600' },
    { name: 'ERP', icon: LayoutDashboard, color: 'text-indigo-600' },
    { name: 'HRM', icon: Users, color: 'text-emerald-600' },
  ],

  // Area 1: CHÍNH QUYỀN VÀ DOANH NGHIỆP (Left)
  government: {
    title: 'CHÍNH QUYỀN VÀ DOANH NGHIỆP',
    items: [
      { name: 'CUSC-ISOO', icon: FileCheck, desc: 'Phần mềm ISO điện tử' },
      { name: 'CUSC-IES', icon: LayoutDashboard, desc: 'Quản lý sáng kiến' },
      { name: 'C-GATE', icon: Building2, desc: 'Hệ thống TTGQ TTHC' },
      { name: 'CUSC-STM', icon: BookOpen, desc: 'Quản lý khoa học công nghệ' },
      { name: 'e-Office', icon: Briefcase, desc: 'Văn phòng điện tử' },
      { name: 'CUSC-HRM', icon: Users, desc: 'Quản lý Nhân sự tiền lương' },
      { name: 'CUSC-HIS', icon: HeartPulse, desc: 'Quản lý bệnh viện' },
      { name: 'CUSC-IPM', icon: LayoutDashboard, desc: 'Quản lý dự án đầu tư' },
      { name: 'CUSC-IoT', icon: Cpu, desc: 'Giải pháp Internet vạn vật' },
      { name: 'CUSC-Portal', icon: Globe, desc: 'Cổng thông tin điện tử' },
    ]
  },

  // Area 2: Giải pháp đại học thông minh (Center)
  smartUniversity: {
    title: 'Giải pháp đại học thông minh',
    items: []
  },

  // Area 3: Ứng dụng AI (Right)
  aiApplications: {
    title: 'ỨNG DỤNG AI',
    items: [
      { name: 'AI Chatbot', icon: Bot, desc: 'Trợ lý ảo thông minh' },
      { name: 'Computer Vision', icon: ScanFace, desc: 'Nhận diện & Phân tích hình ảnh' },
      { name: 'Data Analytics', icon: BarChart3, desc: 'Phân tích dữ liệu thông minh' },
      { name: 'NLP Solutions', icon: Languages, desc: 'Xử lý ngôn ngữ tự nhiên' },
    ]
  },

  // Middle: Orange Bar - Data Interconnection Axis (Backbone)
  dataBackbone: {
    title: 'Trục liên thông dữ liệu',
    services: ['Tích hợp SSO', 'Kho dữ liệu dùng chung', 'Cơ sở dữ liệu chuyên ngành', 'Cơ sở dữ liệu chia sẻ']
  },

  // New Section: Chia sẻ dữ liệu
  dataSharing: {
    title: 'Chia sẻ dữ liệu',
    items: [
      { name: 'CSDL QUỐC GIA', icon: Globe, desc: 'Dữ liệu cấp quốc gia' },
      { name: 'CSDL Bộ ngành', icon: Building2, desc: 'Dữ liệu cấp bộ ngành' },
      { name: 'CSDL Địa phương', icon: Network, desc: 'Dữ liệu cấp địa phương' },
    ]
  },

  // New Section: Dịch vụ khác (Right, below outsourcing)
  otherServices: {
    title: 'Dịch vụ khác',
    items: [
      { name: 'Gia công phần mềm', icon: Code2, desc: 'Software Outsourcing' },
      { name: 'Cho thuê phần mềm', icon: Settings, desc: 'SaaS & Licensing' },
      { name: 'Kiểm thử phần mềm', icon: ShieldCheck, desc: 'Software Testing & QA' },
      { name: 'Tư vấn dự án đầu tư UDCNTT', icon: Briefcase, desc: 'IT Investment Consulting' },
    ]
  },

  // Bottom: Green Bar (6 items)
  infraServices: [
    { name: 'Hạ tầng ảo hóa', icon: Cloud, desc: 'Virtualization Infrastructure' },
    { name: 'Hệ thống bảo mật & sao lưu', icon: ShieldCheck, desc: 'Security & Backup Systems' },
    { name: 'Hệ thống mạng', icon: Network, desc: 'Network Systems' }
  ],

  // Bottom: Hardware Cards (6 items)
  hardware: [
    { name: 'Thiết bị ngoại vi', icon: Printer, desc: 'Peripherals' },
    { name: 'Máy chủ vật lý', icon: Database, desc: 'Physical Servers' },
    { name: 'Thiết bị lưu trữ', icon: HardDrive, desc: 'Storage Devices' },
    { name: 'Thiết bị mạng', icon: Network, desc: 'Network Equipment' },
    { name: 'Bản quyền phần mềm', icon: PenTool, desc: 'Software Licensing' },
  ]
};
