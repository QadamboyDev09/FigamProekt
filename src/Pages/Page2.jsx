import React from "react";
import Dev from "../assets/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling-840996.png";
import Teacher1 from "../assets/two-women-in-front-of-dry-erase-board-1181533.png";
import Teacher2 from "../assets/photo-of-people-doing-handshakes-3183197.png";
import Teacher3 from "../assets/photo-of-woman-looking-at-man-3183173.png";
import Teacher4 from "../assets/photo-of-people-walking-on-hallway-3182811.png";

const Page2 = () => {
  return (
    <div>
      <div className="bg-[#F4F0F8]">
        <div className="container mx-auto mx-24">
          <div className="flex justify-between items-center">
            {/* 1 */}
            <div className="py-[70px] leading-[50px]">
              <h2 className="text-black font-black py-[10px] text-[26px]">
                Featured Post
              </h2>
              <h1 className="font-black text-black py-[10px] w-[900px] leading-[70px] text-[56px]">
                Step-by-step guide to choosing great font pairs
              </h1>
              <span className="text-black text-[16px]">
                By <span className="text-[#e6ab2d]">James West</span> | May 23,
                2022{" "}
              </span>
              <p className="text-black w-[600px] text-[16px] leading-6 py-[20px]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
              <button className="text-black py-[8px] bg-[#e6ab2d] mt-[20px]  hover:bg-white hover:border hover:border-[#e6ab2d] hover:text-[#e6ab2d] transition px-[30px]">
                Read More
              </button>
            </div>
            {/* 2 */}
            <div>
              <img src={Dev} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* All Post */}
      <div className="container mx-auto mx-24">
        <div>
          <h1 className="text-[40px] font-bold  my-[50px]">All Posts</h1>
          <hr />
        </div>
        <div className="flex flex-col gap-[50px] mt-[80px]">
          <div className="flex justify-between items-center gap-[50px]">
            <div>
              <img src={Teacher1} alt="" />
            </div>
            <div>
              <p className="text-[#592EA9] py-[10px]">STARTUP</p>
              <h1 className="text-[36px] font-bold py-[10px]">
                Design tips for designers that cover <br /> everything you need
              </h1>
              <p className="text-[#6D6E76] py-[10px]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-[50px]">
            <div>
              <img src={Teacher2} alt="" />
            </div>
            <div>
              <p className="text-[#592EA9] py-[10px]">BUSINESS</p>
              <h1 className="text-[36px] font-bold py-[10px]">
              How to build rapport with your web <br /> design clients
              </h1>
              <p className="text-[#6D6E76] py-[10px]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-[50px]">
            <div>
              <img src={Teacher3} alt="" />
            </div>
            <div>
              <p className="text-[#592EA9] py-[10px]">STARTUP</p>
              <h1 className="text-[36px] font-bold py-[10px]">
              Logo design trends to avoid in 2022
              </h1>
              <p className="text-[#6D6E76] py-[10px]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-[50px]">
            <div>
              <img src={Teacher4} alt="" />
            </div>
            <div>
              <p className="text-[#592EA9] py-[10px]">TECHNOLOGY</p>
              <h1 className="text-[36px] font-bold py-[10px]">
              8 Figma design systems you can <br /> download for free today
              </h1>
              <p className="text-[#6D6E76] py-[10px]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-[50px]">
            <div>
              <img src={Teacher1} alt="" />
            </div>
            <div>
              <p className="text-[#592EA9] py-[10px]">ECONOMY</p>
              <h1 className="text-[36px] font-bold py-[10px]">
              Font sizes in UI design: The complete <br /> guide to follow
              </h1>
              <p className="text-[#6D6E76] py-[10px]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
