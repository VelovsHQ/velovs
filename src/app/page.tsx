import React from "react";

export default function Page() {
	return (
		<main style={{ minHeight: "100vh", background: "#f9f9f9", color: "#111" }}>
			{/* Hero */}
			<section style={{ padding: "96px 32px", background: "#111", color: "#fff" }}>
				<h1 style={{ fontSize: 56, maxWidth: 900 }}>
					Velovs & Co
				</h1>
				<p style={{ marginTop: 24, fontSize: 20, maxWidth: 700 }}>
					Agentic AI, RAG systems, and business optimization for serious companies.
				</p>
			</section>

			{/* About */}
			<section style={{ padding: "80px 32px", maxWidth: 1100, margin: "0 auto" }}>
				<h2 style={{ fontSize: 36 }}>What we do</h2>
				<p style={{ marginTop: 16, fontSize: 18, lineHeight: 1.6 }}>
					We design and deploy AI systems that think, retrieve, and act.
					From internal copilots to autonomous workflows, we help teams move faster with fewer people.
				</p>
			</section>

			{/* Services */}
			<section style={{ padding: "80px 32px", background: "#fff" }}>
				<h2 style={{ fontSize: 36, textAlign: "center" }}>Services</h2>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
						gap: 24,
						maxWidth: 1100,
						margin: "48px auto 0"
					}}
				>
					{[
						"Agentic AI Systems",
						"RAG & Knowledge Engines",
						"Business Process Automation",
						"Internal AI Tools",
						"AI Strategy & Architecture",
						"Optimization & Cost Reduction"
					].map((item) => (
						<div
							key={item}
							style={{
								padding: 32,
								borderRadius: 12,
								background: "#f3f3f3"
							}}
						>
							<h3 style={{ fontSize: 22 }}>{item}</h3>
							<p style={{ marginTop: 12, color: "#444" }}>
								Designed for scale, security, and real-world usage.
							</p>
						</div>
					))}
				</div>
			</section>

			{/* Process */}
			<section style={{ padding: "80px 32px", maxWidth: 1100, margin: "0 auto" }}>
				<h2 style={{ fontSize: 36 }}>How we work</h2>
				<ol style={{ marginTop: 24, fontSize: 18, lineHeight: 1.8 }}>
					<li>Understand your business bottlenecks</li>
					<li>Design AI-first workflows</li>
					<li>Build, test, and iterate fast</li>
					<li>Deploy with monitoring and guardrails</li>
				</ol>
			</section>

			{/* CTA */}
			<section style={{ padding: "96px 32px", background: "#111", color: "#fff", textAlign: "center" }}>
				<h2 style={{ fontSize: 40 }}>Build smarter systems</h2>
				<p style={{ marginTop: 16, fontSize: 18 }}>
					If your company is wasting time on manual work, we should talk.
				</p>
				<button
					style={{
						marginTop: 32,
						padding: "14px 28px",
						fontSize: 16,
						borderRadius: 8,
						border: "none",
						cursor: "pointer"
					}}
				>
					Get in touch
				</button>
			</section>

			{/* Footer */}
			<footer style={{ padding: 32, textAlign: "center", background: "#000", color: "#777" }}>
				© {new Date().getFullYear()} Velovs & Co. All rights reserved.
			</footer>
		</main>
	);
}
