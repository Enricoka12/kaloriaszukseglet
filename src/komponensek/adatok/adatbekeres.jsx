import React from "react";
import { useState } from "react";
import Kor from "./kor"
import Suly from "./suly";
import Magassag from "./magassag"
import Nem from "./nem"

function Adatbekeres() {

const [aktivoldal,setaktivoldal] = useState(1);

function kovetkezooldal() {
    setaktivoldal(aktivoldal+1)
}

function elozooldal() {
    setaktivoldal(aktivoldal-1)
}

const [nem,setnem] = useState();

function nembeallitas() {
    setnem ="";
}

const [kor,setkor] = useState();

function korbeallitas() {
    setkor ="";
}

const [magassag,setmagassag] = useState();

function magassagbeallitas() {
    setmagassag ="";
}

const [suly,setsuly] = useState();

function sulybeallitas() {
    setsuly ="";
}

const [nemVisible, setNemVisible] = useState(false);
const [korVisible, setKorVisible] = useState(false);
const [magassagVisible, setMagassagVisible] = useState(false);
const [sulyVisible, setSulyVisible] = useState(false);




    return (

        <div>

        
        {aktivoldal === 1 ? <Nem elorevaltas={kovetkezooldal} hatravaltas={elozooldal} /> : null}

        {aktivoldal === 2 ? <Kor elorevaltas={kovetkezooldal} hatravaltas={elozooldal} /> : null}

        {aktivoldal === 3 ? <Magassag elorevaltas={kovetkezooldal} hatravaltas={elozooldal} /> : null}

        {aktivoldal === 4 ? <Suly elorevaltas={kovetkezooldal} hatravaltas={elozooldal} /> : null}
        



        



    </div>


    )
}

export default Adatbekeres;