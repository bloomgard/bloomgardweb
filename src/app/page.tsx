import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Database, Zap, Network, Building2 } from "lucide-react";
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
      <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo Fallback (Matches uploaded image style) */}
            <span className="font-extrabold text-2xl tracking-tighter text-black">Bloomgard.</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <Link href="/enterprise" className="hover:text-blue-700 transition-colors">Enterprise</Link>
            <Link href="/energy" className="hover:text-blue-700 transition-colors">Energy</Link>
            <Link href="/data" className="hover:text-blue-700 transition-colors">Data</Link>
            <Link href="/qntm" className="hover:text-blue-700 transition-colors">QNTM</Link>
            <Link href="/finance" className="hover:text-blue-700 transition-colors">Finance</Link>
          </nav>
        </div>
      </header>

      <main className="w-full">
        
        {/* 1. Hero Section */}
        <section className="relative w-full bg-white min-h-[70vh] flex items-center border-b border-gray-200">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000" 
              alt="Aerial view of a sprawling global industrial complex managed by AI"
              fill
              className="object-cover opacity-10"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-slate-900 tracking-tight">
                Making global business better with <span className="text-blue-800">AI.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed font-medium">
                Bloomgard builds smart software to manage big industries. We help large companies run smoothly, from managing teams to running power plants and data centers.
              </p>
              <p className="text-sm font-bold tracking-widest text-slate-400 uppercase">
                Scroll down to see our divisions
              </p>
            </div>
          </div>
        </section>

        {/* 2. Scrolling Cards Section */}
        <div className="relative w-full">
          
          {/* Card 1: Enterprise */}
          <section className="sticky top-0 h-screen w-full bg-slate-50 flex items-center justify-center border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 mb-4">
                    <BarChart3 className="w-6 h-6 text-blue-700" />
                    <span className="text-sm font-bold tracking-widest text-blue-700 uppercase">Division 01</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">
                    Bloomgard Enterprise
                  </h2>
                  <p className="text-lg text-slate-700 mb-8 leading-relaxed font-medium">
                    We build software to help large companies manage their customers and employees. Our AI helps businesses find leads, organize data, and work faster.
                  </p>
                  <Link href="/enterprise" className="inline-flex items-center justify-center bg-blue-900 text-white px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-blue-800 transition-colors shadow-lg">
                    Read Our Plan <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
                <div className="hidden lg:block relative h-[500px] w-full bg-white border border-gray-200 shadow-xl p-4">
                  <div className="relative w-full h-full">
                    <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200" alt="Modern corporate office interior highlighting enterprise management" fill className="object-cover grayscale opacity-80" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Card 2: Energy */}
          <section className="sticky top-0 h-screen w-full bg-white flex items-center justify-center border-b border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="hidden lg:block relative h-[500px] w-full bg-white border border-gray-200 shadow-xl p-4">
                  <div className="relative w-full h-full">
                    <Image src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200" alt="Modern power plant and renewable energy grid infrastructure" fill className="object-cover grayscale opacity-80" />
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 mb-4">
                    <Zap className="w-6 h-6 text-blue-700" />
                    <span className="text-sm font-bold tracking-widest text-blue-700 uppercase">Division 02</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">
                    Bloomgard Energy
                  </h2>
                  <p className="text-lg text-slate-700 mb-8 leading-relaxed font-medium">
                    We create software for power plants and energy grids. Our AI makes sure the power stays on and helps fix machines before they break.
                  </p>
                  <Link href="/energy" className="inline-flex items-center justify-center bg-blue-900 text-white px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-blue-800 transition-colors shadow-lg">
                    Read Our Plan <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Card 3: Data */}
          <section className="sticky top-0 h-screen w-full bg-slate-50 flex items-center justify-center border-b border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 mb-4">
                    <Database className="w-6 h-6 text-blue-700" />
                    <span className="text-sm font-bold tracking-widest text-blue-700 uppercase">Division 03</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">
                    Bloomgard Data
                  </h2>
                  <p className="text-lg text-slate-700 mb-8 leading-relaxed font-medium">
                    We build software to run huge data centers. Our tools keep servers cool, manage internet traffic, and prevent downtime.
                  </p>
                  <Link href="/data" className="inline-flex items-center justify-center bg-blue-900 text-white px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-blue-800 transition-colors shadow-lg">
                    Read Our Plan <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
                <div className="hidden lg:block relative h-[500px] w-full bg-white border border-gray-200 shadow-xl p-4">
                  <div className="relative w-full h-full">
                    <Image src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200" alt="Massive illuminated server racks inside a global data center" fill className="object-cover grayscale opacity-80" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Card 4: QNTM */}
          <section className="sticky top-0 h-screen w-full bg-white flex items-center justify-center border-b border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="hidden lg:block relative h-[500px] w-full bg-white border border-gray-200 shadow-xl p-4">
                  <div className="relative w-full h-full">
                    <Image src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200" alt="Advanced quantum technology hardware setup" fill className="object-cover grayscale opacity-80" />
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 mb-4">
                    <Network className="w-6 h-6 text-blue-700" />
                    <span className="text-sm font-bold tracking-widest text-blue-700 uppercase">Division 04</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">
                    Bloomgard QNTM
                  </h2>
                  <p className="text-lg text-slate-700 mb-8 leading-relaxed font-medium">
                    We are building cloud quantum computers in India. This new technology will help solve complex problems that normal computers cannot handle.
                  </p>
                  <Link href="/qntm" className="inline-flex items-center justify-center bg-blue-900 text-white px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-blue-800 transition-colors shadow-lg">
                    Read Our Plan <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Card 5: Finance */}
          <section className="sticky top-0 h-screen w-full bg-slate-50 flex items-center justify-center border-b border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 mb-4">
                    <Building2 className="w-6 h-6 text-blue-700" />
                    <span className="text-sm font-bold tracking-widest text-blue-700 uppercase">Division 05</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">
                    Bloomgard Finance
                  </h2>
                  <p className="text-lg text-slate-700 mb-8 leading-relaxed font-medium">
                    We provide AI software for banks and financial companies. Our tools help manage money, detect fraud, and automate banking tasks.
                  </p>
                  <Link href="/finance" className="inline-flex items-center justify-center bg-blue-900 text-white px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-blue-800 transition-colors shadow-lg">
                    Read Our Plan <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
                <div className="hidden lg:block relative h-[500px] w-full bg-white border border-gray-200 shadow-xl p-4">
                  <div className="relative w-full h-full">
                    <Image src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200" alt="Financial graphs and data on a dashboard" fill className="object-cover grayscale opacity-80" />
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-slate-100 border-t border-gray-200 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center mb-6">
              <span className="font-extrabold text-xl tracking-tighter text-slate-400">Bloomgard.</span>
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
