import { useContext } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import Maps from "../components/Maps";
import ListingTypesContext from "../contexts/ListingTypesContext";

const LocalListings = () => {
  const { listings } = useContext(ListingTypesContext);

  return (
    <>
      <Header />
      <main className="flex flex-col xl:flex-row">
        <section className="flex flex-col">
          {listings?.map(({ id, images, city, name, type, rating, price, url }) => (
            <InfoCard
              key={id}
              img={images[0]}
              location={city}
              title={name}
              description={type}
              star={rating}
              price={price.rate}
              currency={price.currency}
              total={price.total}
              url={url}
            />
          ))}
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[40%] sticky top-[76px] h-[calc(100vh-76px)]">
          <Maps searchResults={listings} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LocalListings;
