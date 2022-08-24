// json-server --watch db.json
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2') ;
const main = document.querySelector('.container') ;
const url = 'http://localhost:3000/Products' ;


btn1.addEventListener('click', reqData);
btn2.addEventListener('click' ,postData) ;



function reqData(){
    console.log("button is clicked") ;
    fetch(url)
    .then(res => res.json())
    .then(data => adder(data)) 

    
}

function adder(data){
    console.log(data);
    const ul = document.createElement('ul') ;
    main.append(ul) ;
    data.forEach(ele =>{
        const li = document.createElement('li') ;
        li.textContent =`${ele.productName}` ;
        ul.append(li);
    })
}

function postData(){
    fetch(url,{
        method:'POST' ,
        body:JSON.stringify({
            id:6,
            department: "Technology",
            productName: "Wipro_MERN_90",
            product: "Developer"
          }) ,
        headers:{
            "Content-type":"application/json ; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => console.log(data)) 

}



