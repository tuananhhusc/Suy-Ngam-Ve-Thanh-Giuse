# Báo Cáo Nghiên Cứu Chuyên Sâu Về Thánh Giuse

Dự án web học thuật trình bày báo cáo nghiên cứu chuyên sâu về **Thánh Giuse (Josephology)**. Website được thiết kế với phong cách hiện đại, tối giản nhưng vẫn mang đậm nét học thuật và tôn nghiêm, giúp người đọc dễ dàng tiếp cận các nội dung thần học và mục vụ.

## 🌟 Tính Năng Nổi Bật

- **Giao diện Học thuật Cao cấp**: Sử dụng hệ phông chữ kết hợp giữa Inter (hiện đại, dễ đọc) và EB Garamond (cổ điển, trang trọng).
- **Chế độ Zen Mode (Tập trung)**: Cho phép ẩn toàn bộ các yếu tố gây xao nhãng để người dùng hoàn toàn tập trung vào nội dung nghiên cứu.
- **Hệ thống Chú thích Tương tác**: Hover vào các con số chú thích để xem chi tiết nguồn trích dẫn ngay lập tức.
- **Dòng thời gian Lịch sử (Timeline)**: Trình bày các cột mốc phát triển của Josephology một cách sinh động qua các hiệu ứng chuyển động.
- **Lightbox Hình ảnh**: Xem các tác phẩm nghệ thuật về Thánh Giuse ở độ phân giải cao với khung nhìn tương tác.
- **Mục lục Thông minh**: Tự động theo dõi vị trí đọc và cho phép điều hướng nhanh giữa các phần.
- **Tối ưu hóa In ấn**: Cung cấp định dạng in đẹp mắt, chuyên nghiệp cho các báo cáo giấy.
- **SEO & Schema**: Tích hợp dữ liệu cấu trúc `ScholarlyArticle` giúp tối ưu hóa tìm kiếm trên Google.

## 🛠 Công Nghệ Sử Dụng

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI/Logic**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Tối ưu sẵn cho Vercel hoặc Docker.

## 📂 Cấu Trúc Thư Mục

- `/app`: Chứa các trang chính và layout, cấu hình SEO và font chữ.
- `/components`: Các thành phần UI tái sử dụng (Hero, Footer, Timeline, Tooltip, v.v.).
- `/public`: Chứa tài sản tĩnh như hình ảnh, biểu tượng và các tệp âm thanh (nếu có).
- `/lib`: Các tiện ích hỗ trợ (utils, hooks).

## 🚀 Hướng Dẫn Cài Đặt

1. **Clone dự án**:
   ```bash
   git clone <url-du-an>
   cd thanhgiusechuagiesu
   ```

2. **Cài đặt dependencies**:
   ```bash
   npm install
   ```

3. **Chạy lôi bộ (Development)**:
   ```bash
   npm run dev -- -p 3005
   ```
   Mở [http://localhost:3005](http://localhost:3005) trên trình duyệt của bạn.

4. **Xây dựng bản chính thức (Build)**:
   ```bash
   npm run build
   npm start
   ```

## 📝 Giấy Phép

Dự án này được phát triển cho mục đích giáo dục và nghiên cứu thần học. Mọi nội dung thuộc bản quyền của nhóm tác giả nghiên cứu.

---
*© 2026 Báo Cáo Chuyên Sâu Về Thánh Giuse.*
