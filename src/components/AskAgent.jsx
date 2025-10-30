import { useState } from 'react'
import { Send, Loader2 } from 'lucide-react'

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function AskAgent() {
  const [question, setQuestion] = useState('What are the career outcomes and salaries for Computer Science in the US?')
  const [branch, setBranch] = useState('Computer Science')
  const [region, setRegion] = useState('United States')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const ask = async (e) => {
    e?.preventDefault()
    setLoading(true)
    setError('')
    setAnswer('')
    try {
      const res = await fetch(`${BASE_URL}/ask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, student_branch: branch || undefined, region: region || undefined }),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      const data = await res.json()
      setAnswer(data.answer)
    } catch (err) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">Ask the Agent</h2>
        <p className="text-slate-600 mt-2 text-center">Get nuanced, parent‑friendly answers powered by LangChain + Gemini.</p>

        <form onSubmit={ask} className="mt-8 rounded-2xl border p-4 md:p-6 bg-slate-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <input
              className="md:col-span-3 w-full rounded-lg border bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask about outcomes, opportunities, salaries, or support"
            />
            <input
              className="w-full rounded-lg border bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              placeholder="Branch/Major (optional)"
            />
            <input
              className="w-full rounded-lg border bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              placeholder="Region/Country (optional)"
            />
            <button
              type="submit"
              disabled={loading}
              className="md:col-span-3 inline-flex items-center justify-center gap-2 rounded-lg bg-purple-600 text-white font-semibold px-4 py-2 hover:bg-purple-700 transition disabled:opacity-60"
            >
              {loading ? (<><Loader2 className="w-4 h-4 animate-spin" />Thinking…</>) : (<><Send className="w-4 h-4" /> Ask</>)}
            </button>
          </div>
        </form>

        {error && (
          <div className="mt-4 p-3 rounded-lg bg-red-50 text-red-700 border border-red-200">{error}</div>
        )}

        {answer && (
          <div className="mt-6 rounded-2xl border p-6 bg-white prose prose-slate max-w-none">
            {answer.split('\n').map((line, i) => (
              <p key={i} className="whitespace-pre-wrap leading-relaxed">{line}</p>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
