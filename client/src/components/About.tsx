export default function About() {
	return (
		<section
			id="about"
			className="container py-12 md:py-24"
		>
			<div className="grid gap-8 md:grid-cols-2">
				<div>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						About Me
					</h2>
					<div className="mt-4 space-y-4">
						<p>
							I'm a passionate web developer with expertise in
							building modern, responsive web applications. With a
							strong foundation in front-end technologies and a
							keen eye for design, I create seamless user
							experiences that are both functional and visually
							appealing.
						</p>
						<p>
							My journey in web development began several years
							ago, and I've since worked on a variety of projects
							ranging from e-commerce platforms to content
							management systems. I'm constantly learning and
							adapting to new technologies to stay at the
							forefront of web development.
						</p>
					</div>
					<div className="mt-8">
						<h3 className="text-xl font-bold">Skills</h3>
						<div className="mt-4 flex flex-wrap gap-2">
							{[
								"HTML",
								"CSS",
								"JavaScript",
								"TypeScript",
								"React",
								"Redux",
								"Node.js",
								"Tailwind CSS",
								"MongoDB",
								"PostgreSQL",
								"Git",
								"Responsive Design",
								"UI/UX Design"
							].map((skill) => (
								<div
									key={skill}
									className="rounded-full bg-muted px-3 py-1 text-sm"
								>
									{skill}
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center">
					<div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-background bg-muted">
						<img
							src="/placeholder.svg?height=320&width=320"
							alt="Profile"
							className="object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
