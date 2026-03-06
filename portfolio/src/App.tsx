import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HeroSection } from './components/HeroSection';
import { ValueCards } from './components/ValueCards';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ProductShowcase } from './components/ProductShowcase';
import { CareerTrajectory } from './components/CareerTrajectory';
import { PatentsTable } from './components/PatentsTable';
import { CertificationsSection } from './components/CertificationsSection';
import { TechRadar } from './components/TechRadar';
import { CommandPalette } from './components/CommandPalette';
import { SimpleProjectShowcase } from './components/SimpleProjectShowcase';

function App() {
  const [open, setOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'zh' ? 'en' : 'zh');
  };

  return (
    <div className="bg-background min-h-screen font-body text-text-primary selection:bg-accent/20">

      {/* Floating Header Controls */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        {/* Language Switcher */}
        <button
          onClick={toggleLanguage}
          className="flex items-center justify-center w-8 h-8 bg-surface/80 backdrop-blur-md border border-border rounded-lg shadow-sm font-mono text-sm text-text-secondary hover:text-primary hover:border-text-secondary transition-colors"
        >
          {i18n.language === 'zh' ? 'EN' : '中'}
        </button>

        {/* Search / CmdK Trigger */}
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 h-8 bg-surface/80 backdrop-blur-md border border-border rounded-lg shadow-sm font-mono text-sm text-text-secondary hover:text-accent hover:border-accent/40 transition-colors"
        >
          <span className="font-bold">⌘K</span>
          <span className="hidden sm:inline">{t('nav.explore')}</span>
        </button>
      </div>

      <CommandPalette open={open} setOpen={setOpen} />

      <main className="flex flex-col w-full overflow-x-hidden">
        <HeroSection />

        <div id="values">
          <ValueCards />
        </div>

        <div id="products">
          <ProductShowcase />
        </div>

        <div id="projects" className="bg-surface">
          <ProjectShowcase />
        </div>

        <SimpleProjectShowcase />

        <div id="career">
          <CareerTrajectory />
        </div>

        <div id="patents" className="bg-surface">
          <PatentsTable />
        </div>

        <div id="certifications">
          <CertificationsSection />
        </div>

        <div id="tech">
          <TechRadar />
        </div>
      </main>

      <footer className="py-12 border-t border-border bg-background text-center flex flex-col items-center">
        <div className="font-mono text-sm text-text-secondary bg-surface border border-border px-6 py-4 rounded-xl max-w-lg mb-8 text-left w-full shadow-inner">
          <div className="text-accent/60 mb-2">user@beam-portfolio:~$ cat whoami.txt</div>
          <div className="text-text-primary font-medium">&gt; CTO, AI Explorer, Presales Expert.</div>
        </div>
        <p className="text-sm text-text-secondary/60">© {new Date().getFullYear()} LiuShengZhi(Beam Liu) Portfolio. Designed for {window.location.pathname.includes('plm') ? '"PLM + AI"' : window.location.pathname.includes('geek') ? '"Pure AI & Agentic"' : '"Manufacturing + AI"'}.</p>
      </footer>

    </div>
  );
}

export default App;
