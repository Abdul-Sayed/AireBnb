import { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

const Maps = ({ searchResults }) => {
  console.log(searchResults);

  const coordinates = searchResults.map((result) => ({
    longitude: result.lng,
    latitude: result.lat,
  }));
  const center = getCenter(coordinates);
  console.log(center);

  const [selectedLocation, setSelectedLocation] = useState({});
  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
    width: "100%",
    height: "100vh",
  });

  return (
    <Map
      initialViewState={viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
      mapStyle={process.env.mapboxStyleURL}
      mapboxAccessToken={process.env.mapboxAccessToken}
    >
      {searchResults.map((result) => (
        <div key={uuidv4()}>
          <Marker
            longitude={result.lng}
            latitude={result.lat}
            anchor="bottom"
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
              onClick={() => setSelectedLocation(result)}
            >
              📌
            </p>
          </Marker>

          {selectedLocation.lng == result.lng ? (
            <Popup
              longitude={result.lng}
              latitude={result.lat}
              closeOnClick={false}
              onClose={() => setSelectedLocation({})}
              anchor="bottom"
              style={{ width: "fit-content", height: "fit-content" }}
            >
              <div className="relative flex flex-col w-fit h-fit">
                <Image
                  src={result.images[0]}
                  alt={result.type}
                  width="200"
                  height="200"
                  sizes="640px"
                  className="max-w-[200px] max-h-[200px]"
                />
                <div className="mt-2">
                  <p className="text-lg">{result.city}</p>
                  <p className="text-sm text-gray-700">{result.name}</p>
                </div>
              </div>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  );
};

export default Maps;
