import "../styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import NextNProgress from "nextjs-progressbar";
import { ListingTypesProvider } from "../contexts/ListingTypesContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ListingTypesProvider>
        <NextNProgress />
        <Component {...pageProps} />
      </ListingTypesProvider>
    </>
  );
}

export default MyApp;
