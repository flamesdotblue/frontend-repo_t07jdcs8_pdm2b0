import Hero from './components/Hero'
import InsightsHighlights from './components/InsightsHighlights'
import BranchExplorer from './components/BranchExplorer'
import AskAgent from './components/AskAgent'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Hero />
      <InsightsHighlights />
      <BranchExplorer />
      <AskAgent />
      <Footer />
    </div>
  )
}

export default App
