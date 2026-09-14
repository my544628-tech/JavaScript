let Person1 = {
 firtName : "geele",
 lastName : "salax",
 age : 23,
 town : "Mogadishu",
}

let Person2 ={
 firtName : "da'uud",
 lastName : "faarax",
 age : 26,
 town : "Galkacyo",
}
console.log(Person1.town);
console.log(Person1["town"]);

// console.log(Person2);
for (let key in Person1){
console.log(key + ":" + Person1[key]);
}