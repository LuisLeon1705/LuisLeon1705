'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Languages, Mail, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import { ReactNode } from 'react';
import portrait from '../assets/Photograph/Curriculum.jpg';

const Tooltip = ({ content, children }: { content: string, children: ReactNode }) => {
  return (
    <div className="relative group/tooltip inline-block w-full">
      {children}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max max-w-[220px] p-3 bg-zinc-900 text-zinc-100 text-[10px] font-inter rounded-md opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-300 pointer-events-none z-50 text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-zinc-700 leading-relaxed backdrop-blur-sm">
        {content}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-zinc-900"></div>
      </div>
    </div>
  );
};

const Page = ({ 
  title, 
  subtitle, 
  bio, 
  highlights, 
  sections, 
  contactTitle, 
  email, 
  pageNumber, 
  totalPageNumbers,
  showPortrait,
  portraitPath,
  side
}: any) => {
  return (
    <div className={`w-full h-full p-8 md:p-12 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,1)_0%,rgba(250,250,250,1)_100%)] flex flex-col ${side === 'left' ? 'border-r border-zinc-200' : ''}`}>
      <header className="text-center mb-8 relative">
        {showPortrait && (
          <div className="absolute -top-12 -left-6 rotate-[-3deg] w-24 h-32 md:w-28 md:h-36 bg-white p-2 shadow-[5px_10px_20px_rgba(0,0,0,0.2)] border border-zinc-200 z-20 group">
            <div className="w-full h-full relative overflow-hidden bg-zinc-100 grayscale contrast-[1.1] sepia-[0.15] group-hover:sepia-0 group-hover:grayscale-0 transition-all duration-700">
              <Image 
                src={portraitPath} 
                alt="Chef's Portrait" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-6 bg-white/40 backdrop-blur-sm border border-white/20 rotate-[2deg] shadow-sm" />
          </div>
        )}

        <div className={showPortrait ? "pt-16 md:pt-0" : ""}>
          <h1 className="text-2xl uppercase tracking-[0.25em] mb-2 font-bold text-zinc-800 leading-tight">
            {title}
          </h1>
          {subtitle && <p className="italic text-zinc-500 text-[11px] tracking-wide">{subtitle}</p>}
          <div className="w-16 h-[1.5px] bg-zinc-900 mx-auto mt-4" />
        </div>
      </header>

      <section className="space-y-6 flex-1">
        {bio && (
          <p className="font-inter text-[13px] text-zinc-700 leading-relaxed italic border-l-2 border-zinc-200 pl-4 py-1">
            {bio}
          </p>
        )}

        {highlights && (
          <ul className="space-y-3 font-inter text-[11px] text-zinc-600">
            {highlights.map((item: string, i: number) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="w-1.5 h-1.5 bg-zinc-800 rounded-full mt-1 shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        )}

        {sections?.ingredients && (
          <div className="space-y-4">
            <h3 className="text-[10px] uppercase tracking-[0.3em] mb-4 text-zinc-400 font-black border-b border-zinc-100 pb-1">{sections.ingredients.title}</h3>
            {sections.ingredients.categories.map((cat: any, i: number) => (
              <Tooltip key={i} content={cat.tooltip}>
                <div className="flex justify-between items-baseline gap-4 group/item cursor-help">
                  <span className="text-[11px] uppercase tracking-widest text-zinc-900 font-bold group-hover/item:translate-x-1 transition-transform">{cat.name}</span>
                  <div className="flex-1 border-b border-dotted border-zinc-300 mb-1" />
                  <span className="font-inter text-[9px] text-zinc-500 text-right italic">{cat.items}</span>
                </div>
              </Tooltip>
            ))}
          </div>
        )}

        {sections?.mainCourses && (
          <div className="space-y-6">
            <h3 className="text-[10px] uppercase tracking-[0.3em] mb-4 text-zinc-400 font-black border-b border-zinc-100 pb-1">{sections.mainCourses.title}</h3>
            {sections.mainCourses.projects.map((project: any, i: number) => (
              <Tooltip key={i} content={project.tooltip}>
                <div className="group/proj cursor-help">
                  <h4 className="text-[11px] uppercase tracking-[0.2em] text-zinc-900 mb-2 font-bold group-hover/proj:text-zinc-500 transition-colors">
                    {project.name}
                  </h4>
                  <p className="font-inter text-[10px] text-zinc-600 leading-relaxed pl-3 border-l border-zinc-100 group-hover/proj:border-zinc-300 transition-colors">
                    {project.desc}
                  </p>
                </div>
              </Tooltip>
            ))}
          </div>
        )}

        {contactTitle && (
          <div className="pt-6 border-t border-zinc-100 mt-auto">
            <h3 className="text-[10px] uppercase tracking-[0.3em] mb-4 text-zinc-400 font-black">
              {contactTitle}
            </h3>
            <div className="space-y-3">
              <a href={`mailto:${email}`} className="flex justify-between items-baseline gap-4 group/contact cursor-pointer">
                <span className="text-[11px] uppercase tracking-widest text-zinc-900 font-bold group-hover/contact:translate-x-1 transition-transform">
                  Email
                </span>
                <div className="flex-1 border-b border-dotted border-zinc-300 mb-1" />
                <div className="flex items-center gap-2">
                  <span className="font-inter text-[9px] text-zinc-500 italic hidden md:inline">{email}</span>
                  <Mail size={14} className="text-zinc-400 group-hover/contact:text-zinc-900 transition-colors" />
                </div>
              </a>

              <a href="https://wa.me/584128526543" target="_blank" rel="noopener noreferrer" className="flex justify-between items-baseline gap-4 group/contact cursor-pointer">
                <span className="text-[11px] uppercase tracking-widest text-zinc-900 font-bold group-hover/contact:translate-x-1 transition-transform">
                  WhatsApp
                </span>
                <div className="flex-1 border-b border-dotted border-zinc-300 mb-1" />
                <div className="flex items-center gap-2">
                  <span className="font-inter text-[9px] text-zinc-500 italic hidden md:inline">+58 412-8526543</span>
                  <MessageSquare size={14} className="text-zinc-400 group-hover/contact:text-zinc-900 transition-colors" />
                </div>
              </a>
            </div>
          </div>
        )}
      </section>

      <footer className="mt-8 pt-4 border-t border-zinc-50 text-[9px] uppercase tracking-[0.4em] text-zinc-300 text-center font-black">
        {pageNumber} / {totalPageNumbers}
      </footer>
    </div>
  );
};

export default function TheDossier({ activeSpread = 0 }: { activeSpread?: number }) {
  const { t } = useLanguage();

  const s0 = t.menu.spreads[0];
  const s1 = t.menu.spreads[1];
  const s2 = t.menu.spreads[2];

  return (
    <div className="w-full max-w-5xl mx-auto p-4 relative h-[85vh] min-h-[600px] max-h-[800px]">
      <div className="relative w-full h-full flex perspective-[3000px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)]">
        <div className="absolute left-0 top-0 w-1/2 h-full z-10">
          <Page 
            {...s0.leftPage} 
            title={t.menu.title} 
            subtitle={t.menu.subtitle} 
            showPortrait={true} 
            portraitPath={portrait} 
            pageNumber={1} 
            totalPageNumbers={6}
            side="left"
          />
        </div>

        <div className="absolute right-0 top-0 w-1/2 h-full z-10">
          <Page 
            {...s2.rightPage} 
            pageNumber={6} 
            totalPageNumbers={6}
            side="right"
          />
        </div>

        <motion.div 
          initial={false}
          animate={{ 
            rotateY: activeSpread >= 1 ? -180 : 0,
            zIndex: activeSpread >= 1 ? 20 : 40 
          }}
          transition={{ duration: 0.9, ease: [0.645, 0.045, 0.355, 1] }}
          style={{ 
            transformOrigin: "left center",
            transformStyle: "preserve-3d" 
          }}
          className="absolute right-0 top-0 w-1/2 h-full"
        >
          <div 
            className="absolute inset-0 z-20"
            style={{ 
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(0deg) translateZ(1px)"
            }}
          >
            <Page {...s0.rightPage} pageNumber={2} totalPageNumbers={6} side="right" />
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
          </div>
          
          <div 
            className="absolute inset-0 z-10"
            style={{ 
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg) translateZ(1px)"
            }}
          >
            <Page {...s1.leftPage} pageNumber={3} totalPageNumbers={6} side="left" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/10 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        <motion.div 
          initial={false}
          animate={{ 
            rotateY: activeSpread >= 2 ? -180 : 0,
            zIndex: activeSpread >= 2 ? 40 : 30
          }}
          transition={{ duration: 0.9, ease: [0.645, 0.045, 0.355, 1] }}
          style={{ 
            transformOrigin: "left center",
            transformStyle: "preserve-3d" 
          }}
          className="absolute right-0 top-0 w-1/2 h-full"
        >
          <div 
            className="absolute inset-0 z-20"
            style={{ 
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(0deg) translateZ(1px)"
            }}
          >
            <Page {...s1.rightPage} pageNumber={4} totalPageNumbers={6} side="right" />
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
          </div>
          
          <div 
            className="absolute inset-0 z-10"
            style={{ 
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg) translateZ(1px)"
            }}
          >
            <Page {...s2.leftPage} pageNumber={5} totalPageNumbers={6} side="left" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/10 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-zinc-300 z-50 pointer-events-none" />
      </div>

      <div className="absolute -bottom-12 left-0 right-0 flex justify-between px-8 z-50 pointer-events-none">
        <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold opacity-30">
          Desliza para hojear
        </div>
      </div>
    </div>
  );
}
