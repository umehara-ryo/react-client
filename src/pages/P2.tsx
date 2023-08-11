import React from "react";
import Student from "../model/Student";
import P1 from "./P1";

export default function P2({students} : {students : Student[]}) {

   // const array = [1, 2, 3];


   // const map = array.map(e => <p key={e}>{e}</p>);

    //return <React.Fragment>{map}</React.Fragment>;
const map = students.map(s => <P1 student={s} key={s.id}></P1>);


    return <>{map}</>;
}