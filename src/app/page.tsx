import Link from "next/link";
import { ArrowRight, BarChart3, Database, Zap, Network } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Navigation */}
      <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg leading-none">B</span>
            </div>
            <span className="font-bold tracking-tight text-xl text-brand-primary uppercase">Bloomgard Group</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <Link href="#enterprise" className="hover:text-brand-primary transition-colors">Enterprise</Link>
            <Link href="#energy" className="hover:text-brand-primary transition-colors">Energy</Link>
            <Link href="#data" className="hover:text-brand-primary transition-colors">Data</Link>
            <Link href="#qntm" className="hover:text-brand-primary transition-colors">QNTM</Link>
          </nav>
        </div>
      </header>

      <main className="w-full flex-1">
        
        {/* 1. Hero Section & Corporate Vision */}
        <section className="relative w-full bg-gray-900 text-white min-h-[85vh] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000" 
              alt="Aerial view of a sprawling global industrial complex"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white tracking-tight">
                Optimizing Global Infrastructure Through Artificial Intelligence.
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light">
                Bloomgard is an established leader in deploying autonomous systems and enterprise management protocols. We are re-engineering the operational frameworks of global industry, optimizing everything from enterprise workflow to large-scale data grids and heavy industrial operations.
              </p>
              <div className="flex items-center gap-4">
                <Link href="#enterprise" className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 font-semibold text-sm uppercase tracking-wide hover:bg-gray-100 transition-colors">
                  Explore Divisions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Bloomgard Enterprise */}
        <section id="enterprise" className="section-padding bg-white w-full border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <BarChart3 className="w-5 h-5 text-brand-primary" />
                  <span className="text-sm font-semibold tracking-widest text-brand-primary uppercase">Bloomgard Enterprise</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                  The AI-Native Core of Modern Corporate Operations.
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our flagship division provides a robust, institutional-grade Client Relationship Management (CRM) platform, and is actively developing a fully AI-native Enterprise Resource Planning (ERP) system designed exclusively for large-scale enterprises.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  By integrating advanced large language models directly into the operational pipeline, our ERP enables automated problem-solving, superior strategic decision-making, and significantly increased operational efficiency across all organizational layers.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-brand-primary shrink-0"></div>
                    <span className="text-gray-700 font-medium">Automated Lead Generation & Qualification Pipelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-brand-primary shrink-0"></div>
                    <span className="text-gray-700 font-medium">Intelligent Web Scraping & Market Data Aggregation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-brand-primary shrink-0"></div>
                    <span className="text-gray-700 font-medium">Advanced Team Management and Predictive Scheduling Systems</span>
                  </li>
                </ul>

                <Link href="https://cma.bloomgard.co" className="inline-flex items-center gap-2 text-brand-primary font-bold hover:text-brand-secondary transition-colors">
                  Access Enterprise Command Center <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative h-[600px] w-full bg-gray-100 p-8 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200" 
                  alt="Modern corporate office interior highlighting enterprise management"
                  className="absolute inset-0 w-full h-full object-cover shadow-xl grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Bloomgard Energy */}
        <section id="energy" className="section-padding bg-gray-50 w-full border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative h-[500px] w-full bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200" 
                  alt="Modern power plant and renewable energy grid infrastructure"
                  className="absolute inset-0 w-full h-full object-cover shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-brand-primary" />
                  <span className="text-sm font-semibold tracking-widest text-brand-primary uppercase">Bloomgard Energy</span>
                </div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">
                  Powering the Future of Grid Management.
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Bloomgard Energy is engineering a specialized ERP infrastructure designed strictly for the complexities of modern energy plant management. As global energy demands scale, our systems provide the institutional reliability required to maintain uninterrupted operations.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our proprietary algorithms focus on ensuring absolute grid stability, executing AI-driven predictive maintenance on critical physical assets, and optimizing complex energy loads across vast geographic distributions. We are the silent intelligence behind the world&apos;s most critical power infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Bloomgard Data */}
        <section id="data" className="section-padding bg-white w-full border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <Database className="w-5 h-5 text-brand-primary" />
                  <span className="text-sm font-semibold tracking-widest text-brand-primary uppercase">Bloomgard Data</span>
                </div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">
                  Institutional Scale Data Centre Operations.
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  The backbone of the modern digital economy requires uncompromising oversight. Bloomgard Data is actively developing a dedicated ERP solution engineered for large-scale, hyper-dense data centre management.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our infrastructure protocols prioritize continuous server uptime, sophisticated thermal physics management to prevent hardware degradation, and algorithmic load balancing to distribute computational stress efficiently across millions of active nodes.
                </p>
              </div>
              <div className="relative h-[500px] w-full bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200" 
                  alt="Massive illuminated server racks inside a global data center"
                  className="absolute inset-0 w-full h-full object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Future Prospects: Bloomgard QNTM */}
        <section id="qntm" className="section-padding bg-gray-900 text-white w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Network className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Future Prospects</span>
                </div>
                <h2 className="text-4xl font-bold mb-6 text-white leading-tight">
                  Bloomgard QNTM
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed font-light">
                  Bloomgard&apos;s roadmap extends far beyond classical computing. Bloomgard QNTM represents our inevitable, well-funded expansion into cloud quantum computing infrastructure, strategically headquartered within India to leverage emerging technical dominance.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  This division will not only pioneer accessible quantum computational power for enterprise clients but will also drive our aggressive expansion into AI-driven fintech solutions. We are laying the groundwork today for the institutional financial infrastructure of tomorrow.
                </p>
              </div>
              <div className="w-full md:w-1/3 border-t-4 border-brand-secondary pt-6">
                <h3 className="text-xl font-bold text-white mb-4">Strategic Roadmap</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center border-b border-gray-800 pb-4">
                    <span className="text-gray-400">Enterprise AI Integration</span>
                    <span className="text-brand-secondary font-bold">Active</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-800 pb-4">
                    <span className="text-gray-400">Energy Grid ERP</span>
                    <span className="text-white font-bold">Q4 2026</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-800 pb-4">
                    <span className="text-gray-400">Data Centre Management Protocols</span>
                    <span className="text-white font-bold">Q1 2027</span>
                  </li>
                  <li className="flex justify-between items-center pb-4">
                    <span className="text-gray-400">QNTM Cloud Infrastructure</span>
                    <span className="text-white font-bold">In Development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-brand-primary flex items-center justify-center">
                <span className="text-white font-bold text-xs leading-none">B</span>
              </div>
              <span className="font-bold tracking-tight text-lg text-gray-900 uppercase">Bloomgard Group</span>
            </div>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Bloomgard Group. All rights reserved. <br/>
              Global Headquarters.
            </p>
          </div>
          <div className="flex gap-12">
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <span className="font-bold text-gray-900 mb-1 uppercase tracking-wider text-xs">Divisions</span>
              <Link href="#enterprise" className="hover:text-brand-primary">Enterprise</Link>
              <Link href="#energy" className="hover:text-brand-primary">Energy</Link>
              <Link href="#data" className="hover:text-brand-primary">Data</Link>
              <Link href="#qntm" className="hover:text-brand-primary">QNTM</Link>
            </div>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <span className="font-bold text-gray-900 mb-1 uppercase tracking-wider text-xs">Corporate</span>
              <Link href="#" className="hover:text-brand-primary">Investor Relations</Link>
              <Link href="#" className="hover:text-brand-primary">Media Inquiries</Link>
              <Link href="#" className="hover:text-brand-primary">Careers</Link>
              <Link href="#" className="hover:text-brand-primary">Legal</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
