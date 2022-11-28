import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import cloneDeep from "lodash/cloneDeep";

import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import Maps from "../components/Maps";
import ListingTypesContext from "../contexts/ListingTypesContext";

const LocalListings = () => {
  const { listings } = useContext(ListingTypesContext);
  const originalListings = cloneDeep(listings);
  const filters = ["Price", "Rooms", "Beds", "Bathrooms", "Rating", "Superhost", "Reset"];
  const [filteredResults, setFilteredResults] = useState(listings);
  const [activeFilter, setActiveFilter] = useState(null);

  const filterResults = (filter) => {
    setActiveFilter(filter);

    switch (filter) {
      case "Reset":
        setFilteredResults(listings);
        break;
      case "Price":
        setFilteredResults(originalListings.sort((a, b) => (a.price.rate > b.price.rate ? 1 : -1)));
        break;
      case "Rooms":
        setFilteredResults(originalListings.sort((a, b) => (a.bedrooms < b.bedrooms ? 1 : -1)));
        break;
      case "Beds":
        setFilteredResults(originalListings.sort((a, b) => (a.beds < b.beds ? 1 : -1)));
        break;
      case "Bathrooms":
        setFilteredResults(originalListings.sort((a, b) => (a.bathrooms < b.bathrooms ? 1 : -1)));
        break;
      case "Rating":
        setFilteredResults(
          originalListings
            .filter((result) => result.rating)
            .sort((a, b) => (a.rating < b.rating ? 1 : -1))
        );
        break;
      case "Superhost":
        setFilteredResults(
          originalListings.filter((result) => result.rating && result.isSuperhost)
        );
        break;
      default:
        setFilteredResults(listings);
    }
  };

  return (
    <div className="h-screen">
      <Header />
      <main className="flex flex-col xl:flex-row">
        <div>
          <section className="flex-grow pt-14 px-6">
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
                id,
                images,
                city,
                name,
                type,
                rating,
                price,
                url,
                isSuperhost,
                bedrooms,
                beds,
                bathrooms,
              }) => (
                <InfoCard
                  key={id}
                  images={images}
                  location={city}
                  title={name}
                  description={type}
                  star={rating}
                  price={price.rate}
                  currency={price.currency}
                  total={price.total}
                  url={url}
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
  );
};

export default LocalListings;
