import React from "react";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";

const CardsHomes = () => {
  return (
    <div className="flex justify-center bg-gray-200 py-4">
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 h-full">
          <img src={card1} alt="Card1" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-yellow-500">
              Buy a house
            </h3>
            <p className="text-gray-600">
              Discover your ideal location with an immersive photo experience
              and the most listings, including items you won't find anywhere
              else.
            </p>
            <div className="flex justify-center items-center mt-4">
              <button className="mt-4 py-2 px-4 bg-white border border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white focus:outline-none">
                Browse Home
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Card 2 */}
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4">
        {" "}
        {/* Update margin at the bottom */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 h-full">
          <img src={card2} alt="Card2" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-yellow-500">
              Sell a house
            </h3>
            <p className="text-gray-600">
              No matter what path you take to sell your home, we can help you
              navigate a successful sale.
            </p>
            <div className="flex justify-center items-center mt-4">
              <button className="mt-4 py-2 px-4 bg-white border border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white focus:outline-none">
                See your Option
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 h-full">
          <img src={card1} alt="Card3" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-yellow-500">
              Rent a home
            </h3>
            <p className="text-gray-600">
              We’re creating a seamless online experience from shopping on the
              largest rental network, to applying, to paying rent
            </p>
            <div className="flex justify-center items-center mt-4">
              <button className="mt-4 py-2 px-4 bg-white border border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white focus:outline-none">
                Get a rental
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardsHomes;
