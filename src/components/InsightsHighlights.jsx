import { Briefcase, DollarSign, Users } from 'lucide-react'

const cards = [
  {
    icon: Briefcase,
    title: 'Employment Rate',
    value: '82–94% within 6 months',
    note: 'Varies by branch, internships, and region',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: DollarSign,
    title: 'Median Salary (Freshers)',
    value: '$42k–$85k',
    note: 'Depends on role, location, and industry demand',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Users,
    title: 'Career Services Impact',
    value: '2.1× interview conversions',
    note: 'Resume clinics, mock interviews, employer connects',
    color: 'from-violet-500 to-indigo-500',
  },
]

export default function InsightsHighlights() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Snapshot insights</h2>
        <p className="text-slate-600 mt-2">Quick, directional metrics to guide your evaluation.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="rounded-2xl border bg-white overflow-hidden">
              <div className={`h-1.5 bg-gradient-to-r ${c.color}`} />
              <div className="p-6">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
                  <c.icon className="w-5 h-5 text-slate-800" />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{c.title}</h3>
                <p className="text-xl md:text-2xl font-bold mt-1 text-slate-900">{c.value}</p>
                <p className="text-slate-600 mt-1 text-sm">{c.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
