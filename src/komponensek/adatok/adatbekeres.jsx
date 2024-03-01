import React from "react";
import { useState } from "react";
import Kor from "./kor"
import Suly from "./suly";
import Magassag from "./magassag"
import Nem from "./nem"
import Eredmeny from "./eredmeny";

function Adatbekeres(props) {


  //Oldalválasztás -->  

const [aktivoldal,setaktivoldal] = useState(1);

function kovetkezooldal() {
    setaktivoldal(aktivoldal+1)
}

function elozooldal() {
    setaktivoldal(aktivoldal-1)
}
  // <-- Oldalválasztás  




  //adatok kinyerése
const [nem,setnem] = useState("");



const [kor,setkor] = useState("");



const [magassag,setmagassag] = useState("");



const [suly,setsuly] = useState("");

let cel = props.cel
console.log(cel)

let feladat;

if (cel === "fogyas") {
  feladat = -500
} else if ( cel ==="szalkasitas") {
  feladat = -250
} else if ( cel ==="szintentartas") {
  feladat = 0
} else if ( cel ==="tomegeles") {
  feladat = 250
} else if (cel ==="tomegeles2") {
  feladat = 500
}





// Ezzel a függvénnyel kinyerem a Nem komponensben kiválasztott nem értékét!


function adatkinyeresnem(nem) { //uj nevet adok amivel itt ebben a komponensben kezelem,és kinyerem a propsként tárolt adatot.
  setnem(nem);    // a gyermek komponensben lévő funkció nevet hivom meg,és kérem a propsként tárolt adatot!
}

// Ezzel a függvénnyel kinyerem a Kor komponensben kiválasztott Kor értékét!


function adatkinyeresKor(kor) { //uj nevet adok amivel itt ebben a komponensben kezelem,és kinyerem a propsként tárolt adatot.
  setkor(kor);    // a gyermek komponensben lévő funkció nevet hivom meg,és kérem a propsként tárolt adatot!
}




// Ezzel a függvénnyel kinyerem a magassag komponensben kiválasztott magassag értékét!


function adatkinyeresMagassag(magassag) { //uj nevet adok amivel itt ebben a komponensben kezelem,és kinyerem a propsként tárolt adatot.
  setmagassag(magassag);    // a gyermek komponensben lévő funkció nevet hivom meg,és kérem a propsként tárolt adatot!
}

// Ezzel a függvénnyel kinyerem a suly komponensben kiválasztott suly értékét!


function adatkinyeresSuly(suly) { //uj nevet adok amivel itt ebben a komponensben kezelem,és kinyerem a propsként tárolt adatot.
  setsuly(suly);    // a gyermek komponensben lévő funkció nevet hivom meg,és kérem a propsként tárolt adatot!
}




//adatok kinyerése

console.log(nem)
console.log(kor)
console.log(magassag)
console.log(suly)



    return (

        <div>

        
        {aktivoldal === 1 ? <Nem elorevaltas={kovetkezooldal} hatravaltas={elozooldal} setvalasztottnem={adatkinyeresnem} /> : null}

        {aktivoldal === 2 ? <Kor elorevaltas={kovetkezooldal} hatravaltas={elozooldal}  setkor={adatkinyeresKor} /> : null}

        {aktivoldal === 3 ? <Magassag elorevaltas={kovetkezooldal} hatravaltas={elozooldal} setmagassag={adatkinyeresMagassag} /> : null}

        {aktivoldal === 4 ? <Suly elorevaltas={kovetkezooldal} hatravaltas={elozooldal} setsuly={adatkinyeresSuly} /> : null}
        

        {aktivoldal === 5 ? <Eredmeny hatravaltas={elozooldal} suly={suly} kor={kor} magassag={magassag}  nem={nem} /> : null}

        



    </div>


    )
}

export default Adatbekeres;