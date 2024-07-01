import Footer from './components/footer'
import Header from './components/header'
import CatgorySection from './components/section/category'
import FeatureSection from './components/section/feature'
import MemorySection from './components/section/memory'
import StepSection from './components/section/step'
import TimeSection from './components/section/time'

function App() {
	return (
		<>
			<Header />
			<div className='flex flex-col items-center space-y-4 py-4'>
				<MemorySection />
				<FeatureSection />
				<TimeSection />
				<StepSection />
				<CatgorySection />
			</div>
			<Footer />
		</>
	)
}

export default App
