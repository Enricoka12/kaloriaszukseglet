import React, { useState } from "react";

function Nem(props) {




  const [selectedOption, setSelectedOption] = useState(null);
  const [valasztottnem,setvalasztottnem] = useState();

  function handleClick(option) {
    setSelectedOption(option);
    setvalasztottnem(option);
  }

 

 

  return (
    <div>
      <label className="block mb-2 md:text-8xl text-6xl font-extrabold text-white dark:text-white text-center p-20">
        <h2 className="">Válaszd ki a nemed!</h2>
      </label>

      <ul className="grid gap-6 md:grid-cols-2 justify-center">
        <li>
          <input
            type="radio"
            value="ferfi"
            checked={selectedOption === "ferfi"} // Beállítás az ellenőrzött állapotra
            onChange={() => handleClick("ferfi")} // onChange hozzáadása
            className="hidden peer"
            required
          />
          <label
            htmlFor="hosting-small"
            className={`flex items-center justify-center w-full p-5 hover:transform hover:scale-110 ${
              selectedOption === "ferfi" && "relative"
            }`}
            onClick={() => handleClick("ferfi") }
          >
            <div>
              {selectedOption === "ferfi" ? (
                <div>
                  {" "}
                  <h2 className="text-white text-center font-extrabold">
                    Férfi vagyok
                  </h2>
                  <svg
                    className="w-36 h-36 text-white dark:text-white"
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
                      d="m5 12 4.7 4.5 9.3-9"
                    />
                  </svg>
                </div>
              ) : (
                <img
                  className="w-full h-full object-contain"
                  src="../../icons/ferfi2.png"
                  alt="Male"
                />
              )}
            </div>
          </label>
        </li>
        <li>
          <input
            type="radio"
            value="no"
            checked={selectedOption === "no"} // Beállítás az ellenőrzött állapotra
            onChange={() => handleClick("no")} // onChange hozzáadása
            className="hidden peer"
          />
          <label
            htmlFor="hosting-big"
            className={`flex items-center justify-center w-full p-5 hover:transform hover:scale-110 ${
              selectedOption === "no" && "relative"
            }`}
            onClick={() => handleClick("no")}
          >
            <div>
              {selectedOption === "no" ? (
                <div>
                  {" "}
                  <h2 className="text-white text-center font-extrabold">
                    Nő vagyok
                  </h2>
                  <svg
                    className="w-36 h-36 text-white dark:text-white"
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
                      d="m5 12 4.7 4.5 9.3-9"
                    />
                  </svg>
                </div>
              ) : (
                <img
                  className="w-full h-full object-contain"
                  src="../../icons/no2.png"
                  alt="Female"
                />
              )}
            </div>
          </label>
        </li>
      </ul>

      {/* GOMBOK*/}
      <div className="text-center m-5 flex justify-center">
        <button  onClick={props.fooldalravaltas} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
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

        <button onClick={() => {
           props.elorevaltas();
            props.setvalasztottnem(selectedOption); }}
         className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
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

export default Nem;
