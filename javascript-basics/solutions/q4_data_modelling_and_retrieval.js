// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here


// create an object as fruits which consits nested objects with fruit_names as property .

const fruits = {

               // here add fruit_name as object and propertie are color and pricePerKg 
               "apple" : {"color":"red" , "pricePerKg" : 90 } ,
               "mango" :  {"color":"yellow" , "pricePerKg" : 60 } ,
               "grapes" : {"color":"green" , "pricePerKg" : 40 }  ,
               
}

let fruit_name = "apple" ; // change the value of the fruit_name to any fruit .

// let fruit_name = prompt("enter any one of the above fruit") ;  ---   > prompt works only when the compiling platform is browser .


// display the properties of corresponding fruit .

console.log(fruit_name , " color is : ", fruits[fruit_name].color ) ;
console.log(fruit_name , " pricePerKg is : ", fruits[fruit_name].pricePerKg ) ;



















