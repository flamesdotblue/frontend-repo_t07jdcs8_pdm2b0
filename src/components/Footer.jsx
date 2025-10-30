export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>
          Built with LangChain + Gemini, FastAPI backend, and a React frontend. For demo purposes only; figures are directional.
        </p>
        <p className="text-slate-500">© {new Date().getFullYear()} Parent Career Insights Agent</p>
      </div>
    </footer>
  )}
