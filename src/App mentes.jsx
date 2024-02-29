import React from "react";
import Fogyas from "./komponensek/fogyas";
import Tomegnoveles from "./komponensek/tomegnoveles";
import Fooldal from "./komponensek/fooldal";
import { useState } from "react";
import "./App.css";
import Lab from "./komponensek/lab";
import Navigacio from "./komponensek/navigacio";
import Suly from "./komponensek/adatok/suly";

function App() {
  // müködéshez kapcsolodó kodok/számítások
  const [kezdoOldal, kezdooldalbeallitas] = useState("Fooldal");

  function Szalkasitas() {
    kezdooldalbeallitas("Fogyas");
  }

  function Tomegeles() {
    kezdooldalbeallitas("Tomegnoveles");
  }

  function Fooldalra() {
    kezdooldalbeallitas("Fooldal");
  }

  let suly;
  let magassagcmben;
  let kor;

  function ferfiszukseglet() {
    return (ferfikaloriaszukseglet =
      10 * suly + 6.25 * magassagcmben - 5 * kor + 5);
  }

  function noiszukseglet() {
    return (noikaloriaszukseglet =
      10 * suly + 6.25 * magassagcmben - 5 * kor - 161);
  }

  /*
 Mifflin-St Jeor Equation:
For men:
BMR = 10W + 6.25H - 5A + 5
For women:
BMR = 10W + 6.25H - 5A - 161

W is body weight in kg
H is body height in cm
A is age
F is body fat in percentage 


szukseglet = 10*suly+6.25*magassagcmben-5*kor-nem
. */

  return (
    <div className=" bg-black">
      {/* komponensek hivasa gombnyomás szerint */}

      <div className="flex flex-col min-h-screen">
        {/*Navigáció */}
        <div className=" text-white py-4">
          <Navigacio />
        </div>

        {/*Fő komponens */}
        <div className="flex-1">
          <div className="">
            {kezdoOldal === "Fooldal" && <Fooldal />}
            {kezdoOldal === "Fogyas" && <Fogyas />}
            {kezdoOldal === "Tomegnoveles" && <Tomegnoveles />}
          </div>

          {/* gombok hivasa oldal szerint*/}

          {/* ha NEM a fooldalon vagyunk jelenjen meg a fooldal gomb*/}
          <div className="text-center ">
            {kezdoOldal !== "Fooldal" && (
              <button
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 
       focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:ring-white hover:ring-2"
                onClick={Fooldalra}
              >
                Fooldalra
              </button>
            )}
          </div>

          {/* ha  a fooldalon vagyunk jelenjen meg a szalkasítas és tömegelés gomb*/}
          <div className="text-center">
            {kezdoOldal === "Fooldal" && (
              <div className="text-center">
                <button
                  className=" h-50 text-center  hover:ring-white hover:ring-2 overflow-hidden mr-4 rounded-full"
                  onClick={Szalkasitas}
                >
                  Fogyás{" "}
                  <img
                    src="./icons/karcsu feher.png"
                    className="text-white max-w-36 bg-transparent"
                  ></img>
                </button>

                <button
                  className="h-50 hover:ring-white hover:ring-2   text-center  overflow-hidden ml-4 rounded-full"
                  onClick={Tomegeles}
                >
                  Tömegelés{" "}
                  <img
                    src="./icons/izom feher.png"
                    className="text-white bg-transparent max-w-36 h-50 "
                  ></img>
                </button>
              </div>
            )}
          </div>
        </div>

        {/*Lábrész */}
        <div className=" text-white py-4">
          <Lab />
        </div>
      </div>
    </div>
  );
}

export default App;
