import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter }  from "next/router";

function Header({placeholder}) {
  const [modalInput, setModalInput] = useState(); // сделать юзэффект и там функцию на каждый серч инпут и в функции уже чекать длину инпута
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guestNumber, setGuestNumber] = useState(1)
  const router = useRouter()
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSelect = (ranges) => {
    const {
      selection: { endDate, startDate },
    } = ranges;

    setStartDate(startDate);

    setEndDate(endDate);
    console.log(endDate)
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuest: guestNumber,
      }
    })
  }
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
      {/* left section */}
      <div onClick={() => router.push("/")}className="relative flex items-center h-10  cursor-pointer my-auto">
        <Image    
          src="https://media.designrush.com/inspiration_images/135187/conversions/_1511452487_364_Airbnb-desktop.jpg"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt=""
        ></Image>
      </div>
      {/* middle div Search*/}
      <div className="flex items-center md:shadow-sm md:border-2 rounded-full py-2">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="placeholder-gray-400 text-sm text-gray-600 flex-grow outline-none bg-transparent pl-5"
          type="text"
          placeholder={placeholder || "Start your search "}
        />
        <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2 hidden md:inline-flex" />
      </div>
      {/*  right div*/}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="idden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex  flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl pl-2 flex-grow font-semibold">Number of Guests</h2>
            <UserIcon  className="h-5"/>
            <input value={guestNumber} min={1} onChange={e => setGuestNumber(e.target.value)}className="w-12 pl-2 text-lg outline-none text-red-400" type="number"></input>
          </div>
          <div className="flex">
            <button onClick={()=> setSearchInput("")} className="flex-grow text-gray-500">Cancel</button>
            <button onClick={search} className="flex-grow text-red-400">Search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
