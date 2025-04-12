import ProjectCard from "./ProjectCard";

export default function Projects() {
	return (
		<section
			id="projects"
			className="container py-12 md:py-24"
		>
			<div className="flex flex-col gap-8">
				<div>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						Projects
					</h2>
					<p className="text-gray-500 md:text-xl">
						Check out some of my recent work
					</p>
				</div>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					<ProjectCard
						title="E-commerce Website"
						description="A full-featured online store built with React and Stripe integration."
						image="/placeholder.svg?height=400&width=600"
						tags={["React", "Tailwind CSS", "Stripe"]}
						link="#"
						github="#"
					/>
					<ProjectCard
						title="Task Management App"
						description="A productivity application with drag-and-drop interface and real-time updates."
						image="/placeholder.svg?height=400&width=600"
						tags={["React", "Firebase", "Tailwind CSS"]}
						link="#"
						github="#"
					/>
					<ProjectCard
						title="Portfolio Website"
						description="A responsive portfolio website showcasing creative work and projects."
						image="/placeholder.svg?height=400&width=600"
						tags={["React", "Framer Motion", "Tailwind CSS"]}
						link="#"
						github="#"
					/>
					<ProjectCard
						title="Weather Dashboard"
						description="A weather application with location-based forecasts and interactive maps."
						image="/placeholder.svg?height=400&width=600"
						tags={["React", "OpenWeather API", "Chart.js"]}
						link="#"
						github="#"
					/>
					<ProjectCard
						title="Blog Platform"
						description="A content management system with markdown support and user authentication."
						image="/placeholder.svg?height=400&width=600"
						tags={["React", "MongoDB", "Auth0"]}
						link="#"
						github="#"
					/>
					<ProjectCard
						title="Recipe App"
						description="A recipe sharing platform with search functionality and user profiles."
						image="/placeholder.svg?height=400&width=600"
						tags={["React", "Node.js", "Express", "MongoDB"]}
						link="#"
						github="#"
					/>
				</div>
			</div>
		</section>
	);
}
