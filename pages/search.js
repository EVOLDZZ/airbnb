import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";
import { format } from "date-fns";

import InfoCard from "./../components/InfoCard";
import MapComponent from './../components/MapComponent';
const Search = ({ searchResult }) => {
  const [type, setType] = useState();
  // const [lat, setLat] = useState("")
  // const [long, setLong] = useState("")
  // const setCoords = (lat, long) => {
  //   setLat(lat)
  //   setLong(long)
  // }
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuest } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const forrmattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${forrmattedEndDate}`;
  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${numberOfGuest} guets`} />
      <main className="flex ">
        <section className="flex-grow px-6">
          <p className="text-xs">
            {" "}
            300+ Stays - {range} - for {numberOfGuest} quets
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-5 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility </p>
            <p className="button">Type of Place </p>
            <p className="button">Price </p>
            <p className="button">Rooms and Beds </p>
            <p className="button">More filters </p>
          </div>
          <div className="flex flex-col">
          {searchResult.map(
            ({ img, location, title, description, star, price, total}) => (
              <InfoCard key={img}  title={title} price={price} total={total} img={img} star={star} location={location} description={description}/>
            )
          )}
          </div>
        </section >
        {/* КАРТА */}
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
        <MapComponent searchResult={searchResult}/>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
export async function getServerSideProps() {
  const searchResult = await fetch("https://links.papareact.com/isz").then(
    (result) => result.json()
  );

  return {
    props: {
      searchResult,
    },
  };
}
