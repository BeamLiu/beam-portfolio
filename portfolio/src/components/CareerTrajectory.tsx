import { portfolioData } from '../data/portfolio';

export default function CareerTrajectory() {
  const { career } = portfolioData;

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">职业轨迹</h2>
        
        <div className="space-y-12">
          {career.map((job, index) => (
            <div key={index} className="border-l-2 border-blue-600 pl-8 pb-8">
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-6 mb-4">
                <span className="text-lg font-mono text-gray-600">{job.period}</span>
                <h3 className="text-3xl font-bold">{job.company}</h3>
                <span className="text-xl text-gray-600">{job.role}</span>
              </div>
              
              <ul className="space-y-2">
                {job.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-gray-600 leading-relaxed flex">
                    <span className="mr-3 text-blue-600">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
