import { portfolioData } from '../data/portfolio';

export default function PresalesMaterials() {
  const { presalesMaterials } = portfolioData;

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">售前材料展示</h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          专业的售前方案与演示材料，展现商业洞察与沟通能力
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {presalesMaterials.map((material, index) => (
            <div key={index} className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">{material.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{material.description}</p>
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs border border-blue-200">
                  {material.type}
                </span>
              </div>

              <div className="space-y-2 pt-4 border-t border-gray-200">
                {material.files.map((file, idx) => (
                  <a 
                    key={idx}
                    href={file.url} 
                    className="flex items-center justify-between px-3 py-2 hover:bg-gray-50 transition-colors border border-gray-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-sm">{file.name}</span>
                    <span className="text-gray-400">→</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
