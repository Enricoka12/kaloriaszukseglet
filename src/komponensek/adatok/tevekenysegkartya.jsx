import React from "react";


function Tevekenysegkartya(props) {
    return (
        <div>


<div className="max-w-sm  m-auto  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div>
        <h5 className="mb-2 text-extrabold text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.nev}</h5>
        <hr/>
        <h4 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">   {props.szoveg1}                 </h4>
    </div>
    <hr/>
    <h3 className="mb-3 font-bold  text-xl text-gray-700 dark:text-gray-400">{props.szoveg2}</h3>
    <hr/>
    <h3 className="mb-3 font-bold  text-xl text-gray-700 dark:text-gray-400">{props.szoveg3}</h3>
 
    <h3 className="mb-3 font-bold  text-xl text-gray-700 dark:text-gray-400">{props.szoveg4}</h3>
    <button onClick={props.kivalasztas} type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br
     focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Kiválasztás
        </button>
 
</div>

















</div>
    )
}
export default Tevekenysegkartya;