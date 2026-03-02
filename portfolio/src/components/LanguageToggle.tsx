import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
      className="fixed top-6 right-6 z-50 px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm font-mono text-sm"
      aria-label="Toggle language"
    >
      {language === 'zh' ? 'EN' : '中文'}
    </button>
  );
}
