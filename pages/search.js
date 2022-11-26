import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import moment from "moment";
import InfoCard from "../components/InfoCard";
import Maps from "../components/Maps";

const Search = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, numberGuests } = router.query;

  const formattedStartDate = moment(startDate).format("MMM Do YY");
  const formattedEndDate = moment(endDate).format("MMM Do YY");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  const coordinates = (listings) => {
    return listings.map((listing) => ({ latitude: listing.lat, longitude: listing.long }));
  };

  return (
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
            {searchResults.results?.map(
              ({ images, city, name, type, rating, price, lng, lat, deeplink }) => (
                <InfoCard
                  key={uuidv4()}
                  img={images[0]}
                  location={city}
                  title={name}
                  description={type}
                  star={rating}
                  price={price.rate}
                  currency={price.currency}
                  total={price.total}
                  url={deeplink}
                />
              )
            )}
          </section>
        </div>

        <section className="hidden xl:inline-flex xl:min-w-[40%] sticky top-[76px] h-[calc(100vh-76px)]">
          <Maps searchResults={searchResults.results} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export const getServerSideProps = async (context) => {
  // const { location, startDate, endDate, numberGuests } = context.query;
  // const url = "https://airbnb13.p.rapidapicom/search-location";
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": process.env.airbnbApiKey,
  //     "X-RapidAPI-Host": process.env.airbnbApiHost,
  //   },
  // };

  // const searchResults = await fetch(
  //   `${url}?location=${location}&checkin=${startDate}&checkout=${endDate}&adults=${numberGuests}`,
  //   options
  // ).then((res) => res.json());

  // return {
  //   props: { searchResults },
  // };

  const searchResults = {
    error: false,
    headers: {
      response_time: 1300,
      response_timestamp: "2022-11-24T00:21:43.611Z",
      response_id: 21403842,
    },
    results: [
      {
        id: 44125369,
        url: "https://www.airbnb.com/rooms/44125369",
        deeplink:
          "https://www.airbnb.com/rooms/44125369?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 1,
        name: "MANGA Design・2 bed・Free simple breakfast・Free wifi",
        bathrooms: 1,
        bedrooms: 1,
        beds: 2,
        city: "Taito City",
        images: [
          "https://a0.muscache.com/im/pictures/f8e4cb43-8cd9-4223-9040-e518acb9154f.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-44125369/original/5f1b92ef-ec73-4b7d-8646-448a5a750182.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-44125369/original/fe687d03-f10c-4496-86a9-b3e1bc52756f.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-44125369/original/510b5e41-5314-470e-92fc-345d403d371b.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-44125369/original/bfdf4931-8d4a-4e72-b7b1-51004db8a950.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-44125369/original/f33997b8-0ed8-43bb-9258-10166bed37f9.jpeg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/c92700d6-e4e5-4679-a77e-2a7c6f223ba8.jpg?aki_policy=profile_x_medium",
        isSuperhost: false,
        rareFind: false,
        lat: 35.71618,
        lng: 139.79292,
        persons: 2,
        reviewsCount: 180,
        rating: 4.74,
        type: "Room in boutique hotel",
        userId: 354576804,
        address: "Taito City, Tokyo, Japan",
        amenityIds: [
          1, 4, 5, 73, 137, 394, 77, 79, 657, 21, 85, 89, 90, 30, 415, 33, 34, 35, 36, 39, 103, 167,
          40, 104, 41, 42, 44, 45, 46, 47, 51, 55, 251,
        ],
        previewAmenities: ["Wifi", "Washer", "Self check-in"],
        price: {
          rate: 59,
          currency: "USD",
          total: 177,
          priceItems: [
            {
              amount: 192,
            },
            {
              amount: 15,
            },
            {
              amount: 0,
            },
          ],
        },
      },
      {
        id: 38268855,
        url: "https://www.airbnb.com/rooms/38268855",
        deeplink:
          "https://www.airbnb.com/rooms/38268855?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 2,
        name: "MANGA Design・1 bed・Free simple breakfast・4 station",
        bathrooms: 1,
        bedrooms: 1,
        beds: 1,
        city: "港区",
        images: [
          "https://a0.muscache.com/im/pictures/miso/Hosting-38268855/original/6ad1d55f-c70b-4d37-ac7f-cc5f2f08c469.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-38268855/original/1bff68e3-b02f-4910-9634-ed67ab1465da.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-38268855/original/5e8aade5-803b-4d9e-a4b0-cc344783dbb6.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-38268855/original/3f48157e-b4a9-4f8c-8dc6-528834ff935f.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-38268855/original/48dc3ff2-5116-471a-b8ca-03ea49983418.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-38268855/original/aa4f335e-f620-4783-adf7-2afc71ba891e.jpeg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/e017790b-e97a-4a95-80fc-e2ff0a6e4b68.jpg?aki_policy=profile_x_medium",
        isSuperhost: false,
        rareFind: false,
        lat: 35.65499,
        lng: 139.76212,
        persons: 2,
        reviewsCount: 152,
        rating: 4.71,
        type: "Room in hotel",
        userId: 273683937,
        address: "港区, 東京都, Japan",
        amenityIds: [
          1, 4, 132, 5, 73, 77, 79, 657, 21, 85, 89, 90, 30, 31, 415, 33, 34, 35, 611, 36, 39, 103,
          167, 40, 104, 41, 42, 44, 45, 109, 46, 47, 51, 55, 251,
        ],
        previewAmenities: ["Wifi", "Washer", "Self check-in"],
        price: {
          rate: 63,
          currency: "USD",
          total: 189,
          priceItems: [
            {
              amount: 205,
            },
            {
              amount: 16,
            },
            {
              amount: 0,
            },
          ],
        },
      },
      {
        id: 53183687,
        url: "https://www.airbnb.com/rooms/53183687",
        deeplink:
          "https://www.airbnb.com/rooms/53183687?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 3,
        name: "Kamatas STAY 601 / Theater Set / High Speed Wifi",
        bathrooms: 1,
        bedrooms: 1,
        beds: 2,
        city: "Ota City",
        images: [
          "https://a0.muscache.com/im/pictures/ebe9b9b1-1336-472a-bdc2-86f771541cfc.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/ac5f3edf-ffc5-4257-b173-23a02c2acf31.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/c2a8b31c-e808-4368-815c-33fcde93aa28.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/9fac4ef7-9a77-4c34-a590-7b8f08b9c271.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/7b91f41d-927b-4de1-beca-b9035b9e291f.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/38f752ac-7918-4367-998d-4e29480faaf8.jpg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/8e0859af-f7f9-4a6d-af9c-658ea35ecf74.jpg?aki_policy=profile_x_medium",
        isSuperhost: true,
        rareFind: true,
        lat: 35.55746,
        lng: 139.72217,
        persons: 4,
        reviewsCount: 13,
        rating: 4.92,
        type: "Entire serviced apartment",
        userId: 184428313,
        address: "Ota City, Tokyo, Japan",
        amenityIds: [
          1, 4, 5, 8, 73, 137, 10, 77, 79, 657, 21, 85, 87, 663, 25, 89, 665, 91, 93, 30, 94, 671,
          96, 33, 98, 100, 39, 167, 40, 104, 41, 44, 236, 45, 46, 47, 51, 308, 55, 57, 251, 315, 61,
        ],
        previewAmenities: ["Wifi", "Kitchen", "Washer", "Self check-in"],
        price: {
          rate: 66,
          currency: "USD",
          total: 196,
          priceItems: [
            {
              amount: 160,
            },
            {
              amount: 36,
            },
            {
              amount: 0,
            },
          ],
        },
      },
      {
        id: 10274874,
        url: "https://www.airbnb.com/rooms/10274874",
        deeplink:
          "https://www.airbnb.com/rooms/10274874?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 4,
        name: "民宿许可 新宿徒步圈内 FREE Wi-Fi 紧邻希尔顿",
        bathrooms: 1,
        bedrooms: 1,
        beds: 1,
        city: "新宿区",
        images: [
          "https://a0.muscache.com/im/pictures/3814e486-3afe-4b91-a376-87a8b444ada3.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/445c79e2-d210-4031-9aaf-8a2f7b20642a.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/5468bf13-747c-469c-8163-503ac75b6f68.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/069faa41-30a0-4d7b-b2d7-7a6a5b3cdc60.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/55e1686c-7e79-49a7-839c-9d123529dfaa.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/ebefd12c-1261-4d3e-b2b0-c9d2537d0847.jpg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/78c41bf1-3f96-43ff-a41c-31b6c44c82bd.jpg?aki_policy=profile_x_medium",
        isSuperhost: true,
        rareFind: false,
        lat: 35.69447,
        lng: 139.69206,
        persons: 2,
        reviewsCount: 6,
        rating: 4.83,
        type: "Entire rental unit",
        userId: 49474412,
        address: "新宿区, 东京, Japan",
        amenityIds: [33, 34, 4, 5, 38, 39, 8, 40, 41, 43, 44, 45, 46, 21, 25, 30, 31],
        previewAmenities: ["Wifi", "Kitchen", "Washer"],
        price: {
          rate: 97,
          currency: "USD",
          total: 291,
          priceItems: [
            {
              amount: 213,
            },
            {
              amount: 36,
            },
            {
              amount: 42,
            },
          ],
        },
      },
      {
        id: 38677942,
        url: "https://www.airbnb.com/rooms/38677942",
        deeplink:
          "https://www.airbnb.com/rooms/38677942?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 5,
        name: "*DISCOUNT*Cozy Studio near Skytree/Sensoji *II-304",
        bathrooms: 1,
        bedrooms: 1,
        beds: 1,
        city: "Sumida City",
        images: [
          "https://a0.muscache.com/im/pictures/miso/Hosting-38677942/original/8a470c31-942e-4061-aa4c-e782dee87818.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-38677942/original/9ebb2ce3-c945-4a95-9c31-392e54ff1ac4.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/b7239493-dea8-47eb-a437-e456dca85a0b.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/b36480f3-ec41-4a60-bb70-4add7ec01684.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-38677942/original/26b25391-1e09-460a-9400-a6050bddd6a4.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/0fc6f1af-80f1-4bcf-bbb4-e110ee15ed96.jpg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/22d4287b-126d-49c7-ad6e-2a0762e9c6eb.jpg?aki_policy=profile_x_medium",
        isSuperhost: false,
        rareFind: false,
        lat: 35.7049,
        lng: 139.81403,
        persons: 2,
        reviewsCount: 26,
        rating: 4.65,
        type: "Entire condo",
        userId: 229627088,
        address: "Sumida City, Tōkyō-to, Japan",
        amenityIds: [
          4, 5, 73, 137, 649, 77, 657, 85, 89, 91, 669, 96, 33, 35, 611, 36, 100, 37, 39, 103, 40,
          104, 41, 617, 42, 299, 44, 45, 51, 627, 52, 180, 57, 62,
        ],
        previewAmenities: ["Wifi", "Washer", "Self check-in"],
        price: {
          rate: 59,
          currency: "USD",
          total: 176,
          priceItems: [
            {
              amount: 107,
            },
            {
              amount: 2,
            },
            {
              amount: 46,
            },
            {
              amount: 25,
            },
          ],
        },
      },
      {
        id: 643813800698262000,
        url: "https://www.airbnb.com/rooms/643813800698262000",
        deeplink:
          "https://www.airbnb.com/rooms/643813800698262000?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 6,
        name: "<Built in 2022>Designer1K/ Wi-Fi/Groundukes403",
        bathrooms: 1,
        bedrooms: 1,
        beds: 1,
        city: "Ota City",
        images: [
          "https://a0.muscache.com/im/pictures/miso/Hosting-643813800698262051/original/9d61f519-f1a4-4d81-a80c-2b738ecf6212.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-643813800698262051/original/035be043-88ed-44bf-a2d3-ecb8febaf449.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-643813800698262051/original/04028673-922f-4cc3-9075-acebdac91fa5.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-643813800698262051/original/94472af0-9cea-431c-9897-b87776900db0.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-643813800698262051/original/2af0973e-7185-48b1-9d28-74d8f7372b12.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-643813800698262051/original/e9d515e5-523b-40a5-b039-7d1abbbeec30.jpeg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/c866e4d0-af44-45c4-bf06-76a22a7dd223.jpg?aki_policy=profile_x_medium",
        isSuperhost: true,
        rareFind: false,
        lat: 35.56892,
        lng: 139.73243,
        persons: 2,
        reviewsCount: 8,
        rating: 4.88,
        type: "Entire rental unit",
        userId: 462986295,
        address: "Ota City, Tokyo, Japan",
        amenityIds: [
          1, 131, 4, 5, 8, 137, 394, 77, 79, 657, 21, 85, 89, 665, 91, 93, 30, 671, 96, 33, 35, 100,
          39, 167, 40, 104, 41, 44, 45, 46, 308, 57, 315, 61,
        ],
        previewAmenities: ["Wifi", "Kitchen", "Washer"],
        price: {
          rate: 55,
          currency: "USD",
          total: 165,
          priceItems: [
            {
              amount: 109,
            },
            {
              amount: 56,
            },
            {
              amount: 0,
            },
          ],
        },
      },
      {
        id: 27750681,
        url: "https://www.airbnb.com/rooms/27750681",
        deeplink:
          "https://www.airbnb.com/rooms/27750681?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 7,
        name: "Shinjuku Private Apartment: 1 minute from station",
        bathrooms: 1,
        bedrooms: 1,
        beds: 2,
        city: "Tokyo",
        images: [
          "https://a0.muscache.com/im/pictures/306813ea-f2e0-415b-b666-58731b7b07fa.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-27750681-unapproved/original/43f00fef-af5a-4e7a-9445-75e335a7b7de.JPEG?aki_policy=large",
          "https://a0.muscache.com/im/pictures/ef017a31-a34c-4d3a-be74-f14d1f5148c0.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-27750681-unapproved/original/db402ccb-5422-4067-90f2-ce359c1fbe02.JPEG?aki_policy=large",
          "https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-27750681-unapproved/original/8cca35bc-fb5c-483e-aee1-26ca1b0f9bec.JPEG?aki_policy=large",
          "https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-27750681-unapproved/original/7b7b930a-bb21-4cd5-89e0-9aece49f6595.JPEG?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/49e31577-50b7-414d-b941-93e0b8d91ea9.jpg?aki_policy=profile_x_medium",
        isSuperhost: true,
        rareFind: false,
        lat: 35.69705,
        lng: 139.7068,
        persons: 3,
        reviewsCount: 1191,
        rating: 4.58,
        type: "Entire rental unit",
        userId: 20833491,
        address: "Tokyo, Tokyo, Japan",
        amenityIds: [
          128, 1, 4, 5, 8, 137, 10, 145, 657, 146, 21, 663, 667, 30, 415, 671, 672, 35, 36, 37, 38,
          39, 167, 40, 41, 42, 44, 45, 46, 47, 51, 308, 54, 57, 315, 61, 70, 73, 77, 79, 85, 86, 87,
          89, 90, 91, 93, 94, 96, 611, 100, 103, 104, 109, 118, 125, 126, 127,
        ],
        previewAmenities: ["Wifi", "Kitchen", "Self check-in"],
        price: {
          rate: 109,
          currency: "USD",
          total: 327,
          priceItems: [
            {
              amount: 299,
            },
            {
              amount: 28,
            },
            {
              amount: 0,
            },
          ],
        },
      },
      {
        id: 691671958241399800,
        url: "https://www.airbnb.com/rooms/691671958241399800",
        deeplink:
          "https://www.airbnb.com/rooms/691671958241399800?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 8,
        name: "Shinjuku area/IndustrialWind/Walk5minToStation*402",
        bathrooms: 1,
        bedrooms: 2,
        beds: 2,
        city: "Shinjuku City",
        images: [
          "https://a0.muscache.com/im/pictures/miso/Hosting-691671958241399822/original/5e77efed-de8a-4607-9bde-d62caac4ecc5.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-691671958241399822/original/0d09e962-0610-4a2f-ae6e-59cc5a880dfe.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-691671958241399822/original/7b884057-ac83-41b7-aa32-1b2ec2676360.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-691671958241399822/original/716fa472-d0ee-4792-92ad-e8406f75cd7d.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-691671958241399822/original/7f287b80-46c1-43e2-87d2-2cf0c14e6ff3.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-691671958241399822/original/b6f02792-3e02-401b-a695-85e8bdf7c032.jpeg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/5c1481f7-a8ef-4ba3-a200-3a0a701fc92d.jpg?aki_policy=profile_x_medium",
        isSuperhost: true,
        rareFind: false,
        lat: 35.7079609,
        lng: 139.7294455,
        persons: 4,
        reviewsCount: 5,
        rating: 5,
        type: "Entire serviced apartment",
        userId: 468805135,
        address: "Shinjuku City, Tokyo, Japan",
        amenityIds: [
          1, 4, 5, 8, 137, 77, 79, 657, 146, 89, 665, 91, 93, 94, 671, 96, 33, 34, 35, 611, 100, 39,
          40, 104, 41, 44, 45, 46, 51, 52, 308, 57, 315, 61,
        ],
        previewAmenities: ["Wifi", "Kitchen", "Washer", "Self check-in"],
        price: {
          rate: 165,
          currency: "USD",
          total: 493,
          priceItems: [
            {
              amount: 422,
            },
            {
              amount: 71,
            },
            {
              amount: 0,
            },
          ],
        },
      },
      {
        id: 694660865544850000,
        url: "https://www.airbnb.com/rooms/694660865544850000",
        deeplink:
          "https://www.airbnb.com/rooms/694660865544850000?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 9,
        name: "【New Open！】Lovely interior to feel at home",
        bathrooms: 1,
        bedrooms: 1,
        beds: 1,
        city: "Minato City",
        images: [
          "https://a0.muscache.com/im/pictures/miso/Hosting-694660865544849986/original/b11225e4-0bb0-47b8-bbff-b5e891511b2d.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-694660865544849986/original/4c3c4130-dd69-4394-8ad1-0007b58d7d1c.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-694660865544849986/original/23524854-f600-4397-9d35-75de588ba056.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-694660865544849986/original/196fcbea-c5b4-4fac-9e39-36cc25bf084b.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-694660865544849986/original/04b22980-394c-4949-a750-a6c58e7c6255.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-694660865544849986/original/77bc6712-90d7-493e-aa53-2655bea8c4a5.jpeg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/0ef978d9-27ee-446e-8a83-5b86b2db8c5e.jpg?aki_policy=profile_x_medium",
        isSuperhost: true,
        rareFind: false,
        lat: 35.65595,
        lng: 139.74155,
        persons: 3,
        reviewsCount: 7,
        rating: 4.71,
        type: "Entire rental unit",
        userId: 94302731,
        address: "Minato City, Tokyo, Japan",
        amenityIds: [
          1, 4, 5, 8, 73, 137, 77, 79, 80, 81, 657, 83, 21, 85, 89, 91, 93, 30, 94, 96, 33, 34, 35,
          36, 100, 293, 39, 167, 40, 104, 41, 42, 44, 45, 46, 51, 308, 53, 57, 251, 315,
        ],
        previewAmenities: ["Wifi", "Kitchen", "Washer", "Self check-in"],
        price: {
          rate: 122,
          currency: "USD",
          total: 366,
          priceItems: [
            {
              amount: 309,
            },
            {
              amount: 57,
            },
            {
              amount: 0,
            },
          ],
        },
      },
      {
        id: 52678979,
        url: "https://www.airbnb.com/rooms/52678979",
        deeplink:
          "https://www.airbnb.com/rooms/52678979?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 10,
        name: "Nishi-Shinjuku Station 4mins walk/Quiet residential street_Warm&Cozy Design A404",
        bathrooms: 1,
        bedrooms: 1,
        beds: 2,
        city: "Shinjuku City",
        images: [
          "https://a0.muscache.com/im/pictures/9c0ac378-b035-4072-8696-ae750a4316b9.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/355d3e92-cc85-46cd-83d4-232e35c293d6.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/7bd6c86f-e75b-4eb9-bb37-882749fb1918.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/e2dcf2ee-f09b-4a1f-ac41-34dc1e6e2a8f.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/95d0cfc0-c2e5-42b3-b4e1-d24138def2b6.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/2946fb13-8583-41f3-877b-223d06376c7e.jpg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/51cc31ea-61a5-4a69-8d9b-f27a331c93d5.jpg?aki_policy=profile_x_medium",
        isSuperhost: false,
        rareFind: false,
        lat: 35.69549,
        lng: 139.69596,
        persons: 2,
        reviewsCount: 4,
        rating: 4.25,
        type: "Entire rental unit",
        userId: 415394351,
        address: "Shinjuku City, Tokyo, Japan",
        amenityIds: [
          96, 1, 33, 35, 611, 4, 5, 8, 40, 104, 41, 44, 45, 77, 47, 51, 21, 54, 57, 89, 91, 61, 93,
          30,
        ],
        previewAmenities: ["Wifi", "Kitchen", "Washer", "Self check-in"],
        price: {
          rate: 87,
          currency: "USD",
          total: 259,
          priceItems: [
            {
              amount: 213,
            },
            {
              amount: 46,
            },
            {
              amount: 0,
            },
          ],
        },
      },
      {
        id: 638603368442774700,
        url: "https://www.airbnb.com/rooms/638603368442774700",
        deeplink:
          "https://www.airbnb.com/rooms/638603368442774700?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 11,
        name: "#402#LOWEST RATE*1BR Cozy&Comfy Home in Akihabara",
        bathrooms: 1,
        bedrooms: 1,
        beds: 1,
        city: "Taito City",
        images: [
          "https://a0.muscache.com/im/pictures/miso/Hosting-638603368442774709/original/e5c18271-7278-46fb-bab3-27062050d067.png?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-638603368442774709/original/9f58156b-540c-4e95-898c-54412f654bd0.png?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-638603368442774709/original/ece4761e-6a23-4294-97e5-a15e84ed5392.png?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-638603368442774709/original/28ca799b-9bed-4b09-9a43-2a435420dca4.png?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-638603368442774709/original/cffc3ab3-5c66-49d7-ad6e-1652598ef9e8.png?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-638603368442774709/original/bae3bb4d-dc72-44a4-b13a-984fb52b9c0c.png?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/55e53f53-73d7-4d65-8776-7188d7e01bbe.jpg?aki_policy=profile_x_medium",
        isSuperhost: true,
        rareFind: false,
        lat: 35.70271,
        lng: 139.77734,
        persons: 2,
        reviewsCount: 1,
        type: "Entire condo",
        userId: 199863640,
        address: "Taito City, Tokyo, Japan",
        amenityIds: [
          1, 4, 5, 8, 73, 137, 649, 10, 77, 21, 89, 91, 33, 35, 611, 36, 37, 39, 103, 40, 41, 44,
          45, 46, 47, 51, 52,
        ],
        previewAmenities: ["Wifi", "Kitchen", "Washer", "Self check-in"],
        price: {
          rate: 71,
          currency: "USD",
          total: 212,
          priceItems: [
            {
              amount: 139,
            },
            {
              amount: 43,
            },
            {
              amount: 30,
            },
          ],
        },
      },
      {
        id: 37018324,
        url: "https://www.airbnb.com/rooms/37018324",
        deeplink:
          "https://www.airbnb.com/rooms/37018324?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 12,
        name: "A newly built property 4 minutes from station. 101",
        bathrooms: 1,
        bedrooms: 1,
        beds: 2,
        city: "Taito City",
        images: [
          "https://a0.muscache.com/im/pictures/17001722-4a96-489e-8664-49122f722b8b.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/618fd979-fd1c-4803-bbed-f40855a0a35b.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/a4d28851-cf2a-4f1d-a7e0-e094c0a655e2.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/cde83071-1c8b-40f8-929d-ba1a98fc0150.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/a6896bae-5fcd-4a0f-b4b2-48b3b915791f.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/65814213-8c80-4ba8-91f3-81866b540b0e.jpg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/721292cf-db07-4fe3-bff9-3ce3c9d81c6e.jpg?aki_policy=profile_x_medium",
        isSuperhost: false,
        rareFind: false,
        lat: 35.70526,
        lng: 139.7822,
        persons: 4,
        reviewsCount: 30,
        rating: 4.9,
        type: "Entire rental unit",
        userId: 278332086,
        address: "Taito City, Tokyo, Japan",
        amenityIds: [
          1, 4, 5, 8, 73, 137, 10, 77, 79, 657, 85, 87, 89, 665, 91, 667, 93, 30, 96, 33, 35, 36,
          39, 103, 167, 40, 104, 232, 41, 42, 44, 45, 46, 47, 51, 53, 57, 61,
        ],
        previewAmenities: ["Wifi", "Kitchen", "Washer", "Self check-in"],
        price: {
          rate: 80,
          currency: "USD",
          total: 238,
          priceItems: [
            {
              amount: 168,
            },
            {
              amount: 34,
            },
            {
              amount: 70,
            },
            {
              amount: 34,
            },
          ],
        },
      },
      {
        id: 27478833,
        url: "https://www.airbnb.com/rooms/27478833",
        deeplink:
          "https://www.airbnb.com/rooms/27478833?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 13,
        name: "★ Free WiFi and a kitchenette ★ Access to Ginza, Toyosu Market, and Disney ◎",
        bathrooms: 1,
        bedrooms: 1,
        beds: 1,
        city: "Chūō-ku",
        images: [
          "https://a0.muscache.com/im/pictures/534be7bc-0111-493c-9f39-d3c251b491ed.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/0f1fa0c9-cda3-4fbe-857e-c7b96099d53e.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/b60bf503-adea-4de6-9b3a-14826b81c93e.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/b46d896c-2d75-4408-ba1b-15d91f80911e.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/5ab2cc93-bb6f-4aa3-8a45-95ed342ce00a.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/a2bceef1-f088-499e-a856-4b8345950eb1.jpg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/5cf58584-9809-4bb2-93ab-8272330416e7.jpg?aki_policy=profile_x_medium",
        isSuperhost: false,
        rareFind: false,
        lat: 35.66827,
        lng: 139.77908,
        persons: 2,
        reviewsCount: 122,
        rating: 4.78,
        type: "Entire rental unit",
        userId: 48474638,
        address: "Chūō-ku, Tōkyō-to, Japan",
        amenityIds: [
          4, 5, 8, 77, 21, 89, 91, 93, 30, 96, 33, 35, 36, 100, 37, 38, 39, 103, 40, 41, 42, 44, 45,
          51, 53,
        ],
        previewAmenities: ["Wifi", "Kitchen", "Washer", "Self check-in"],
        price: {
          rate: 74,
          currency: "USD",
          total: 220,
          priceItems: [
            {
              amount: 192,
            },
            {
              amount: 28,
            },
            {
              amount: 0,
            },
          ],
        },
      },
      {
        id: 31868603,
        url: "https://www.airbnb.com/rooms/31868603",
        deeplink:
          "https://www.airbnb.com/rooms/31868603?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 14,
        name: "B24_JR Yamanote Line walk 1 mins, Nishinippori",
        bathrooms: 1.5,
        bedrooms: 1,
        beds: 1,
        city: "Arakawa-ku",
        images: [
          "https://a0.muscache.com/im/pictures/fb842c20-0453-4f9d-b37f-0a3ca7397c80.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/3bdb0645-e506-4196-a0a9-5fc0172bf809.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/7dc7e996-5e5c-48c8-87d2-2e5871041d17.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/4f90e73a-e2ed-445a-853d-05b18b0e9e2c.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/791553f7-a5d6-47d4-bd3e-36c017a167a2.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/3bc245d6-185b-4b68-af3f-4f7483800dd7.jpg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/e561294e-40c5-4314-b9f3-3d0a042889e7.jpg?aki_policy=profile_x_medium",
        isSuperhost: false,
        rareFind: false,
        lat: 35.732,
        lng: 139.76856,
        persons: 2,
        reviewsCount: 58,
        rating: 4.72,
        type: "Entire rental unit",
        userId: 158518748,
        address: "Arakawa-ku, Tōkyō-to, Japan",
        amenityIds: [
          64, 1, 4, 5, 8, 137, 77, 80, 657, 21, 89, 91, 669, 30, 33, 35, 611, 36, 39, 103, 40, 104,
          41, 42, 299, 44, 45, 51, 53, 57,
        ],
        previewAmenities: ["Wifi", "Kitchen", "Washer", "Self check-in"],
        price: {
          rate: 60,
          currency: "USD",
          total: 179,
          priceItems: [
            {
              amount: 117,
            },
            {
              amount: 36,
            },
            {
              amount: 26,
            },
          ],
        },
      },
      {
        id: 565529504654201150,
        url: "https://www.airbnb.com/rooms/565529504654201150",
        deeplink:
          "https://www.airbnb.com/rooms/565529504654201150?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 15,
        name: "# 302 New Apartment! Asakusa Station is 13 minutes away on foot Asakusa Temple Skytree - Self Check-in",
        bathrooms: 1,
        bedrooms: 1,
        beds: 2,
        city: "Taito City",
        images: [
          "https://a0.muscache.com/im/pictures/miso/Hosting-565529504654201140/original/66600ed2-fc07-481e-8aac-e36bf4f16c5f.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-565529504654201140/original/f11bb410-a84a-4cb7-b8dd-514498bdb6ea.png?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-565529504654201140/original/1e8d52ec-747d-49b1-afb7-b548896873ef.png?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-565529504654201140/original/cdd72349-96e6-4869-969e-b3d527cab35d.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-565529504654201140/original/9ae356c2-d234-4bbf-9c33-9cb46e949782.png?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-565529504654201140/original/316282ab-01c9-4bae-9b2d-7ffacca36084.png?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/fc0a4750-bfa2-46b4-83c6-fdf8ccb52174.jpg?aki_policy=profile_x_medium",
        isSuperhost: false,
        rareFind: false,
        lat: 35.71786,
        lng: 139.79762,
        persons: 4,
        reviewsCount: 11,
        rating: 4.36,
        type: "Entire rental unit",
        userId: 67268289,
        address: "Taito City, Tokyo, Japan",
        amenityIds: [
          4, 5, 8, 73, 137, 77, 79, 657, 85, 87, 25, 89, 91, 93, 30, 94, 33, 35, 36, 39, 167, 40,
          104, 41, 44, 45, 47, 51, 308, 54, 57, 61,
        ],
        previewAmenities: ["Wifi", "Kitchen", "Washer", "Self check-in"],
        price: {
          rate: 55,
          currency: "USD",
          total: 163,
          priceItems: [
            {
              amount: 104,
            },
            {
              amount: 36,
            },
            {
              amount: 23,
            },
          ],
        },
      },
      {
        id: 35701562,
        url: "https://www.airbnb.com/rooms/35701562",
        deeplink:
          "https://www.airbnb.com/rooms/35701562?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 16,
        name: "Direct to Narita and Haneda! SKYTREE Apt #2",
        bathrooms: 1,
        bedrooms: 1,
        beds: 1,
        city: "Sumida City",
        images: [
          "https://a0.muscache.com/im/pictures/4957efbb-2727-4f88-ac92-245b19624904.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/68c5388b-24e3-43f4-aab6-46ac909a4439.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/38e72628-2dcd-4a19-8c8f-1bb360b90b13.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/c50b9155-d1b9-42d9-be64-0a3d5239095c.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/5b0bf9c7-42cc-4978-b974-cbc54b4a730f.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/d616125a-715d-4a47-9c0a-ca8609531527.jpg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/67212cdc-042f-4efd-a7af-47b1266dabe7.jpg?aki_policy=profile_x_medium",
        isSuperhost: false,
        rareFind: false,
        lat: 35.7119,
        lng: 139.80981,
        persons: 2,
        reviewsCount: 67,
        rating: 4.66,
        type: "Entire rental unit",
        userId: 256571061,
        address: "Sumida City, Tōkyō-to, Japan",
        amenityIds: [
          96, 1, 33, 35, 4, 36, 5, 8, 40, 41, 44, 45, 77, 46, 51, 85, 54, 89, 90, 91, 61, 93, 30,
        ],
        previewAmenities: ["Wifi", "Kitchen", "Washer", "Self check-in"],
        price: {
          rate: 68,
          currency: "USD",
          total: 202,
          priceItems: [
            {
              amount: 160,
            },
            {
              amount: 10,
            },
            {
              amount: 52,
            },
            {
              amount: 0,
            },
          ],
        },
      },
      {
        id: 643071782523393500,
        url: "https://www.airbnb.com/rooms/643071782523393500",
        deeplink:
          "https://www.airbnb.com/rooms/643071782523393500?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 17,
        name: "Tokyo Hotel Yamanote  Nippori C skyliner Ueno",
        bathrooms: 1,
        bedrooms: 1,
        beds: 1,
        city: "Arakawa City",
        images: [
          "https://a0.muscache.com/im/pictures/miso/Hosting-643071782523393506/original/db7db7d7-78a8-44f5-a953-93b49c374c49.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-643071782523393506/original/0814bd9b-c724-4c94-a951-abd4cdbc8f41.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-643071782523393506/original/dc4e2326-f631-4a7a-acdf-43803b4df60c.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-643071782523393506/original/2e6f4508-a495-4cf8-bc7c-853d637ea92b.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-643071782523393506/original/0b29d013-acf1-4e96-be27-4c7b823921bc.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-643071782523393506/original/fbbed938-b269-4796-9ba4-2efc202553e6.jpeg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/d2a2f235-f6d6-4bed-9074-74c2d66c2efa.jpg?aki_policy=profile_x_medium",
        isSuperhost: true,
        rareFind: false,
        lat: 35.729372,
        lng: 139.773416,
        persons: 2,
        reviewsCount: 28,
        rating: 4.82,
        type: "Room in hotel",
        userId: 222463528,
        address: "Arakawa City, Tokyo, Japan",
        amenityIds: [
          1, 4, 5, 73, 137, 10, 77, 79, 146, 21, 85, 87, 663, 89, 30, 33, 34, 35, 611, 39, 103, 40,
          104, 232, 41, 42, 44, 45, 46, 47, 51, 54, 57, 60, 62,
        ],
        previewAmenities: ["Wifi", "Washer", "Self check-in"],
        price: {
          rate: 84,
          currency: "USD",
          total: 252,
          priceItems: [
            {
              amount: 252,
            },
            {
              amount: 0,
            },
          ],
        },
      },
      {
        id: 578516605808936700,
        url: "https://www.airbnb.com/rooms/578516605808936700",
        deeplink:
          "https://www.airbnb.com/rooms/578516605808936700?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 18,
        name: "The nearest station is Shinjuku Station! It is also within walking distance to Kabukicho, Shinjuku Golden Town, and Shinjuku Gyoen Garden. It is convenient for going♪ anywhere # 101",
        bathrooms: 1,
        bedrooms: 0,
        beds: 1,
        city: "Shinjuku City",
        images: [
          "https://a0.muscache.com/im/pictures/miso/Hosting-578516605808936756/original/4b3ffed3-cf55-48ce-8415-f4c88add048b.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-578516605808936756/original/e8412f2c-fcd3-472e-821d-ff8424e9e7d3.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-578516605808936756/original/39c73455-c091-4298-94c2-4e7f86e1a298.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-578516605808936756/original/4b2bcb8f-adeb-4e01-826b-fefc5637f161.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-578516605808936756/original/ac0a3f93-019e-406f-be1e-3ca436c9e34b.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-578516605808936756/original/60b3ee2e-6ed1-4c9c-83d8-9acc25443db5.jpeg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/6f2849bb-1be3-41ce-8f39-7ffd58e3d99c.jpg?aki_policy=profile_x_medium",
        isSuperhost: false,
        rareFind: true,
        lat: 35.69476,
        lng: 139.71074,
        persons: 2,
        reviewsCount: 3,
        rating: 3,
        type: "Entire rental unit",
        userId: 439954769,
        address: "Shinjuku City, Tokyo, Japan",
        amenityIds: [
          4, 5, 73, 137, 77, 79, 657, 85, 89, 665, 91, 30, 35, 100, 37, 39, 40, 104, 41, 44, 236,
          45, 46, 47, 51, 52, 57, 61,
        ],
        previewAmenities: ["Wifi", "Self check-in"],
        price: {
          rate: 52,
          currency: "USD",
          total: 154,
          priceItems: [
            {
              amount: 107,
            },
            {
              amount: 47,
            },
            {
              amount: 0,
            },
          ],
        },
      },
      {
        id: 39097045,
        url: "https://www.airbnb.com/rooms/39097045",
        deeplink:
          "https://www.airbnb.com/rooms/39097045?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 19,
        name: "10 min Tokyo Skytree/Family friendly apartment",
        bathrooms: 1,
        bedrooms: 0,
        beds: 0,
        city: "Sumida City",
        images: [
          "https://a0.muscache.com/im/pictures/miso/Hosting-39097045/original/f77f5a4e-7698-4b33-9ad2-53bf1135357a.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/f33c8b97-7a51-4c43-ab65-4f9a96166bed.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/73d39f47-e02f-4678-9f2c-e03f7a9e4137.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-39097045/original/d601d24c-251c-42a8-ad2a-6ab7894c24f8.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/ab5ed88e-64b2-462d-8a14-6fd21c7e91ed.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-39097045/original/a9d6c057-d481-4602-b1da-a8b353f99aeb.jpeg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/44b20391-f9aa-4d28-a9b8-543ba30a4f89.jpg?aki_policy=profile_x_medium",
        isSuperhost: true,
        rareFind: false,
        lat: 35.70654,
        lng: 139.81332,
        persons: 4,
        reviewsCount: 12,
        rating: 4.75,
        type: "Entire rental unit",
        userId: 35258613,
        address: "Sumida City, Tōkyō-to, Japan",
        amenityIds: [
          64, 1, 4, 5, 8, 137, 74, 77, 79, 85, 663, 89, 91, 93, 30, 96, 33, 35, 39, 40, 104, 41, 44,
          236, 45, 51, 627, 53, 61, 62,
        ],
        previewAmenities: ["Wifi", "Kitchen", "Washer", "Self check-in"],
        price: {
          rate: 64,
          currency: "USD",
          total: 192,
          priceItems: [
            {
              amount: 192,
            },
            {
              amount: 0,
            },
          ],
        },
      },
      {
        id: 613388379260485600,
        url: "https://www.airbnb.com/rooms/613388379260485600",
        deeplink:
          "https://www.airbnb.com/rooms/613388379260485600?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 20,
        name: "【IKOI_203】Well-Equipped Hidden Gem: Hibiya Line",
        bathrooms: 1,
        bedrooms: 1,
        beds: 1,
        city: "Taito City",
        images: [
          "https://a0.muscache.com/im/pictures/7a0e2877-233e-4fb5-af5b-8cb4dcae831a.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/34de4f47-eb4d-40b0-b30b-d897d28ef464.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/5abbc6eb-920f-4df8-a236-b5a2e4bd24a9.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/5965d237-8e03-4d81-97ec-637721360f33.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/c6e2af5c-3aee-4db7-aa95-7d4038faf8e8.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/385474fb-406e-41c1-a4bf-a9d0d375fcd0.jpg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/fe06f21f-8f25-46e6-b1dc-4f0bff64207c.jpg?aki_policy=profile_x_medium",
        isSuperhost: true,
        rareFind: false,
        lat: 35.72144,
        lng: 139.7904,
        persons: 2,
        reviewsCount: 0,
        type: "Room in boutique hotel",
        userId: 255274063,
        address: "Taito City, Tokyo, Japan",
        amenityIds: [35, 4, 36, 5, 37, 39, 40, 41, 42, 44, 45, 47, 21, 57],
        previewAmenities: ["Wifi"],
        price: {
          rate: 93,
          currency: "USD",
          total: 277,
          priceItems: [
            {
              amount: 194,
            },
            {
              amount: 43,
            },
            {
              amount: 40,
            },
          ],
        },
      },
      {
        id: 45511894,
        url: "https://www.airbnb.com/rooms/45511894",
        deeplink:
          "https://www.airbnb.com/rooms/45511894?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 21,
        name: "5F501 NewOpen/Keikyu Kamata 5min/Free Wifi/Japanese-style room like a luxury hotel/1LDK/45m2",
        bathrooms: 1,
        bedrooms: 1,
        beds: 4,
        city: "Ota City",
        images: [
          "https://a0.muscache.com/im/pictures/miso/Hosting-45511894/original/3558085d-8a50-4ddb-896a-08994149e645.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-45511894/original/f653f923-039e-4ba3-822c-354591661afd.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-45511894/original/b4302f9a-9171-4f8d-ab2a-a0769613da48.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-45511894/original/77ca1baa-8374-41f1-b174-2777816eb3fa.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-45511894/original/fc48f9e3-5c3c-40a3-80f0-67df64ab60ae.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-45511894/original/bac9f1d5-304d-44c8-8afb-71a36a466dd4.jpeg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/86de715b-aec5-4d77-9b33-832b7cb7392b.jpg?aki_policy=profile_x_medium",
        isSuperhost: true,
        rareFind: false,
        lat: 35.55711,
        lng: 139.72153,
        persons: 6,
        reviewsCount: 33,
        rating: 4.94,
        type: "Entire rental unit",
        userId: 30127235,
        address: "Ota City, Tōkyō-to, Japan",
        amenityIds: [
          1, 2, 4, 5, 8, 137, 10, 528, 657, 146, 21, 663, 665, 667, 30, 287, 415, 671, 33, 34, 35,
          36, 37, 39, 167, 40, 41, 42, 44, 45, 46, 47, 51, 308, 54, 57, 67, 73, 74, 331, 77, 79, 85,
          86, 87, 88, 89, 90, 91, 93, 94, 96, 611, 100, 103, 104, 236, 251,
        ],
        previewAmenities: ["Wifi", "Kitchen", "Washer", "Self check-in"],
        price: {
          rate: 76,
          currency: "USD",
          total: 227,
          priceItems: [
            {
              amount: 177,
            },
            {
              amount: 50,
            },
            {
              amount: 0,
            },
          ],
        },
      },
      {
        id: 44125110,
        url: "https://www.airbnb.com/rooms/44125110",
        deeplink:
          "https://www.airbnb.com/rooms/44125110?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 22,
        name: "MANGA Design・1 bed・Free simple breakfast・Free wifi",
        bathrooms: 1,
        bedrooms: 1,
        beds: 1,
        city: "Taito City",
        images: [
          "https://a0.muscache.com/im/pictures/309653e3-d123-4b93-95fc-b053a43dc0d9.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-44125110/original/ebfd03ec-4345-463a-a6bb-1967d9c8160f.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-44125110/original/d415c5dd-d096-4ee6-b66a-0e77ca69e980.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-44125110/original/8eae8dab-33a1-4eeb-97bd-8ae337280133.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-44125110/original/376b57da-4390-433a-8c54-db6f8893beac.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-44125110/original/a3173d7d-fbb4-41b3-b4f8-c3cbf9a0d42f.jpeg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/c92700d6-e4e5-4679-a77e-2a7c6f223ba8.jpg?aki_policy=profile_x_medium",
        isSuperhost: false,
        rareFind: false,
        lat: 35.71618,
        lng: 139.79292,
        persons: 2,
        reviewsCount: 115,
        rating: 4.71,
        type: "Room in boutique hotel",
        userId: 354576804,
        address: "Taito City, Tōkyō-to, Japan",
        amenityIds: [
          1, 4, 5, 73, 137, 394, 77, 79, 657, 21, 85, 89, 90, 30, 415, 33, 34, 35, 36, 39, 103, 167,
          40, 104, 41, 42, 44, 45, 46, 47, 51, 55, 251,
        ],
        previewAmenities: ["Wifi", "Washer", "Self check-in"],
        price: {
          rate: 59,
          currency: "USD",
          total: 177,
          priceItems: [
            {
              amount: 192,
            },
            {
              amount: 15,
            },
            {
              amount: 0,
            },
          ],
        },
      },
      {
        id: 694669776773229700,
        url: "https://www.airbnb.com/rooms/694669776773229700",
        deeplink:
          "https://www.airbnb.com/rooms/694669776773229700?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 23,
        name: "[New Open] Simple Kitchen At Home Studio",
        bathrooms: 1,
        bedrooms: 1,
        beds: 1,
        city: "Minato City",
        images: [
          "https://a0.muscache.com/im/pictures/miso/Hosting-694669776773229700/original/5699effc-94e2-4733-9b39-ad81dcfd0fc7.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-694669776773229700/original/8aa8efe1-9f25-4f5c-8f6b-665286355c7d.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-694669776773229700/original/658e7e6d-2caf-4bd0-959d-50d4b76940ff.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-694669776773229700/original/69645de3-9d70-40b4-8467-171c2bdf3417.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-694669776773229700/original/e89e393a-4aa6-469d-812e-d505763c59a7.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-694669776773229700/original/a97aebef-bd44-4e8f-8065-8aeeadca979f.jpeg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/0ef978d9-27ee-446e-8a83-5b86b2db8c5e.jpg?aki_policy=profile_x_medium",
        isSuperhost: true,
        rareFind: false,
        lat: 35.65655,
        lng: 139.74124,
        persons: 3,
        reviewsCount: 2,
        type: "Entire serviced apartment",
        userId: 94302731,
        address: "Minato City, Tokyo, Japan",
        amenityIds: [
          1, 4, 5, 8, 73, 137, 77, 79, 80, 81, 657, 83, 21, 85, 89, 665, 91, 93, 30, 94, 96, 672,
          33, 34, 35, 36, 293, 39, 167, 40, 104, 41, 42, 44, 45, 46, 51, 308, 53, 57, 251, 315, 61,
        ],
        previewAmenities: ["Wifi", "Kitchen", "Washer", "Self check-in"],
        price: {
          rate: 122,
          currency: "USD",
          total: 366,
          priceItems: [
            {
              amount: 309,
            },
            {
              amount: 57,
            },
            {
              amount: 0,
            },
          ],
        },
      },
      {
        id: 38268619,
        url: "https://www.airbnb.com/rooms/38268619",
        deeplink:
          "https://www.airbnb.com/rooms/38268619?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 24,
        name: "MANGA Design・2 bed・Free simple breakfast・4 station",
        bathrooms: 1,
        bedrooms: 1,
        beds: 2,
        city: "港区",
        images: [
          "https://a0.muscache.com/im/pictures/miso/Hosting-38268619/original/4a8c6d4a-a886-4a81-aa6e-315f954888ec.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/611e089f-0d4a-481e-b182-d5105e3d31c2.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-38268619/original/04b3a546-1438-4e72-80a2-8fbe74340a08.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-38268619/original/1ecd00db-d651-4f98-9361-7102e5bd11c3.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-38268619/original/478bf9b8-8e4f-419e-93d4-a40c315739e0.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-38268619/original/c050b496-5cc4-4899-aa37-a79515dd7e66.jpeg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/e017790b-e97a-4a95-80fc-e2ff0a6e4b68.jpg?aki_policy=profile_x_medium",
        isSuperhost: false,
        rareFind: false,
        lat: 35.65499,
        lng: 139.76212,
        persons: 2,
        reviewsCount: 84,
        rating: 4.69,
        type: "Room in hotel",
        userId: 273683937,
        address: "港区, 東京都, Japan",
        amenityIds: [
          1, 4, 132, 5, 73, 77, 79, 657, 21, 85, 89, 90, 30, 31, 415, 33, 34, 35, 611, 36, 39, 103,
          167, 40, 104, 41, 42, 44, 45, 46, 47, 51, 55, 251,
        ],
        previewAmenities: ["Wifi", "Washer", "Self check-in"],
        price: {
          rate: 63,
          currency: "USD",
          total: 189,
          priceItems: [
            {
              amount: 205,
            },
            {
              amount: 16,
            },
            {
              amount: 0,
            },
          ],
        },
      },
      {
        id: 42763460,
        url: "https://www.airbnb.com/rooms/42763460",
        deeplink:
          "https://www.airbnb.com/rooms/42763460?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 25,
        name: "Room 201 shinjyuku area 大久保駅がら 5分　WIFI Free",
        bathrooms: 1.5,
        bedrooms: 1,
        beds: 2,
        city: "Shinjuku-ku",
        images: [
          "https://a0.muscache.com/im/pictures/b1222150-8125-4dc0-943d-3d5db4f568cf.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/f5383914-e67c-4b89-bf48-ad88479b00af.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/429e1880-1b5a-4e05-aa24-42a7f4bc4f6c.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/fb8e9e8b-506a-4748-b2a1-ccd2f27b62ac.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/55e8c878-d9c9-49fc-96b3-f635ed512a84.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/5033bb5f-aa14-471b-89c3-ba38d403cd76.jpg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/users/21504159/profile_pic/1433040683/original.jpg?aki_policy=profile_x_medium",
        isSuperhost: false,
        rareFind: false,
        lat: 35.70051,
        lng: 139.69468,
        persons: 3,
        reviewsCount: 1,
        type: "Entire rental unit",
        userId: 21504159,
        address: "Shinjuku-ku, Tōkyō, Japan",
        amenityIds: [
          1, 4, 5, 8, 73, 10, 77, 79, 657, 146, 85, 87, 89, 91, 93, 30, 33, 98, 35, 611, 36, 39, 40,
          104, 41, 42, 44, 45, 51, 627, 54, 56, 57, 61,
        ],
        previewAmenities: ["Wifi", "Kitchen", "Washer", "Self check-in"],
        price: {
          rate: 90,
          currency: "USD",
          total: 270,
          priceItems: [
            {
              amount: 220,
            },
            {
              amount: 50,
            },
            {
              amount: 0,
            },
          ],
        },
      },
      {
        id: 43931507,
        url: "https://www.airbnb.com/rooms/43931507",
        deeplink:
          "https://www.airbnb.com/rooms/43931507?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 26,
        name: "New Clean Apt for 4 people w/Convenient Access!",
        bathrooms: 1,
        bedrooms: 1,
        beds: 0,
        city: "Sumida City",
        images: [
          "https://a0.muscache.com/im/pictures/e10a22d2-3315-42ab-a08d-93d2c2828d69.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/3df30e26-966e-49b0-971e-878ced0f3475.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/45b96027-6422-4d2d-bf98-756f11f7fef9.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-43931507/original/ca943460-89f8-4c63-8c99-eee3fd3f26f9.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/28b6cf28-aef3-4633-8757-b091d8c05a8c.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/4eebd516-9416-4d9a-89fb-dd6874fe830e.jpg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/users/16972733/profile_pic/1406269096/original.jpg?aki_policy=profile_x_medium",
        isSuperhost: false,
        rareFind: false,
        lat: 35.69381,
        lng: 139.80235,
        persons: 4,
        reviewsCount: 14,
        rating: 4.43,
        type: "Entire rental unit",
        userId: 16972733,
        address: "Sumida City, Tōkyō-to, Japan",
        amenityIds: [
          1, 4, 5, 8, 73, 137, 77, 79, 146, 85, 86, 87, 663, 89, 665, 30, 33, 98, 35, 36, 39, 167,
          40, 104, 41, 45, 51, 54, 57,
        ],
        previewAmenities: ["Wifi", "Kitchen", "Washer", "Self check-in"],
        price: {
          rate: 59,
          currency: "USD",
          total: 176,
          priceItems: [
            {
              amount: 128,
            },
            {
              amount: 23,
            },
            {
              amount: 25,
            },
          ],
        },
      },
      {
        id: 49397653,
        url: "https://www.airbnb.com/rooms/49397653",
        deeplink:
          "https://www.airbnb.com/rooms/49397653?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 27,
        name: "A 5-minute walk from Shibuya Station! Kitchen included! 109 convenient location for shopping nearby　",
        bathrooms: 1,
        bedrooms: 1,
        beds: 1,
        city: "Shibuya City",
        images: [
          "https://a0.muscache.com/im/pictures/5f408ec7-81bd-4599-b923-f9097e8ae6a1.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/846650f4-1a9b-4929-98be-d4976d797f8f.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-49397653/original/c21d6be9-875a-4ea2-aa84-4039830955c2.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-49397653/original/5e8fdbd7-becf-43ae-a4c9-a0160f6f151b.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-49397653/original/bccd1467-ba31-4103-bfe7-fa27247247f6.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-49397653/original/88b8634f-3d05-4277-b85c-6b4c81614638.jpeg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/f9be80be-b6cc-401b-86c7-d9201199dafb.jpg?aki_policy=profile_x_medium",
        isSuperhost: true,
        rareFind: false,
        lat: 35.65892,
        lng: 139.69485,
        persons: 2,
        reviewsCount: 14,
        rating: 4.86,
        type: "Entire rental unit",
        userId: 398419603,
        address: "Shibuya City, Tokyo, Japan",
        amenityIds: [
          1, 4, 5, 8, 392, 73, 137, 10, 75, 77, 79, 657, 21, 85, 89, 665, 91, 93, 94, 96, 672, 33,
          35, 100, 37, 39, 167, 40, 41, 44, 45, 46, 51, 54, 57, 61,
        ],
        previewAmenities: ["Wifi", "Kitchen", "Washer", "Self check-in"],
        price: {
          rate: 158,
          currency: "USD",
          total: 474,
          priceItems: [
            {
              amount: 363,
            },
            {
              amount: 43,
            },
            {
              amount: 68,
            },
          ],
        },
      },
      {
        id: 44252261,
        url: "https://www.airbnb.com/rooms/44252261",
        deeplink:
          "https://www.airbnb.com/rooms/44252261?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 28,
        name: "TokyoHub: For Gamers&Anime Fans! 2 mins - JRHirai",
        bathrooms: 1,
        bedrooms: 1,
        beds: 4,
        city: "Edogawa City",
        images: [
          "https://a0.muscache.com/im/pictures/miso/Hosting-44252261/original/68a5094e-999e-4544-a241-8386750fa10f.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-44252261/original/38ba64eb-26cd-4a9d-8027-c11fd0665fd5.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-44252261/original/fca43036-aac1-40f1-bc6c-d01caaabc8b1.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-44252261/original/649a25f6-ca45-4dcc-b0fa-a8097fa23e30.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-44252261/original/541ca80e-26b2-4ad3-9398-4dadc9117147.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/74280635-9b94-4943-a720-df87444d59ea.jpg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/8421e961-e787-4659-aabc-2561d4fd4ae1.jpg?aki_policy=profile_x_medium",
        isSuperhost: true,
        rareFind: false,
        lat: 35.7037,
        lng: 139.84112,
        persons: 6,
        reviewsCount: 35,
        rating: 4.77,
        type: "Room in hotel",
        userId: 352412571,
        address: "Edogawa City, Tōkyō-to, Japan",
        amenityIds: [
          1, 4, 5, 8, 73, 137, 75, 77, 79, 657, 85, 86, 89, 665, 90, 91, 92, 93, 30, 94, 95, 96,
          672, 33, 34, 35, 36, 100, 37, 101, 39, 103, 167, 40, 104, 41, 42, 107, 44, 236, 45, 46,
          51, 308, 53, 56, 251, 315,
        ],
        previewAmenities: ["Wifi", "Kitchen", "Washer", "Self check-in"],
        price: {
          rate: 52,
          currency: "USD",
          total: 154,
          priceItems: [
            {
              amount: 118,
            },
            {
              amount: 36,
            },
            {
              amount: 0,
            },
          ],
        },
      },
      {
        id: 658360855119595300,
        url: "https://www.airbnb.com/rooms/658360855119595300",
        deeplink:
          "https://www.airbnb.com/rooms/658360855119595300?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 29,
        name: "Newly built apartment # 301 Koiwa station 3 minutes on foot High speed WiFi Haneda, direct bus to Narita, shopping street nearby",
        bathrooms: 1,
        bedrooms: 1,
        beds: 2,
        city: "Edogawa City",
        images: [
          "https://a0.muscache.com/im/pictures/miso/Hosting-658360855119595295/original/370ffd27-74d0-4d99-9bde-4e3c6ad6e0c5.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-658360855119595295/original/6081f9b6-cd88-4709-9aec-08c0d11cf46b.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-658360855119595295/original/c72c8d2f-b85e-4d8c-b4dd-fb84d4be819f.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-658360855119595295/original/a0e7809c-a22e-4d82-8cf4-8b01718717c3.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-658360855119595295/original/c6dff30e-c325-409e-9910-5cce9efe8fe7.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-658360855119595295/original/7223642a-8da7-46a1-ac37-81818b6ae23f.jpeg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/cd08921b-145e-4912-ae10-b6162770ac74.jpg?aki_policy=profile_x_medium",
        isSuperhost: false,
        rareFind: false,
        lat: 35.73334,
        lng: 139.88303,
        persons: 4,
        reviewsCount: 7,
        rating: 5,
        type: "Entire rental unit",
        userId: 375599884,
        address: "Edogawa City, Tokyo, Japan",
        amenityIds: [
          1, 2, 4, 5, 8, 73, 137, 10, 77, 79, 145, 657, 146, 87, 89, 665, 91, 93, 30, 94, 96, 33,
          35, 36, 100, 39, 167, 40, 104, 41, 44, 45, 46, 47, 51, 54, 57, 315, 61,
        ],
        previewAmenities: ["Wifi", "Kitchen", "Washer", "Self check-in"],
        price: {
          rate: 53,
          currency: "USD",
          total: 159,
          priceItems: [
            {
              amount: 100,
            },
            {
              amount: 36,
            },
            {
              amount: 23,
            },
          ],
        },
      },
      {
        id: 39266784,
        url: "https://www.airbnb.com/rooms/39266784",
        deeplink:
          "https://www.airbnb.com/rooms/39266784?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 31,
        name: "[Indoor Bathroom Kitchen/Supermarket Adjacent] [Yuki Tokyo/101 Mint] Near Shinjuku Line Station!",
        bathrooms: 1.5,
        bedrooms: 1,
        beds: 2,
        city: "Koto City",
        images: [
          "https://a0.muscache.com/im/pictures/907fdabe-8eee-4973-82e8-5cb8004e235b.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/b51d6be0-a995-4ffa-b3bb-7d3de6dc3da9.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/63d50366-49ec-4c43-8c54-c4f1c06b0bfc.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/7095aaf2-2338-479d-a821-fb674f02cf5c.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/a00471f1-9a42-46ee-9446-308fc4a743e6.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/d423f8f7-339f-4eca-bfef-ac63726dc100.jpg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/e8d4278d-d0ce-41a2-8b3d-46f421458509.jpg?aki_policy=profile_x_medium",
        isSuperhost: false,
        rareFind: true,
        lat: 35.68825,
        lng: 139.83751,
        persons: 4,
        reviewsCount: 26,
        rating: 4.85,
        type: "Entire condo",
        userId: 118924749,
        address: "Koto City, Tōkyō-to, Japan",
        amenityIds: [
          4, 5, 8, 10, 77, 85, 86, 87, 89, 91, 93, 30, 94, 96, 33, 35, 36, 37, 39, 103, 40, 104, 41,
          44, 45, 46, 47, 51, 52, 57,
        ],
        previewAmenities: ["Wifi", "Kitchen", "Washer", "Self check-in"],
        price: {
          rate: 60,
          currency: "USD",
          total: 179,
          priceItems: [
            {
              amount: 128,
            },
            {
              amount: 25,
            },
            {
              amount: 26,
            },
          ],
        },
      },
      {
        id: 53177423,
        url: "https://www.airbnb.com/rooms/53177423",
        deeplink:
          "https://www.airbnb.com/rooms/53177423?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 32,
        name: "Shinjuku the cheapest clean＆comfortable private rm",
        bathrooms: 5.5,
        bedrooms: 1,
        beds: 1,
        city: "Nakano City",
        images: [
          "https://a0.muscache.com/im/pictures/0e71d432-0785-4159-b1ca-0e4960abf827.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/bf3adbbf-0d40-4c57-8c21-7453d2699a4b.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/c43881e3-0724-48ff-8a1b-42328b15082d.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/6716ddcc-8b12-4dd7-8630-0c7d6bf8beb3.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/69e52a63-eb04-4e43-a1e5-6afafa5b77f0.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/93cb2aa6-c31a-4fb5-b0aa-e5eb02330304.jpg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/2c76aeab-9da7-44a4-b8df-65a2cf42843f.jpg?aki_policy=profile_x_medium",
        isSuperhost: false,
        rareFind: false,
        lat: 35.68754,
        lng: 139.67674,
        persons: 2,
        reviewsCount: 21,
        rating: 4.86,
        type: "Private room in hostel",
        userId: 110379659,
        address: "Nakano City, Tokyo, Japan",
        amenityIds: [
          4, 5, 8, 137, 649, 10, 650, 651, 77, 653, 80, 656, 86, 89, 665, 669, 30, 94, 671, 96, 35,
          611, 36, 39, 103, 40, 680, 41, 42, 682, 107, 44, 236, 45, 46, 47, 51, 54, 57,
        ],
        previewAmenities: ["Wifi", "Kitchen", "Self check-in"],
        price: {
          rate: 44,
          currency: "USD",
          total: 131,
          priceItems: [
            {
              amount: 117,
            },
            {
              amount: 14,
            },
            {
              amount: 0,
            },
          ],
        },
      },
      {
        id: 49452168,
        url: "https://www.airbnb.com/rooms/49452168",
        deeplink:
          "https://www.airbnb.com/rooms/49452168?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 33,
        name: "【Theatel羽田2】DoubleRoom★ 6min ride→ Haneda Airport",
        bathrooms: 1,
        bedrooms: 1,
        beds: 2,
        city: "Ota City",
        images: [
          "https://a0.muscache.com/im/pictures/miso/Hosting-49452168/original/f6b27277-37cd-48e1-b43b-d519610db534.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-49452168/original/187da5a5-46ab-4e3a-8768-19b8ebc036f9.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-49452168/original/0fa2fa0d-3d73-4c1c-a75b-1715048a9e64.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-49452168/original/fd67de82-a384-4791-a195-2a5675fcf3e6.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-49452168/original/3a84e793-25cf-40c3-ad21-38fd307e318e.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-49452168/original/bffe5293-0996-4bbd-aeab-a7314e8fc1fa.jpeg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/16de1fb5-f827-41ed-b6c4-5c36acb7b655.jpg?aki_policy=profile_x_medium",
        isSuperhost: false,
        rareFind: false,
        lat: 35.551174,
        lng: 139.748688,
        persons: 3,
        reviewsCount: 73,
        rating: 4.6,
        type: "Room in hotel",
        userId: 398845831,
        address: "Ota City, Tokyo, Japan",
        amenityIds: [
          4, 5, 73, 137, 77, 79, 657, 146, 21, 85, 663, 89, 91, 30, 35, 39, 167, 40, 104, 41, 42,
          44, 45, 51, 52, 57, 185,
        ],
        previewAmenities: ["Wifi", "Self check-in"],
        price: {
          rate: 61,
          currency: "USD",
          total: 182,
          priceItems: [
            {
              amount: 242,
            },
            {
              amount: 60,
            },
            {
              amount: 0,
            },
          ],
        },
      },
      {
        id: 50338765,
        url: "https://www.airbnb.com/rooms/50338765",
        deeplink:
          "https://www.airbnb.com/rooms/50338765?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 34,
        name: "Newly opened hotel-style t suite  Subway 3 minutes",
        bathrooms: 1,
        bedrooms: 1,
        beds: 2,
        city: "Shinjuku City",
        images: [
          "https://a0.muscache.com/im/pictures/7054cc4f-6016-476f-bd05-814bb6519e83.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/0e4b6da8-26f7-4a64-bcfb-5151d7dd865f.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/8818041a-715c-434d-93da-341d71d7f415.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/e76fec1c-ac86-4a07-bd81-18e4117ea24b.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/31d96e41-d5c3-4919-a771-c108543bd7b9.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/74fa1b08-bf72-4f0a-bcdd-05800c199f51.jpg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/8b6f457d-bd0f-458e-8020-f4be7de1c363.jpg?aki_policy=profile_x_medium",
        isSuperhost: true,
        rareFind: false,
        lat: 35.69969,
        lng: 139.70569,
        persons: 2,
        reviewsCount: 2,
        type: "Room in boutique hotel",
        userId: 286188033,
        address: "Shinjuku City, Tokyo, Japan",
        amenityIds: [
          1, 33, 35, 4, 36, 100, 5, 37, 39, 40, 41, 42, 44, 45, 46, 47, 51, 21, 53, 57, 91, 30,
        ],
        previewAmenities: ["Wifi", "Washer", "Self check-in"],
        price: {
          rate: 70,
          currency: "USD",
          total: 210,
          priceItems: [
            {
              amount: 150,
            },
            {
              amount: 30,
            },
            {
              amount: 30,
            },
          ],
        },
      },
      {
        id: 42734496,
        url: "https://www.airbnb.com/rooms/42734496",
        deeplink:
          "https://www.airbnb.com/rooms/42734496?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 35,
        name: "Newly built apartment in a quiet residential street G",
        bathrooms: 1,
        bedrooms: 1,
        beds: 2,
        city: "Katsushika City",
        images: [
          "https://a0.muscache.com/im/pictures/daa2ca49-f6ac-49aa-9f76-07700898ec80.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/3e670578-9503-4b96-9c0a-2a038f0a71c4.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/86560e2b-20a5-4140-945f-5d3eb88be9c9.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/b943ab81-4f0e-408e-9a90-9b95f17338d7.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/04c4ff62-ebdc-4632-a0fc-9aefacf2d522.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/0efde9a2-6b62-42e6-aa6a-a940f13d8f48.jpg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/71474da1-6872-46c9-9b43-bad9d1fd6256.jpg?aki_policy=profile_x_medium",
        isSuperhost: false,
        rareFind: false,
        lat: 35.74729,
        lng: 139.86865,
        persons: 2,
        reviewsCount: 9,
        rating: 4.56,
        type: "Entire rental unit",
        userId: 37456117,
        address: "Katsushika City, Tōkyō-to, Japan",
        amenityIds: [
          1, 33, 34, 35, 4, 36, 100, 5, 39, 8, 40, 41, 12, 44, 45, 47, 51, 54, 57, 30, 94,
        ],
        previewAmenities: ["Wifi", "Kitchen", "Washer", "Self check-in"],
        price: {
          rate: 51,
          currency: "USD",
          total: 153,
          priceItems: [
            {
              amount: 81,
            },
            {
              amount: 50,
            },
            {
              amount: 22,
            },
          ],
        },
      },
      {
        id: 638035360997395600,
        url: "https://www.airbnb.com/rooms/638035360997395600",
        deeplink:
          "https://www.airbnb.com/rooms/638035360997395600?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 36,
        name: "#302#1BR Japanese Style Home near Akihabara/Ueno",
        bathrooms: 1,
        bedrooms: 1,
        beds: 0,
        city: "Taito City",
        images: [
          "https://a0.muscache.com/im/pictures/miso/Hosting-638035360997395598/original/1830d9b8-732a-4034-b9fc-3f635ab43423.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-638035360997395598/original/9fce3254-58c5-4478-8467-e82aa019af25.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-638035360997395598/original/44fb4e50-e0cc-4c7a-9c34-c0abe62070e8.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-638035360997395598/original/20a7991b-455d-484c-a2e3-491bd19a09ad.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-638035360997395598/original/57134622-bb46-4c56-9210-632b03cb241a.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-638035360997395598/original/c7840a77-d3f2-4468-b7ef-72cc9bfa84c1.jpeg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/55e53f53-73d7-4d65-8776-7188d7e01bbe.jpg?aki_policy=profile_x_medium",
        isSuperhost: true,
        rareFind: false,
        lat: 35.70693,
        lng: 139.78014,
        persons: 2,
        reviewsCount: 1,
        type: "Private room in condo",
        userId: 199863640,
        address: "Taito City, Tokyo, Japan",
        amenityIds: [
          1, 4, 5, 8, 73, 137, 649, 10, 77, 79, 80, 657, 21, 89, 91, 93, 669, 670, 96, 33, 35, 611,
          36, 37, 39, 103, 40, 41, 299, 44, 236, 45, 46, 180,
        ],
        previewAmenities: ["Wifi", "Kitchen", "Washer"],
        price: {
          rate: 47,
          currency: "USD",
          total: 141,
          priceItems: [
            {
              amount: 85,
            },
            {
              amount: 36,
            },
            {
              amount: 20,
            },
          ],
        },
      },
      {
        id: 35980244,
        url: "https://www.airbnb.com/rooms/35980244",
        deeplink:
          "https://www.airbnb.com/rooms/35980244?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 37,
        name: "103上野附近温馨新公寓  Near Ueno Cozy New Apart Room103",
        bathrooms: 1.5,
        bedrooms: 1,
        beds: 2,
        city: "日本东京",
        images: [
          "https://a0.muscache.com/im/pictures/9e343411-cf2c-4ed4-a50f-8b621598de5b.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/83d5df3c-e200-4b8a-906d-4968fa42621b.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/068d8956-2b60-4e76-ae69-44cad02f24f3.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/2f938fbd-5746-4bfb-845c-536ef8410525.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/17cf6f74-c3cb-4cef-932f-0f0068ddae0e.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/031d9c1d-4048-4a3e-bffa-f7f15565290d.jpg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/2eb93370-8c9b-4bd5-a30e-4316d7ce50b9.jpg?aki_policy=profile_x_medium",
        isSuperhost: true,
        rareFind: true,
        lat: 35.72441,
        lng: 139.78215,
        persons: 2,
        reviewsCount: 38,
        rating: 4.92,
        type: "Entire rental unit",
        userId: 135661841,
        address: "日本东京, 东京都, Japan",
        amenityIds: [
          1, 2, 4, 5, 8, 137, 649, 10, 650, 651, 657, 146, 663, 665, 669, 671, 33, 35, 36, 37, 39,
          40, 41, 682, 299, 683, 44, 45, 46, 47, 51, 53, 57, 73, 77, 80, 85, 86, 87, 89, 91, 93, 94,
          96, 98, 611, 101, 104, 617, 236, 627,
        ],
        previewAmenities: ["Wifi", "Kitchen", "Washer", "Self check-in"],
        price: {
          rate: 63,
          currency: "USD",
          total: 187,
          priceItems: [
            {
              amount: 147,
            },
            {
              amount: 40,
            },
            {
              amount: 0,
            },
          ],
        },
      },
      {
        id: 43729974,
        url: "https://www.airbnb.com/rooms/43729974",
        deeplink:
          "https://www.airbnb.com/rooms/43729974?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 38,
        name: "【Male Only】10min.from Haneda Airport",
        bathrooms: 5,
        bedrooms: 1,
        beds: 1,
        city: "Ota City",
        images: [
          "https://a0.muscache.com/im/pictures/557186d9-a5ce-4014-bdc2-5f555b4b0c5e.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/99776230-2b06-4037-b1ce-611a900e9f10.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-43729974/original/5094c40d-2adb-420c-8ae6-bd67a55d6d5f.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/29c8a783-5b1a-41af-aca1-376a070ddcdd.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/17246c84-c42a-4657-b786-27e21caccb32.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/7ec1d4de-53f0-4dbe-96b9-218dd6c61de9.jpg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/fd676e19-ad9e-4acf-810c-c7a3054b1c92.jpg?aki_policy=profile_x_medium",
        isSuperhost: false,
        rareFind: true,
        lat: 35.55226,
        lng: 139.7422,
        persons: 1,
        reviewsCount: 132,
        rating: 4.45,
        type: "Private room in hostel",
        userId: 247326938,
        address: "Ota City, Tōkyō-to, Japan",
        amenityIds: [
          5, 8, 73, 137, 77, 79, 657, 663, 89, 665, 30, 95, 96, 35, 611, 36, 37, 39, 167, 40, 104,
          232, 41, 44, 45, 47, 51, 53,
        ],
        previewAmenities: ["Kitchen", "Self check-in"],
        price: {
          rate: 18,
          currency: "USD",
          total: 54,
          priceItems: [
            {
              amount: 45,
            },
            {
              amount: 9,
            },
            {
              amount: 0,
            },
          ],
        },
      },
      {
        id: 746908074580013400,
        url: "https://www.airbnb.com/rooms/746908074580013400",
        deeplink:
          "https://www.airbnb.com/rooms/746908074580013400?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 39,
        name: "7 minutes walk from Sangenjaya Station",
        bathrooms: 1,
        bedrooms: 1,
        beds: 2,
        city: "Setagaya City",
        images: [
          "https://a0.muscache.com/im/pictures/0deecb88-f700-4d5b-a9e8-d19219aba40e.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/349ad9ff-517c-4bd3-8ce4-af60222bb4b5.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/miso/Hosting-746908074580013393/original/e49c92bb-3ea2-4a2e-b44f-a105b5c51255.jpeg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/c4f8b6b1-e4d0-4a9a-964f-ecfe2f80d98e.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/9ac7007a-ee2c-4f4f-a399-d8621411f620.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/fce62b40-ff80-49b5-8ac6-e06c5103ae1f.jpg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/68755004-99c5-47ba-8514-d43ec976bb72.jpg?aki_policy=profile_x_medium",
        isSuperhost: false,
        rareFind: false,
        lat: 35.63836,
        lng: 139.66727,
        persons: 4,
        reviewsCount: 1,
        type: "Entire rental unit",
        userId: 476371170,
        address: "Setagaya City, Tokyo, Japan",
        amenityIds: [
          1, 4, 5, 8, 137, 10, 74, 77, 79, 145, 657, 21, 85, 86, 87, 663, 89, 665, 91, 93, 30, 94,
          95, 96, 672, 33, 35, 36, 37, 39, 103, 40, 104, 41, 44, 236, 45, 46, 47, 51, 52, 308, 57,
          251, 315, 61,
        ],
        previewAmenities: ["Wifi", "Kitchen", "Washer", "Self check-in"],
        price: {
          rate: 67,
          currency: "USD",
          total: 200,
          priceItems: [
            {
              amount: 107,
            },
            {
              amount: 64,
            },
            {
              amount: 29,
            },
          ],
        },
      },
      {
        id: 28371492,
        url: "https://www.airbnb.com/rooms/28371492",
        deeplink:
          "https://www.airbnb.com/rooms/28371492?check_in=2022-11-27&check_out=2022-11-30&adults=1",
        position: 40,
        name: "Tranquil Location! 13 min to Shibuya/ Shinjuku",
        bathrooms: 1,
        bedrooms: 1,
        beds: 2,
        city: "Suginami-ku",
        images: [
          "https://a0.muscache.com/im/pictures/bb3eb460-a14f-47ef-b577-ece2128d51e9.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/24e5dd7e-8841-4496-ad43-fc69a95641d3.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/db1bd8da-e51b-4937-8652-4e14323fc914.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/d0274939-eda3-4487-9ebf-a16d16feed6e.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/59fcb406-7218-45c2-8842-7e6492b9957f.jpg?aki_policy=large",
          "https://a0.muscache.com/im/pictures/d9241830-cbd5-4d8f-8e4a-e04b8a600599.jpg?aki_policy=large",
        ],
        hostThumbnail:
          "https://a0.muscache.com/im/pictures/user/a096d7ed-0f52-4478-bb37-814bcafd29e8.jpg?aki_policy=profile_x_medium",
        isSuperhost: false,
        rareFind: false,
        lat: 35.67541,
        lng: 139.63408,
        persons: 2,
        reviewsCount: 67,
        rating: 4.99,
        type: "Private room in home",
        userId: 214203053,
        address: "Suginami-ku, Tōkyō-to, Japan",
        amenityIds: [
          1, 129, 2, 4, 132, 5, 137, 10, 77, 79, 16, 657, 85, 86, 87, 88, 665, 667, 30, 287, 415,
          671, 33, 34, 35, 611, 103, 167, 40, 104, 41, 42, 44, 45, 46, 56, 61,
        ],
        previewAmenities: ["Wifi", "Washer"],
        price: {
          rate: 86,
          currency: "USD",
          total: 257,
          priceItems: [
            {
              amount: 192,
            },
            {
              amount: 28,
            },
            {
              amount: 37,
            },
          ],
        },
      },
    ],
  };

  return {
    props: { searchResults },
  };
};
