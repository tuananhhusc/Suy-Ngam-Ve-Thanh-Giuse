import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#1c1917] text-surface-alt py-16 border-t-4 border-accent relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        <h3 className="font-serif text-3xl font-bold mb-4 text-[#fafaf9]">
          Suy Niệm Chuyên Sâu Về Thánh Giuse
        </h3>
        <p className="text-base text-surface-alt/70 max-w-2xl mx-auto leading-relaxed mb-8">
          Một nghiên cứu toàn diện về dung mạo, sứ mạng, và di sản tâm linh của Thánh Cả Giuse trong bối cảnh lịch sử cứu độ và thời đại mới.
        </p>
        <div className="w-16 h-px bg-accent/50 mb-8"></div>
        <div className="text-sm text-surface-alt/50">
          &copy; {new Date().getFullYear()} Báo Cáo Chuyên Sâu Về Thánh Giuse.
        </div>
      </div>
    </footer>
  );
}
