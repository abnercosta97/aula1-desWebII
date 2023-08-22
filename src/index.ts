//console.log("Hello World!");

const pow = function(a:number, b:number):number {
    return a ** b;
}

type Tipo = (a:number, b:number) => number;

const r:number = pow(2,3);
const f:Tipo = pow;
