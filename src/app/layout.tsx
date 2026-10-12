import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const manrope = Manrope({
	variable: "--font-manrope",
	subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
	variable: "--font-jakarta",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "HireLoop-Find your next job/candidate",
	description: "Find your next job/cnadidate",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={`dark ${manrope.variable} ${jakarta.variable} h-full antialiased`}
		>
			<body className="relative min-h-full flex flex-col">
				<Toaster position="top-right" />
				{children}
			</body>
		</html>
	);
}
