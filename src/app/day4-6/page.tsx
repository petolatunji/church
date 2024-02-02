import Link from "next/link";
import React from "react";

const DayOne = () => {
  return (
    <div className="mainCont px-6">
      <div>
        <h1 className="mainTitle">Day Four</h1>
        <div className="ulDiv">
          <ul className="ul">
            <li className="li">Thank God for his mercy that endure forever.</li>
            <li className="li">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, dolor.
            </li>
            <li className="li">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, dolor.
            </li>
            <li className="li">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, dolor.
            </li>
            <li className="li">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, dolor.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="mainTitle">Day Five</h1>
        <div className="ulDiv">
          <ul className="ul">
            <li className="li">Thank God for his mercy that endure forever.</li>
            <li className="li">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, dolor.
            </li>
            <li className="li">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, dolor.
            </li>
            <li className="li">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, dolor.
            </li>
            <li className="li">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, dolor.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="mainTitle">Day Six</h1>
        <div className="ulDiv">
          <ul className="ul">
            <li className="li">Thank God for his mercy that endure forever.</li>
            <li className="li">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, dolor.
            </li>
            <li className="li">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, dolor.
            </li>
            <li className="li">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, dolor.
            </li>
            <li className="li">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, dolor.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col xl:items-center mb-4">
        <h1 className=" my-4 font-bold xl:mb-8 text-justify">
          Click below to go to each day prayer points
        </h1>
        <div className=" flex flex-col gap-y-4 xl:flex-row xl:gap-x-4 items-center">
          <Link href="/" className="link">
            Home
          </Link>
          <Link href="/day1-3" className="link">
            Day 1 to 3
          </Link>
          <Link href="/day7-9" className="link">
            Day 7 to 9
          </Link>
          <Link href="/day10-12" className="link">
            Day 10 to 12
          </Link>
          <Link href="/day13-15" className="link">
            Day 13 to 15
          </Link>
          <Link href="/day16-18" className="link">
            Day 16 to 18
          </Link>
          <Link href="/day19-21" className="link">
            Day 19 to 21
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DayOne;
