import Image from "next/image";

export default function ImageList() {
	return (
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
	);
}
