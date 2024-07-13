import React from "react";

const LeftBar = () => {
  return (
    <div className="mt-4 w-1/3 flex flex-col sm:w-full sm:flex-row">
      <button className="bg-gray-300 text-sm w-24 h-8 ml-12">SHOP BY</button>
      <div>
        <div className="border-b-2 border-green-500 flex justify-between items-center w-3/5 ml-8 my-4">
          <p className="font-bold">CATEGORIES</p> <span>-</span>
        </div>
        <div className="flex items-center gap-4 ml-8">
          <input type="radio" name="category" id="fashion" /> <p>FASHION</p>
        </div>
        <div className="flex items-center gap-4 ml-8">
          <input type="radio" name="category" id="makeup" /> <p>MAKEUP</p>
        </div>
        <div className="flex items-center gap-4 ml-8">
          <input type="radio" name="category" id="electronic" /> <p>ELECTRONIC</p>
        </div>
        <div className="flex items-center gap-4 ml-8">
          <input type="radio" name="category" id="jewelry" /> <p>JEWELRY</p>
        </div>
        <div className="flex items-center gap-4 ml-8">
          <input type="radio" name="category" id="furniture" /> <p>FURNITURE</p>
        </div>
      </div>
      <div>
        <div className="border-b-2 border-green-500 flex justify-between items-center w-3/5 ml-8 my-4">
          <p className="font-bold">GENDER</p> <span>-</span>
        </div>
        <div className="flex items-center gap-4 ml-8">
          <input type="radio" name="gender" id="men" /> <p>MEN</p>
        </div>
        <div className="flex items-center gap-4 ml-8">
          <input type="radio" name="gender" id="women" /> <p>WOMEN</p>
        </div>
        <div className="flex items-center gap-4 ml-8">
          <input type="radio" name="gender" id="unisex" /> <p>UNISEX</p>
        </div>
      </div>
      <div>
        <div className="border-b-2 border-green-500 flex justify-between items-center w-3/5 ml-8 my-4">
          <p className="font-bold">SIZE</p> <span>-</span>
        </div>
        <div className="ml-8 flex justify-between w-1/2">
          <p>4XL</p><p>3XL</p><p>2XL</p><p>1XL</p>
        </div>
        <div className="ml-8 flex justify-between w-1/2">
          <p>XL</p><p>L</p><p>M</p><p>S</p><p>XS</p>
        </div>
      </div>
      <div>
        <div className="border-b-2 border-green-500 flex justify-between items-center w-3/5 ml-8 my-4">
          <p className="font-bold">COLOR</p> <span>-</span>
        </div>
        <div className="flex ml-8 w-1/2 justify-between">
          <div className="h-4 w-4 rounded-full bg-red-700"></div>
          <div className="h-4 w-4 rounded-full bg-black"></div>
          <div className="h-4 w-4 rounded-full bg-green-700"></div>
          <div className="h-4 w-4 rounded-full bg-purple-700"></div>
          <div className="h-4 w-4 rounded-full bg-orange-700"></div>
          <div className="h-4 w-4 rounded-full bg-blue-700"></div>
        </div>
      </div>
      <button className="bg-blue-700 h-8 w-32 ml-20 mt-16 rounded-lg">RESET</button>
    </div>
  );
};

export default LeftBar;
 
