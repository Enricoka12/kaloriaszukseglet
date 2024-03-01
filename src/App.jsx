import React from "react";
import Fooldal from "./komponensek/fooldal";
import { useState } from "react";
import "./App.css";
import Lab from "./komponensek/lab";
import Navigacio from "./komponensek/navigacio";
import Kartya from "./komponensek/kartya";
import Adatbekeres from "./komponensek/adatok/adatbekeres";

function App() {
  // müködéshez kapcsolodó kodok/számítások

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

  const [kezdoOldal, kezdooldalbeallitas] = useState("Fooldal");

  const [kartyakLathatoak, setKartyakLathatoak] = useState(true);

  const [ujKomponensLathato, setUjKomponensLathato] = useState(false);

  const Szalkasitas = () => {
    setKartyakLathatoak(false); // Az összes kártya elrejtése
    setUjKomponensLathato(true); // Az új komponens megjelenítése
    setmutatottOldal("Szalkasitas");
  };

  const Tomegeles = () => {
    setKartyakLathatoak(false); // Az összes kártya elrejtése
    setUjKomponensLathato(true);
    setmutatottOldal("Tomegnoveles");
  };

  const Szintentartas = () => {
    setKartyakLathatoak(false); // Az összes kártya elrejtése
    setUjKomponensLathato(true);
    setmutatottOldal("Szintentartas");
  };

  const Fogyas = () => {
    setKartyakLathatoak(false); // Az összes kártya elrejtése
    setUjKomponensLathato(true);
    setmutatottOldal("Fogyas");
  };

  const Haza = () => {
    setKartyakLathatoak(true); // Az összes kártya elrejtése
    setUjKomponensLathato(false); // Az új komponens megjelenítése
  };

  const [mutatottOldal, setmutatottOldal] = useState();

  return (
    <div className=" bg-black">
      {/* komponensek hivasa gombnyomás szerint */}

      <div className="flex flex-col min-h-screen">

        
        {/*Navigáció */}
        <div className=" text-white py-4">
          <Navigacio onClick={Haza} />
        </div>


        {/*Fő komponens */}
        <div className="flex-1">
          <Fooldal className="sm:mx-4" />

          {/* Az új komponens megjelenítése */}
          {ujKomponensLathato && mutatottOldal === "Fogyas" && <Adatbekeres />}

          {/* Az új komponens megjelenítése */}
          {ujKomponensLathato && mutatottOldal === "Szalkasitas" && 
            <Adatbekeres />
          }

          {/* Az új komponens megjelenítése */}
          {ujKomponensLathato && mutatottOldal === "Tomegnoveles" && 
            <Adatbekeres />
          }

          {/* Az új komponens megjelenítése */}
          {ujKomponensLathato && mutatottOldal === "Szintentartas" && 
            <Adatbekeres />
          }

          {kartyakLathatoak && (
            <div className="kartyak container mx-auto">
              <div className="grid mx-auto gap-2 p-20 sm:p-0  md:gap-4  sm:grid-cols-2  md:grid-cols-2  xl:grid-cols-4 ">
                <Kartya
                  tervnev="Fogyni szeretnék('Gyorsan')"
                  tuladonsag1="Nagy mennyiségű Testzsirt fogsz veszíteni"
                  tulajdonsag2="Magas fehérje mennyiség"
                  tulajdonsag3="Alacsony szénhidrát mennyiség"
                  tulajdonsag4="Magas zsír mennyiség"
                  onClick={Fogyas}
                />

                <Kartya
                  tervnev="Szálkásítani szeretnék"
                  tuladonsag1="Megtartod az izomtömeged,és testzsírt veszítesz."
                  tulajdonsag2="Magas fehérje mennyiség"
                  tulajdonsag3="Alacsony szénhidrát mennyiség"
                  tulajdonsag4="Közepes zsír mennyiség"
                  onClick={Szalkasitas}
                />

                <Kartya
                  tervnev="Szintentartást szeretnék"
                  tuladonsag1="Kissebb izömtömeget építesz,miközben testzsírt adsz le"
                  tulajdonsag2="Közepes fehérje mennyiség"
                  tulajdonsag3="Közepes szénhidrát mennyiség"
                  tulajdonsag4="Közepes zsír mennyiség"
                  onClick={Szintentartas}
                />

                <Kartya
                  tervnev="Tömegelni szeretnék"
                  tuladonsag1="Nagyobb mennyiségű izomtömeget epítesz,és testzsírt szedsz fel"
                  tulajdonsag2="Közepes fehérje mennyiség"
                  tulajdonsag3="Közepes szénhidrát mennyiség"
                  tulajdonsag4="Alacsony zsír mennyiség."
                  onClick={Tomegeles}
                />
              </div>
            </div>
          )}
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
