import Spline from '@splinetool/react-spline'
import { GraduationCap, Rocket, HelpCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90 pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur border text-sm text-slate-700">
          <Rocket className="w-4 h-4 text-purple-600" />
          Agentic AI for Parent Career Insights
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
          Clear answers about <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 bg-clip-text text-transparent">career outcomes</span>
        </h1>
        <p className="mt-4 md:mt-6 text-slate-600 max-w-2xl text-lg md:text-xl">
          Ask anything about employment rates, salaries, and post‑graduation support across branches. Built with LangChain + Gemini and served via FastAPI.
        </p>
        <div className="mt-6 flex items-center gap-4 text-slate-600">
          <div className="flex items-center gap-2"><GraduationCap className="w-5 h-5 text-blue-600" /><span>Branch‑aware</span></div>
          <div className="flex items-center gap-2"><HelpCircle className="w-5 h-5 text-purple-600" /><span>Parent‑friendly</span></div>
        </div>
      </div>
    </section>
  )
}
