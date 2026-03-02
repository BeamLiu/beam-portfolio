import { portfolioData } from '../data/portfolio';

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="py-16 px-6 border-t border-gray-200 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Terminal Style */}
        <div className="font-mono text-sm text-gray-600 mb-12">
          <div className="mb-2">user@beam-portfolio:~$ cat whoami.txt</div>
          <div className="pl-4">&gt; CTO, AI Explorer, Presales Expert.</div>
        </div>

        {/* Social Links & Contact */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="font-bold mb-4">联系方式</h3>
            <div className="space-y-3">
              <a 
                href={personal.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <span className="mr-3">💻</span>
                <span>GitHub</span>
              </a>
              <a 
                href={personal.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <span className="mr-3">💼</span>
                <span>LinkedIn</span>
              </a>
              <div className="flex items-center text-gray-600">
                <span className="mr-3">💬</span>
                <span>微信: {personal.social.wechat}</span>
              </div>
              <a 
                href={`mailto:${personal.social.email}`}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <span className="mr-3">📧</span>
                <span>{personal.social.email}</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">下载简历</h3>
            <a 
              href={personal.resumePDF}
              download
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <span className="mr-2">📄</span>
              <span>下载 PDF 简历</span>
            </a>
            <p className="text-sm text-gray-600 mt-3">
              完整的个人简历 PDF 版本，包含详细的项目经历和技术栈
            </p>
          </div>
        </div>
        
        <div className="text-center text-gray-600 text-sm pt-8 border-t border-gray-200">
          <p>© 2026 Beam Liu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
