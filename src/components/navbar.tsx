"use client";

import { useState, useEffect } from "react";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const controlNavbar = () => {
		if (typeof window !== "undefined") {
			if (window.scrollY > lastScrollY) {
				// Scroll Down
				setIsVisible(false);
			} else {
				// Scroll Up
				setIsVisible(true);
			}
			setLastScrollY(window.scrollY);
		}
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", controlNavbar);

			return () => {
				window.removeEventListener("scroll", controlNavbar);
			};
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [lastScrollY]);

	return (
		<nav
			className={`w-full px-5 lg:px-40 py-5 flex items-center justify-between fixed top-0 left-0 transition-transform duration-300 bg-background shadow-md z-50 ${
				isVisible ? "translate-y-0" : "-translate-y-full"
			}`}
		>
			<Link href="/">
				<div className="flex gap-2 items-center hover:cursor-pointer animate-fadeIn">
					<Image src="/logo.png" alt="logo" width={30} height={30} />
					<p className="font-bold">MistyDawn Villa</p>
				</div>
			</Link>
			<div className="hidden lg:flex gap-5 text-sm animate-fadeIn">
				<p className="text-foreground-secondary cursor-pointer hover:text-foreground">
					<Link href="#about">About</Link>
				</p>
				<p className="text-foreground-secondary cursor-pointer hover:text-foreground">
					<Link href="#rooms">Rooms</Link>
				</p>
				<p className="text-foreground-secondary cursor-pointer hover:text-foreground">
					<Link href="#amenities">Amenities</Link>
				</p>
				<p className="text-foreground-secondary cursor-pointer hover:text-foreground">
					<Link href="#gallery">Gallery</Link>
				</p>
				<p className="text-foreground-secondary cursor-pointer hover:text-foreground">
					<Link href="#contact-us">Contact</Link>
				</p>
			</div>
			<div className="lg:hidden">
				<AlignJustify />
			</div>
		</nav>
	);
}
