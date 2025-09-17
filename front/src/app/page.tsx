'use client'

import { useState } from 'react';
import CKEditorComponent from '../components/CKEditor';
import '../components/CKEditor.css';

const GloticaLogo = () => (
  <svg className="w-12 h-12 mr-3" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cyberpunk-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00ffff" />
        <stop offset="50%" stopColor="#ff00ff" />
        <stop offset="100%" stopColor="#ffff00" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* Outer hexagon */}
    <polygon
      points="100,20 170,60 170,140 100,180 30,140 30,60"
      fill="none"
      stroke="url(#cyberpunk-gradient)"
      strokeWidth="3"
      filter="url(#glow)"
    />

    {/* Inner circuits */}
    <path
      d="M60 80 L100 80 L100 100 L140 100 M80 60 L80 80 M120 100 L120 120 M60 120 L100 120 L140 120"
      stroke="#00ffff"
      strokeWidth="2"
      fill="none"
      filter="url(#glow)"
    />

    {/* Center node */}
    <circle
      cx="100"
      cy="100"
      r="8"
      fill="#ff00ff"
      filter="url(#glow)"
    />

    {/* Corner nodes */}
    <circle cx="60" cy="80" r="3" fill="#00ffff"/>
    <circle cx="140" cy="100" r="3" fill="#00ffff"/>
    <circle cx="80" cy="60" r="3" fill="#ffff00"/>
    <circle cx="120" cy="120" r="3" fill="#ffff00"/>
    <circle cx="60" cy="120" r="3" fill="#ff00ff"/>
    <circle cx="140" cy="120" r="3" fill="#ff00ff"/>
  </svg>
);

export default function Home() {
  const [sourceLang, setSourceLang] = useState('ko');
  const [targetLang, setTargetLang] = useState('en');
  const [translatedText, setTranslatedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [editorContent, setEditorContent] = useState('');

  const languages = [
    { code: 'ko', name: '한국어' },
    { code: 'en', name: 'English' },
    { code: 'ja', name: '日本語' },
    { code: 'zh', name: '中文' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'es', name: 'Español' }
  ];

  const handleTranslate = async () => {
    if (!editorContent.trim()) return;

    setIsLoading(true);
    
    // 실제 번역 API 호출 부분 (여기서는 시뮬레이션)
    setTimeout(() => {
      // HTML 구조를 유지하면서 텍스트만 번역하는 시뮬레이션
      setTranslatedText(editorContent);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 px-4 relative overflow-hidden">
      {/* 은하수 배경 효과 */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      {/* 별들 배경 */}
      <div className="absolute inset-0">
        {/* 큰 별들 */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-pink-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-cyan-300 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 left-1/2 w-1 h-20 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-30"></div>
        <div className="absolute top-2/3 right-1/4 w-20 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-30"></div>
        
        {/* 은하수 별들 - 더 많은 반짝이 효과 */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              opacity: 0.3 + Math.random() * 0.7
            }}
          />
        ))}
        
        {/* 은하수 별들 - 작은 반짝이 */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`small-${i}`}
            className="absolute w-0.5 h-0.5 bg-cyan-300 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
              opacity: 0.4 + Math.random() * 0.6
            }}
          />
        ))}
        
        {/* 은하수 별들 - 핑크 반짝이 */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`pink-${i}`}
            className="absolute w-0.5 h-0.5 bg-pink-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${1.5 + Math.random() * 1.5}s`,
              opacity: 0.3 + Math.random() * 0.7
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <GloticaLogo />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              GLOTICA
            </h1>
          </div>
          <p className="text-cyan-300 text-lg font-light tracking-wider">
            :: NEURAL TRANSLATION INTERFACE ::
          </p>
        </div>

        <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-lg border border-cyan-500 shadow-2xl shadow-cyan-500/20 p-6 relative">
          {/* Neon border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500 rounded-lg opacity-20 blur-sm"></div>
          <div className="relative z-10">
            {/* 언어 선택 및 번역 버튼 - 수정된 레이아웃 */}
            <div className="flex gap-4 mb-6 items-end">
              <div className="flex-1">
                <label className="block text-sm font-medium text-cyan-400 mb-2 uppercase tracking-wide">
                  SOURCE LANG
                </label>
                <select
                  value={sourceLang}
                  onChange={(e) => setSourceLang(e.target.value)}
                  className="w-full h-12 p-3 bg-slate-800 border border-cyan-500 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-white text-sm appearance-none cursor-pointer hover:border-pink-400 transition-colors"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2300ffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.5rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em'
                  }}
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code} className="bg-slate-800 text-white">
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSourceLang(targetLang);
                    setTargetLang(sourceLang);
                  }}
                  className="h-12 px-4 text-cyan-400 hover:text-pink-400 text-xl border border-cyan-500 rounded-md hover:border-pink-400 transition-colors hover:bg-slate-800 flex items-center justify-center"
                >
                  ⇄
                </button>
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-cyan-400 mb-2 uppercase tracking-wide">
                  TARGET LANG
                </label>
                <select
                  value={targetLang}
                  onChange={(e) => setTargetLang(e.target.value)}
                  className="w-full h-12 p-3 bg-slate-800 border border-cyan-500 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-white text-sm appearance-none cursor-pointer hover:border-pink-400 transition-colors"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2300ffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.5rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em'
                  }}
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code} className="bg-slate-800 text-white">
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* 번역 버튼 - 언어 선택 우측으로 이동 */}
              <div className="flex items-end">
                <button
                  onClick={handleTranslate}
                  disabled={!editorContent.trim() || isLoading}
                  className="h-12 px-8 bg-gradient-to-r from-cyan-600 to-pink-600 text-white font-semibold rounded-md hover:from-cyan-500 hover:to-pink-500 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 uppercase tracking-wider border border-cyan-500 hover:border-pink-400 flex items-center justify-center"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-transparent border-t-white border-r-white mr-2"></div>
                      PROCESSING...
                    </span>
                  ) : (
                    'TRANSLATE'
                  )}
                </button>
              </div>
            </div>

            {/* 텍스트 입력 - CKEditor */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-cyan-400 mb-2 uppercase tracking-wide">
                INPUT TEXT
              </label>
              <div className="bg-white rounded-lg border border-gray-300 shadow-sm">
                <CKEditorComponent 
                  content={editorContent}
                  onChange={setEditorContent}
                />
              </div>
            </div>

            {/* 번역 결과 - CKEditor와 동일한 스타일 적용 */}
            <div>
              <label className="block text-sm font-medium text-cyan-400 mb-2 uppercase tracking-wide">
                TRANSLATION OUTPUT
              </label>
              <div className="w-full min-h-[300px] p-4 bg-white border border-cyan-500 rounded-md overflow-auto relative">
                {isLoading ? (
                  <div className="flex items-center justify-center h-full min-h-[260px]">
                    <div className="relative">
                      <div className="animate-spin rounded-full h-8 w-8 border-2 border-transparent border-t-cyan-400 border-r-pink-400"></div>
                      <div className="absolute inset-0 animate-pulse">
                        <div className="h-2 w-2 bg-cyan-400 rounded-full absolute top-1 left-1/2 transform -translate-x-1/2"></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="ck-content" // CKEditor와 동일한 클래스 적용
                    style={{ 
                      color: '#1f2937',
                      fontFamily: "'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                      fontSize: '14px',
                      lineHeight: '1.6'
                    }}
                    dangerouslySetInnerHTML={{
                      __html: translatedText || `<span class="text-gray-500 italic">Translation output will appear here...</span>`
                    }}
                  />
                )}
                {/* Scan line effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse opacity-30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
