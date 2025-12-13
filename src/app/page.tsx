import React from "react";
import { Navbar, NavBody, NavItems, NavbarLogo } from "../components/ui/resizable-navbar";

export default function Page() {
	return (
		<>
			{/* Navbar */}
			<Navbar>
				<NavBody>
					<NavbarLogo />
					<NavItems
						items={[
							{ name: "Home", link: "#" },
							{ name: "What we do", link: "#what-we-do" },
							{ name: "Services", link: "#services" },
							{ name: "Process", link: "#how-we-work" },
							{ name: "Contact", link: "#contact" },
						]}
					/>
				</NavBody>
			</Navbar>

			{/* Hero Section */}
			<section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6">
				<div className="max-w-4xl text-center space-y-6">
					<h1 className="text-5xl md:text-7xl font-bold tracking-tight">
						Building AI Systems <br /> That Actually Work
					</h1>
					<p className="text-zinc-400 text-lg max-w-2xl mx-auto">
						Velovs & Co designs agentic AI, RAG systems, and business-optimized
						automation that saves time, cuts costs, and scales intelligently.
					</p>
					<div className="flex justify-center gap-4">
						<a
							href="#contact"
							className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:opacity-90 transition"
						>
							Book a Call
						</a>
						<a
							href="#what-we-do"
							className="px-6 py-3 rounded-xl border border-zinc-700 text-white hover:bg-zinc-900 transition"
						>
							Learn More
						</a>
					</div>
				</div>
			</section>

			{/* What We Do */}
			<section
				id="what-we-do"
				className="py-24 bg-black text-white px-6"
			>
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-bold mb-12 text-center">
						What We Do
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
							<h3 className="text-xl font-semibold mb-2">
								Agentic AI
							</h3>
							<p className="text-zinc-400">
								Autonomous AI agents that reason, plan, and execute tasks across
								your business workflows.
							</p>
						</div>
						<div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
							<h3 className="text-xl font-semibold mb-2">
								RAG Systems
							</h3>
							<p className="text-zinc-400">
								Private, secure AI systems that retrieve knowledge from your
								internal data with accuracy.
							</p>
						</div>
						<div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
							<h3 className="text-xl font-semibold mb-2">
								Business Optimization
							</h3>
							<p className="text-zinc-400">
								We redesign processes using AI to reduce friction, cost, and
								human error.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* How We Work */}
			<section
				id="how-we-work"
				className="py-24 bg-zinc-950 text-white px-6"
			>
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-bold mb-12 text-center">
						How We Work
					</h2>
					<div className="grid md:grid-cols-4 gap-6 text-center">
						<div className="p-5 rounded-xl bg-black border border-zinc-800">
							<p className="font-semibold mb-1">01</p>
							<p className="text-zinc-400">Understand the problem</p>
						</div>
						<div className="p-5 rounded-xl bg-black border border-zinc-800">
							<p className="font-semibold mb-1">02</p>
							<p className="text-zinc-400">Design the AI system</p>
						</div>
						<div className="p-5 rounded-xl bg-black border border-zinc-800">
							<p className="font-semibold mb-1">03</p>
							<p className="text-zinc-400">Build and integrate</p>
						</div>
						<div className="p-5 rounded-xl bg-black border border-zinc-800">
							<p className="font-semibold mb-1">04</p>
							<p className="text-zinc-400">Optimize and scale</p>
						</div>
					</div>
				</div>
			</section>

			{/* Contact */}
			<section
				id="contact"
				className="py-24 bg-black text-white px-6"
			>
				<div className="max-w-3xl mx-auto text-center space-y-6">
					<h2 className="text-4xl font-bold">
						Let’s Build Something Powerful
					</h2>
					<p className="text-zinc-400">
						Tell us about your business. We’ll show you how AI can actually
						move the needle.
					</p>
					<a
						href="mailto:contact@velovs.com"
						className="inline-block px-8 py-4 rounded-xl bg-white text-black font-medium hover:opacity-90 transition"
					>
						Contact Us
					</a>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-8 bg-zinc-950 text-zinc-500 text-center text-sm">
				© {new Date().getFullYear()} Velovs & Co. All rights reserved.
			</footer>
		</>
	);
}
