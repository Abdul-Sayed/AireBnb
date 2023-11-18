# Aire Bnb

## Airbnb listings search page, using NextJS, React, React Context, Tailwind CSS, Date Picker, Mapbox, GeoLib, Rapid Api, Axios, React Slick Carousel, NextJS Progress Bar, MomentJS, Lodash

API: `https://airbnb13.p.rapidapi.com/`  
Live Link: `https://aire-bnb.vercel.app `

### Pages and Routes

```
Index
|
├──Header.js <==> routes to search page
|  └───DateRangePicker
|
├───Banner.js <==> routes to local-listings page
|
├───Explore.js
|   └───SmallCard.js
|
├───LiveAnywhere.js
|   └───MediumCard.js <==> routes to local-listings page
|
├───LargeCard.js
|
└───Footer.js

LocalListings
|
├──Header.js <==> routes to search page
|  └───DateRangePicker
|
├───InfoCard.js
|
├───Maps.js
|
└───Footer.js

Search
|
├──Header.js <==> routes to search page
|  └───DateRangePicker
|
├───InfoCard.js
|
├───Maps.js
|
└───Footer.js
```

#### Index Page

Route="/"

> The root of the application is the index page.
> It requests the user's location and if accepted, fetches local airbnb listings inside useEffect. If local listings are available, the Explore Nearby and Live Anywhere sections populate. To avoid redundant api calls, local listings are cached into localStorage so subsequent visits to the homepage read cached data. Error handling routes to the Nextjs error page if the api call fails.
> Renders the header, banner (passing it localListings), explore (passing it the first 8 localListings), live anywhere (passing it propertyTypes), largecard, and footer components.

#### Header

> Renders a navbar with an airbnb logo which links to the homepage, a location search input, and some icons. If the search input is being typed in, a DateRangePicker component is rendered which sets a start and end date, as well as the number of guests. On clicking the search button, the search page is routed to and the location, start/end dates, and number of guests are passed as query params.

#### Banner

> Recieves localListings prop from index page and on click of the banner, sets the localListings into context and routes to the local-listings page

#### Explore

> Recieves localListings prop from index page and renders the SmallCard component for each listing, passing in the image, city, type, and url

#### SmallCard

> Recieves image, city, type, and url props from Explore component and renders that data in a small card

#### LiveAnywhere

> Recieves propertyTypes prop from index page and renders a MediumCard for each propertyType array. It passes MediumCard an image, the proprty's type, and the propertyType array

#### MediumCard

> Recieves image, type, and properties array from LiveAnywhere component. It renders a the image and type in a medium card. On click, it sets the properties into context and routes to the local-listings page.

#### LargeCard

> Renders a large image and contains a button that links to airbnb.com

#### Footer

> Renders informational links to various parts of airbnb.com

#### LocalListings Page

Route="/local-listings"

> Renders the header, InfoCard, Maps, and footer components. Reads listing data from context. For each of the listings, it renders an infocard component, passing it details about the listing. It aslo renders a maps component, passing in the lisings data. It also renders a section that contains a list of buttons that filter the listings data by different metrics.

#### Search Page

Route="/search"

> Renders the header, InfoCard, Maps, and footer components. Reads location, startDate, endDate, numberGuests from router query params. Runs getServerSideProps, fetches airbnb lisitng data based on those query params. For each of the listings, it renders an infocard component, passing it details about the listing. It aslo renders a maps component, passing in the lisings data. It also renders a section that contains a list of buttons that filter the listings data by different metrics.

#### InfoCard

> Recieves details about a listing as props and renders them in a card. Displays an image carousel usinf react slick slider.

#### Maps

> Recieves listings data as props and renders a Map components from react-map-gl. The map is centered on the average coordinated of each listing, computed using geolib. The map renders a marker for each listing, based in the listing's coordinates. Clicking a marker opens the listing's image as a popup.
