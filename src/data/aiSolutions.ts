import { Bot, ScanFace, BarChart3, Languages, Zap, Globe, ShieldCheck, Cpu, MessageSquare, Eye, Database, Search, LayoutDashboard, FileCheck, GraduationCap, FileText } from 'lucide-react';

export interface AISolution {
  id: string;
  name: string;
  subtitle: string;
  icon: any;
  overview: string;
  features: {
    icon: any;
    title: string;
    desc: string;
  }[];
  technologies: string[];
  benefits: {
    value: string;
    label: string;
    color: string;
  }[];
  example?: {
    inputLabel: string;
    input: string;
    outputLabel: string;
    output: string[];
    note?: string;
  };
  differences?: string[];
  longDescription?: string;
  type?: 'ai' | 'service';
}

export const AI_SOLUTIONS: Record<string, AISolution> = {
  'ai-chatbot': {
    id: 'ai-chatbot',
    name: 'AI Chatbot',
    subtitle: 'Trợ lý ảo thông minh theo lĩnh vực',
    icon: Bot,
    type: 'ai',
    overview: 'AI Chatbot là trợ lý ảo được “đào tạo” dựa trên dữ liệu thực tế của từng đơn vị (quy trình thủ tục, văn bản, quy định, chương trình đào tạo…). Nhờ đó, hệ thống có thể trả lời chính xác theo từng lĩnh vực cụ thể như hành chính công, giáo dục, dịch vụ công…',
    features: [
      { icon: FileCheck, title: "Hướng dẫn thủ tục", desc: "Hướng dẫn người dân thực hiện thủ tục hành chính (hồ sơ, quy trình, thời gian xử lý)." },
      { icon: Search, title: "Tra cứu thông tin", desc: "Tra cứu thông tin chi tiết về cơ quan, dịch vụ, biểu mẫu..." },
      { icon: GraduationCap, title: "Hỗ trợ giáo dục", desc: "Hỗ trợ sinh viên tra cứu lịch học, học phí, quy chế đào tạo." },
      { icon: MessageSquare, title: "Tư vấn nghiệp vụ", desc: "Giải đáp câu hỏi theo đúng nghiệp vụ chuyên môn của từng đơn vị." },
      { icon: Globe, title: "Hoạt động 24/7", desc: "Sẵn sàng phục vụ trên Website, Cổng dịch vụ công, Zalo, Facebook..." },
    ],
    technologies: [
      'Large Language Models (LLM)',
      'Retrieval-Augmented Generation (RAG)',
      'Natural Language Understanding (NLU)',
      'Multi-channel Integration (Zalo, FB, Web)'
    ],
    benefits: [
      { value: '24/7', label: 'Phục vụ không ngừng nghỉ', color: 'blue' },
      { value: '100%', label: 'Thông tin thống nhất', color: 'emerald' },
      { value: '70%', label: 'Giảm tải tiếp nhận', color: 'emerald' },
      { value: '0s', label: 'Thời gian phản hồi', color: 'blue' }
    ],
    example: {
      inputLabel: "Người dân hỏi",
      input: "Tôi cần làm giấy phép kinh doanh thì chuẩn bị gì?",
      outputLabel: "Chatbot sẽ",
      output: [
        "Liệt kê hồ sơ cần chuẩn bị",
        "Hướng dẫn từng bước thực hiện",
        "Cung cấp link nộp hồ sơ online"
      ],
      note: "Không cần gọi điện hay đến trực tiếp cơ quan."
    },
    differences: [
      "Được huấn luyện theo dữ liệu riêng của đơn vị (không phải chatbot chung chung)",
      "Hiểu đúng ngữ cảnh nghiệp vụ (hành chính, giáo dục…)",
      "Có thể cập nhật kiến thức tức thì theo văn bản mới"
    ]
  },
  'computer-vision': {
    id: 'computer-vision',
    name: 'Computer Vision',
    subtitle: 'Nhận diện & Phân tích hình ảnh trong quản lý',
    icon: ScanFace,
    type: 'ai',
    overview: 'Giải pháp sử dụng camera kết hợp AI để tự động nhận diện và phân tích hình ảnh, hỗ trợ công tác quản lý, giám sát trong cơ quan, trường học, khu vực công cộng.',
    features: [
      { icon: ScanFace, title: "Nhận diện khuôn mặt", desc: "Điểm danh sinh viên, kiểm soát ra vào tự động." },
      { icon: Zap, title: "Đọc biển số xe", desc: "Quản lý bãi xe, kiểm soát phương tiện ra vào cơ quan." },
      { icon: BarChart3, title: "Đếm số lượng người", desc: "Thống kê mật độ tại hội trường, khu tiếp dân." },
      { icon: ShieldCheck, title: "Giám sát an ninh", desc: "Phát hiện hành vi bất thường và cảnh báo tức thì." },
      { icon: GraduationCap, title: "Quản lý học đường", desc: "Hỗ trợ giám sát lớp học và an ninh khuôn viên trường." },
    ],
    technologies: [
      'Convolutional Neural Networks (CNN)',
      'Object Detection (YOLO, SSD)',
      'Image Segmentation',
      'Edge Computing for Real-time Processing'
    ],
    benefits: [
      { value: '95%', label: 'Độ chính xác nhận diện', color: 'emerald' },
      { value: '100%', label: 'Tự động hóa quản lý', color: 'blue' },
      { value: 'Real-time', label: 'Xử lý thời gian thực', color: 'emerald' },
      { value: '24/7', label: 'Giám sát thông minh', color: 'blue' }
    ],
    example: {
      inputLabel: "Tình huống",
      input: "Sinh viên ra vào ký túc xá",
      outputLabel: "Hệ thống sẽ",
      output: [
        "Tự động nhận diện khuôn mặt sinh viên",
        "Kiểm soát an ninh, sinh viên ra vào KTX",
        "Ghi nhận nhật ký ra vào và cảnh báo người lạ"
      ],
      note: "Đảm bảo an ninh tuyệt đối, không cần thẻ từ hay kiểm soát thủ công."
    },
    differences: [
      "Tự động hóa quy trình quản lý, giảm sai sót thủ công",
      "Tăng tính minh bạch và chính xác trong giám sát",
      "Hỗ trợ ra quyết định dựa trên dữ liệu thực tế"
    ]
  },
  'data-analytics': {
    id: 'data-analytics',
    name: 'Data Analytics',
    subtitle: 'Phân tích dữ liệu phục vụ điều hành',
    icon: BarChart3,
    type: 'ai',
    overview: 'Hệ thống giúp tổng hợp và phân tích dữ liệu từ nhiều nguồn để hỗ trợ lãnh đạo ra quyết định nhanh chóng và chính xác.',
    features: [
      { icon: Database, title: "Tổng hợp dữ liệu", desc: "Kết nối dữ liệu từ các hệ thống dịch vụ công, đào tạo, quản lý..." },
      { icon: LayoutDashboard, title: "Báo cáo trực quan", desc: "Hiển thị các chỉ số quan trọng dưới dạng biểu đồ và Dashboard." },
      { icon: FileCheck, title: "Thống kê tiến độ", desc: "Theo dõi tình hình xử lý hồ sơ và tiến độ công việc theo thời gian thực." },
      { icon: BarChart3, title: "Phân tích xu hướng", desc: "Dự báo nhu cầu và phát hiện sớm các vấn đề phát sinh." },
    ],
    technologies: [
      'Big Data Processing (Spark, Hadoop)',
      'Predictive Modeling',
      'Business Intelligence (BI)',
      'Statistical Analysis'
    ],
    benefits: [
      { value: 'Real-time', label: 'Điều hành hiệu quả', color: 'emerald' },
      { value: '100%', label: 'Minh bạch hóa dữ liệu', color: 'blue' },
      { value: 'Dự báo', label: 'Dự báo xu hướng', color: 'emerald' },
      { value: 'Decision', label: 'Hỗ trợ ra quyết định', color: 'blue' }
    ],
    example: {
      inputLabel: "Tình huống",
      input: "Trong cơ sở giáo dục",
      outputLabel: "Hệ thống sẽ",
      output: [
        "Phân tích kết quả học tập sinh viên",
        "Theo dõi tỷ lệ tốt nghiệp, cảnh báo sớm"
      ],
      note: "Hỗ trợ lãnh đạo ra quyết định dựa trên dữ liệu thực tế thay vì cảm tính."
    },
    differences: [
      "Hỗ trợ lãnh đạo điều hành hiệu quả và minh bạch",
      "Phát hiện vấn đề sớm để xử lý kịp thời",
      "Tối ưu hóa nguồn lực dựa trên dữ liệu thực tế"
    ]
  },
  'nlp-solutions': {
    id: 'nlp-solutions',
    name: 'NLP Solutions',
    subtitle: 'Xử lý ngôn ngữ tự nhiên theo nghiệp vụ',
    icon: Languages,
    type: 'ai',
    overview: 'Công nghệ giúp hệ thống hiểu và xử lý ngôn ngữ tiếng Việt theo ngữ cảnh thực tế (hành chính, giáo dục…), kể cả khi người dùng nhập không chính xác.',
    features: [
      { icon: MessageSquare, title: "Hiểu câu hỏi tự nhiên", desc: "Hiểu ý định của người dân/sinh viên qua ngôn ngữ đời thường." },
      { icon: Zap, title: "Phân loại yêu cầu", desc: "Tự động phân loại và chuyển tiếp yêu cầu đến đúng bộ phận xử lý." },
      { icon: FileText, title: "Tóm tắt văn bản", desc: "Tóm tắt nội dung văn bản dài, hỗ trợ tra cứu thông tin nhanh chóng." },
      { icon: Search, title: "Phân tích phản ánh", desc: "Phân tích và tổng hợp các ý kiến phản ánh, kiến nghị của người dân." },
    ],
    technologies: [
      'BERT/Transformer Models',
      'Named Entity Recognition (NER)',
      'Sentiment Analysis',
      'Text Summarization'
    ],
    benefits: [
      { value: 'Friendly', label: 'Giao tiếp thân thiện', color: 'emerald' },
      { value: 'Easy', label: 'Dễ dàng sử dụng', color: 'blue' },
      { value: 'Efficient', label: 'Tăng hiệu quả xử lý', color: 'emerald' },
      { value: 'Platform', label: 'Nền tảng dịch vụ thông minh', color: 'blue' }
    ],
    example: {
      inputLabel: "Người dân nhập",
      input: "làm giấy tạm trú cần gì",
      outputLabel: "Hệ thống vẫn hiểu và trả lời đúng",
      output: [
        "Hồ sơ cần chuẩn bị",
        "Nơi nộp hồ sơ",
        "Thời gian xử lý"
      ],
      note: "Không cần nhập đúng từ khóa như hệ thống cũ."
    },
    differences: [
      "Hiểu đúng ngữ cảnh tiếng Việt chuyên ngành (hành chính, giáo dục...)",
      "Xử lý tốt các câu hỏi không đúng ngữ pháp hoặc sai lỗi chính tả",
      "Tự động hóa việc phân loại và tóm tắt thông tin từ văn bản"
    ]
  }
};
