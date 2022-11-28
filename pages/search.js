import { useState } from "react";
import { useRouter } from "next/router";
import Error from "next/error";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import cloneDeep from "lodash/cloneDeep";

import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import Maps from "../components/Maps";

const Search = ({ error, searchResults }) => {
  const filters = ["Price", "Rooms", "Beds", "Bathrooms", "Rating", "Superhost", "Reset"];
  const originalResults = cloneDeep(searchResults.results);
  const [filteredResults, setFilteredResults] = useState(searchResults.results);
  const [activeFilter, setActiveFilter] = useState(null);
  const router = useRouter();
  const { location, startDate, endDate, numberGuests } = router.query;

  const formattedStartDate = moment(startDate).format("MMM Do YY");
  const formattedEndDate = moment(endDate).format("MMM Do YY");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  const filterResults = (filter) => {
    setActiveFilter(filter);

    switch (filter) {
      case "Reset":
        setFilteredResults(searchResults.results);
        break;
      case "Price":
        setFilteredResults(originalResults.sort((a, b) => (a.price.rate > b.price.rate ? 1 : -1)));
        break;
      case "Rooms":
        setFilteredResults(originalResults.sort((a, b) => (a.bedrooms < b.bedrooms ? 1 : -1)));
        break;
      case "Beds":
        setFilteredResults(originalResults.sort((a, b) => (a.beds < b.beds ? 1 : -1)));
        break;
      case "Bathrooms":
        setFilteredResults(originalResults.sort((a, b) => (a.bathrooms < b.bathrooms ? 1 : -1)));
        break;
      case "Rating":
        setFilteredResults(
          originalResults
            .filter((result) => result.rating)
            .sort((a, b) => (a.rating < b.rating ? 1 : -1))
        );
        break;
      case "Superhost":
        setFilteredResults(originalResults.filter((result) => result.rating && result.isSuperhost));
        break;
      default:
        setFilteredResults(searchResults.results);
    }
  };

  return (
    <>
      {error ? (
        <Error />
      ) : (
        <div className="h-screen">
          <Header placeholder={`${location} | ${range} | ${numberGuests} guests`} />

          <main className="flex flex-col xl:flex-row">
            <div>
              <section className="flex-grow pt-14 px-6">
                <p className="text-xs">
                  300+ Stays — {range} — for {numberGuests} {numberGuests > 1 ? "guests" : "guest"}
                </p>
                <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

                <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                  {filters.map((filter) => (
                    <button
                      key={uuidv4()}
                      onClick={() => filterResults(filter)}
                      className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out"
                      style={{
                        backgroundColor: activeFilter === filter ? "rgb(243, 244, 246)" : "white",
                      }}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </section>

              <section className="flex flex-col">
                {filteredResults?.map(
                  ({
                    images,
                    city,
                    name,
                    type,
                    rating,
                    price,
                    deeplink,
                    isSuperhost,
                    bedrooms,
                    beds,
                    bathrooms,
                  }) => (
                    <InfoCard
                      key={uuidv4()}
                      images={images}
                      location={city}
                      title={name}
                      description={type}
                      star={rating}
                      price={price.rate}
                      currency={price.currency}
                      total={price.total}
                      url={deeplink}
                      isSuperhost={isSuperhost}
                      bedrooms={bedrooms}
                      beds={beds}
                      bathrooms={bathrooms}
                    />
                  )
                )}
              </section>
            </div>

            <section className="hidden xl:inline-flex xl:min-w-[40%] sticky top-[76px] h-[calc(100vh-76px)]">
              <Maps searchResults={filteredResults} />
            </section>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Search;

export const getServerSideProps = async (context) => {
  const { location, startDate, endDate, numberGuests } = context.query;
  const url = "https://airbnb13.p.rapidapi.com/search-location";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.airbnbApiKey,
      "X-RapidAPI-Host": process.env.airbnbApiHost,
    },
  };

  const searchResults = await fetch(
    `${url}?location=${location}&checkin=${startDate}&checkout=${endDate}&adults=${numberGuests}`,
    options
  ).then((res) => res.json());
  const error = searchResults.error;
  return {
    props: { error, searchResults },
  };
};
