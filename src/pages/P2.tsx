import React from "react";

export default function P2(){

    const array = [1,2,3];


    const map = array.map(e=><p>{e}</p>);
    //return <React.Fragment>{map}</React.Fragment>;
    return <>{map}</>;
}