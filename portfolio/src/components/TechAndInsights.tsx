import { portfolioData } from '../data/portfolio';

export default function TechAndInsights() {
  const { techStack, insights } = portfolioData;

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">技术图谱与认知视野</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Tech Stack */}
          <div>
            <h3 className="text-2xl font-bold mb-6">技术栈</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold mb-3 text-gray-600">后端 & 架构</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.backend.map((tech, idx) => (
                    <span key={idx} className="px-4 py-2 bg-white border border-gray-200 font-mono text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-bold mb-3 text-gray-600">前端</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.frontend.map((tech, idx) => (
                    <span key={idx} className="px-4 py-2 bg-white border border-gray-200 font-mono text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-bold mb-3 text-gray-600">AI & 机器学习</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.ai.map((tech, idx) => (
                    <span key={idx} className="px-4 py-2 bg-white border border-gray-200 font-mono text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-bold mb-3 text-gray-600">工业软件</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.industrial.map((tech, idx) => (
                    <span key={idx} className="px-4 py-2 bg-white border border-gray-200 font-mono text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Insights */}
          <div>
            <h3 className="text-2xl font-bold mb-6">认知与视野</h3>
            <div className="bg-white border border-gray-200 p-6 mb-6">
              <div className="text-4xl font-bold mb-2">{insights.reading.total}</div>
              <div className="text-gray-600 mb-4">{insights.reading.hours} 深度阅读</div>
              
              <div className="space-y-4 mt-6">
                <div>
                  <h4 className="font-bold mb-2">技术类</h4>
                  <p className="text-sm text-gray-600">{insights.reading.categories.tech.join('、')}</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">哲学类</h4>
                  <p className="text-sm text-gray-600">{insights.reading.categories.philosophy.join('、')}</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">经管类</h4>
                  <p className="text-sm text-gray-600">{insights.reading.categories.business.join('、')}</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">科幻类</h4>
                  <p className="text-sm text-gray-600">{insights.reading.categories.scifi.join('、')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6">
              <h4 className="font-bold mb-3">兴趣爱好</h4>
              <div className="flex flex-wrap gap-2">
                {insights.hobbies.map((hobby, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-50 text-sm">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
