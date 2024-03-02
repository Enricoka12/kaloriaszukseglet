import React from "react";



function Eredmeny(props) {
    const { suly, nem, magassag, kor,feladat,tevekenyseg,cel } = props; // Az adatok destructuring segítségével








    let kaloria;
if (nem === "no") {
    kaloria = Math.floor((10 * suly + 6.25 * magassag - 5 * kor + 5)*tevekenyseg+feladat);
} else {
    kaloria = Math.floor((10 * suly + 6.25 * magassag - 5 * kor - 161)*tevekenyseg+feladat);
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

if (cel === "fogyas") {
    feherjegrammban = suly * 2;
    feherjekaloria = feherjegrammban * 4;
    zsirkaloria = (kaloria - feherjekaloria) * 0.4;
    zsirgrammban = zsirkaloria / 9; // 1g zsír ≈ 9 kalória
    szenhidratkaloria = kaloria - zsirkaloria - feherjekaloria;
    szenhidratgrammban = szenhidratkaloria / 4; // 1g szénhidrát ≈ 4 kalória
} else if (cel === "szalkasitas") {
    feherjegrammban = suly * 2;
    feherjekaloria = feherjegrammban * 4;
    zsirkaloria = (kaloria - feherjekaloria) * 0.4;
    zsirgrammban = zsirkaloria / 9;
    szenhidratkaloria = kaloria - zsirkaloria - feherjekaloria;
    szenhidratgrammban = szenhidratkaloria / 4;
} else if (cel === "szintentartas") {
    feherjegrammban = suly * 1.8;
    feherjekaloria = feherjegrammban * 4;
    zsirkaloria = (kaloria - feherjekaloria) * 0.4;
    zsirgrammban = zsirkaloria / 9;
    szenhidratkaloria = kaloria - zsirkaloria - feherjekaloria;
    szenhidratgrammban = szenhidratkaloria / 4;
} else if (cel === "tomegeles") {
    feherjegrammban = suly * 1.8;
    feherjekaloria = feherjegrammban * 4;
    zsirkaloria = (kaloria - feherjekaloria) * 0.25;
    zsirgrammban = zsirkaloria / 9;
    szenhidratkaloria = kaloria - zsirkaloria - feherjekaloria;
    szenhidratgrammban = szenhidratkaloria / 4;
} else if (cel === "tomegeles2") {
    feherjegrammban = suly * 2;
    feherjekaloria = feherjegrammban * 4;
    zsirkaloria = (kaloria - feherjekaloria) * 0.3;
    zsirgrammban = zsirkaloria / 9;
    szenhidratkaloria = kaloria - zsirkaloria - feherjekaloria;
    szenhidratgrammban = szenhidratkaloria / 4;
}











    return(
       

       
       <div>     

<div className=" max-w-sm m-auto  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
<h2 className="text-center text-4xl pt-2">A kiválaszott terv:</h2>
<h2 className="text-center text-4xl text-extrabold pt-2" >{cel}</h2>
<div className="flex items-baseline text-gray-900 dark:text-white pt-2">
<h3 className="text-4xl text-center pt-2">A szükséges kalória: <span>{kaloria}</span> Kalória</h3>
<hr/>
</div>

<div className="pt-4 text-center">
<p className="pt-3">Fehérje: <span>{Math.floor(feherjegrammban)} Gramm</span></p>
<hr/>
<p className="pt-3" >Szénhidrát: <span>{Math.floor(szenhidratgrammban)} Gramm</span></p>
<hr/>
<p className="pt-3">Zsir: <span>{Math.floor(zsirgrammban)} Gramm</span></p>
</div>
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