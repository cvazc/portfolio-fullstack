import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
	return (
		<section
			id="contact"
			className="container py-12 md:py-24"
		>
			<div className="mx-auto max-w-md space-y-8 text-center">
				<div>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						Get In Touch
					</h2>
					<p className="mt-4 text-gray-500">
						Have a project in mind or want to chat? Feel free to
						reach out!
					</p>
				</div>
				<div className="flex justify-center gap-4">
					<a
						href="mailto:your.email@example.com"
						aria-label="Email"
						className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 p-0"
					>
						<Mail className="h-5 w-5" />
					</a>
					<a
						href="https://github.com/yourusername"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 p-0"
					>
						<Github className="h-5 w-5" />
					</a>
					<a
						href="https://linkedin.com/in/yourusername"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
						className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 p-0"
					>
						<Linkedin className="h-5 w-5" />
					</a>
				</div>
				<div className="space-y-4">
					<p className="text-gray-500">Or send me a direct message</p>
					<a
						href="mailto:your.email@example.com"
						className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
					>
						Contact Me
					</a>
				</div>
			</div>
		</section>
	);
}
