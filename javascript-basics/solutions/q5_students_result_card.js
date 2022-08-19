// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here

// create an array of size of size with 100 elements

var result_card = new Array(100) ;

//  add the objects with student properties ,  utill 100 objects  .
for( var i=0 ;i<50 ;i++){
result_card[i] = {
    "name" :"Manikaran-" +  i  ,
    "subjects" : { "Grammer" : i , "Accounts" : i+1 } ,           
};
} 
for( var j=50 ;j < 99 ; j++)
result_card[j] = {
    "name" :"Masan" + j ,
    "subjects" : { "Grammer" : j , "physics" : j+1 } , 
};
 
//  Below code to display name and percentage of the students .

result_card.forEach(item => {
  
  let percentage = (( Object.values(item.subjects)[0] + Object.values(item.subjects)[1] ) /200  ) * 100 ;
  console.log("Name :" ,item.name ," and " , "Percentage : " ,percentage,"%")
  } ) ;