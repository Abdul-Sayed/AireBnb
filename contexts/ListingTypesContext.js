import { useState, createContext } from "react";

const ListingTypesContext = createContext();

export function ListingTypesProvider({ children }) {
  const [listings, setListings] = useState([]);

  return (
    <ListingTypesContext.Provider value={{ listings, setListings }}>
      {children}
    </ListingTypesContext.Provider>
  );
}

export default ListingTypesContext;
