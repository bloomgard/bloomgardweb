import Link from "next/link";
import { ArrowRight, BarChart3, Database, Zap, Network } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center bg-white">
      
      {/* Navigation */}
      <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex justify-between items-center">
          <div className="flex items-center">
            {/* The user's uploaded logo is expected to be placed at public/logo.png */}
            <img src="/logo.png" alt="Bloomgard." className="h-8 md:h-10 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <Link href="#enterprise" className="hover:text-blue-700 transition-colors">Enterprise</Link>
            <Link href="#energy" className="hover:text-blue-700 transition-colors">Energy</Link>
            <Link href="#data" className="hover:text-blue-700 transition-colors">Data</Link>
            <Link href="#qntm" className="hover:text-blue-700 transition-colors">QNTM</Link>
          </nav>
        </div>
      </header>

      <main className="w-full flex-1">
        
        {/* 1. Hero Section & Corporate Vision */}
        <section className="relative w-full bg-white min-h-[85vh] flex items-center border-b border-gray-200">
          {/* Light/White Background Image Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000" 
              alt="Aerial view of a sprawling global industrial complex"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-slate-900 tracking-tight">
                Optimizing Global Infrastructure Through <span className="text-blue-800">Artificial Intelligence.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed font-medium">
                Bloomgard is an established leader in deploying autonomous systems and enterprise management protocols. We are re-engineering the operational frameworks of global industry, optimizing everything from enterprise workflow to large-scale data grids and heavy industrial operations.
              </p>
              <div className="flex items-center gap-4">
                <Link href="#enterprise" className="inline-flex items-center justify-center bg-blue-900 text-white px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-blue-800 transition-colors shadow-lg">
                  Explore Divisions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Bloomgard Enterprise */}
        <section id="enterprise" className="section-padding bg-slate-50 w-full border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <BarChart3 className="w-5 h-5 text-blue-700" />
                  <span className="text-sm font-bold tracking-widest text-blue-700 uppercase">Bloomgard Enterprise</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-tight">
                  The AI-Native Core of Modern Corporate Operations.
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed font-medium">
                  Our flagship division provides a robust, institutional-grade Client Relationship Management (CRM) platform, and is actively developing a fully AI-native Enterprise Resource Planning (ERP) system designed exclusively for large-scale enterprises.
                </p>
                <p className="text-lg text-slate-700 mb-8 leading-relaxed font-medium">
                  By integrating advanced large language models directly into the operational pipeline, our ERP enables automated problem-solving, superior strategic decision-making, and significantly increased operational efficiency across all organizational layers.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-700 shrink-0"></div>
                    <span className="text-slate-800 font-semibold">Automated Lead Generation & Qualification Pipelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-700 shrink-0"></div>
                    <span className="text-slate-800 font-semibold">Intelligent Web Scraping & Market Data Aggregation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-700 shrink-0"></div>
                    <span className="text-slate-800 font-semibold">Advanced Team Management and Predictive Scheduling Systems</span>
                  </li>
                </ul>

                <Link href="https://cma.bloomgard.co" className="inline-flex items-center gap-2 text-blue-700 font-extrabold hover:text-blue-900 transition-colors uppercase tracking-wide text-sm">
                  Access Enterprise Command Center <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="relative h-[600px] w-full bg-slate-200 p-8 flex items-center justify-center border border-gray-300">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200" 
                  alt="Modern corporate office interior highlighting enterprise management"
                  className="absolute inset-0 w-full h-full object-cover shadow-xl grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-blue-900/5 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Bloomgard Energy */}
        <section id="energy" className="section-padding bg-white w-full border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative h-[500px] w-full bg-slate-200 border border-gray-300 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200" 
                  alt="Modern power plant and renewable energy grid infrastructure"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-blue-700" />
                  <span className="text-sm font-bold tracking-widest text-blue-700 uppercase">Bloomgard Energy</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-tight">
                  Powering the Future of Grid Management.
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed font-medium">
                  Bloomgard Energy is engineering a specialized ERP infrastructure designed strictly for the complexities of modern energy plant management. As global energy demands scale, our systems provide the institutional reliability required to maintain uninterrupted operations.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  Our proprietary algorithms focus on ensuring absolute grid stability, executing AI-driven predictive maintenance on critical physical assets, and optimizing complex energy loads across vast geographic distributions. We are the silent intelligence behind the world&apos;s most critical power infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Bloomgard Data */}
        <section id="data" className="section-padding bg-slate-50 w-full border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <Database className="w-5 h-5 text-blue-700" />
                  <span className="text-sm font-bold tracking-widest text-blue-700 uppercase">Bloomgard Data</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-tight">
                  Institutional Scale Data Centre Operations.
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed font-medium">
                  The backbone of the modern digital economy requires uncompromising oversight. Bloomgard Data is actively developing a dedicated ERP solution engineered for large-scale, hyper-dense data centre management.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  Our infrastructure protocols prioritize continuous server uptime, sophisticated thermal physics management to prevent hardware degradation, and algorithmic load balancing to distribute computational stress efficiently across millions of active nodes.
                </p>
              </div>
              <div className="relative h-[500px] w-full bg-slate-200 border border-gray-300 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200" 
                  alt="Massive illuminated server racks inside a global data center"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Future Prospects: Bloomgard QNTM */}
        <section id="qntm" className="section-padding bg-white text-slate-900 w-full border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Network className="w-5 h-5 text-blue-700" />
                  <span className="text-sm font-bold tracking-widest text-blue-700 uppercase">Future Prospects</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-tight">
                  Bloomgard QNTM
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed font-medium">
                  Bloomgard&apos;s roadmap extends far beyond classical computing. Bloomgard QNTM represents our inevitable, well-funded expansion into cloud quantum computing infrastructure, strategically headquartered within India to leverage emerging technical dominance.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  This division will not only pioneer accessible quantum computational power for enterprise clients but will also drive our aggressive expansion into AI-driven fintech solutions. We are laying the groundwork today for the institutional financial infrastructure of tomorrow.
                </p>
              </div>
              <div className="w-full md:w-1/3 border-t-4 border-blue-800 pt-6 bg-slate-50 p-8 shadow-sm">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-6">Strategic Roadmap</h3>
                <ul className="space-y-5">
                  <li className="flex justify-between items-center border-b border-gray-200 pb-4">
                    <span className="text-slate-700 font-semibold">Enterprise AI Integration</span>
                    <span className="text-blue-700 font-extrabold uppercase tracking-wider text-sm">Active</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-200 pb-4">
                    <span className="text-slate-700 font-semibold">Energy Grid ERP</span>
                    <span className="text-slate-900 font-extrabold uppercase tracking-wider text-sm">Future Release</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-200 pb-4">
                    <span className="text-slate-700 font-semibold">Data Centre Management</span>
                    <span className="text-slate-900 font-extrabold uppercase tracking-wider text-sm">Future Release</span>
                  </li>
                  <li className="flex justify-between items-center pb-2">
                    <span className="text-slate-700 font-semibold">QNTM Cloud Infrastructure</span>
                    <span className="text-slate-900 font-extrabold uppercase tracking-wider text-sm">Future Release</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full bg-slate-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center mb-6">
              <img src="/logo.png" alt="Bloomgard." className="h-6 w-auto grayscale opacity-80" />
            </div>
            <p className="text-sm font-medium text-slate-500">
              &copy; {new Date().getFullYear()} Bloomgard Group. All rights reserved. <br/>
              Global Headquarters.
            </p>
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col gap-3 text-sm text-slate-600 font-medium">
              <span className="font-extrabold text-slate-900 mb-2 uppercase tracking-widest text-xs">Divisions</span>
              <Link href="#enterprise" className="hover:text-blue-700 transition-colors">Enterprise</Link>
              <Link href="#energy" className="hover:text-blue-700 transition-colors">Energy</Link>
              <Link href="#data" className="hover:text-blue-700 transition-colors">Data</Link>
              <Link href="#qntm" className="hover:text-blue-700 transition-colors">QNTM</Link>
            </div>
            <div className="flex flex-col gap-3 text-sm text-slate-600 font-medium">
              <span className="font-extrabold text-slate-900 mb-2 uppercase tracking-widest text-xs">Corporate</span>
              <Link href="#" className="hover:text-blue-700 transition-colors">Investor Relations</Link>
              <Link href="#" className="hover:text-blue-700 transition-colors">Media Inquiries</Link>
              <Link href="#" className="hover:text-blue-700 transition-colors">Careers</Link>
              <Link href="#" className="hover:text-blue-700 transition-colors">Legal</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
