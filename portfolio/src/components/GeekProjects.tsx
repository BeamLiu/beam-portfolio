import { portfolioData } from '../data/portfolio';

export default function GeekProjects() {
  const { geekProjects } = portfolioData;

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">早期极客探索</h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          VR、AR、数字孪生 - 在前沿技术领域的早期实践与创新
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {geekProjects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              {/* Thumbnail placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-4xl">🎬</span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-sm text-gray-500 font-mono">{project.year}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.media.video && (
                  <a 
                    href={project.media.video} 
                    className="inline-block px-4 py-2 text-sm border border-gray-300 hover:bg-gray-50 transition-colors w-full text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ▷ 观看视频
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
