# Aire Bnb

## Airbnb listings search page, using NextJS, Tailwind CSS, Date Picker, Mapbox, Rapid Api

`Live link: aire-bnb.vercel.app`  
`API: https://airbnb13.p.rapidapi.com/`

### Pages and Routes

```
Index
│
│───Header.js
│   └───DateRangePicker
│
└───Banner.js
│   └───Links to a list of properties
│
└───SearchFeed.js
│  └───Videos.js
│       └───ChannelCard.js  <==> links to ChannelDetail component
│       └───VideoCard.js  <==> links to VideoDetail component
│
└───VideoDetail.js
│  └───Videos.js
│      └───ChannelCard.js  <==> links to ChannelDetail component
│      └───VideoCard.js  <==> links to VideoDetail component
│
└───ChannelDetail.js
│  └───ChannelCard.js  <==> links to ChannelDetail component
│  └───Videos.js
│      └───ChannelCard.js  <==> links to ChannelDetail component
│      └───VideoCard.js  <==> links to VideoDetail component
│
└───Footer.js

Search
│
│───Navbar.js
│   └───SearchBar.js  <==> navigates to SearchFeed component
│
└───Feed.js
│   │
│   │───SideBar.js
│   └───Videos.js
│       └───ChannelCard.js  <==> links to ChannelDetail component
│       └───VideoCard.js  <==> links to VideoDetail component
│
└───SearchFeed.js
│  └───Videos.js
│       └───ChannelCard.js  <==> links to ChannelDetail component
│       └───VideoCard.js  <==> links to VideoDetail component
│
└───VideoDetail.js
│  └───Videos.js
│      └───ChannelCard.js  <==> links to ChannelDetail component
│      └───VideoCard.js  <==> links to VideoDetail component
│
└───ChannelDetail.js
│  └───ChannelCard.js  <==> links to ChannelDetail component
│  └───Videos.js
│      └───ChannelCard.js  <==> links to ChannelDetail component
│      └───VideoCard.js  <==> links to VideoDetail component
│
└───Footer.js
```

#### Index Page

> The root of the application is the index page.
> It renders the header, banner, and footer components.
> It requests the user's location and if accepted, fetches local airbnb listings inside useEffect. If local listings are available, the Explore Nearby and Live Anywhere sections populate. To avoid redundant api calls, local listings are cached into localStorage so subsequent visits to the homepage read cached data.

### Feed

Route="/"

> Renders the Videos component, as well as the SideBar component on the left. Clicking a keyword in the sidebar will fetch the relevant videos and update the video feed.
>
> SideBar component: Renders a list of popular keywords. Clicking a keyword will update the Feed component.
>
> Videos component: Renders the video feed list. Checks the data for each item if its a channel or a video, and will render a ChannelCard or a VideoCard respectively.
>
> > ChannelCard / VideoCard components render the details of that item and clicking it routes to the ChannelDetail / VideoDetail pages, passing the id of the channel / video in the route.

### SearchFeed

Route="/search/:_searchTerm_"

> The SearchFeed component will recieve the search term from route params, and fetch videos related to the search term. It will then render the Videos component, passing in a video feed list.

### VideoDetail

Route="/video/:_id_"

> The VideoDetail component obtains the video id from route params and fetches the video's data as well as related videos. It plays the video and renders the Videos component, passing in a video feed list of related videos.

### ChannelDetail

Route="/channel/:_id_"

> The ChannelDetail component obtains the channel Id from the route params and fetches details of the channel as well as the channel's videos. It renders the ChannelCard component, passing it the channel details, as well as the Videos component, passing it the list of videos.
