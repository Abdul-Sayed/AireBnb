import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

const Header = ({ placeholder }) => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberGuests, setNumberGuests] = useState(1);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: moment(startDate).format("YYYY-MM-DD"),
        endDate: moment(endDate).format("YYYY-MM-DD"),
        numberGuests,
      },
    });
    setSearchInput("");
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-2 sm:p-5 md:px-5 lg:px-10">
      <Link href="/" className="relative h-10 flex items-center justify-start my-auto">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt="Airbnb Logo"
          fill
          sizes="2049px"
          style={{ objectFit: "contain", objectPosition: "left" }}
          className="cursor-pointer"
        />
      </Link>

      <nav className="flex sm:border-2 rounded-full py-2 sm:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder || "Search destinations"}
          className="flex-grow ml-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex md:mx-2 h-8 md:min-w-8 bg-red-400 text-white rounded-full p-2 cursor-pointer" />
      </nav>
      <nav className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline-flex cursor-pointer">
          <a
            href="https://www.airbnb.com/host/homes"
            alt="Become a host"
            target="_blank"
            rel="noopener noreferrer"
          >
            Become a host
          </a>
        </p>
        <a
          href="https://www.airbnb.com/resources/hosting-homes/a/airbnb-now-in-31-new-languages-115"
          alt="Change Language"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GlobeAltIcon className="h-6 hidden sm:inline-flex cursor-pointer" />
        </a>
        <Popup
          trigger={
            <div className="hidden sm:flex items-center space-x-2 border-2 p-1 sm:p-2 rounded-full min-w-fit">
              <Bars3Icon className="h-6 cursor-pointer" />
              <UserCircleIcon className="h-6 cursor-pointer" />
            </div>
          }
          position="left"
        >
          <div className="text-xs font-thin text-slate-500"></div>
          <p className="cursor-pointer">Sign up</p>
          <p className="cursor-pointer">Log in</p>
        </Popup>
      </nav>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-5">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            staticRanges={[]}
            inputRanges={[]}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
            <UserIcon className="h-5" />
            <input
              type="number"
              alt="number of guests"
              value={numberGuests}
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400 drop-shadow-md"
              onChange={(e) => setNumberGuests(e.target.value)}
            />
          </div>
          <div className="flex">
            <button className="flex-grow" onClick={() => setSearchInput("")}>
              Cancel
            </button>
            <button className="flex-grow" onClick={() => search()}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
