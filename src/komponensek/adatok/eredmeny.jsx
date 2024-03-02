import React from "react";

function Eredmeny(props) {
  const { suly, nem, magassag, kor, feladat, tevekenyseg, cel } = props; // Az adatok destructuring segítségével

  let kaloria;
  let eleresiut;
  if (nem === "no") {
    kaloria = Math.floor(
      (10 * suly + 6.25 * magassag - 5 * kor + 5) * tevekenyseg + feladat
    );
    eleresiut = "../../icons/no2.png"
  } else {
    kaloria = Math.floor(
      (10 * suly + 6.25 * magassag - 5 * kor - 161) * tevekenyseg + feladat
    );
    eleresiut = "../../icons/ferfi2.png"
  }



  //Makró számítások:
  /*
1g fehérje 4kal
1g szénhidrát 8kal
1g zsir 8 kal

*/

  let feherjekaloria;
  let zsirkaloria;
  let szenhidratkaloria;

  let feherjegrammban;
  let szenhidratgrammban;
  let zsirgrammban;
  let szoveg;
  if (cel === "fogyas") {
    szoveg = "Fogyás";
    feherjegrammban = suly * 2;
    feherjekaloria = feherjegrammban * 4;
    zsirkaloria = (kaloria - feherjekaloria) * 0.4;
    zsirgrammban = zsirkaloria / 9; // 1g zsír ≈ 9 kalória
    szenhidratkaloria = kaloria - zsirkaloria - feherjekaloria;
    szenhidratgrammban = szenhidratkaloria / 4; // 1g szénhidrát ≈ 4 kalória
  } else if (cel === "szalkasitas") {
    szoveg = "Szálkásítás";
    feherjegrammban = suly * 2;
    feherjekaloria = feherjegrammban * 4;
    zsirkaloria = (kaloria - feherjekaloria) * 0.4;
    zsirgrammban = zsirkaloria / 9;
    szenhidratkaloria = kaloria - zsirkaloria - feherjekaloria;
    szenhidratgrammban = szenhidratkaloria / 4;
  } else if (cel === "szintentartas") {
    szoveg = "Szintentartás";
    feherjegrammban = suly * 1.8;
    feherjekaloria = feherjegrammban * 4;
    zsirkaloria = (kaloria - feherjekaloria) * 0.4;
    zsirgrammban = zsirkaloria / 9;
    szenhidratkaloria = kaloria - zsirkaloria - feherjekaloria;
    szenhidratgrammban = szenhidratkaloria / 4;
  } else if (cel === "tomegeles") {
    szoveg = "Tömegelés(lassan)";
    feherjegrammban = suly * 1.8;
    feherjekaloria = feherjegrammban * 4;
    zsirkaloria = (kaloria - feherjekaloria) * 0.25;
    zsirgrammban = zsirkaloria / 9;
    szenhidratkaloria = kaloria - zsirkaloria - feherjekaloria;
    szenhidratgrammban = szenhidratkaloria / 4;
  } else if (cel === "tomegeles2") {
    szoveg = "Tömegelés";
    feherjegrammban = suly * 2;
    feherjekaloria = feherjegrammban * 4;
    zsirkaloria = (kaloria - feherjekaloria) * 0.3;
    zsirgrammban = zsirkaloria / 9;
    szenhidratkaloria = kaloria - zsirkaloria - feherjekaloria;
    szenhidratgrammban = szenhidratkaloria / 4;
  }

  return (
    <div className="">



      <div className="text-zinc-300  uppercase max-w-sm m-auto bg-gradient-to-r from-zinc-800 to-zinc-500
  p-4   rounded-lg shadow-[inset_0px_0px_66px_38px_rgba(51,_56,_84,_0.25)] sm:p-8 dark:bg-gray-800 dark:border-gray-700  ">
<div className="">

        <div>
          <img className="m-auto" src={eleresiut}/>
        </div>

        <h2 className=" text-center text-4xl pt-2 bg-gradient-to-bl from-zinc-600 via-zinc-200 to-zinc-500 bg-clip-text text-transparent">A célod:</h2>
        <h2 className="text-center text-4xl text-extrabold pt-2 bg-gradient-to-bl from-zinc-600 via-zinc-200 to-zinc-500 bg-clip-text text-transparent">{szoveg}</h2>
        <div className="flex  dark:text-white pt-2">
          <h3 className=" text-3xl text-center pt-2 bg-gradient-to-bl from-zinc-600 via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            Szükséges kalória: <span className="text-5xl underline underline-offset-4 decoration-white">{kaloria}</span> 
          </h3>
        
        </div>

        <div className="pt-4  text-center">

          <div className=" bg-gradient-to-bl from-zinc-800 to-stone-600  outline outline-offset outline-neutral-500 rounded m-4 gap-2">
            <p className="pt-1 grid grid-cols-3  sm:grid sm:grid-cols-3 bg-gradient-to-bl from-zinc-600 via-zinc-200 to-zinc-500 bg-clip-text text-transparent  ">
              Fehérje: <span className="ml-1 sm:ml-0">{Math.floor(feherjegrammban)} Gramm</span> <img className="ml-8  inline-flex w-8 h-8" src="../../icons/feherje.png"/>
            </p>
          </div>
      
          <div className="bg-gradient-to-bl from-zinc-800 to-stone-600 outline outline-offset outline-neutral-500 rounded m-4 gap-2">
            <p className="pt-1 ml-2  grid grid-cols-3 sm:ml-0 sm:grid sm:grid-cols-3 bg-gradient-to-bl from-zinc-600 via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              Szénhidrát: <span className="ml-0 sm:ml-0">{Math.floor(szenhidratgrammban)} Gramm</span>  <img className="ml-8  inline-flex w-8 h-8" src="../../icons/szenhidrat.png"/>
            </p>
          </div>
         
          <div className="bg-gradient-to-bl from-zinc-800 to-stone-600 outline outline-offset outline-neutral-500 rounded m-4 gap-2">
            <p className="pt-1 grid grid-cols-3 sm:grid sm:grid-cols-3  bg-gradient-to-bl from-zinc-600 via-zinc-200 to-zinc-500 bg-clip-text text-transparent ">
              Zsir: <span className="ml-2 sm:ml-0">{Math.floor(zsirgrammban)} Gramm</span>  <img className="ml-8  inline-flex w-8 h-8" src="../../icons/zsir.png"/>
            </p>
          </div>
        </div>


      </div>
      </div>


      <div className="text-center pt-14">
        <a href="/"><button
          type="button"
          className="text-white-auto bg-gradient-to-r from-blue-500 via-blue-600
 to-blue-700 hover:bg-gradient-to-br focus:ring-4
 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg 
 text-sm px-5 py-2.5 text-center me-2 mb-2 w-1/2 "
        >
          Főoldalra
        </button></a>
      </div>
    </div>
  );
}

export default Eredmeny;
