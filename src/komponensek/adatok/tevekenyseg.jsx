import React, { useState } from "react";
import Tevekenysegkartya from "./tevekenysegkartya";

function Tevekenyseg(props) {
  const [tevekenyseg, settevekenyseg] = useState("");



function nagyonkonnyu() {
    settevekenyseg("1.2")
}

function konnyu() {
    settevekenyseg("1.375")
}

function kozepes() {
    settevekenyseg("1.55")
}

function nehez() {
    settevekenyseg("1.725")
}

function nagyonnehez() {
    settevekenyseg("1.9")
}


  return (
    <div>
      <div className="m-auto gap-5 text-center  ">

        <div className="m-auto grid gap-3 grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 gap-4">
          {/* Tevékenység kártya */}

          <Tevekenysegkartya
            nev="Ülőmunkát végzek"
            szoveg1="Kevesebb mint 5000 lépésem van naponta."
            szoveg2="Nem edzek"
            //ez egy onclick funkcio propsként!!
            kivalasztas={nagyonkonnyu}
          />

          <Tevekenysegkartya
            nev="Könnyű fizikai munkát végzek"
            szoveg1="Kevesebb mint 5000-7000 lépésem van naponta."
            szoveg2="Hetente 1-3x edzek"
             //ez egy onclick funkcio propsként!!
             kivalasztas={konnyu}
          />

          <Tevekenysegkartya
            nev="Fizikai munkát végzek"
            szoveg1="Kevesebb mint 7000-8000 lépésem van naponta."
            szoveg2="Hetente 3-5x edzek"
             //ez egy onclick funkcio propsként!!
             kivalasztas={kozepes}
          />

          <Tevekenysegkartya
            nev="Fizikai munkát végzek"
            szoveg1=" 10000 lépésem van naponta."
            szoveg2="Hetente 6-7x edzek"
             //ez egy onclick funkcio propsként!!
             kivalasztas={nehez}
          />

          <Tevekenysegkartya
            nev="Nehéz fizikai munkát végzek"
            szoveg1="Több mint 10000 lépésem van naponta."
            szoveg2="Hetente 6-7x edzek"
             //ez egy onclick funkcio propsként!!
             kivalasztas={nagyonnehez}
          />
        </div>
        </div>
        {/* GOMBOK*/}
        <div className="text-center m-5 flex justify-center">
          <button
            onClick={props.hatravaltas}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Vissza
            </span>
          </button>

          <button
            onClick={() => {
              props.elorevaltas();
              props.kivalasztas(tevekenyseg); // A tevekenyseg  átadása az Adatbekeres szülő komponensnek
            }}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Tovább
            </span>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </button>
        </div>
      
    </div>
  );
}

export default Tevekenyseg;