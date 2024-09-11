import Image from "next/image";
import bg from "../../public/img/cropped/29.jpg";
import { oldStandardTT } from "./fonts";
import AmenitiesIcons from "@/components/amenitiesIcons";

export default function Home() {
	return (
		<div className="pt-5 px-5 lg:px-40">
			<main className="lg:h-screen pt-24 pb-16">
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

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:h-screen">
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

			<div className="lg:h-screen space-y-5 py-10">
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

			<div className="lg:h-screen space-y-5 py-10 grid grid-cols-1 lg:grid-cols-3">
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

			<div className="min-h-screen space-y-5 py-10">
				<p className="text-primary font-bold uppercase">Gallery</p>
				<h1 className={`${oldStandardTT.className} text-5xl font-bold`}>
					A Pictorial Escape
				</h1>
				<div className="w-32 h-1 bg-primary rounded-full flex-shrink-0 lg:mt-5"></div>
				<div className="columns-2 gap-4 sm:columns-2 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-4">
					<Image
						alt="rooms 3"
						src="/img/36.jpg"
						width={3024}
						height={4032}
						className="rounded-md"
					/>
					<Image
						alt="rooms 3"
						src="/img/cropped/5.jpg"
						width={1868}
						height={2936}
						className="rounded-md"
					/>
					<Image
						alt="rooms 3"
						src="/img/2.jpg"
						width={3024}
						height={4032}
						className="rounded-md"
					/>

					<Image
						alt="rooms 3"
						src="/img/37.jpg"
						width={3024}
						height={4032}
						className="rounded-md"
					/>

					<Image
						alt="rooms 3"
						src="/img/3.jpg"
						width={3000}
						height={4000}
						className="rounded-md"
					/>

					<Image
						alt="rooms 3"
						src="/img/6.jpg"
						width={3024}
						height={4032}
						className="rounded-md"
					/>

					<Image
						alt="rooms 3"
						src="/img/17.jpg"
						width={3024}
						height={4032}
						className="rounded-md"
					/>

					<Image
						alt="rooms 3"
						src="/img/30.jpg"
						width={3024}
						height={4032}
						className="rounded-md"
					/>
					<Image
						alt="rooms 3"
						src="/img/26.jpg"
						width={3024}
						height={4032}
						className="rounded-md"
					/>

					<Image
						alt="rooms 3"
						src="/img/21.jpg"
						width={3024}
						height={4032}
						className="rounded-md"
					/>
					<Image
						alt="rooms 3"
						src="/img/38.jpg"
						width={2268}
						height={4032}
						className="rounded-md"
					/>
				</div>
			</div>

			{/* <footer
				className="row-start-3 flex gap-6 flex-wrap items-center justify-center h-screen"
				id="contact"
			></footer> */}
		</div>
	);
}
