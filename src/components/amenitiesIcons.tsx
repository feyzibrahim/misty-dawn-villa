import Image from "next/image";

export default function AmenitiesIcons() {
	const amenities = [
		{
			src: "/icons/bed.png",
			title: "Luxury Bedrooms",
		},
		{
			src: "/icons/furniture.png",
			title: "Fine Furniture",
		},
		{
			src: "/icons/kitchen.png",
			title: "Modular Kitchen",
		},
		{
			src: "/icons/parking.png",
			title: "Private Parking",
		},
		{
			src: "/icons/sitout.png",
			title: "Sit-Out Area",
		},
		{
			src: "/icons/wifi.png",
			title: "Free Wifi",
		},
		{
			src: "/icons/workspace.png",
			title: "Living Rooms",
		},
		{
			src: "/icons/heater.png",
			title: "Heater",
		},
	];

	return (
		<div className="col-span-2 flex items-center justify-center">
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:h-1/2">
				{amenities.map((amenity, index) => (
					<div
						key={index}
						className="p-5 flex flex-col items-center justify-center border hover:border-primary duration-300 rounded text-xs gap-2"
					>
						<Image
							alt={amenity.title}
							src={amenity.src}
							width={40}
							height={40}
						/>
						<p>{amenity.title}</p>
					</div>
				))}
			</div>
		</div>
	);
}
