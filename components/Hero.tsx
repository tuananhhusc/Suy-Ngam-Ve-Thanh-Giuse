"use client";

export default function Hero() {
  return (
    <section className="relative w-full text-white py-24 md:py-48 overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Suy-Ngam-Ve-Thanh-Giuse/hero-bg.png" 
          alt="Saint Joseph Background" 
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-8">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accent/70 bg-accent/10 text-accent text-xs md:text-sm font-bold mb-8 tracking-[0.2em] uppercase shadow-lg shadow-primary/20 backdrop-blur-sm">
          Báo Cáo Nghiên Cứu Chuyên Sâu
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-serif leading-tight mb-8 drop-shadow-md text-balance">
          Suy Niệm Chuyên Sâu Và Mục Vụ Về Thánh Giuse
        </h1>
        <p className="text-lg md:text-2xl font-light text-surface-alt/90 max-w-3xl mx-auto leading-relaxed text-balance mb-10">
          Dung Mạo, Sứ Mạng Và Di Sản Tâm Linh Trong Đời Sống Giáo Hội
        </p>
        
        <button 
          onClick={() => window.print()} 
          className="no-print inline-flex items-center gap-2 px-8 py-3 bg-accent text-primary font-bold rounded-full shadow-xl hover:scale-105 transition-transform cursor-pointer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>
          Xuất Báo Cáo (In PDF)
        </button>
      </div>
    </section>
  );
}
