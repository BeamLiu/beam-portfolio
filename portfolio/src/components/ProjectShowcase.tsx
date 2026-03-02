import { portfolioData } from '../data/portfolio';

export default function ProjectShowcase() {
  const { projects } = portfolioData;

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">标杆项目与成就</h2>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{project.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-50 text-sm border border-gray-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {project.scale && (
                  <div className="text-right">
                    <div className="text-sm text-gray-600">项目规模</div>
                    <div className="text-xl font-bold">{project.scale}</div>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                {project.description && (
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                )}
                
                {project.challenges && (
                  <div>
                    <h4 className="font-bold mb-2">业务挑战</h4>
                    <p className="text-gray-600 leading-relaxed">{project.challenges}</p>
                  </div>
                )}
                
                {project.impact && (
                  <div>
                    <h4 className="font-bold mb-2">商业收益</h4>
                    <p className="text-gray-600 leading-relaxed">{project.impact}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
