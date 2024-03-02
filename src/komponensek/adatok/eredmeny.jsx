import React from "react";



function Eredmeny(props) {
    const { suly, nem, magassag, kor,feladat,tevekenyseg,cel } = props; // Az adatok destructuring segítségével





    let kaloria;
if (nem === "no") {
    kaloria = Math.floor((10 * suly + 6.25 * magassag - 5 * kor + 5)*tevekenyseg+feladat);
} else {
    kaloria = Math.floor((10 * suly + 6.25 * magassag - 5 * kor - 161)*tevekenyseg+feladat);
}



let celszoveg=`A celod: ${cel}`
let szuksegeskaloria = `Szükséges kalória: ${kaloria}`;



    return(
       

       
       <div>     

<div className=" max-w-sm m-auto  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
<h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{celszoveg}</h5>
<div className="flex items-baseline text-gray-900 dark:text-white">
<h3>{szuksegeskaloria}</h3>
</div>
<ul role="list" className="space-y-5 my-7">
<li className="flex items-center">
<svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<h2>teszt proba $$$teszt $$proba##&@@</h2>
<h2>porkutteszta nokedli rantotthus szalmakrumpli csirkemellsalata fott tojas </h2>
</li>
</ul>
</div>

<div className="text-center pt-14">
<button type="button" className="text-white-auto bg-gradient-to-r from-blue-500 via-blue-600
 to-blue-700 hover:bg-gradient-to-br focus:ring-4
 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg 
 text-sm px-5 py-2.5 text-center me-2 mb-2 w-1/2 ">ez itt egy Kék gomb amire ha rákattintasz nem történik semmi</button>
</div>

</div>       
    )
}

export default Eredmeny;