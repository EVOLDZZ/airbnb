import Image from "next/image";
import { HeartIcon, StarIcon } from "@heroicons/react/outline";

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  // setCoords,
}) => {
// useEffect(() =>{
//   setCoords(lat, long)
// },[])
  return (
    <div className="flex pr-4 py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative w-40 h-24 md:h-52 md:w-80 flex-shrink-0">
        <Image className="rounded-2xl" objectFit="cover" src={img} layout="fill" alt="" />
      </div>
      {/* тут вторая часть */}
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p className="">{location}</p>

          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
