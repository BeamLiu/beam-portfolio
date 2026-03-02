import { portfolioData } from '../data/portfolio';

export default function AIShowcase() {
  const { aiShowcase } = portfolioData;

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">AI 结对编程作品集</h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          探索 AI 辅助开发的无限可能，从工业平台到创意工具，展现人机协作的力量
        </p>
        
        <div className="space-y-12">
          {aiShowcase.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-blue-600 font-mono text-sm mb-4">开发周期: {project.period}</p>
                    <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm border border-blue-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-3">✓</span>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Media Links */}
                <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-200">
                  {project.media.video && (
                    <a 
                      href={project.media.video} 
                      className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ▷ 观看演示视频
                    </a>
                  )}
                  {project.media.ppt && (
                    <a 
                      href={project.media.ppt} 
                      className="px-4 py-2 border border-gray-300 hover:bg-gray-50 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📄 售前材料
                    </a>
                  )}
                  {project.media.github && (
                    <a 
                      href={project.media.github} 
                      className="px-4 py-2 border border-gray-300 hover:bg-gray-50 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      💻 GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
