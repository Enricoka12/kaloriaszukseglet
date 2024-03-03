import React, { useState } from "react";


function Magassag(props) {

  function kattintas() {

    if (magassag.trim() !== "") {
      // Ha a kor mező nem üres, akkor hívja meg a szülő komponensben lévő tovább lépés funkciót
      props.elorevaltas();
       props.setmagassag(magassag); // A kor állapot átadása az Adatbekeres szülő komponensnek
    } else {
      // Ha a kor mező üres, jelenítsen meg egy hibaüzenetet vagy figyelmeztetést
      console.log("Kérlek írj be valamit a kor mezőbe!");
    }
  }

  const [magassag,setmagassag] = useState("");

  function magassagbeiras(event) {
    setmagassag(event.target.value)
  }

    return (
        <div>
        <label className="block mb-2 md:text-8xl text-6xl font-extrabold  text-white dark:text-white text-center  p-20">
          <h2 className="">Milyen magas vagy?</h2>
        </label>
  
        
      <div className="m-15">
          <form className="max-w-sm mx-auto">
      <label  className="block mb-2 text-sm font-medium text-white dark:text-white">Cm-ben add meg kérlek:</label>
      <input value={magassag} onChange={magassagbeiras} type="number"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="cm" required />
  </form>
  </div>
  
  
  
  <div className="text-center m-5 flex justify-center">
  <button  onClick={props.hatravaltas} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
    </svg>
    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Vissza 
    </span>
  </button>

  <button onClick={() => {
            kattintas(); // A kor állapot átadása az Adatbekeres szülő komponensnek
          }} 
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Tovább
    </span>
    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
    </svg>
  </button>
</div>
      </div>
    )
}

export default Magassag;