import React, { useState } from "react";
import "./fooldal.css";

function Lab() {
  let ev = new Date().getFullYear();

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="">
      <footer className=" rounded-lg shadow m-4">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {ev} <a className="hover:underline hover:underline-offset-8" href="https://borosenrico.hu">Boros Enrico</a>.Minden jog fenntartva.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="https://borosenrico.hu"
                className="hover:underline hover:underline-offset-8   me-4 md:me-6"
              >
                Rólam
              </a>
            </li>

            <li>
              <div className="border-white "></div>

              {/* MODAL */}

              <div className="relative">
                <button
                  onClick={openModal}
                  className="hover:underline hover:underline-offset-8 block text-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  Kapcsolat
                </button>

                {isOpen && (
                  <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white rounded-lg p-8">
                      <div className="text-right">
                        <button
                          onClick={closeModal}
                          className="text-gray-400 text-right hover:text-gray-700 transition duration-150"
                        >
                          <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>

                      <div className=" justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">
                          Hiba esetén vedd fel velem a kapcsolatot:
                        </h2>


                        <div className="text-center text-2xl font-bold">




                          <div className="border rounded-lg border-gray-200 mt-1 grid grid-cols-2 ">
                          <a href="https://www.facebook.com/boros.rico.3"
                           className="flex justify-center text-center items-center"
                          >
                               <img
                              className="w-8 h-8 mr-4 text-center align-middle"
                              src="../icons/facebook.png"
                              alt="Facebook ikon"
                            />
                            </a>

                            <a href="https://www.facebook.com/boros.rico.3"
                           className="flex justify-center text-center items-center"
                          >
                             <span> Facebook</span>
                            </a>
                           
                           
                            
                          </div>


                          <div className="border rounded-lg border-gray-200 mt-1 grid grid-cols-2 justify-items-center ">
                          <a href="https://www.linkedin.com/in/enrico-boros-17a69a25a"
                              className="flex items-center"
                          >
                             <img
                              className="w-8 h-8 mr-4 align-middle"
                              src="../icons/linkedin.png"
                              alt="Linkedin ikon"
                            />
                            </a>
                           
                            <a href="https://www.linkedin.com/in/enrico-boros-17a69a25a"
                              className="flex items-center"
                          >
                             <span> Linkedin </span>
                            </a>


                          </div>
                          <div className="border rounded-lg border-gray-200 mt-1 grid grid-cols-2 justify-items-center">
                            <a
                              href="https://twitter.com/BorosEnrico"
                              className="flex items-center"
                            >
                              <img
                                className="w-9 h-9 mr-4"
                                src="../icons/twitter.png"
                                alt="Twitter ikon"
                              />
                            </a>
                            <a
                              href="https://twitter.com/BorosEnrico"
                              className="flex items-center"
                            >
                              <span>Twitter</span>
                            </a>
                          </div>




                          <div className="border rounded-lg border-gray-200 mt-1 grid grid-cols-2 justify-items-center ">
                            <a href="borose12@hotmail.com"
                            className="flex items-center">
                                <img src="../icons/email.png"
                                className="w-8 h-8 mr-5"
                                alt="Email Ikon" />
                                </a>

                                <a href="borose12@hotmail.com"
                            className="flex items-center">
                               <span> Email </span> 
                                </a>




                          </div>




                          
                        </div>
                      </div>
                      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © {ev} <a className="hover:underline hover:underline-offset-8" href="https://borosenrico.hu">Boros Enrico</a>.Minden jog
                        fenntartva.
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Lab;
