import Image from "next/image";
import bg from "../../public/img/cropped/29.jpg";
import { oldStandardTT } from "./fonts";

export default function Home() {
	return (
		<div className="pt-5 px-5 lg:px-40">
			<main className="h-screen pt-24 pb-16">
				<div
					className={`bg-no-repeat  rounded-3xl overflow-clip flex items-center justify-center flex-col`}
					style={{
						backgroundImage: `url(${bg.src})`,
						width: "100%",
						height: "100%",
						backgroundSize: "cover",
						backgroundPosition: "50% 50%",
					}}
				>
					<h1 className="text-white text-4xl text-center text-shadow lg:w-2/3">
						Enjoy the Luxurious Stay at the Resorts of MistyDawn Villa
					</h1>
					<p className="text-center text-white text-shadow">
						Experience opulent luxury and exceptional service at the exquisite
						MistyDawn Villa
					</p>
				</div>
			</main>
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
			{/* <footer
				className="row-start-3 flex gap-6 flex-wrap items-center justify-center h-screen"
				id="contact"
			></footer> */}
		</div>
	);
}
