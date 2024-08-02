//? 1.Sum of Resistors in Series
 
/*Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

Note: This approach uses the absolute value of each resistance to ensure all values are positive.
*/

const Resistors = [-1,5,6,3];
//const Resistors = [14,3,5,6];
//const Resistors = [8,15,100];
SumResistors = 0;
for (let i = 0; i < Resistors.length; i++) {
   SumResistors += Math.abs(Resistors [i]);
}
console.log (`1. El resultado de la sumatoria es ${SumResistors}`);



//? 2. Number divided into halves
 

/*Given a number, return the number divided into its halves in an array.
Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.
*/

function calcHalfs (num) {
    return `2. Las mitades son: [${num/2}, ${num/2}]`; 
}
console.log (calcHalfs(10));

//o bien,

function calcMitad (x) {
mitad = x/2;
return [mitad, mitad];
}
console.log (calcMitad (4));


//? 3. Secret Society
 

/*Find the name of a secret society based on the first letter of each member's name.
 

Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.
*/

const Names = ["Harry", "Ron", "Hermione"];
    for (let i = 0; i < Names.length; i++) {
    secretWord = Names.map((palabra)=>palabra[0]).join("");//método join para unir las letras en una cadena
}
console.log (`3.La palabra secreta es ${secretWord}`);
//!checar con forEach

//?  4. Online status
 
/*
Display online status for a list of users.
 

Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
*/

const Users = ['mockIng99', 'J0eyPunch', 'glassedFer', 'r!chard', 'As7rid01'];
MoreUsers = Users.length - 2;
Users.splice (2);
console.log (`4. ${Users} and ${MoreUsers} more online`);

//? 5. Array of Multiples
 

/*Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 

Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
*/

function calcMultiplos (number, length) {
    let Multiplos = [];
    for (let i = 1 ; i<=length ; i++){
    Multiplos.push(number*i);
    }
    return Multiplos;
    }
    console.log (calcMultiplos (17, 6));
    //console.log (calcMultiplos (2, 10));
    

//? 6. Positive dominance in Array
 

/* Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
 

Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
*/

function calcDominant (numbers){
    let positiveNum = numbers.filter(number => number > 0); //el método filter crea un nuevo array con los elementos que cumplen la condición establecida.
    let negativeNum = numbers.filter(number => number < 0);
    if (positiveNum.length > negativeNum.length){
        return `6. the answer is: ${true}`;
    }
    else {
        return `6. the answer is: ${false}`;
    } 
    };
console.log (calcDominant ([-1, -3, -5, 4, 6767]));
//console.log (calcDominant([1, 65, 23, 74, -3,  -5]))

//? Antipodal Average
 
/*Given an array, return a shorter array following these steps:
- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2.
 

Example:
- For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.
*/
//const Num = [1,2,3,7,5,22,6]


const Num = [1,2,3,5,22,6]

function SumArrays (firstHalf, secondHalf){
i=0
    if (Num.length % 2 != 0){
    firstHalf = Num.slice(0, Math.floor(Num.length/2)); //la mitad de la longitud de 7 elementos, sería 3.5, el método Math.floor redondea hacía abajo esta cifra, quedando en 3. slice (0,3). Slice es excluyecte, por lo que ya no toma el índice 3)
    secondHalf = Num.slice(Math.ceil(Num.length/2), Num.length); //Math.ceil redondea hacia arriba, por lo que iniciará desde el índice 4, y como slice es excluyente el último número de longitud, es decir 7, ya no se toma; sólo llega hast índice 6, siendo el último dato de la lista.
    }
    else {
    firstHalf = Num.slice(0, Num.length/2);//La mitad de la longitud es un número mayor al índice, pero dado que slice es excluyente, ya no toma el último elemento. Quedando Num.slice (0,3) en una lista de 6 elementos. 
    secondHalf = Num.slice(Num.length/2, Num.length);
    }

for (i=0; i< firstHalf.length; 1++) {
        SecondHalf = secondHalf.reverse();
        firstHalf = [];
        SumArrays.push (firstHalf[i] + secondHalf[i]);
}
console.log (SumArrays);
}
