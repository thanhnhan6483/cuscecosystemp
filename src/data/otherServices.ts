import { Settings, FileCheck, LayoutDashboard, BookOpen, GraduationCap, ShieldCheck, Zap, Cloud, Code2, Layers, Smartphone, Network, Cpu } from 'lucide-react';
import { AISolution } from './aiSolutions';

export const OTHER_SERVICES: Record<string, AISolution> = {
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
