import "../styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { ListingTypesProvider } from "../contexts/ListingTypesContext";

function MyApp({ Component, pageProps }) {
  return (
    <ListingTypesProvider>
      <Component {...pageProps} />
    </ListingTypesProvider>
  );
}

export default MyApp;
