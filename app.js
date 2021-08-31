// Sidereal day 23 hours 56 minutes 4.0905 seconds
// Solar day 24 hours 
 //Sidereal year 365.25
//Calendar year 365 days + leap year 
//Precession 23.5 degrees * 2  per 26000 years

//in seconds
let SiderealDay = (23 * (60**2)) + (56*60)+ 4.0905
console.log(SiderealDay + " seconds") 

let precession = (23.5 * 2) / 26000 
console.log(precession + '°'+ " per year") 

let SiderealYear = 365.25;
console.log(SiderealYear + ' days')