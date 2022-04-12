import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h=[600px] 2xl:h=[700px] ">
      <Image
        layout="fill"
        objectFit="cover"
        alt=""
        src="https://news.airbnb.com/wp-content/uploads/sites/4/2020/04/Airbnb_New_Zealand_Arrowtown_House.jpg"
      />
      <div className="absolute top-1/2 w-full  text-center">
        <p className="text-sm sm:text-lg">Not sure where to go?</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">Im flexable</button>
      </div>
    </div>
  );
};

export default Banner;
