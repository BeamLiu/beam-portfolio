import { portfolioData } from '../data/portfolio';

export default function CoreValues() {
  const { coreValues } = portfolioData;

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">核心竞争力</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {coreValues.map((value, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
