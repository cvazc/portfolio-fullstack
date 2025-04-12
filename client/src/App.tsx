import { BrowserRouter as Router } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
	return (
		<Router>
			<div className="flex flex-col w-full min-h-screen">
				<Header />
				<main className="flex-1 w-full">
					<Hero />
					<Projects />
					<About />
					<Contact />
				</main>
				<Footer />
			</div>
		</Router>
	)
}

export default App
