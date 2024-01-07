import React from "react";
let Generics = () => {
    let score: Array<number> = [];
    let nameArray: Array<string> = [];


    // arrow function syntax of generics
    const arrFun = <T,>(val : T): T => {
        return val
    }

    console.log(arrFun("sdhfab"));

    interface User {
        name: string,
        email: string,
        password : string
    }
    function temp<T>(val : T) : T {
        return val;
    }


    interface DB {
        connectionUrl: string,
        port: number,
    }
    function fun2<T>(val1: T, val2: DB) :  object{
        return {val1,val2}
    }

    console.log(fun2(443, { connectionUrl:"http://localhost",port:80}));

    // console.log(temp({ name: "Alim", email: "sh", password:"shsd"}))

    
    return (
        <div>
            sdhs
        </div>
    )
}



export default Generics

