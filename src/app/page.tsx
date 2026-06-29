import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Database, Zap, Network, Building2, Globe } from "lucide-react";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bloomgard Corporation",
    "url": "https://bloomgard.co",
    "logo": "https://bloomgard.co/logo.png",
    "description": "Global enterprise optimization and AI-native erp.",
  };

  return (
    <div className="w-full flex flex-col items-center bg-white">
      <JsonLd data={orgSchema} />
      
      {/* Navigation */}
      <header className="w-full bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo Fallback (Matches uploaded image style) */}
            <span className="font-extrabold text-4xl tracking-tighter text-black">Bloomgard.</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <Link href="/enterprise" className="hover:text-blue-700 transition-colors">Enterprise</Link>
            <Link href="/energy" className="hover:text-blue-700 transition-colors">Energy</Link>
            <Link href="/data" className="hover:text-blue-700 transition-colors">Data</Link>
            <Link href="/qntm" className="hover:text-blue-700 transition-colors">QNTM</Link>
            <Link href="/finance" className="hover:text-blue-700 transition-colors">Finance</Link>
            <a href="mailto:support@bloomgard.co" className="hover:text-blue-700 transition-colors font-bold text-blue-900">Contact</a>
          </nav>
        </div>
      </header>

      <main className="w-full">
        
        {/* 1. Hero Section */}
        <section className="relative w-full min-h-[80vh] flex items-center border-b border-gray-200">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000" 
              alt="Aerial view of a sprawling global industrial complex managed by AI"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-slate-900 tracking-tight">
                Making global business better with <span className="text-blue-800">AI.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-700 mb-10 leading-relaxed font-medium">
                Bloomgard plans to build smart software to manage massive global industries. With our active AI CRM already empowering modern enterprise, our future divisions will optimize everything from power grids to quantum computing.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold tracking-widest text-slate-500 uppercase flex items-center">
                  Scroll down to explore divisions <ArrowRight className="ml-2 w-4 h-4 rotate-90" />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Scrolling Cards Section */}
        <div className="relative w-full">
          
          {/* Card 1: Enterprise */}
          <section className="sticky top-0 h-screen w-full flex items-center justify-center border-b border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
            <div className="absolute inset-0 z-0">
              <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000" alt="Modern corporate office interior highlighting enterprise management" fill className="object-cover" />
              <div className="absolute inset-0 bg-white/90 backdrop-blur-md"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 mb-4">
                  <BarChart3 className="w-8 h-8 text-blue-700" />
                  <span className="text-sm font-bold tracking-widest text-blue-700 uppercase">Division 01</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-slate-900">
                  Bloomgard Enterprise
                </h2>
                <p className="text-xl text-slate-700 mb-10 leading-relaxed font-medium">
                  We plan to build comprehensive software to help large companies manage their workforce. Our active, flagship AI CRM platform currently helps businesses find leads, organize data, and radically accelerate corporate workflows.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/enterprise" className="inline-flex items-center justify-center bg-blue-900 text-white px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-blue-800 transition-colors shadow-lg">
                    Read Our Plan <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <a href="https://cma.bloomgard.co" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-blue-900 border border-gray-200 px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-slate-50 transition-colors shadow-lg">
                    Access Active AI CRM <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Card 2: Energy */}
          <section className="sticky top-0 h-screen w-full flex items-center justify-center border-b border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
            <div className="absolute inset-0 z-0">
              <Image src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2000" alt="Modern power plant and renewable energy grid infrastructure" fill className="object-cover" />
              <div className="absolute inset-0 bg-slate-50/90 backdrop-blur-md"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <div className="max-w-3xl ml-auto">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Zap className="w-8 h-8 text-blue-700" />
                  <span className="text-sm font-bold tracking-widest text-blue-700 uppercase">Division 02</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-slate-900">
                  Bloomgard Energy
                </h2>
                <p className="text-xl text-slate-700 mb-10 leading-relaxed font-medium">
                  We plan to create software for massive power plants and renewable energy grids. In the future, our AI will ensure the power stays on and help fix machines before they break, seamlessly integrating clean solar and wind energy.
                </p>
                <Link href="/energy" className="inline-flex items-center justify-center bg-blue-900 text-white px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-blue-800 transition-colors shadow-lg">
                  Read Our Plan <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>

          {/* Card 3: Data */}
          <section className="sticky top-0 h-screen w-full flex items-center justify-center border-b border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
            <div className="absolute inset-0 z-0">
              <Image src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000" alt="Massive illuminated server racks inside a global data center" fill className="object-cover" />
              <div className="absolute inset-0 bg-white/90 backdrop-blur-md"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Database className="w-8 h-8 text-blue-700" />
                  <span className="text-sm font-bold tracking-widest text-blue-700 uppercase">Division 03</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-slate-900">
                  Bloomgard Data
                </h2>
                <p className="text-xl text-slate-700 mb-10 leading-relaxed font-medium">
                  We plan to build software to run huge data centers. Our future tools will keep servers cool autonomously, manage internet traffic efficiently, and absolutely prevent critical downtime.
                </p>
                <Link href="/data" className="inline-flex items-center justify-center bg-blue-900 text-white px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-blue-800 transition-colors shadow-lg">
                  Read Our Plan <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>

          {/* Card 4: QNTM */}
          <section className="sticky top-0 h-screen w-full flex items-center justify-center border-b border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
            <div className="absolute inset-0 z-0">
              <Image src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000" alt="Advanced quantum technology hardware setup" fill className="object-cover" />
              <div className="absolute inset-0 bg-slate-50/90 backdrop-blur-md"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <div className="max-w-3xl ml-auto">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Network className="w-8 h-8 text-blue-700" />
                  <span className="text-sm font-bold tracking-widest text-blue-700 uppercase">Division 04</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-slate-900">
                  Bloomgard QNTM
                </h2>
                <p className="text-xl text-slate-700 mb-10 leading-relaxed font-medium">
                  We plan to build cloud quantum computers deeply integrated with our AI pipelines in India. This future technology will help solve complex problems that normal computers cannot handle.
                </p>
                <Link href="/qntm" className="inline-flex items-center justify-center bg-blue-900 text-white px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-blue-800 transition-colors shadow-lg">
                  Read Our Plan <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>

          {/* Card 5: Finance */}
          <section className="sticky top-0 h-screen w-full flex items-center justify-center border-b border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
            <div className="absolute inset-0 z-0">
              <Image src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2000" alt="Financial graphs and data on a dashboard" fill className="object-cover" />
              <div className="absolute inset-0 bg-white/90 backdrop-blur-md"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Building2 className="w-8 h-8 text-blue-700" />
                  <span className="text-sm font-bold tracking-widest text-blue-700 uppercase">Division 05</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-slate-900">
                  Bloomgard Finance
                </h2>
                <p className="text-xl text-slate-700 mb-10 leading-relaxed font-medium">
                  We plan to provide AI software for banks and financial companies. Our future tools will help manage money, detect sophisticated fraud, and automate banking tasks entirely.
                </p>
                <Link href="/finance" className="inline-flex items-center justify-center bg-blue-900 text-white px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-blue-800 transition-colors shadow-lg">
                  Read Our Plan <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>

        </div>

        {/* 3. Our Vision Section */}
        <section className="relative w-full bg-blue-950 text-white py-32 border-b border-blue-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <Globe className="w-16 h-16 text-blue-400 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight">
              Bringing AI & Humanity Closer.
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-medium">
              At Bloomgard, our vision extends far beyond raw computation and industrial management. We believe the true promise of artificial intelligence lies in its ability to elevate human potential. By automating the complex, the dangerous, and the mundane across global infrastructure, we aim to free humanity to focus on what matters most: creativity, connection, and progress. We don&apos;t just build software; we build the bridge to a liberated future.
            </p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full bg-slate-100 border-t border-gray-200 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center mb-6">
              <span className="font-extrabold text-3xl tracking-tighter text-slate-400">Bloomgard.</span>
            </div>
            <p className="text-sm font-medium text-slate-500">
              &copy; {new Date().getFullYear()} Bloomgard Group. All rights reserved. <br/>
              Global Headquarters.
            </p>
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col gap-3 text-sm text-slate-600 font-medium">
              <span className="font-extrabold text-slate-900 mb-2 uppercase tracking-widest text-xs">Divisions</span>
              <Link href="/enterprise" className="hover:text-blue-700 transition-colors">Enterprise</Link>
              <Link href="/energy" className="hover:text-blue-700 transition-colors">Energy</Link>
              <Link href="/data" className="hover:text-blue-700 transition-colors">Data</Link>
              <Link href="/qntm" className="hover:text-blue-700 transition-colors">QNTM</Link>
              <Link href="/finance" className="hover:text-blue-700 transition-colors">Finance</Link>
            </div>
            <div className="flex flex-col gap-3 text-sm text-slate-600 font-medium">
              <span className="font-extrabold text-slate-900 mb-2 uppercase tracking-widest text-xs">Contact</span>
              <a href="mailto:support@bloomgard.co" className="hover:text-blue-700 transition-colors font-bold text-blue-800">support@bloomgard.co</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
