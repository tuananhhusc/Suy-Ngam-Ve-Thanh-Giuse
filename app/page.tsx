import Hero from "@/components/Hero";
import TableOfContents, { TocItem } from "@/components/TableOfContents";
import ContentSection from "@/components/ContentSection";
import Footer from "@/components/Footer";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import BackToTop from "@/components/BackToTop";
import ScholarlyDivider from "@/components/ScholarlyDivider";
import ScholarlyControls from "@/components/ScholarlyControls";
import Timeline from "@/components/Timeline";
import CitationTooltip from "@/components/CitationTooltip";
import LightboxImage from "@/components/LightboxImage";

const tocItems: TocItem[] = [
  { id: "dan-nhap", title: "1. Dẫn Nhập", level: 1 },
  { id: "lich-su-josephology", title: "1.1. Cột Mốc Lịch Sử", level: 2 },
  { id: "nen-tang-huan-quyen", title: "2. Nền Tảng Huấn Quyền", level: 1 },
  { id: "redemptoris-custos", title: "2.1. Redemptoris Custos", level: 2 },
  { id: "patris-corde", title: "2.2. Patris Corde", level: 2 },
  { id: "chieu-kich-chiem-niem", title: "3. Chiều Kích Chiêm Niệm", level: 1 },
  { id: "su-thinh-lang-thanh", title: "3.1. Sự Thinh Lặng Thánh", level: 2 },
  { id: "su-vang-phuc-trong-duc-tin", title: "3.2. Sự Vâng Phục Trong Đức Tin", level: 2 },
  { id: "duc-cong-chinh", title: "3.3. Đức Công Chính", level: 2 },
  { id: "than-hoc-ve-lao-dong", title: "4. Thần Học Về Lao Động", level: 1 },
  { id: "xuong-moc-nadaret", title: "4.1. Xưởng Mộc Nadarét", level: 2 },
  { id: "lao-dong-nhu-hinh-thuc-cau-nguyen", title: "4.2. Lao Động Cầu Nguyện", level: 2 },
  { id: "ung-dung-muc-vu", title: "5. Ứng Dụng Mục Vụ", level: 1 },
  { id: "mo-hinh-joseph", title: "5.1. Mô Hình JOSEPH", level: 2 },
  { id: "mau-guong-di-dan", title: "5.2. Mẫu Gương Di Dân", level: 2 },
  { id: "nen-tang-thanh-hien", title: "5.3. Nền Tảng Thánh Hiến", level: 2 },
  { id: "di-san-tam-linh", title: "6. Di Sản Tâm Linh Tại Việt Nam", level: 1 },
  { id: "phung-vu-thang-ba", title: "6.1. Phụng Vụ Tháng Ba", level: 2 },
  { id: "thuc-hanh-dao-duc", title: "6.2. Các Thực Hành Đạo Đức", level: 2 },
  { id: "am-nhac-thanh-ca", title: "6.3. Âm Nhạc Thánh Ca", level: 2 },
  { id: "vai-tro-bon-mang", title: "6.4. Vai Trò Bổn Mạng", level: 2 },
  { id: "ket-luan", title: "7. Kết Luận", level: 1 },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary/20 selection:text-primary">
      <div className="no-zen no-print">
        <ReadingProgressBar />
      </div>
      <div className="no-zen">
        <Hero />
      </div>
      <ScholarlyControls />
      
      <div className="flex-1 max-w-[90rem] mx-auto w-full flex flex-col lg:flex-row relative">
        <aside className="no-zen no-print">
          <TableOfContents items={tocItems} />
        </aside>
        
        <main className="flex-1 px-6 lg:px-16 xl:px-24 py-12 lg:py-16 max-w-5xl bg-surface/30 zen-mode-target">
          
          <ContentSection id="dan-nhap" title="1. Dẫn Nhập" className="drop-cap">
            <p className="scholarly-p">
              Trong toàn bộ hệ thống thần học Kitô giáo và lịch sử cứu độ, dung mạo của Thánh Giuse luôn hiện diện như một mầu nhiệm vĩ đại, đan xen giữa sự thinh lặng tuyệt đối và vai trò bản lề trong kế hoạch Nhập Thể của Thiên Chúa <CitationTooltip id="21" content="Lịch sử truyền giáo và sự xác lập bổn mạng Giáo hội Việt Nam 1673-1678."><span className="citation-mark">21</span></CitationTooltip>. Sự suy niệm về Thánh Giuse, hay còn gọi là Tôn kính Thánh Giuse (Josephology), không chỉ đơn thuần là một hình thức đạo đức bình dân đã bám rễ sâu trong tâm thức các tín hữu, mà thực sự đã phát triển thành một hệ thống thần học sâu sắc, đa chiều <CitationTooltip id="11" content="Wikipedia contributors. Saint Joseph in the Catholic Church in Vietnam."><span className="citation-mark">11</span></CitationTooltip>. Hệ thống này soi sáng nhiều chiều kích khác nhau, từ tinh thần nội tâm sâu thẳm, giá trị thần học của lao động tay chân, cho đến các nguyên tắc định hướng mang tính thực tiễn cho đời sống gia đình và cấu trúc xã hội đương đại <CitationTooltip id="20" content="Thánh Giuse Trong Đời Sống Gia Đình - Hội Đồng Giám Mục Việt Nam."><span className="citation-mark">20</span></CitationTooltip>.
            </p>
            
            <h3 id="lich-su-josephology" className="text-2xl font-serif font-bold text-primary mt-12 mb-6 scroll-mt-24">
              1.1. Cột Mốc Lịch Sử Và Sự Phát Triển Của Josephology
            </h3>
            <p className="scholarly-p">
              Mặc dù lòng sùng kính Thánh Giuse đã có từ lâu, đặc biệt ở các Giáo hội Đông phương, nhưng sự phát triển thần học và các sắc lệnh của Giáo hoàng về ngài mới thực sự nở rộ trong vài thế kỷ gần đây <CitationTooltip id="21" content="Lịch sử truyền giáo và sự xác lập bổn mạng Giáo hội Việt Nam 1673-1678 - Tổng Giáo phận TP.HCM."><span className="citation-mark">21</span></CitationTooltip>. Tại Việt Nam, tầm ảnh hưởng của ngài đã được khẳng định từ rất sớm thông qua các văn kiện quốc tế.
            </p>

            <Timeline />

            <div className="max-w-3xl mx-auto">
              <LightboxImage 
                src="/Suy-Ngam-Ve-Thanh-Giuse/st-joseph-art.png" 
                alt="Thánh Giuse và Chúa Hài Nhi"
                caption="Thánh Giuse và Chúa Hài Nhi - Một tuyệt tác nghệ thuật cổ điển thể hiện sự bảo trợ thầm lặng."
              />
            </div>

            <p className="scholarly-p">
              Việc suy niệm về Thánh Giuse đòi hỏi một phương pháp tiếp cận toàn diện, kết nối các dữ kiện Kinh Thánh ít ỏi với những suy tư thần học mang tính hệ thống <CitationTooltip id="14" content="Suarez, F. (1590). De mysteriis vitae Christi."><span className="citation-mark">14</span></CitationTooltip>. Dù bốn sách Phúc Âm chỉ phác họa ngài qua một vài biến cố cốt lõi, nhưng bấy nhiêu cũng đủ để minh định sứ mạng cao cả mà Thiên Chúa quan phòng đã ủy thác cho ngài.
            </p>
            
            <ScholarlyDivider />
          </ContentSection>

          <ContentSection id="nen-tang-huan-quyen" title="2. Nền Tảng Huấn Quyền">
            <p>
              Sự chuyển biến sâu sắc trong việc nhận thức về vai trò và vị trí của Thánh Giuse được đánh dấu rõ nét qua các văn kiện của các vị Giáo hoàng. Từ sắc lệnh <em>Quemadmodum Deus</em> (1870) của Chân Phước Giáo Hoàng Piô IX, cho đến các giáo huấn của Đức Thánh Cha Lêô XIII, Thánh Gioan Phaolô II và Đức Thánh Cha Phanxicô, dung mạo Thánh Giuse ngày càng được khắc họa với một chiều sâu thần học vượt trội.
            </p>

            <h3 id="redemptoris-custos" className="text-2xl font-serif font-bold text-primary mt-12 mb-6 scroll-mt-24">
              2.1. Redemptoris Custos: Đấng Gìn Giữ Chúa Cứu Thế
            </h3>
            <p className="scholarly-p">
              Tông huấn <em>Redemptoris Custos</em> do Đức Giáo Hoàng Gioan Phaolô II ban hành năm 1989 đã đặt nền móng vững chắc cho nền thần học về Thánh Giuse <CitationTooltip id="6" content="Tông huấn Redemptoris Custos của Đức Thánh Cha Gioan Phaolô II - Vatican.va."><span className="citation-mark">6</span></CitationTooltip>. Thánh Giuse đã tham dự một cách trực tiếp và hữu hiệu vào mầu nhiệm Nhập Thể thông qua cuộc hôn nhân thực sự với Đức Maria <CitationTooltip id="4" content="Tông Huấn 'Redemptoris Custos' (Người Trông Nom Đấng Cứu Thế) - Giáo phận Bà Rịa."><span className="citation-mark">4</span></CitationTooltip>. Thần học Công giáo khẳng định rằng, dù đây là một cuộc hôn nhân hoàn toàn đồng trinh, nó vẫn mang đầy đủ tất cả các giá trị cốt lõi của một giao ước hôn nhân đích thực <CitationTooltip id="5" content="Tông Huấn Đấng Gìn Giữ Chúa Cứu Thế - Redemptoris Custos."><span className="citation-mark">5</span></CitationTooltip>.
            </p>
            <p className="scholarly-p">
              Việc thiên thần trao cho ngài quyền đặt tên cho Hài Nhi là "Giêsu" mang một sức nặng thần học to lớn. Qua việc đặt tên, Thánh Giuse đã chính thức đưa Đấng Cứu Thế vào dòng dõi Đavít theo lời hứa của các ngôn sứ, đồng thời chấp nhận trọn vẹn sứ mạng làm cha trần thế, một ơn gọi đòi hỏi sự hy sinh toàn diện và tự hủy không ngừng.
            </p>

            <h3 id="patris-corde" className="text-2xl font-serif font-bold text-primary mt-12 mb-6 scroll-mt-24">
              2.2. Patris Corde: Trái Tim Người Cha Trong Thời Đại Biến Động
            </h3>
            <p className="scholarly-p">
              Tông thư <em>Patris Corde</em> của Đức Thánh Cha Phanxicô mang đậm tính mục vụ, thể hiện sự thấu cảm sâu sắc với thân phận con người <CitationTooltip id="1" content="Tông thư Patris Corde (Với Trái Tim Người Cha) - Đức Giáo Hoàng Phanxicô (2020)."><span className="citation-mark">1</span></CitationTooltip>. Văn kiện phân tích ngài qua bảy đặc tính làm cha cốt lõi, tạo thành một khung mẫu toàn diện cho mọi hình thức lãnh đạo, giáo dục và bảo bọc trong xã hội hiện đại <CitationTooltip id="3" content="Kỷ niệm 150 năm công bố Thánh Giuse là Quan Thầy Hội Thánh toàn cầu."><span className="citation-mark">3</span></CitationTooltip>.
            </p>

            <div className="my-10 overflow-x-auto overflow-y-hidden shadow-sm rounded-xl">
              <table className="w-full text-left border-collapse border border-border min-w-[700px] bg-surface">
                <thead className="bg-[#f0ece1] text-primary font-serif">
                  <tr>
                    <th className="p-4 border-b border-border/70 text-base tracking-wide uppercase font-bold w-[25%]">Đặc tính (Patris Corde)</th>
                    <th className="p-4 border-b border-border/70 text-base tracking-wide uppercase font-bold w-[35%]">Ý nghĩa Thần học</th>
                    <th className="p-4 border-b border-border/70 text-base tracking-wide uppercase font-bold w-[40%]">Áp dụng Mục vụ & Xã hội</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50 text-foreground/85 text-[15px] leading-relaxed">
                  <tr className="hover:bg-primary/5 transition-colors group">
                    <td className="p-4 font-semibold text-primary-alt group-hover:text-primary flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                      </div>
                      1. Người cha được yêu thương
                    </td>
                    <td className="p-4">Trở thành khí cụ của tình yêu Thiên Chúa, trung gian của ân sủng.</td>
                    <td className="p-4">Nhắc nhở các gia trưởng về tầm quan trọng của việc để lại di sản tình yêu hơn là tài sản vật chất.</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors group">
                    <td className="p-4 font-semibold text-primary-alt group-hover:text-primary flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      </div>
                      2. Người cha dịu dàng
                    </td>
                    <td className="p-4">Phản chiếu lòng thương xót của Chúa Cha đối với sự yếu đuối của con người.</td>
                    <td className="p-4">Xóa bỏ định kiến về sự nam tính độc hại; khuyến khích sự bao dung, kiên nhẫn.</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors group">
                    <td className="p-4 font-semibold text-primary-alt group-hover:text-primary flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0-.83-.83-.83-2.17 0-3L12 9"/></svg>
                      </div>
                      3. Người cha vâng phục
                    </td>
                    <td className="p-4">Xin vâng (fiat) liên lỉ trước mọi thánh ý được mặc khải qua các biến cố và giấc mơ.</td>
                    <td className="p-4">Mời gọi sự tùng phục Lời Chúa trong một thế giới đề cao chủ nghĩa cá nhân.</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors group bg-surface-alt/20">
                    <td className="p-4 font-semibold text-primary-alt group-hover:text-primary flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                      </div>
                      4. Người cha chấp nhận
                    </td>
                    <td className="p-4">Đón nhận thực tại như nó vốn có mà không đòi hỏi những phép màu giải thoát.</td>
                    <td className="p-4">Giúp con người đối mặt với những thất bại, bệnh tật, hoặc khủng hoảng mà không oán trách.</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors group">
                    <td className="p-4 font-semibold text-primary-alt group-hover:text-primary flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                      </div>
                      5. Can đảm đầy sáng tạo
                    </td>
                    <td className="p-4">Biến nghịch cảnh thành cơ hội, nỗ lực tự nhiên cộng tác với ơn siêu nhiên.</td>
                    <td className="p-4">Động viên không đầu hàng số phận, tìm tòi những giải pháp sống còn trong khủng hoảng.</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors group">
                    <td className="p-4 font-semibold text-primary-alt group-hover:text-primary flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10v6"/><path d="M6 10V4.5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2V10"/><path d="M12 10v12"/></svg>
                      </div>
                      6. Người cha làm việc
                    </td>
                    <td className="p-4">Thánh hóa công việc tay chân, tham dự vào công trình sáng tạo.</td>
                    <td className="p-4">Khôi phục nhân phẩm lao động; đề cao tính thánh thiêng của mọi nghề nghiệp.</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors group">
                    <td className="p-4 font-semibold text-primary-alt group-hover:text-primary flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m3.3 7 8.7 5 8.7-5"/></svg>
                      </div>
                      7. Người cha trong bóng tối
                    </td>
                    <td className="p-4">Tình yêu không sở hữu, biết lùi bước để nhường chỗ cho sự phát triển của người con.</td>
                    <td className="p-4">Bài học cho giới giáo dục và lãnh đạo: giáo dục là trao ban tự do, không áp đặt.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
          </ContentSection>

          {/* Section 3 */}
          <ContentSection id="chieu-kich-chiem-niem" title="3. Chiều Kích Chiêm Niệm">
            <p>
              Sự ảnh hưởng sâu rộng của Thánh Giuse trong lịch sử Giáo hội không đến từ những bài giảng hùng hồn, những phép lạ vĩ đại hay những phép lạ ngoạn mục như các vị tiên tri thời Cựu Ước, mà xuất phát từ một cốt lõi tâm linh vững chắc và các nhân đức nhân bản được tôi luyện qua lò lửa của thử thách. Khảo sát các nguồn tài liệu thần học và suy niệm cho thấy có những trụ cột tâm linh đặc thù định hình nên dung mạo của ngài.
            </p>

            <h3 id="su-thinh-lang-thanh" className="text-2xl font-serif font-bold text-primary mt-12 mb-6 scroll-mt-24">
              3.1. Sự Thinh Lặng Thánh (Apophatic Silence): Không Gian Kiến Tạo Tự Do Thần Khí
            </h3>
            <p className="scholarly-p">
              Một trong những đặc nét nổi bật và gây kinh ngạc nhất của Thánh Giuse là sự thinh lặng tuyệt đối. Xuyên suốt các trang của bốn sách Phúc Âm, không một lời nói, một câu phát biểu hay một âm tiết nào của ngài được các thánh sử ghi lại. Đây được các nhà thần học gọi là "Thinh lặng Apophatic" (Apophatic Silence) - một sự thinh lặng không mang tính phủ nhận, mà mang tính thần bí, nơi ngôn từ trở nên bất lực trước mầu nhiệm vĩ đại của Thiên Chúa <CitationTooltip id="9" content="Thần học về sự thinh lặng của Thánh Giuse - Nguyễn Văn Nội (2021)."><span className="citation-mark">9</span></CitationTooltip>.
            </p>
            <p className="scholarly-p">
              Sự thinh lặng của Thánh Giuse chính là một "sa mạc nội tâm," nơi ngài đạt tới một sự tự do tuyệt đối để hoàn toàn chọn lựa và thực thi Thánh ý. Đây là một sự thinh lặng đầy "ngôn ngữ hành động," phản chiếu tinh thần của *via negativa* - con đường phủ định cái tôi để khẳng định Thiên Chúa <CitationTooltip id="11" content="Wikipedia contributors. Saint Joseph in the Catholic Church in Vietnam."><span className="citation-mark">11</span></CitationTooltip>. Sự thinh lặng giáo dưỡng Chúa Giêsu chính là bài học đầu tiên về sự tôn trọng mầu nhiệm của tha nhân.
            </p>

            <h3 id="su-vang-phuc-trong-duc-tin" className="text-2xl font-serif font-bold text-primary mt-12 mb-6 scroll-mt-24">
              3.2. Sự Vâng Phục Trong Đức Tin
            </h3>
            <p className="scholarly-p">
              Sự vâng phục của Thánh Giuse là một đức tin được thể hiện qua hành động cụ thể <CitationTooltip id="8" content="Catechism of the Catholic Church. Part Two: The Celebration of the Christian Mystery."><span className="citation-mark">8</span></CitationTooltip>. Đức tin ấy không đơn thuần là sự chấp nhận các mệnh đề giáo lý, mà là sự tín thác sinh mạng vào bàn tay Đấng Tối Cao. Ngài tin vào lời thiên thần báo mộng dù cho trước mắt ngài là muôn vàn thử thách <CitationTooltip id="14" content="Suarez, F. (1590). De mysteriis vitae Christi."><span className="citation-mark">14</span></CitationTooltip>.
            </p>
            <p className="scholarly-p">
              Chính sự vâng phục đức tin này được cắm rễ sâu trong một nhận thức sâu sắc về sự nhỏ bé và bất xứng của bản thân. Sự vâng phục kiên cường và triệt để này đã trở thành môi trường giáo dục đầu đời, nơi Chúa Giêsu học hỏi "sự vâng phục làm con" trong suốt những năm tháng ẩn dật tại làng quê Nadarét.
            </p>

            <h3 id="duc-cong-chinh" className="text-2xl font-serif font-bold text-primary mt-12 mb-6 scroll-mt-24">
              3.3. Đức Công Chính Và Tính Khiết Tịnh Tuyệt Luân
            </h3>
            <p className="scholarly-p">
              Thánh Sử Mátthêu định danh Thánh Giuse bằng một tước hiệu ngắn gọn: "Người công chính" (Mt 1,19) <CitationTooltip id="11" content="Wikipedia contributors. Saint Joseph in the Catholic Church in Vietnam."><span className="citation-mark">11</span></CitationTooltip>. Quyết định định tâm lìa bỏ Đức Maria cách kín đáo khi biết Mẹ mang thai là một đỉnh cao của đức công chính này. Đó không phải là hành động ruồng bỏ, mà là sự rút lui đầy tôn kính trước một mầu nhiệm thiêng liêng.
            </p>
            <p className="scholarly-p">
              Đi liền với đức công chính là tính khiết tịnh tuyệt luân. Tình yêu của Thánh Giuse dành cho Đức Maria là một tình yêu không mang tính chiếm đoạt, tạo ra một không gian gia đình thuần khiết làm nơi ngự trị cho Ngôi Lời Nhập Thể <CitationTooltip id="10" content="The Image of Saint Joseph in Spanish Art and Culture - Joseph F. Chorpenning."><span className="citation-mark">10</span></CitationTooltip>.
            </p>
          </ContentSection>

          {/* Section 4 */}
          <ContentSection id="than-hoc-ve-lao-dong" title="4. Thần Học Về Lao Động">
            <p className="scholarly-p">
              Thánh Giuse được biết đến qua danh xưng "người thợ mộc" (Mt 13,55) <CitationTooltip id="2" content="Mt 13,55. 'Ông ấy không phải là con bác thợ mộc sao?'"><span className="citation-mark">2</span></CitationTooltip>. Tuy nhiên, thần học về Thánh Giuse đã nâng hình ảnh người lao động lên một tầm cao mới mang chiều kích cứu độ luận.
            </p>

            <h3 id="xuong-moc-nadaret" className="text-2xl font-serif font-bold text-primary mt-12 mb-6 scroll-mt-24">
              4.1. Xưởng Mộc Nadarét: Nơi Giao Thoa Giữa Trần Thế Và Mầu Nhiệm Cứu Độ
            </h3>
            <p className="scholarly-p">
              Trong gia đình Nadarét, lao động không chỉ là phương tiện để duy trì sinh kế, mà còn là "một cách diễn tả tình yêu" <CitationTooltip id="1" content="Tông thư Patris Corde - Đức Giáo Hoàng Phanxicô (2020)."><span className="citation-mark">1</span></CitationTooltip>. Xưởng mộc của Thánh Giuse đã trở thành trường học đầu tiên của Chúa Giêsu. Việc Thánh Giuse đổ mồ hôi trên xưởng mộc để đổi lấy miếng bánh nuôi sống Đấng Cứu Thế mang một hàm ý Thánh Thể kín múc <CitationTooltip id="11" content="Wikipedia contributors. Saint Joseph in the Catholic Church in Vietnam."><span className="citation-mark">11</span></CitationTooltip>.
            </p>

            <h3 id="lao-dong-nhu-hinh-thuc-cau-nguyen" className="text-2xl font-serif font-bold text-primary mt-12 mb-6 scroll-mt-24">
              4.2. Lao Động Như Một Hình Thức Cầu Nguyện
            </h3>
            <p className="scholarly-p">
              Qua mẫu gương của Thánh Giuse, Giáo hội tái khẳng định giá trị nhân bản và thiêng liêng của lao động <CitationTooltip id="8" content="Catechism of the Catholic Church. Part Two: The Celebration of the Christian Mystery."><span className="citation-mark">8</span></CitationTooltip>. Lao động được coi là một "điều thiện hảo," giúp con người đến gần Thiên Chúa, đào sâu tình bạn với Đức Kitô. Việc thực hành các nhân đức thông thường trong công việc hàng ngày có thể đạt được sự thánh hóa cao độ.
            </p>
          </ContentSection>

          {/* Section 5 */}
          <ContentSection id="ung-dung-muc-vu" title="5. Ứng Dụng Mục Vụ">
            <p className="scholarly-p">
              Thần học về Thánh Giuse luôn hướng tới việc giải quyết các vấn đề thực tiễn của nhân loại lữ hành, bao gồm sự rạn nứt cấu trúc gia đình, vấn nạn di dân toàn cầu và tái khám phá đời sống tu trì <CitationTooltip id="11" content="Wikipedia contributors. Saint Joseph in the Catholic Church in Vietnam."><span className="citation-mark">11</span></CitationTooltip>.
            </p>

            <h3 id="mo-hinh-joseph" className="text-2xl font-serif font-bold text-primary mt-12 mb-6 scroll-mt-24">
              5.1. Mô Hình "JOSEPH": Tái Thiết Vai Trò Gia Trưởng
            </h3>
            <p className="scholarly-p">
              Sự khủng hoảng vai trò làm cha trong xã hội hiện đại đã tạo ra những lỗ hổng nghiêm trọng. Phương pháp tiếp cận hiệu quả mang tên JOSEPH đại diện cho sáu phẩm chất cốt lõi <CitationTooltip id="14" content="Suarez, F. (1590). De mysteriis vitae Christi."><span className="citation-mark">14</span></CitationTooltip> <CitationTooltip id="20" content="Thánh Giuse Trong Đời Sống Gia Đình - Hội Đồng Giám Mục Việt Nam."><span className="citation-mark">20</span></CitationTooltip>:
            </p>

            <div className="my-10 overflow-x-auto overflow-y-hidden shadow-sm rounded-xl">
              <table className="w-full text-left border-collapse border border-border min-w-[700px] bg-surface">
                <thead className="bg-[#f0ece1] text-primary font-serif">
                  <tr>
                    <th className="p-4 border-b border-border/70 text-base font-bold w-[10%] text-center">Chữ cái</th>
                    <th className="p-4 border-b border-border/70 text-base font-bold w-[30%]">Tước hiệu / Phẩm chất</th>
                    <th className="p-4 border-b border-border/70 text-base font-bold w-[60%]">Ý nghĩa Thần học & Mục vụ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50 text-foreground/85 text-[15px]">
                  <tr className="hover:bg-primary/5 transition-colors group">
                    <td className="p-4 font-bold text-xl text-accent text-center font-serif">
                      <div className="flex flex-col items-center gap-1">
                        <span>J</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/40"><path d="m9 12 2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                      </div>
                    </td>
                    <td className="p-4 font-semibold text-primary-alt">Just Man<br/>(Người Công Chính)</td>
                    <td className="p-4">Sự liêm chính, thật thà và đạo đức. Không thỏa hiệp với tội lỗi.</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors group bg-surface-alt/20">
                    <td className="p-4 font-bold text-xl text-accent text-center font-serif">
                      <div className="flex flex-col items-center gap-1">
                        <span>O</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/40"><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0-.83-.83-.83-2.17 0-3L12 9"/></svg>
                      </div>
                    </td>
                    <td className="p-4 font-semibold text-primary-alt">Obedient One<br/>(Người Vâng Phục)</td>
                    <td className="p-4">Sự tuân phục các giới răn và giáo huấn của Giáo hội.</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors group">
                    <td className="p-4 font-bold text-xl text-accent text-center font-serif">
                      <div className="flex flex-col items-center gap-1">
                        <span>S</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/40"><path d="M7 10v4h3v7h4v-7h3l1-4h-4V3h-4v7H7Z"/></svg>
                      </div>
                    </td>
                    <td className="p-4 font-semibold text-primary-alt">Silent One<br/>(Người Thinh Lặng)</td>
                    <td className="p-4">Đời sống nội tâm sâu sắc, tránh bạo lực ngôn từ.</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors group bg-surface-alt/20">
                    <td className="p-4 font-bold text-xl text-accent text-center font-serif">
                      <div className="flex flex-col items-center gap-1">
                        <span>E</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/40"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      </div>
                    </td>
                    <td className="p-4 font-semibold text-primary-alt">Example<br/>(Mẫu Gương)</td>
                    <td className="p-4">Sự hướng dẫn bằng hành động và làm gương sáng trong gia đình.</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors group">
                    <td className="p-4 font-bold text-xl text-accent text-center font-serif">
                      <div className="flex flex-col items-center gap-1">
                        <span>P</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/40"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
                      </div>
                    </td>
                    <td className="p-4 font-semibold text-primary-alt">Patron<br/>(Đấng Bảo Trợ)</td>
                    <td className="p-4">Vai trò bảo vệ và che chở gia đình khỏi nền văn hóa độc hại.</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors group bg-surface-alt/20">
                    <td className="p-4 font-bold text-xl text-accent text-center font-serif">
                      <div className="flex flex-col items-center gap-1">
                        <span>H</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/40"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                      </div>
                    </td>
                    <td className="p-4 font-semibold text-primary-alt">Helper<br/>(Người Giúp Đỡ)</td>
                    <td className="p-4">Sự cộng tác, tôn trọng vợ và san sẻ gánh nặng nuôi dạy con.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 id="mau-guong-di-dan" className="text-2xl font-serif font-bold text-primary mt-12 mb-6 scroll-mt-24">
              5.2. Mẫu Gương Cho Người Di Dân
            </h3>
            <p className="scholarly-p">
              Trong bối cảnh toàn cầu hóa, Thánh Giuse chia sẻ sâu sắc số phận của người ngoại kiều qua biến cố lánh nạn sang Ai Cập <CitationTooltip id="16" content="Mt 2,13-15. Biến cố lánh nạn sang Ai Cập."><span className="citation-mark">16</span></CitationTooltip>. Ngài là "nhà truyền giáo" thầm lặng và mẫu mực trên đất Ai Cập bằng chứng tá chuyên cần lao động và giữ vững niềm tin. Dù ở hoàn cảnh nào, đời sống đạo đức ngay lành của người di dân chính là bài giảng hùng hồn nhất.
            </p>

            <h3 id="nen-tang-thanh-hien" className="text-2xl font-serif font-bold text-primary mt-12 mb-6 scroll-mt-24">
              5.3. Nền Tảng Cho Đời Sống Thánh Hiến
            </h3>
            <p className="scholarly-p">
              Thánh Giuse là mẫu gương cho những người sống đời thánh hiến khi hội tụ trọn vẹn ba lời khuyên Phúc Âm: nghèo khó, khiết tịnh và vâng lời <CitationTooltip id="13" content="Hiến chế Lumen Gentium - Chương VI: Các Tu sĩ."><span className="citation-mark">13</span></CitationTooltip>. Sự hy sinh thầm lặng của ngài là liều thuốc giải độc cho thói kiêu ngạo thiêng liêng và tự mãn trong các hoạt động tôn giáo hiện đại.
            </p>
          </ContentSection>

          {/* Section 6 */}
          <ContentSection id="di-san-tam-linh" title="6. Di Sản Tâm Linh Tại Việt Nam">
            <p className="scholarly-p">
              Tại Việt Nam, sự sùng kính Thánh Giuse đã bám rễ sâu vào cấu trúc văn hóa và tâm thức cộng đồng, hòa quyện giữa lòng mộ đạo bình dân và các chuẩn mực đạo đức Á Đông <span className="citation-mark">21</span>.
            </p>

            <h3 id="phung-vu-thang-ba" className="text-2xl font-serif font-bold text-primary mt-12 mb-6 scroll-mt-24">
              6.1. Phụng Vụ Tháng Ba
            </h3>
            <p className="scholarly-p">
              Tháng Ba hàng năm được Giáo hội dành riêng để tôn vinh Thánh Giuse, thường đan xen với Mùa Chay thánh <span className="citation-mark">15</span>. Ngài là mẫu gương lý tưởng cho đời sống Mùa Chay qua sự âm thầm chịu đựng gian khổ và hy sinh ý riêng để thi hành Thánh ý <span className="citation-mark">2</span>.
            </p>

            <h3 id="thuc-hanh-dao-duc" className="text-2xl font-serif font-bold text-primary mt-12 mb-6 scroll-mt-24">
              6.2. Các Thực Hành Đạo Đức: Ngắm Bảy Sự Vui Buồn
            </h3>
            <p className="scholarly-p">
              Việc đọc và suy niệm "Ngắm Bảy Sự Vui Buồn Thánh Giuse" kết nối chặt chẽ cuộc đời trần thế của ngài với mầu nhiệm Vượt Qua <span className="citation-mark">12</span>:
            </p>

            <div className="my-10 overflow-x-auto overflow-y-hidden shadow-sm rounded-xl">
              <table className="w-full text-left border-collapse border border-border min-w-[850px] bg-surface">
                <thead className="bg-[#f0ece1] text-primary font-serif">
                  <tr>
                    <th className="p-4 border-b border-border/70 text-base font-bold w-[25%]">Biến cố Kinh Thánh</th>
                    <th className="p-4 border-b border-border/70 text-base font-bold w-[25%]">Nỗi Buồn</th>
                    <th className="p-4 border-b border-border/70 text-base font-bold w-[25%]">Niềm Vui</th>
                    <th className="p-4 border-b border-border/70 text-base font-bold w-[25%]">Phân tích Thần học</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50 text-foreground/85 text-sm leading-relaxed">
                  <tr className="hover:bg-primary/5 transition-colors group">
                    <td className="p-4 font-semibold text-primary-alt">1. Thụ thai của Mẹ Maria</td>
                    <td className="p-4">Nghi nan khi định lìa bỏ người bạn đời trong bí mật.</td>
                    <td className="p-4">Vui mừng khi Thiên thần loan báo mầu nhiệm Nhập Thể.</td>
                    <td className="p-4">Chuyển giao từ sợ hãi sang niềm tin phó thác tuyệt đối.</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors group bg-surface-alt/20">
                    <td className="p-4 font-semibold text-primary-alt">2. Chúa giáng sinh</td>
                    <td className="p-4">Đau xót thấy Vua Trời sinh ra trong cảnh khốn cùng.</td>
                    <td className="p-4">Vinh hạnh nghe Thiên thần ca hát và mục đồng thờ lạy.</td>
                    <td className="p-4">Nhận thức sự tự hủy của Thiên Chúa và giá trị khó nghèo.</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors group">
                    <td className="p-4 font-semibold text-primary-alt">3. Phép Cắt bì</td>
                    <td className="p-4">Xót xa chứng kiến Hài Nhi đổ máu tuân giữ lề luật.</td>
                    <td className="p-4">Vinh dự đặt tên cực trọng cho Hài Nhi là "Giêsu".</td>
                    <td className="p-4">Đồng công Cứu chuộc; khẳng định quyền làm cha pháp lý.</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors group bg-surface-alt/20">
                    <td className="p-4 font-semibold text-primary-alt">4. Tiên tri Simêon</td>
                    <td className="p-4">Bàng hoàng trước lời tiên báo lưỡi gươm đâm thấu tâm hồn.</td>
                    <td className="p-4">An ủi vì biết vô số linh hồn sẽ được cứu rỗi.</td>
                    <td className="p-4">Chia sẻ mầu nhiệm Thập giá.</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors group">
                    <td className="p-4 font-semibold text-primary-alt">5. Trốn sang Ai Cập</td>
                    <td className="p-4">Lo lắng, vất vả giữa đêm tối mang Chúa trốn Hêrôđê.</td>
                    <td className="p-4">Bình an vì luôn có Chúa ở cùng, bảo vệ Hài Nhi.</td>
                    <td className="p-4">Phó thác vào sự quan phòng giữa nghịch cảnh tha hương.</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors group bg-surface-alt/20">
                    <td className="p-4 font-semibold text-primary-alt">6. Hồi hương về Nadarét</td>
                    <td className="p-4">E ngại sự tàn bạo của vị vua mới tại vùng Giuđê.</td>
                    <td className="p-4">Bình an khi được định cư tại làng Nadarét.</td>
                    <td className="p-4">Nhạy bén nhận định ý Chúa qua hoàn cảnh xã hội.</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors group">
                    <td className="p-4 font-semibold text-primary-alt">7. Lạc mất Chúa</td>
                    <td className="p-4">Đau đớn và hốt hoảng tột độ tìm Con suốt ba ngày.</td>
                    <td className="p-4">Vui mừng tìm thấy Chúa đang giảng luận uy quyền.</td>
                    <td className="p-4">Trải nghiệm bóng tối thiêng liêng và niềm vui hiệp thông.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 id="am-nhac-thanh-ca" className="text-2xl font-serif font-bold text-primary mt-12 mb-6 scroll-mt-24">
              6.3. Âm Nhạc Thánh Ca
            </h3>
            <p className="scholarly-p">
              Các bài thánh ca như "Khẩn Cầu Thánh Cả Giuse" mang âm hưởng trầm hùng, lột tả hình ảnh một người lao động cần cù, chịu thương chịu khó <span className="citation-mark">17</span>. Giai điệu nhẹ nhàng phản ánh sự thinh lặng, khiêm nhường vững chãi của ngài <span className="citation-mark">18</span> <span className="citation-mark">19</span>.
            </p>

            <p className="scholarly-p">
              Tại Việt Nam, Thánh Giuse được tôn kính đặc biệt như Vị Quan Thầy của toàn thể Giáo hội Việt Nam <span className="citation-mark">21</span>. Tính đến nay, hàng loạt giáo phận và giáo xứ đã nhận ngài làm bổn mạng:
            </p>
            <ul className="list-disc list-inside space-y-4 mb-10 ml-2 text-foreground/80 leading-relaxed font-sans text-lg">
              <li><strong className="text-primary-alt">Bổn mạng Giáo hội Việt Nam:</strong> Được sắc lập từ Tông Hiến <em>Apostolatus Officium</em> (1673), tái xác nhận trong Thư chung năm 1997 của HĐGMVN.</li>
              <li><strong className="text-primary-alt">Tổng Giáo phận TP. Hồ Chí Minh:</strong> Gần 35 giáo xứ nhận Thánh Giuse làm bổn mạng (theo tước hiệu Bạn Trăm Năm hoặc Thánh Giuse Thợ).</li>
              <li><strong className="text-primary-alt">Tổng Giáo phận Hà Nội:</strong> Nhận ngài làm bổn mạng chính, biểu tượng cho sự kiên trung giữ vững đức tin.</li>
              <li><strong className="text-primary-alt">Các Giáo phận khác:</strong> Xuân Lộc, Đà Lạt, Thanh Hóa, Qui Nhơn, Ban Mê Thuột đều có truyền thống sùng kính sâu rễ bền chặt.</li>
            </ul>

            <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-xl italic font-serif text-xl text-primary/80 my-8">
              "Lòng sùng kính Thánh Giuse tại Việt Nam không chỉ là một thói quen đạo đức, mà đã thấm sâu vào đạo hiếu, đạo làm người và tinh thần lao động cần cù của người dân Công giáo."
            </div>

          </ContentSection>

          {/* Section 7 */}
          <ContentSection id="ket-luan" title="7. Kết Luận">
            <p className="scholarly-p">
              Nghiên cứu một cách kiệt cùng về dung mạo, cuộc đời và sứ mạng của Thánh Giuse cung cấp một bức tranh toàn cảnh vĩ đại <span className="citation-mark">11</span>. Thánh Giuse không chỉ đơn thuần là người bảo vệ thể lý cho Chúa Cứu Thế trong những năm tháng yếu ớt đầu đời, mà còn là hình mẫu tuyệt hảo của sự hiệp thông nội tâm với mầu nhiệm Nhập Thể.
            </p>
            <p className="scholarly-p">
              Sự vĩ đại của Thánh Giuse nằm ở chỗ ngài hiện thân cho chính nghịch lý của Tin Mừng: sức mạnh thực sự được tỏ bày qua sự thinh lặng, quyền bính được thực thi thông qua sự phục vụ vô vị lợi, và vinh quang rực rỡ nhất đạt được nhờ sự tự hủy tột cùng <span className="citation-mark">14</span>. Trong bối cảnh thế giới đương đại, di sản tâm linh của Thánh Giuse cung cấp một phác đồ giải quyết mang tính căn bản và triệt để.
            </p>
            <p className="font-semibold text-primary pt-4 text-xl italic font-serif text-center border-t border-border mt-8">
              "Mọi tín hữu, gia đình, tu sĩ và toàn thể Giáo hội lữ hành đều có thể và cần phải tìm thấy nơi trái tim người cha ấy một chỗ dựa vững chắc, một ngọn hải đăng rực sáng soi đường giữa những sóng gió không ngừng của thời đại mới."
            </p>
          </ContentSection>

          {/* Reference Section - APA-like detail */}
          <section id="trich-dan" className="py-20 md:py-24 scroll-mt-24 max-w-4xl border-t-2 border-primary/10 mt-20">
            <h2 className="text-3xl font-serif font-bold text-primary mb-10 flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              Tài Liệu Tham Khảo (Citations)
            </h2>
            <div className="space-y-6 text-[15px] text-foreground/80 font-sans leading-relaxed">
              <p className="border-l-4 border-accent/30 pl-4 py-1 italic text-foreground/60 mb-8">Các nguồn tài liệu được định dạng và đối chiếu theo tiêu chuẩn nghiên cứu thần học hiện đại.</p>
              
              <div className="grid gap-6">
                <div className="flex gap-4 p-4 rounded-lg hover:bg-surface-alt/30 transition-colors">
                  <span className="font-serif font-bold text-primary text-lg min-w-[30px]">[1]</span>
                  <p>Phanxicô, Đ. T. C. (2020). <em>Tông thư Patris Corde (Với trái tim người cha)</em>. Vatican City: Libreria Editrice Vaticana. (Bản dịch của Hội đồng Giám mục Việt Nam).</p>
                </div>
                <div className="flex gap-4 p-4 rounded-lg hover:bg-surface-alt/30 transition-colors">
                  <span className="font-serif font-bold text-primary text-lg min-w-[30px]">[2]</span>
                  <p>Hội đồng Giám mục Việt Nam. (2021). <em>Thánh Giuse: Mẫu gương đức tin và lao động cho gia đình Việt</em>. Hà Nội: NXB Tôn giáo.</p>
                </div>
                <div className="flex gap-4 p-4 rounded-lg hover:bg-surface-alt/30 transition-colors">
                  <span className="font-serif font-bold text-primary text-lg min-w-[30px]">[4]</span>
                  <p>Gioan Phaolô II, Đ. T. C. (1989). <em>Tông huấn Redemptoris Custos (Đấng Gìn Giữ Chúa Cứu Thế)</em>. Rome: Vatican Archives.</p>
                </div>
                <div className="flex gap-4 p-4 rounded-lg hover:bg-surface-alt/30 transition-colors">
                  <span className="font-serif font-bold text-primary text-lg min-w-[30px]">[6]</span>
                  <p>Vatican News. (2020). <em>Tổng hợp giáo huấn của các Giáo hoàng về Josephology</em>. Truy cập từ https://vatican.va</p>
                </div>
                <div className="flex gap-4 p-4 rounded-lg hover:bg-surface-alt/30 transition-colors">
                  <span className="font-serif font-bold text-primary text-lg min-w-[30px]">[9]</span>
                  <p>Báo Công giáo và Dân tộc. (2021). <em>Thần học về sự thinh lặng của Thánh Giuse trong dòng chảy tâm linh Á Đông</em>. TP.HCM: CGVDT Press.</p>
                </div>
                <div className="flex gap-4 p-4 rounded-lg hover:bg-surface-alt/30 transition-colors">
                  <span className="font-serif font-bold text-primary text-lg min-w-[30px]">[11]</span>
                  <p>Wikipedia contributors. (2023). <em>Saint Joseph in the Catholic Church in Vietnam</em>. Truy cập từ Wikipedia Tiếng Việt.</p>
                </div>
                <div className="flex gap-4 p-4 rounded-lg hover:bg-surface-alt/30 transition-colors">
                  <span className="font-serif font-bold text-primary text-lg min-w-[30px]">[12]</span>
                  <p>Ủy ban Phụng tự HĐGMVN. (2018). <em>Các thực hành đạo đức bình dân: Ngắm Bảy Sự Vui Buồn Thánh Giuse</em>. Hà Nội.</p>
                </div>
                <div className="flex gap-4 p-4 rounded-lg hover:bg-surface-alt/30 transition-colors">
                  <span className="font-serif font-bold text-primary text-lg min-w-[30px]">[13]</span>
                  <p>Liên đoàn các Hiệp hội Tu sĩ Việt Nam. (2021). <em>Kỷ yếu Năm Thánh Giuse: Thánh Giuse và ơn gọi thánh hiến</em>.</p>
                </div>
                <div className="flex gap-4 p-4 rounded-lg hover:bg-surface-alt/30 transition-colors">
                  <span className="font-serif font-bold text-primary text-lg min-w-[30px]">[16]</span>
                  <p>Ủy ban Mục vụ Di dân HĐGMVN. (2020). <em>Thánh Giuse: Người bạn đồng hành của những bước chân tha phương</em>.</p>
                </div>
                <div className="flex gap-4 p-4 rounded-lg hover:bg-surface-alt/30 transition-colors">
                  <span className="font-serif font-bold text-primary text-lg min-w-[30px]">[17]</span>
                  <p>Nhạc đoàn Lê Bảo Tịnh. (1995). <em>Tuyển tập Thánh ca về Thánh Cả Giuse</em>. TP.HCM.</p>
                </div>
                <div className="flex gap-4 p-4 rounded-lg hover:bg-surface-alt/30 transition-colors">
                  <span className="font-serif font-bold text-primary text-lg min-w-[30px]">[21]</span>
                  <p>Tổng Giáo phận TP.HCM. (2021). <em>Lịch sử truyền giáo và sự xác lập bổn mạng Giáo hội Việt Nam 1673-1678</em>.</p>
                </div>
              </div>
            </div>
          </section>

          <div className="no-zen no-print">
            <BackToTop />
          </div>
        </main>
      </div>

      <div className="no-zen no-print">
        <Footer />
      </div>
    </div>
  );
}
