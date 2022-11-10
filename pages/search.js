import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "./../components/InfoCard";
import Maps from "../components/Maps";

const Search = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, numberGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${numberGuests} guests`} />

      <main className="flex flex-col">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays — {range} — for ${numberGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            {[
              "Cancellation Flexibility",
              "Type of place",
              "Price",
              "Rooms and Beds",
              "More Filters",
            ].map((title) => (
              <button
                key={uuidv4()}
                className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out"
              >
                {title}
              </button>
            ))}
          </div>
        </section>

        <section className="flex flex-col">
          {searchResults?.map(
            ({ img, location, title, description, star, price, total, long, lat }) => (
              <InfoCard
                key={uuidv4()}
                img={img}
                location={location}
                title={title}
                description={description}
                star={star}
                price={price}
                total={total}
                long={long}
                lat={lat}
              />
            )
          )}
        </section>
        <section>
          <Maps />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export const getServerSideProps = async (context) => {
  const searchResults = await fetch(`https://www.jsonkeeper.com/b/5NPS`).then((res) => res.json());

  return {
    props: { searchResults },
  };
};

// https://links.papareact.com/isz
