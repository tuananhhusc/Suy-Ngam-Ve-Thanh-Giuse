import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-sans",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Thánh Giuse: Dung Mạo, Sứ Mạng & Di Sản Tâm Linh | Báo Cáo Thần Học",
  description: "Nghiên cứu chuyên sâu về Thánh Giuse (Josephology) qua các văn kiện Patris Corde, Redemptoris Custos và di sản tâm linh tại Việt Nam.",
  keywords: ["Thánh Giuse", "Thần học", "Công giáo", "Patris Corde", "Josephology", "Báo cáo nghiên cứu"],
  authors: [{ name: "Báo Cáo Thần Học" }],
  openGraph: {
    title: "Thánh Giuse: Dung Mạo, Sứ Mạng & Di Sản Tâm Linh",
    description: "Nghiên cứu chuyên sâu về Thánh Giuse qua các văn kiện Huấn quyền và thực hành đạo đức.",
    type: "website",
    locale: "vi_VN",
    url: "https://thanhgiuse.vn",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thánh Giuse: Dung Mạo, Sứ Mạng & Di Sản Tâm Linh",
    description: "Nghiên cứu chuyên sâu về Thánh Giuse qua các văn kiện Huấn quyền.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${ebGaramond.variable} scroll-smooth`}>
      <body className="antialiased bg-background text-foreground tracking-wide font-sans leading-relaxed selection:bg-primary-alt selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ScholarlyArticle",
              "headline": "Thánh Giuse: Dung Mạo, Sứ Mạng & Di Sản Tâm Linh",
              "image": "https://thanhgiuse.vn/hero-bg.png",
              "author": {
                "@type": "Organization",
                "name": "Nghiên Cứu Thần Học Việt Nam"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Catholic Scholarly Reports"
              },
              "datePublished": "2024-03-14",
              "description": "Nghiên cứu sâu sắc về dung mạo, cuộc đời và sứ mạng của Thánh Giuse.",
              "about": [
                { "@type": "Thing", "name": "Saint Joseph" },
                { "@type": "Thing", "name": "Theology" }
              ]
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
