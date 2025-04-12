import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
	return (
		<footer className="border-t py-6 md:py-8">
			<div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
				<p className="text-sm text-gray-500">
					© {new Date().getFullYear()} YourName. All rights reserved.
				</p>
				<div className="flex gap-4">
					<a
						href="https://github.com/yourusername"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
					>
						<Github className="h-5 w-5" />
					</a>
					<a
						href="https://linkedin.com/in/yourusername"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
					>
						<Linkedin className="h-5 w-5" />
					</a>
					<a
						href="mailto:your.email@example.com"
						aria-label="Email"
					>
						<Mail className="h-5 w-5" />
					</a>
				</div>
			</div>
		</footer>
	);
}
