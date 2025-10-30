const DATA = {
  'Computer Science': {
    roles: ['Software Engineer', 'Data Scientist', 'ML Engineer', 'Product Engineer'],
    skills: ['DSA', 'Databases', 'Cloud', 'Python/JS', 'AI/ML basics'],
    salary: 'Entry: $60k–$110k • Mid: $120k–$180k',
    outlook: 'Strong demand globally; AI and cloud accelerating opportunities.',
  },
  'Electronics': {
    roles: ['Embedded Engineer', 'VLSI Design', 'IoT Engineer', 'Hardware QA'],
    skills: ['C/C++', 'Digital Design', 'Signal Processing', 'PCB'],
    salary: 'Entry: $50k–$95k • Mid: $90k–$140k',
    outlook: 'IoT, automotive, and semiconductors drive growth; cross‑skills with CS helpful.',
  },
  'Mechanical': {
    roles: ['Design Engineer', 'Manufacturing', 'Automotive', 'Robotics Tech'],
    skills: ['CAD/CAE', 'Thermo', 'Manufacturing', 'Mechatronics'],
    salary: 'Entry: $45k–$85k • Mid: $85k–$130k',
    outlook: 'EVs, robotics, and sustainability open new roles; internships are key.',
  },
  'Civil': {
    roles: ['Site Engineer', 'Structural Analyst', 'Project Mgmt', 'Sustainability'],
    skills: ['AutoCAD/Revit', 'Structures', 'Estimation', 'Env. Codes'],
    salary: 'Entry: $40k–$80k • Mid: $80k–$120k',
    outlook: 'Infrastructure and green building create steady demand; licensure matters.',
  },
}

export default function BranchExplorer() {
  const keys = Object.keys(DATA)
  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Branches & opportunities</h2>
            <p className="text-slate-600 mt-2">Explore roles, skills, and salary bands across popular branches.</p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {keys.map((k) => {
            const b = DATA[k]
            return (
              <div key={k} className="rounded-2xl border bg-white p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">{k}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">Snapshot</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">Typical roles</p>
                    <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
                      {b.roles.map((r) => (<li key={r}>{r}</li>))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">Core skills</p>
                    <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
                      {b.skills.map((s) => (<li key={s}>{s}</li>))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-slate-50 text-slate-800">
                  <p className="text-sm"><span className="font-semibold">Salary:</span> {b.salary}</p>
                  <p className="text-sm mt-1"><span className="font-semibold">Outlook:</span> {b.outlook}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
