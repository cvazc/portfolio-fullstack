"use client"

import { Link } from "react-router-dom"

export default function Header() {
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id)
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
	}

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex items-center justify-between h-16">
				<Link to="/" className="font-bold">
					Sebastián Contreras
				</Link>
				<nav className="hidden gap-6 md:flex">
					<a
						href="#projects"
						onClick={(e) => {
							e.preventDefault()
							scrollToSection("projects")
						}}
						className="text-sm font-medium hover:underline underline-offset-4"
					>
						Projects
					</a>
					<a
						href="#about"
						onClick={(e) => {
							e.preventDefault()
							scrollToSection("about")
						}}
						className="text-sm font-medium hover:underline underline-offset-4"
					>
						About
					</a>
					<a
						href="#contact"
						onClick={(e) => {
							e.preventDefault()
							scrollToSection("contact")
						}}
						className="text-sm font-medium hover:underline underline-offset-4"
					>
						Contact
					</a>
				</nav>
				<a
					className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
					href="https://www.linkedin.com/in/contreras-sebastian-dev/"
				>
					Get in touch
				</a>
			</div>
		</header>
	)
}
