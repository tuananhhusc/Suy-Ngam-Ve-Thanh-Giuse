"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2 } from "lucide-react";

interface TimelineItemProps {
  year: string;
  event: string;
  description: string;
  index: number;
}

const TimelineItem = ({ year, event, description, index }: TimelineItemProps) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="relative pl-8 pb-8 border-l-2 border-primary/20 last:border-0 timeline-item"
  >
    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-serif font-bold text-sm mb-2">
      {year}
    </span>
    <h4 className="text-xl font-serif font-bold text-primary-alt mb-2">{event}</h4>
    <p className="text-foreground/70 font-sans leading-relaxed">{description}</p>
  </motion.div>
);

export default function Timeline() {
  const events = [
    { year: "1673", event: "Sắc lệnh Sùng kính", description: "Đức Thánh Cha ban hành Tông hiến Apostolatus Officium, chính thức đặt nền móng cho sự sùng kính Thánh Giuse tại các vùng truyền giáo mới." },
    { year: "1678", event: "Bổn mạng Giáo hội Đàng Ngoài", description: "Thánh Giuse chính thức được chọn làm đấng bảo trợ cho công cuộc truyền giáo tại Việt Nam." },
    { year: "1870", event: "Quan Thầy Giáo hội Hoàn vũ", description: "Đức Piô IX ban hành sắc lệnh Quemadmodum Deus, công bố Thánh Giuse là Quan Thầy của toàn thể Hội Thánh." },
    { year: "1955", event: "Lễ Thánh Giuse Thợ", description: "Đức Piô XII thiết lập ngày lễ 1/5 để thánh hóa lao động của con người theo mẫu gương Thánh Giuse." },
    { year: "2020", event: "Năm Thánh Giuse", description: "Đức Phanxicô ban hành Tông thư Patris Corde, khai mạc Năm Thánh Giuse kỷ niệm 150 năm Quan Thầy Giáo hội Hoàn vũ." }
  ];

  return (
    <div className="my-12 max-w-2xl mx-auto px-4">
      {events.map((item, idx) => (
        <TimelineItem key={idx} {...item} index={idx} />
      ))}
    </div>
  );
}
