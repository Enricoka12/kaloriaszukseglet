import React from "react";

function Navigacio(props) {
    return (
        <div>


  <nav className="">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a onClick={props.onClick} href="https://borosenrico.hu" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span  className="self-center text-base font-semibold whitespace-nowrap dark:text-white">Kalóriaszükséglet kalkulátor</span>
    </a>
    </div>
</nav>

        </div>
    )
}

export default Navigacio;