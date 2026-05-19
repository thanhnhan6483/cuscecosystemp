import { Settings, FileCheck, LayoutDashboard, BookOpen, GraduationCap, ShieldCheck, Zap, Cloud, Code2, Layers, Smartphone, Network, Cpu, Globe, Search, Palette, BarChart3, Share2, Wifi, Thermometer, Bell, Activity, Droplets, FlaskConical, FolderKanban, MapPin, TrendingUp, FileSearch, Clock, DollarSign, Users, UserCheck, CalendarDays, Receipt, PieChart, Lock, HeartPulse, Pill, CreditCard, Microscope, Stethoscope, Wrench, GitBranch } from 'lucide-react';
import { AISolution } from './aiSolutions';

export const OTHER_SERVICES: Record<string, AISolution> = {
  'cusc-his': {
    id: 'cusc-his',
    name: 'CUSC-HIS',
    subtitle: 'Hệ thống quản lý tổng thể bệnh viện',
    icon: HeartPulse,
    type: 'service',
    overview: 'CUSC-HIS là giải pháp quản lý tổng thể bệnh viện toàn diện, theo dõi bệnh nhân từ lúc vào viện, khám chữa bệnh đến lúc ra viện. Hệ thống gồm 08 phân hệ chính theo Quyết định số 5573/QĐ-BYT của Bộ Y tế — phù hợp với bệnh viện chuyên khoa, đa khoa, công lập và tư nhân.',
    features: [
      { icon: Stethoscope, title: '1. Quản lý khoa khám bệnh', desc: 'Tiếp nhận, phân luồng bệnh nhân, kê đơn, chẩn đoán theo mã ICD10 — giảm thời gian chờ.' },
      { icon: Pill, title: '2. Quản lý dược bệnh viện', desc: 'Kiểm soát nhập/xuất/tồn kho thuốc, cấp phát theo đơn, cảnh báo tương tác thuốc.' },
      { icon: CreditCard, title: '3. Quản lý thanh toán viện phí – BHYT', desc: 'Tự động tính viện phí, thanh toán BHYT, kết nối hệ thống giám định BHYT quốc gia.' },
      { icon: Microscope, title: '4. Quản lý cận lâm sàng', desc: 'Xét nghiệm, chẩn đoán hình ảnh, trả kết quả điện tử trực tiếp cho bác sĩ điều trị.' },
      { icon: HeartPulse, title: '5. Quản lý khoa lâm sàng', desc: 'Theo dõi điều trị nội trú, hồ sơ bệnh án điện tử, y lệnh và chăm sóc điều dưỡng.' },
      { icon: Users, title: '6. Quản lý nhân sự tiền lương', desc: 'Quản lý hồ sơ nhân viên y tế, chấm công, tính lương và các chế độ đãi ngộ.' },
      { icon: Wrench, title: '7. Quản lý trang thiết bị y tế', desc: 'Theo dõi tài sản, lịch bảo trì, kiểm kê thiết bị y tế toàn bệnh viện.' },
      { icon: GitBranch, title: '8. Quản lý chỉ đạo tuyến', desc: 'Hỗ trợ chuyển tuyến, kết nối Cổng dữ liệu y tế quốc gia và báo cáo Bộ Y tế.' },
    ],
    technologies: [
      'Kiến trúc module mở',
      'Mã ICD-10 chuẩn quốc tế',
      'Cổng dữ liệu y tế quốc gia',
      'Hệ thống giám định BHYT',
      'Phân quyền & lưu vết thao tác',
      'Backup & bảo mật dữ liệu',
    ],
    benefits: [
      { value: '8', label: 'Phân hệ theo QĐ BYT', color: 'blue' },
      { value: '100%', label: 'Tuân thủ tiêu chí BYT', color: 'emerald' },
      { value: '↓60%', label: 'Giảm sai sót kê đơn', color: 'emerald' },
      { value: '24/7', label: 'Dữ liệu bệnh nhân liên tục', color: 'blue' },
    ],
    differences: [
      'Thiết kế module mở — dễ bảo trì, nâng cấp và mở rộng theo nhu cầu từng bệnh viện',
      'Đáp ứng đầy đủ tiêu chí đánh giá bệnh viện của Bộ Y tế và kết nối Cổng dữ liệu quốc gia',
      'Phù hợp cả bệnh viện chuyên khoa, đa khoa, công lập và tư nhân — không cần tùy chỉnh lớn',
    ],
  },
  'cusc-hrm': {
    id: 'cusc-hrm',
    name: 'CUSC-HRM',
    subtitle: 'Quản lý nhân sự & tiền lương toàn diện',
    icon: Users,
    type: 'service',
    overview: 'CUSC-HRM là giải pháp quản lý nhân sự và tiền lương được xây dựng theo quy trình thống nhất, đáp ứng đầy đủ các quy định pháp luật hiện hành. Hệ thống bao gồm đầy đủ các module: nhân sự, chấm công, nghỉ phép, lương, thưởng, thuế TNCN và BHXH — phù hợp với đơn vị hoạt động đa ngành, đa lĩnh vực.',
    features: [
      { icon: UserCheck, title: 'Quản lý hồ sơ nhân sự', desc: 'Lưu trữ đầy đủ thông tin nhân viên, hợp đồng, quá trình công tác, khen thưởng, kỷ luật.' },
      { icon: CalendarDays, title: 'Chấm công đa chi nhánh', desc: 'Kết nối máy chấm công, tổng hợp dữ liệu từ nhiều chi nhánh, tùy biến ca làm việc linh hoạt.' },
      { icon: DollarSign, title: 'Tính lương & thưởng tự động', desc: 'Hỗ trợ nhiều phương thức tính lương, tự động tính thưởng, giảm sai sót và tiết kiệm thời gian.' },
      { icon: Receipt, title: 'BHXH & thuế TNCN', desc: 'Tự động lập bảng lương an sinh xã hội, kê khai BHXH, tính thuế TNCN đúng quy định.' },
      { icon: Lock, title: 'Phân quyền vai trò', desc: 'Kiểm soát người dùng theo chức năng: nhập liệu, xem báo cáo, quản trị — bảo mật dữ liệu nhân sự.' },
      { icon: PieChart, title: 'Báo cáo trực quan', desc: 'Hệ thống báo cáo tối ưu, nhanh chóng, chính xác — hỗ trợ ra quyết định quản lý hiệu quả.' },
    ],
    technologies: [
      'Web-based (Cross-platform)',
      'Tích hợp máy chấm công',
      'Xuất Excel / PDF',
      'Phân quyền RBAC',
      'Backup & Restore tự động',
    ],
    benefits: [
      { value: '100%', label: 'Tuân thủ quy định pháp luật', color: 'emerald' },
      { value: '↓80%', label: 'Giảm thời gian tính lương', color: 'blue' },
      { value: '0 lỗi', label: 'Sai sót chấm công', color: 'emerald' },
      { value: '∞', label: 'Tùy biến theo đơn vị', color: 'blue' },
    ],
    differences: [
      'Tùy biến cách chấm công và tính lương phù hợp với từng đơn vị đa ngành, đa lĩnh vực',
      'Kết nối trực tiếp máy chấm công, đối chiếu tự động — hạn chế tối đa sai sót thủ công',
      'Đảm bảo tuân thủ linh động theo các quy định và chế độ hiện hành về nhân sự, BHXH',
    ],
  },
  'cusc-ipm': {
    id: 'cusc-ipm',
    name: 'CUSC-IPM',
    subtitle: 'Quản lý dự án đầu tư chuyên nghiệp',
    icon: FolderKanban,
    type: 'service',
    overview: 'CUSC-IPM là giải pháp quản lý toàn diện các dự án đầu tư xây dựng, quy hoạch, bồi thường và tái định cư. Hệ thống số hóa quy trình từ thẩm định, phê duyệt, cấp phép đến giám sát tiến độ và quản lý ngân sách — giúp cơ quan chủ quản kiểm soát chặt chẽ, minh bạch và hiệu quả mọi giai đoạn dự án.',
    features: [
      { icon: Clock, title: 'Quản lý tiến độ thời gian thực', desc: 'Theo dõi tiến độ từng giai đoạn, cảnh báo trễ hạn, đảm bảo dự án đúng kế hoạch.' },
      { icon: FileCheck, title: 'Số hóa hồ sơ & thủ tục', desc: 'Quản lý hồ sơ thẩm định, phê duyệt, cấp phép điện tử — giảm giấy tờ, tăng tốc xử lý.' },
      { icon: DollarSign, title: 'Quản lý kinh phí & ngân sách', desc: 'Theo dõi chi tiết nguồn vốn, giải ngân, quyết toán — minh bạch tài chính dự án.' },
      { icon: MapPin, title: 'Bản đồ định vị dự án', desc: 'Hiển thị vị trí dự án trên bản đồ số, hỗ trợ quy hoạch và quản lý không gian.' },
      { icon: FileSearch, title: 'AI tra cứu thông tin dự án', desc: 'Chatbot AI hỗ trợ tra cứu nhanh thông tin dự án, văn bản, quy định liên quan.' },
      { icon: TrendingUp, title: 'Dự báo & cảnh báo tiến độ', desc: 'AI phân tích xu hướng, cảnh báo sớm rủi ro trễ tiến độ hoặc vượt ngân sách.' },
    ],
    technologies: [
      'React / Next.js',
      'PostgreSQL + PostGIS',
      'Leaflet / Mapbox',
      'AI Chatbot (RAG)',
      'Time-series Analytics',
      'Document Management System',
      'Role-based Access Control',
      'API Integration (eGov)',
    ],
    benefits: [
      { value: '↑50%', label: 'Tăng tốc xử lý hồ sơ', color: 'blue' },
      { value: '100%', label: 'Minh bạch tài chính', color: 'emerald' },
      { value: '↓30%', label: 'Giảm trễ tiến độ', color: 'emerald' },
      { value: '24/7', label: 'Tra cứu AI tức thời', color: 'blue' },
    ],
    differences: [
      'Tích hợp AI Chatbot tra cứu thông tin dự án và văn bản pháp quy tức thời',
      'Bản đồ số định vị dự án, hỗ trợ quy hoạch không gian trực quan',
      'Dự báo tiến độ bằng AI — cảnh báo sớm rủi ro trước khi xảy ra',
    ],
  },
  'cusc-iot': {
    id: 'cusc-iot',
    name: 'CUSC-IoT',
    subtitle: 'Giải pháp IoT nông nghiệp & thủy sản thông minh',
    icon: Wifi,
    type: 'service',
    overview: 'CUSC-IoT là hệ thống cảm biến và giám sát thông minh ứng dụng công nghệ IoT, được triển khai tại ao nuôi thủy hải sản, vùng trồng nông nghiệp và cây ăn trái. Dữ liệu thu thập tự động 24/7, cảnh báo tức thời qua điện thoại — giúp nông dân và doanh nghiệp ra quyết định chính xác, giảm rủi ro và tăng năng suất.',
    features: [
      { icon: Thermometer, title: 'Cảm biến đa thông số', desc: 'Đo nhiệt độ, độ ẩm, độ mặn, độ pH, oxy hòa tan, độ đục liên tục và chính xác.' },
      { icon: Activity, title: 'Dữ liệu thời gian thực', desc: 'Thu thập và truyền dữ liệu tự động, hiển thị trực tiếp trên dashboard web và app di động.' },
      { icon: Bell, title: 'Cảnh báo tức thời', desc: 'Gửi thông báo ngay qua Zalo/SMS khi thông số vượt ngưỡng an toàn — phản ứng kịp thời trước sự cố.' },
      { icon: Smartphone, title: 'Quản lý trên di động', desc: 'Ứng dụng mobile theo dõi nhiều ao/vùng trồng cùng lúc, mọi lúc mọi nơi.' },
      { icon: Zap, title: 'Thiết bị bền — tiết kiệm điện', desc: 'Cảm biến chống nước, chịu môi trường khắc nghiệt, hỗ trợ pin mặt trời, tuổi thọ cao.' },
      { icon: BarChart3, title: 'Phân tích & dự báo', desc: 'Lịch sử dữ liệu, biểu đồ xu hướng, hỗ trợ dự báo dịch bệnh và tối ưu lịch cho ăn/tưới.' },
    ],
    technologies: [
      'LoRaWAN / 4G / WiFi',
      'MQTT Protocol',
      'Node-RED',
      'InfluxDB / TimeSeries DB',
      'Grafana Dashboard',
      'React Native (Mobile)',
      'Zalo OA / SMS Alert',
      'Solar Power Support',
    ],
    benefits: [
      { value: '24/7', label: 'Giám sát không ngừng nghỉ', color: 'blue' },
      { value: '↓40%', label: 'Giảm thiệt hại do sự cố', color: 'emerald' },
      { value: '↑30%', label: 'Tăng năng suất nuôi trồng', color: 'emerald' },
      { value: '0s', label: 'Thời gian cảnh báo', color: 'blue' },
    ],
    differences: [
      'Thiết bị được hiệu chuẩn chuẩn xác, số liệu đáng tin cậy cho quyết định sản xuất',
      'Hỗ trợ đa giao thức (LoRaWAN, 4G, WiFi) — phủ sóng cả vùng sâu, vùng xa',
      'Tích hợp AI phân tích xu hướng, cảnh báo sớm dịch bệnh trước khi bùng phát',
    ],
  },
  'cusc-portal': {
    id: 'cusc-portal',
    name: 'CUSC-Portal',
    subtitle: 'Cổng thông tin điện tử chuyên nghiệp',
    icon: Globe,
    type: 'service',
    overview: 'CUSC-Portal là nền tảng cổng thông tin điện tử hiện đại, được thiết kế riêng cho cơ quan nhà nước, trường học và đơn vị sự nghiệp. Giao diện chuẩn Chính phủ số, tối ưu SEO, bảo mật đa lớp — giúp tổ chức xây dựng "mặt tiền số" chuyên nghiệp, minh bạch và phục vụ người dân, học sinh, đối tác hiệu quả.',
    features: [
      { icon: Palette, title: 'Giao diện hiện đại', desc: 'Responsive mọi thiết bị, chuẩn WCAG 2.2 AA, tùy biến theo nhận diện thương hiệu đơn vị.' },
      { icon: Search, title: 'Tối ưu SEO', desc: 'Cấu trúc URL chuẩn, meta tags tự động, sitemap XML — tăng khả năng hiển thị trên Google.' },
      { icon: ShieldCheck, title: 'Bảo mật đa lớp', desc: 'HTTPS, phân quyền vai trò, chống XSS/SQL Injection, tuân thủ Luật An ninh mạng 2018.' },
      { icon: LayoutDashboard, title: 'Quản lý nội dung', desc: 'CMS trực quan, đăng tin tức, văn bản, thông báo không cần kỹ thuật.' },
      { icon: Share2, title: 'Kết nối mạng xã hội & TMĐT', desc: 'Tích hợp Facebook, Zalo, YouTube, sàn thương mại điện tử và cổng thanh toán trực tuyến.' },
      { icon: BarChart3, title: 'Thống kê & Báo cáo', desc: 'Dashboard theo dõi lượt truy cập, hành vi người dùng, hiệu quả nội dung theo thời gian thực.' },
    ],
    technologies: [
      'Next.js / React',
      'TailwindCSS',
      'PostgreSQL',
      'Redis Cache',
      'Nginx + Let\'s Encrypt SSL',
      'Google Analytics 4',
      'OpenID Connect (SSO)',
      'Zalo / Facebook API',
    ],
    benefits: [
      { value: '🏆', label: 'Tăng nhận diện thương hiệu', color: 'blue' },
      { value: '📈', label: 'Thu hút người dùng mới', color: 'emerald' },
      { value: '💰', label: 'Giảm chi phí vận hành', color: 'emerald' },
      { value: '⭐', label: 'Nâng cao uy tín đơn vị', color: 'blue' },
    ],
    differences: [
      'Tuân thủ Khung kiến trúc Chính phủ số, sẵn sàng kết nối liên thông',
      'Giao diện chuẩn WCAG 2.2 AA — tiếp cận được mọi đối tượng, kể cả người khuyết tật',
      'Hỗ trợ đa ngôn ngữ, đa đơn vị trên cùng nền tảng (multi-tenant)',
    ],
    clients: [
      'Đại học Cần Thơ',
      'Trường Đại học Việt Đức',
      'Trường Cao đẳng nghề Sóc Trăng',
      'Trung tâm Y tế Huyện Châu Thành',
      'Trung tâm Dịch vụ Khuyến Nông TP. Cần Thơ',
      'Hội xây dựng TP. Cần Thơ',
      'Công ty CP ĐT&PT Nhà Cà Mau',
    ],
  },
  'cho-thuê-phần-mềm': {
    id: 'cho-thuê-phần-mềm',
    name: 'Cho thuê phần mềm',
    subtitle: 'Giải pháp SaaS & Licensing chuyên nghiệp',
    icon: Settings,
    overview: 'Trong bối cảnh Chính phủ đẩy mạnh chủ trương ưu tiên thuê dịch vụ Công nghệ thông tin (CNTT) đặc biệt áp dụng trong hoạt động của các cơ quan nhà nước, CUSC đã xây dựng các giải pháp cho thuê chuyên nghiệp, khẳng định vị thế là đối tác tin cậy, giúp các đơn vị tối ưu hóa nguồn lực và giảm áp lực vận hành hạ tầng.',
    type: 'service',
    longDescription: `Các giải pháp của CUSC không chỉ tập trung vào công nghệ mà còn tuân thủ và đáp ứng đầy đủ các quy định của pháp luật hiện hành. Dịch vụ được xây dựng nghiêm ngặt theo:
• Thông tư 18/2024/TT-BTTTT về quy định lập và quản lý chi phí đầu tư ứng dụng công nghệ thông tin, thuê dịch vụ công nghệ thông tin sử dụng nguồn vốn ngân sách nhà nước.
• Nghị định 45/2026/NĐ-CP về quản lý đầu tư ứng dụng CNTT sử dụng ngân sách Nhà nước.
• Khung kiến trúc Chính phủ số: Đảm bảo khả năng kết nối, liên thông và chia sẻ dữ liệu xuyên suốt giữa các hệ thống.

Hệ sinh thái giải pháp đa dạng của CUSC mang đến danh mục dịch vụ thuê phần mềm linh hoạt, đáp ứng các nhu cầu quản trị hiện đại, một số phần mềm cho thuê tiêu biểu gồm:
1. Quản lý sáng kiến đột phá với CUSC-IES.
2. Số hóa quy trình ISO điện tử với CUSC-ISOO.
3. Quản lý khoa học công nghệ chuyên sâu with CUSC-STM.
4. Hệ thống quản trị đại học thông minh với CUSC-UIIS.

Với mô hình triển khai linh hoạt từ sử dụng hạ tầng sẵn có đến dịch vụ trọn gói (SaaS), CUSC cam kết mang lại sự an toàn tuyệt đối và hiệu quả vận hành tối ưu cho đơn vị sử dụng.`,
    features: [],
    technologies: [],
    benefits: []
  },
  'kiểm-thử-phần-mềm': {
    id: 'kiểm-thử-phần-mềm',
    name: 'Kiểm thử phần mềm',
    subtitle: 'Software Testing & QA',
    icon: FileCheck,
    type: 'service',
    overview: 'Trong kỷ nguyên số hóa, chất lượng phần mềm không chỉ nằm ở tính năng mà còn ở sự ổn định và tính bảo mật tuyệt đối. CUSC cung cấp dịch vụ kiểm thử chuyên nghiệp, giúp các chủ đầu tư tối ưu hóa quy trình nghiệm thu và đảm bảo hệ thống vận hành bền vững theo các tiêu chuẩn quản lý hiện hành.',
    longDescription: `Dịch vụ được xây dựng và thực hiện dựa trên các căn cứ pháp lý và tiêu chuẩn kỹ thuật:
• Thông tư 16/2024/TT-BTTTT: Đảm bảo chi tiết công tác triển khai, giám sát và xác định các yêu cầu đặc thù về chất lượng dịch vụ CNTT theo yêu cầu riêng.
• Nghị định 356/2025/NĐ-CP: Tuân thủ chặt chẽ các hướng dẫn thi hành Luật Bảo vệ dữ liệu cá nhân 2025, bảo vệ quyền riêng tư và an toàn thông tin tuyệt đối cho người dùng.

Chúng tôi thực hiện quy trình kiểm soát chất lượng toàn diện, bao gồm:
• Kiểm thử chấp nhận người dùng (UAT): Bước thẩm định bắt buộc giúp chủ đầu tư xác nhận phần mềm đáp ứng đầy đủ và chính xác các yêu cầu chức năng thực tế.
• Đánh giá Hiệu năng hệ thống: Kiểm thử khả năng chịu tải cao, xử lý truy cập đồng thời và đo lường ngưỡng mở rộng của dịch vụ.
• Bảo mật & Riêng tư: Kiểm tra tính tuân thủ trong mã hóa dữ liệu và cơ chế kiểm soát truy cập, phòng ngừa rủi ro rò rỉ thông tin.
• Hệ thống tài liệu chuẩn mực: Cung cấp đầy đủ kết quả kiểm thử bằng văn bản, biên bản nghiệm thu và các chứng nhận chất lượng, phục vụ công tác thanh kiểm tra và lưu trữ hồ sơ.

Để tăng cường độ chính xác và tiết kiệm thời gian, CUSC ứng dụng các công cụ kiểm thử tự động tiên tiến:
• Kiểm thử Hồi quy tự động (Regression Testing): Đảm bảo các thay đổi hoặc nâng cấp mã nguồn không gây lỗi cho các chức năng hiện hữu, duy trì tính ổn định của hệ thống.
• Kiểm thử Bảo mật chuyên sâu: Tự động nhận diện lỗ hổng bảo mật và các điểm yếu tiềm tàng, đáp ứng các tiêu chuẩn an ninh mạng quốc gia.
• Tối ưu hóa Hiệu suất: Đánh giá độ tin cậy và tốc độ phản hồi của hệ thống dưới nhiều kịch bản áp lực khác nhau.
• Xác minh Dữ liệu: Tự động hóa việc đối soát tính toàn vẹn và độ chính xác của dữ liệu, đảm bảo tuân thủ các quy định về lưu trữ và xử lý thông tin số.`,
    features: [],
    technologies: [],
    benefits: []
  },
  'tư-vấn-dự-án-đầu-tư-udcntt': {
    id: 'tư-vấn-dự-án-đầu-tư-udcntt',
    name: 'Tư vấn dự án đầu tư UDCNTT',
    subtitle: 'IT Investment Consulting & Strategy',
    icon: GraduationCap,
    type: 'service',
    overview: 'Trong bối cảnh hạ tầng số không ngừng phát triển, việc đầu tư CNTT đòi hỏi một tầm nhìn chiến lược đi kèm với sự tuân thủ pháp lý nghiêm ngặt. CUSC cung cấp dịch vụ Tư vấn dự án đầu tư ứng dụng CNTT (IT Investment Consulting) chuyên sâu, giúp khách hàng tối ưu hóa nguồn lực, quản trị rủi ro và hiện thực hóa các mục tiêu chuyển đổi số bền vững.',
    longDescription: `Chúng tôi cam kết sự chuẩn xác trong mọi hồ sơ tư vấn, đảm bảo tuân thủ đúng và đủ các quy định pháp lý mới nhất:
• Nghị định 45/2026/NĐ-CP: Tuân thủ quy định quản lý đầu tư ứng dụng CNTT sử dụng nguồn ngân sách Nhà nước.
• Thông tư 16/2024/TT-BTTTT: Đảm bảo chi tiết hóa công tác triển khai, giám sát và xác định các tiêu chuẩn chất lượng dịch vụ đặc thù.
• Quyết định 2378/QĐ-BTTTT: Quản lý chi phí dựa trên định mức kinh tế - kỹ thuật hiện hành của Bộ Thông tin và Truyền thông, đảm bảo tính minh bạch và tối ưu hóa ngân sách đầu tư.

CUSC đồng hành cùng quý khách hàng qua từng giai đoạn then chốt, biến những bài toán quản lý phức tạp thành các giải pháp công nghệ khả thi:
• Giai đoạn Tiền thiết kế (Khảo sát & Khả thi): Thực hiện khảo sát thực trạng, lập Báo cáo nghiên cứu khả thi (FS), phác thảo lộ trình và đánh giá rủi ro cho các dự án mua sắm, nâng cấp hạ tầng số.
• Giai đoạn Thiết kế & Đấu thầu: Lập thiết kế thi công, dự toán chi tiết và xây dựng hồ sơ mời thầu chất lượng cao. Chúng tôi hỗ trợ đánh giá hồ sơ dự thầu công tâm, giúp chủ đầu tư lựa chọn những nhà thầu có năng lực thực chất.
• Giai đoạn Thi công & Giám sát: Quản lý tiến độ sát sao, giám sát kỹ thuật thi công hệ thống hạ tầng mạng và phần mềm, đảm bảo nghiệm thu đúng tiêu chuẩn chất lượng đã cam kết.

Với đội ngũ chuyên gia giàu kinh nghiệm, CUSC cung cấp danh mục tư vấn đa dạng:
1. Tư vấn giải pháp ứng dụng CNTT-TT
2. Tư vấn lập dự án đầu tư / lập Báo cáo nghiên cứu khả thi
3. Tư vấn lập Thiết kế thi công và Tổng dự toán
4. Tư vấn giám sát và quản lý dự án CNTT-TT

Không chỉ dừng lại ở việc tư vấn kỹ thuật, CUSC mang đến "Giải pháp Tư vấn Tổng thể". Chúng tôi giúp khách hàng giải quyết bài toán đồng bộ hóa dữ liệu, kết nối liên thông theo Khung kiến trúc Chính phủ số, đồng thời đảm bảo mọi đồng vốn đầu tư đều mang lại hiệu quả vận hành thực tế cao nhất.`,
    features: [],
    technologies: [],
    benefits: []
  },
  'gia-công-phần-mềm': {
    id: 'gia-công-phần-mềm',
    name: 'Gia công phần mềm',
    subtitle: 'Software Outsourcing Services',
    icon: Code2,
    type: 'service',
    overview: 'Trung tâm Công nghệ phần mềm Đại học Cần Thơ (CUSC) cung cấp dịch vụ Gia công phần mềm nhằm hỗ trợ các tổ chức, doanh nghiệp trong và ngoài nước phát triển các giải pháp công nghệ thông tin theo yêu cầu.',
    longDescription: `Với kinh nghiệm hợp tác cùng các đối tác quốc tế tại Nhật Bản, Phần Lan, Malaysia,… CUSC có khả năng triển khai đa dạng dự án trên nhiều lĩnh vực và nền tảng công nghệ, đáp ứng các tiêu chuẩn chất lượng quốc tế, quy trình chuyên nghiệp và khả năng mở rộng lâu dài.

Dịch vụ Gia công phần mềm tại Trung tâm Công nghệ phần mềm Đại học Cần Thơ bao gồm toàn bộ các hoạt động trong vòng đời phát triển phần mềm, từ tiếp nhận yêu cầu đến triển khai, vận hành và bảo trì.

CUSC có thể triển khai dịch vụ trên nhiều mảng:
• Phát triển ứng dụng doanh nghiệp và hệ thống thông tin.
• Giải pháp web, desktop và hệ thống phân tán.
• Phát triển ứng dụng di động.
• Tích hợp hệ thống và chuyển đổi số.
• Kiểm thử phần mềm và đảm bảo chất lượng.
• Nghiên cứu, phát triển công nghệ mới (R&D, Prototype).

CUSC có năng lực triển khai trên nhiều nền tảng và công nghệ:
• Nền tảng Microsoft (.NET).
• Ngôn ngữ và framework: PHP, Java và các công nghệ mã nguồn mở.
• Phát triển ứng dụng di động trên Android và iOS.
• Công nghệ web hiện đại và hệ quản trị cơ sở dữ liệu phổ biến.

Ngoài ra, CUSC còn cung cấp dịch vụ hỗ trợ kỹ thuật, bảo trì và nâng cấp nhằm đảm bảo hệ thống vận hành ổn định, an toàn và phù hợp với định hướng phát triển lâu dài của khách hàng.`,
    features: [],
    technologies: [],
    benefits: []
  }
};
