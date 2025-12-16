import Navbar from "../components/Navbar";
import { Geist, Geist_Mono, Chakra_Petch } from "next/font/google";
import "./globals.css";
import StickyNav from '../components/StickyNav';

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const chakraPetch = Chakra_Petch({
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-chakra-petch",
	subsets: ["latin"],
});

import SmoothScroller from '../components/smoothscroller'


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${chakraPetch.variable} antialiased`}
			>
				<SmoothScroller />
				<StickyNav />
				{children}
			</body>
		</html>
	);
}
