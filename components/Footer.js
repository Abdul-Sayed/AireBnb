import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 content-between gap-y-10 px-8 md:px-16 lg:px-32 py-14 bg-gray-100 text-gray-600">
      <div className="text-center space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="text-center space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>AirCover</p>
        <p>Safety Information</p>
        <p>Report a strange noise</p>
        <p>Supporting people with disabilities</p>
      </div>
      <div className="text-center space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>Airbnb.org: disaster relief hoising</p>
        <p>Support Afghan Refugees</p>
        <p>Live Aid Concert</p>
        <p>Free Nelson Mandela</p>
      </div>
      <div className="text-center space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">Hosting</h5>
        <p>Try hosting</p>
        <p>Explore hosting resources</p>
        <p>Spy camera policy</p>
        <p>Aircover for hosts</p>
        <p>Broken Furniture</p>
      </div>
    </footer>
  );
};

export default Footer;
