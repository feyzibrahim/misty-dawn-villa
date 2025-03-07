import AmenitiesIcons from "@/components/amenitiesIcons";
import ImageList from "@/components/image-list";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import bg from "../../public/img/cropped/29.jpg";
import { oldStandardTT } from "./fonts";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Home() {
	return (
		<div className="">
			<main className="lg:h-screen pt-32 pb-16 px-5 lg:px-40">
				<div
					className={`bg-no-repeat py-10 rounded-3xl relative overflow-clip flex items-center justify-center flex-col`}
					style={{
						backgroundImage: `url(${bg.src})`,
						width: "100%",
						height: "100%",
						backgroundSize: "cover",
						backgroundPosition: "50% 50%",
					}}
				>
					<div className="bg-black h-full w-full absolute -z-0 opacity-50"></div>
					<h1 className="text-white text-xl lg:text-4xl z-0 text-center text-shadow lg:w-2/3">
						Enjoy the Luxurious Stay at the Resorts of MistyDawn Villa
					</h1>
					<p className="text-center text-xs lg:text-sm z-0 text-white text-shadow">
						Experience opulent luxury and exceptional service at the exquisite
						MistyDawn Villa
					</p>
				</div>
			</main>

			{/* About */}

			<div
				className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:h-screen pt-5 px-5 lg:px-40"
				id="about"
			>
				<div className="flex flex-col justify-center gap-5">
					<p className="text-primary font-bold uppercase">About</p>
					<h1 className={`${oldStandardTT.className} text-5xl font-bold`}>
						Discover <br />
						Our Story
					</h1>
					<div className="flex flex-col lg:flex-row gap-5">
						<div className="w-32 h-1 bg-primary rounded-full flex-shrink-0 lg:mt-5"></div>
						<p>
							MistyDawn Villa is designed to meet the requirements of modern
							day travelers. We understand each trip is different and have
							thoughtfully balanced the scapes of a peaceful home and a
							luxury hotel.
						</p>
					</div>
				</div>
				<div className="flex items-center justify-center p-5">
					<div className="border-2 border-primary rounded-lg lg:w-2/3">
						<Image
							alt="Natural Beauty"
							src="/img/cropped/31.jpg"
							width={2268}
							height={4032}
							className="rounded-lg -translate-x-5 translate-y-5"
						/>
					</div>
				</div>
			</div>

			{/* Rooms */}

			<div className="lg:h-screen space-y-5 py-10 pt-5 px-5 lg:px-40" id="rooms">
				<p className="text-primary font-bold uppercase">Our Rooms</p>
				<h1 className={`${oldStandardTT.className} text-5xl font-bold`}>
					Exquisite Cottage <br /> Accommodations
				</h1>
				<div className="w-32 h-1 bg-primary rounded-full flex-shrink-0 lg:mt-5"></div>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
					<Image
						alt="rooms 3"
						src="/img/cropped/34.jpg"
						width={3024}
						height={4032}
					/>
					<Image
						alt="rooms 1"
						src="/img/cropped/32.jpg"
						width={3024}
						height={4032}
					/>
					<Image
						alt="rooms 2"
						src="/img/cropped/33.jpg"
						width={3024}
						height={4032}
					/>
				</div>
			</div>

			{/* Amenities */}

			<div
				className="lg:h-screen space-y-5 py-10 grid grid-cols-1 lg:grid-cols-3 pt-5 px-5 lg:px-40"
				id="amenities"
			>
				<div className="flex flex-col justify-center gap-5">
					<p className="text-primary font-bold uppercase">Amenities</p>
					<h1 className={`${oldStandardTT.className} text-5xl font-bold`}>
						Your All-Inclusive <br /> Experience
					</h1>
					<div className="w-32 h-1 bg-primary rounded-full flex-shrink-0 lg:mt-5"></div>
					<p>
						Indulge in a world of luxury and comfort with our exclusive resort
						amenities, designed to create unforgettable experiences for you.
					</p>
				</div>
				<AmenitiesIcons />
			</div>

			<div className="min-h-screen space-y-5 py-10 pt-5 px-5 lg:px-40" id="gallery">
				<p className="text-primary font-bold uppercase">Gallery</p>
				<h1 className={`${oldStandardTT.className} text-5xl font-bold`}>
					A Pictorial Escape
				</h1>
				<div className="w-32 h-1 bg-primary rounded-full flex-shrink-0 lg:mt-5"></div>
				<ImageList />
			</div>
			<div
				className="min-h-screen space-y-5 py-10 relative pt-5 px-5 lg:px-40"
				id="contact-us"
			>
				<p className="text-primary font-bold uppercase">Location</p>
				<h1 className={`${oldStandardTT.className} text-5xl font-bold`}>
					Unveiling the Location
				</h1>
				<div className="w-32 h-1 bg-primary rounded-full flex-shrink-0 lg:mt-5"></div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3295.284127174811!2d76.70277027505055!3d11.366939488819988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDIyJzAxLjAiTiA3NsKwNDInMTkuMiJF!5e1!3m2!1sen!2sin!4v1726144797108!5m2!1sen!2sin"
					width="100%"
					height="400"
				/>
				<div className="z-10 bottom-0 p-6 w-full">
					<div className="py-5 bg-white shadow-lg border rounded-3xl p-5 flex gap-5 flex-col md:flex-row items-center justify-between">
						<Link
							href="mailto:mistydawn.villa@gmail.com"
							className="text-primary underline hover:text-blue-600"
						>
							mistydawn.villa@gmail.com
						</Link>
						<Link
							href="https://api.whatsapp.com/send?phone=918590868685"
							passHref
							className="flex w-fit gap-5 items-center justify-center px-4 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition duration-300"
						>
							Send Message
							<FaWhatsapp className="w-5 h-5" />
						</Link>
						<Link
							href="tel:+918590868685"
							className="text-primary underline hover:text-blue-600"
						>
							+91 8590868685
						</Link>
					</div>
				</div>
			</div>

			<footer className="bg-[#dee7f5] px-5 py-8">
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* About Section */}
					<div>
						<h2 className="text-lg font-semibold mb-4">Misty Dawn Villa</h2>
						<p className="">
							We are dedicated to providing quality service and ensuring
							customer satisfaction. Learn more about what we do.
						</p>
					</div>

					{/* Quick Links Section */}
					<div>
						<h2 className="text-lg font-semibold mb-4">Quick Links</h2>
						<ul className="space-y-2">
							<li>
								<Link href="" className=" hover:text-primary">
									Home
								</Link>
							</li>
							<li>
								<Link href="#about" className=" hover:text-primary">
									About
								</Link>
							</li>
							<li>
								<Link href="#experience" className=" hover:text-primary">
									Experience
								</Link>
							</li>
							<li>
								<Link href="#contact-us" className=" hover:text-primary">
									Contact Us
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Information Section */}
					<div>
						<h2 className="text-lg font-semibold mb-4">Contact Us</h2>
						<p className="">Email: mistydawn.villa@gmail.com</p>
						<p className="">Phone: +91 8590868685</p>
						<div className="mt-4 space-x-4 flex gap-5">
							<Link
								target="_blank"
								href="https://www.facebook.com/profile.php?id=61555356283523&ref=xav_ig_profile_web"
								className="hover:text-primary"
							>
								<Facebook />
							</Link>
							<Link target="_blank" href="#" className="hover:text-primary">
								<Twitter />
							</Link>
							<Link
								target="_blank"
								href="https://www.instagram.com/mistydawn.villa/"
								className="hover:text-primary"
							>
								<Instagram />
							</Link>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-700 mt-8 pt-4">
					<p className="text-center text-gray-500">
						© 2024 Misty Dawn Villa. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}
