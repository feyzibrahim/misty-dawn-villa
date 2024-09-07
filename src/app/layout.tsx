import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { inter } from "./fonts";

export const metadata: Metadata = {
	title: "MistyDawn Villa",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={` ${inter.className} antialiased`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
