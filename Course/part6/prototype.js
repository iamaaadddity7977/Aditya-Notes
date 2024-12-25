let computer = {cpu :" 94",
    ram: "16Gb"
};
let Dell = {
    scree: "HD",
    __proto__: computer,
};
let tomHardware = {};

// console.log('computer', computer.__proto__);
// console.log('Dell', Dell.__proto__);
// console.log(`${Dell}`,Dell.__proto__);  // try gettting Two object 

let genericCar = {
    tyres: 4
};

let tesla = {
    driver: "Auto-Matically",
};
Object.setPrototypeOf('tesla',genericCar);
// console.log(`tesla`, genericCar);  
// console.log(`tesla `, genericCar.tyres);  
// console.log(`tesla `, tesla);  

 



