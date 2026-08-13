//strings
let str="swanandi";
console.log(str.length);
console.log(str[0],str[6]);  

//template literal
let specialstr=`this is a template literal`;
console.log(specialstr);
console.log(typeof specialstr);

let obj={
    item:"pen",
    price:40,
};
console.log("the cost of",obj.item,"is",obj.price,"rupees");
//template literal stytle
console.log(`the cost of ${obj.item} is ${obj.price} rupees`);
console.log(`addition ${1+2+3}`);

//////////////////////////
//////string methods//////
//////////////////////////


 let a="    sanu";
 let b="ranu";
 console.log(a.toUpperCase());
 console.log(a.toLowerCase());
 console.log(a.trim());//removes whitespace
 console.log(b.slice(1,3));
 console.log(a.concat(b));
 console.log(b.charAt(2));
 console.log(b.replace("u","i"));

///practice question///
let name=prompt("eneter full name without space");
let username="@"+name+name.length;
console.log(username);
