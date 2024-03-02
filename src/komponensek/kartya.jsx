import React from "react";


function Kartya(props) {
    return (


<div className="kartya  shadow-amber-500/40 hover:shadow-amber-50-500/40"  >
  
            <div className=" w-25  p-2 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))]  from-orange-900 via-amber-100 to-orange-900 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
             <div className="shadow-[0px_11px_12px_10px_#4a5568,20px_22px_14px_3px_#4a5568,inset_-16px_-16px_21px_3px_#fefcbf]">
              <h5 className="mb-4 text-xl text-center  text-gray-500 dark:text-gray-400 font-extrabold ">
                {props.tervnev}
              </h5>

              <hr/>
              
              <ul role="list" className="space-y-5  my-7">
              
                <li className="flex items-center justify-center">
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  <h2 className="font-extrabold text-center" > {props.tuladonsag1}  </h2>  
                  </span>
                </li>
                <hr/>
             
              


                <li className="flex justify-center">
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    {props.tulajdonsag2}
                  </span> <img className="w-10 h-10 pl-2" src="../../icons/feherje.png"></img>
                </li>

                <hr/>

                <li className="flex justify-center">
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    {props.tulajdonsag3}
                  </span> <img className="w-10 h-10 pl-2" src="../../icons/szenhidrat.png"></img>
                </li>


                <hr/>

                <li className="flex justify-center">
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    {props.tulajdonsag4}
                  </span> <img className="w-10 h-10 pl-2" src="../../icons/zsir.png"></img>
                </li>

              </ul>
              </div>
              <button
                type="button"
                onClick={props.onClick}
                className= "font-extrabold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
              >
                Tovább
              </button>
            </div>
          </div>
          )
}


export default Kartya;