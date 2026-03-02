import { portfolioData } from '../data/portfolio';

export default function PatentsAndCerts() {
  const { patents, certifications } = portfolioData;

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">专业底蕴</h2>
        
        {/* Patents */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8">发明专利</h3>
          <div className="space-y-3">
            {patents.map((patent, index) => (
              <div key={index} className="flex flex-col md:flex-row md:gap-6 py-3 border-b border-gray-200 last:border-0">
                <span className="font-mono text-sm text-gray-600 md:w-40 flex-shrink-0">
                  {patent.id}
                </span>
                <span className="text-gray-600">{patent.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-8">专业认证</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="border border-gray-200 p-6 text-center">
                <div className="text-lg font-bold mb-2">{cert.name}</div>
                <div className="text-sm text-gray-600">{cert.org}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
