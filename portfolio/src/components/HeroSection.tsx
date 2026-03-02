import { portfolioData } from '../data/portfolio';

export default function HeroSection() {
  const { personal } = portfolioData;

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Subtle watermark pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Avatar */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-gray-50 border-2 border-gray-200 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-gray-500">
              BL
            </div>
          </div>
        </div>

        {/* Name & Title */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
          {personal.name}
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          {personal.title}
        </p>

        {/* PDF Download Button */}
        <div className="mb-16">
          <a 
            href={personal.resumePDF}
            download
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors text-lg font-medium shadow-lg hover:shadow-xl"
          >
            <span className="mr-3">📄</span>
            <span>下载简历 PDF</span>
          </a>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {personal.metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{metric.value}</div>
              <div className="text-sm md:text-base text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
