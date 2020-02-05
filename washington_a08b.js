/*
Timothy Washington
washington_a08b.js
INFO 2124 - Javascript I
Thoendel
Creation date: Feb 5, 2020
*/
/* WRITE YOUR SOLUTION BETWEEN THIS LINE */

const MathUtility={//does
    getAreaOfCircle:function(rad){
        return (Math.PI*Math.pow(rad,2));//method for circle area
    },
    getAreaOfSquare:function(len){
        return Math.pow(len,2);//method for square area
    },
    getAreaOfTriangle:function(len,hei){
        return (len*hei)/2;//method for triangle area
    }
};

/* AND THIS LINE */

//Test code
const outMsg = 
`
The area of a circle that is has a radius of 5 units is ${MathUtility.getAreaOfCircle(5)} units.
The area of a square whose side measures 13 units is ${MathUtility.getAreaOfSquare(13)} units.
The area of a triangle with a base of 3 units and height of 2 units is ${MathUtility.getAreaOfTriangle(3, 2)} units.

`
console.log(outMsg);
