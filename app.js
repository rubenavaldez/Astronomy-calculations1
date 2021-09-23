// Sidereal day 23 hours 56 minutes 4.0905 seconds
// Solar day 24 hours 
//Sidereal year 365.25
//Calendar year 365 days + leap year 
//Precession 23.5 degrees * 2  per 26000 years

//in seconds
// let SiderealDay = (23 * (60**2)) + (56*60)+ 4.0905
// console.log(SiderealDay + " seconds") 

// let precession = (23.5 * 2) / 26000 
// console.log(precession + '°'+ " per year") 

// let SiderealYear = 365.25;
// console.log(SiderealYear + ' days')

//2440587.5 days + UNIX TIME in days === Julian Day
// for(let i =11; i <= 32;i++){
// let x= i
// let num = (3*(x**2) + (6*x))/ (2*x) 
// console.log(`x =${i}  y=${num}`)

// }

// let x = .5
// //console.log(-8*x+7)
// let y =  10** (-8*x +7)
// console.log(y)
// let x = 5.0
// let y = Math.log10(8+(x/10))
// console.log(y)
// let x = 5.0
// let y = Math.log(8+(x/10))
// console.log(y)

// Lumonisty (9.94 x 10^6) * pi * flux/(parralax^2)


function LumonistyCalculator(starName, fluxString, parralax) {
    let flux = eval(fluxString)
    //console.log(flux)
    let C = 9.94 * (10 ** 6)
    let paraSquare = parralax ** 2
    let fluxPara = flux / paraSquare
    let lumonisty = C * Math.PI * fluxPara
    let distance = 1 / parralax
    return `${starName} has a luminosity of ${lumonisty.toFixed(2)}L(sun).
        It's distance from earth is ${distance.toFixed(2)}parsec
        That is ${(distance * 3.26).toFixed(2)} light years \n`


}
//console.log(LumonistyCalculator("Procyon", '1.84 *(10**-8)', 0.286))
console.log(LumonistyCalculator("SIRIUS", '1.00 *(10**-7)', 0.379))
console.log(LumonistyCalculator("ARCTURUS", '2.79 *(10**-8)', 0.089))
console.log(LumonistyCalculator("VEGA", '2.59 *(10**-8)', 0.129))
console.log(LumonistyCalculator("BETELGEUSE", '1.75 *(10**-8)', 0.0076))
console.log(LumonistyCalculator("ALTAIR", '1.32 *(10**-8)', 0.194))
console.log(LumonistyCalculator("FORMALHAUT", '9.07 *(10**-9)', 0.130))