import React from "react";
import city from "../assets/Icon.png";
import startup from "../assets/Icon (1).png";
import emony from "../assets/economy (1).png";
import texnology from "../assets/cyborg.png";

const ChoseKatalog = () => {
  return (
    <div className="container mx-auto mx-24">
      <div>
        <h1 className="text-[42px] font-black text-center  my-[60px]">
          Choose A Catagory
        </h1>
        <div className="flex gap-[30px]">
          <div className="border p-[20px]">
            <div className="p-[10px] bg-[#FBF6EA] w-[70px] rounded-xl text-[20px] my-[10px]">
              <img src={city} alt="" />
            </div>
            <h1 className="text-[28px] font-bold py-[10px]">Business</h1>
            <p className="text-[#6D6E76]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
          <div className=" p-[20px] bg-[#FFD050]">
            <div className="p-[22.5px] bg-[#FBF6EA] w-[70px] rounded-xl text-[40px] my-[10px]">
              <img src={startup} alt="" />
            </div>
            <h1 className="text-[28px] font-bold py-[10px]">Startup</h1>
            <p className="text-[#6D6E76]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
          <div className="border p-[20px]">
            <div className="p-[22.5px] bg-[#FBF6EA] w-[70px] rounded-xl text-[20px] my-[10px]">
              <img src={emony} alt="" />
            </div>
            <h1 className="text-[28px] font-bold py-[10px]">Economy</h1>
            <p className="text-[#6D6E76]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
          <div className="border p-[20px]">
            <div className="p-[22.5px] bg-[#FBF6EA] w-[70px] rounded-xl text-[20px] my-[10px]">
              <img src={texnology} alt="" />
            </div>
            <h1 className="text-[28px] font-bold py-[10px]">Technology</h1>
            <p className="text-[#6D6E76]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
        </div>

        {/* 2  */}
        <div className="flex justify-between">
          <div id="puple">
          <div className="p-[50px] w-[700px] h-[500px] bg-white relative left-[836px] top-[205px]">
            <h1 className=" text-[20px] font-bold">Why we started </h1>
            <h1 className="text-[50px] font-bold leading-[60px] py-[10px]">
              It started out as a simple idea and evolved into our passion
            </h1>
            <p className="text-[#6D6E76] py-[10px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <button className="text-black py-[8px] bg-[#e6ab2d] mt-[20px] hover:bg-white hover:border hover:border-[#e6ab2d] hover:text-[#e6ab2d] transition px-[30px]">
            Discover our story 
            </button>
          </div>
          </div>
      
        </div>
      </div>
    </div>
  );
};

export default ChoseKatalog;
