console.log("person.js is Running...");

const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 21;
const isSenior = (age) => age >= 65;


// INLINE EXPORTS
// export const isAdult = (age) => age >= 18;
// export const canDrink = (age) => age >= 21;
// export default (age) => age >= 65;

export {isAdult, canDrink, isSenior as default};

