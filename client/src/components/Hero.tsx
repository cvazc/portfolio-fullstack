

export default function Hero() {
	return (
		<section className="container py-24 sm:py-32">
			<div className="flex flex-col items-center gap-4 text-center md:gap-8">
				<div className="space-y-4">
					<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
						Web Developer
					</h1>
					<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
						I build accessible, responsive, and performant web
						applications that deliver exceptional user experiences.
					</p>
				</div>
				<div className="flex flex-col gap-3 sm:flex-row">
					<button className="inline-flex items-center px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400">
						<svg
							className="w-4 h-4 mr-2 fill-current"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
						</svg>
						<span>Download CV</span>
					</button>
					<a
						href="#contact"
						onClick={(e) => {
							e.preventDefault()
							const element = document.getElementById("contact")
							if (element) {
								element.scrollIntoView({ behavior: "smooth" })
							}
						}}
						className="inline-flex items-center px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400"
					>
						Contact me
					</a>
				</div>
			</div>
		</section>
	)
}
