import "./app.css";
import {sum} from './math.js';
import pome from "./pome1.jpg";
console.log(sum(1,2));
// document.body.append("<image src='./포메1.jpg'/>");
document.addEventListener('DOMContentLoaded', ()=>{
    document.body.innerHTML=`<img src=${pome}/>`
})
console.log(process.env.NODE_ENV);
console.log(TWO);
console.log(THREE);
console.log(api.one);
