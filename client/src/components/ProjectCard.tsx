import { Github, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link: string;
	github: string;
}

export default function ProjectCard({
	title,
	description,
	image,
	tags,
	link,
	github
}: ProjectCardProps) {
	return (
		<div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
			<div className="aspect-video w-full overflow-hidden">
				<img
					src={image || "/placeholder.svg"}
					alt={title}
					className="h-full w-full object-cover transition-all hover:scale-105"
				/>
			</div>
			<div className="p-6">
				<h3 className="text-xl font-bold">{title}</h3>
			</div>
			<div className="p-6 pt-0">
				<p className="text-muted-foreground">{description}</p>
				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<span
							key={tag}
							className="rounded-full bg-muted px-2 py-1 text-xs"
						>
							{tag}
						</span>
					))}
				</div>
			</div>
			<div className="flex items-center p-6 pt-0 gap-2">
				<a
					href={github}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 w-full"
				>
					<Github className="mr-2 h-4 w-4" />
					Code
				</a>
				<a
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3 w-full"
				>
					<ArrowUpRight className="mr-2 h-4 w-4" />
					Demo
				</a>
			</div>
		</div>
	);
}
