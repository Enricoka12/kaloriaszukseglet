import React from "react";
import Udvozloszoveg from "./komponensek/fooldal";
import { useState } from "react";
import "./App.css";
import Lab from "./komponensek/lab";
import Navigacio from "./komponensek/navigacio";
import Kartya from "./komponensek/kartya";
import Adatbekeres from "./komponensek/adatok/adatbekeres";

function App() {
  // müködéshez kapcsolodó kodok/számítások

  function Fooldalra() {
    kezdooldalbeallitas("Udvozloszoveg");
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

  const Tomegeles2 = () => {
    setKartyakLathatoak(false); // Az összes kártya elrejtése
    setUjKomponensLathato(true);
    setmutatottOldal("Tomegnoveles2");
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

  const fooldalravaltas = () => {
    setKartyakLathatoak(true); // Az összes kártya elrejtése
    setUjKomponensLathato(false); // Az új komponens megjelenítése
  };

  const [mutatottOldal, setmutatottOldal] = useState();

  let fogyas = -500;

  let szalkasitas = -250;

  let szintentertas = 0;

  let tomegeles = 250;

  let tomegeles2 = 500;

  return (
    <div className=" bg-black">
      
      {/* komponensek hivasa gombnyomás szerint */}
      <div className="hatter">
      <div className="flex flex-col min-h-screen">
        {/*Navigáció */}
        <div className=" text-white py-4">
          <Navigacio onClick={Haza} />
        </div>
       
        {/*Fő komponens  ha az ujkomponenslathato akkor ne legyen lathato az udvozloszoveg */}
        <div className="flex-1">
          {ujKomponensLathato ? null : <Udvozloszoveg className="sm:mx-4" />}

          {/* Az új komponens megjelenítése */}
          {
            ujKomponensLathato && mutatottOldal === "Fogyas" && (
              <Adatbekeres cel="fogyas" />
            ) //<--- itt szeretném átadni az adatbekeres komponensnek azt az erteket amit a mutatottOldal felvesz igy helyes?
          }

          {/* Az új komponens megjelenítése */}
          {ujKomponensLathato && mutatottOldal === "Szalkasitas" && (
            <Adatbekeres cel="szalkasitas" />
          )}

          {/* Az új komponens megjelenítése */}
          {ujKomponensLathato && mutatottOldal === "Tomegnoveles" && (
            <Adatbekeres cel="tomegnoveles" />
          )}

          {/* Az új komponens megjelenítése */}
          {ujKomponensLathato && mutatottOldal === "Tomegnoveles2" && (
            <Adatbekeres cel="tomegnoveles2" />
          )}

          {/* Az új komponens megjelenítése */}
          {ujKomponensLathato && mutatottOldal === "Szintentartas" && (
            <Adatbekeres cel="szintentartas" />
          )}

          {kartyakLathatoak && (
            <div className="kartyak container mx-auto">

              <div className="grid mx-auto gap-4 p-5 sm:p-20 sm:gap-6 sm:p-6 md:gap-8  sm:grid-cols-1  md:grid-cols-2  xl:grid-cols-3 ">
                <Kartya
                  tervnev="Fogyni szeretnék('Gyorsan')"
                  tuladonsag1="Nagy mennyiségű Testzsirt fogsz veszíteni"
                  felsorolas1 ="-500 kalóriás deficitben leszel"
                  felsorolas2 ="-Hetente -0.5kg++ "
                  tulajdonsag2="Magas fehérje mennyiség"
                  tulajdonsag3="Alacsony szénhidrát mennyiség"
                  tulajdonsag4="Magas zsír mennyiség"
                  onClick={Fogyas}
                />

                <Kartya
                  tervnev="Szálkásítani szeretnék"
                  tuladonsag1="Megtartod az izomtömeged,és testzsírt veszítesz."
                  felsorolas1 ="-250 vagy -300 kalóriás deficitben leszel"
                  felsorolas2 ="-Hetente -0.3kg-0.5kg "
                  tulajdonsag2="Magas fehérje mennyiség"
                  tulajdonsag3="Alacsony szénhidrát mennyiség"
                  tulajdonsag4="Közepes zsír mennyiség"
                  onClick={Szalkasitas}
                />

                <Kartya
                  tervnev="Szintentartást szeretnék"
                  tuladonsag1="Izmot építesz,miközben testzsírt adsz le"
                  felsorolas1 ="Kalória egyensúlyban leszel"
                  felsorolas2 ="-Hetente -0.1kg-0.2kg "
                  tulajdonsag2="Közepes fehérje mennyiség"
                  tulajdonsag3="Közepes szénhidrát mennyiség"
                  tulajdonsag4="Közepes zsír mennyiség"
                  onClick={Szintentartas}
                />

                <Kartya
                  tervnev="Tömegelni szeretnék lassan"
                  tuladonsag1=" Közepes izomtömeget epítesz,és kevés testzsírt szedsz fel(lassú folyamat)"
                  felsorolas1 ="-250 vagy -300 kalória plusszban leszel"
                  felsorolas2 ="-Hetente +0.3kg-0.5kg "
                  tulajdonsag2="Közepes fehérje mennyiség"
                  tulajdonsag3="Közepes szénhidrát mennyiség"
                  tulajdonsag4="Alacsony zsír mennyiség."
                  onClick={Tomegeles}
                />

                <Kartya
                  tervnev="Tömegelni szeretnék"
                  tuladonsag1="Nagyobb mennyiségű izomtömeget epítesz,és közepes testzsírt szedsz fel"
                  felsorolas1 ="-500 kalória plusszban leszel"
                  felsorolas2 ="-Hetente +0.5kg++ "
                  tulajdonsag2="Magas fehérje mennyiség"
                  tulajdonsag3="Magas szénhidrát mennyiség"
                  tulajdonsag4="Közepes zsír mennyiség."
                  onClick={Tomegeles2}
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
    </div>
  );
}

export default App;
