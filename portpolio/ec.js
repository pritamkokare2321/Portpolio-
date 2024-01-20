/*
const outer=()=>{
 

    let a =  10;

    const inner=()=>{

        console.log("hello this is js")
        console.log(a)

    }

    inner()

}

outer()


//following is a  example of closure
//this is also know as function curring 
// problem caused due to this is also known as  callback hell
// is also known as pyramid of doom

const shownumber=(num) =>{

     
      return function(num1){
        return function(num2){
            return function(num3){
                console.log(num,num1,num2,num3)
            }
        }
      }
}

shownumber(10)(20)(30)(40)

//following is a example of  callback hell 
// or is also known as function curring 


const name = ["soham","pawan","rohit","suhas"]

 const [one,two,three,four]=name;

console.log(one)


const apiurl = 'https://jsonplaceholder.typicode.com/users/'

const data = fetch(apiurl)

.then((res)=> res.json())
.then((maindata)=>{
    console.log(maindata)
})


maindata.map((val)=>{
    document.getElementById('result').innerHTML=val;
})

    */

var api = "https://jsonplaceholder.typicode.com/users/";

fetch(api)
  .then((res) => res.json())
  .then((data) => {
    data.map((val) => {
      document.querySelector("#result").innerHTML = `<li>${val.name}</li>`;
    });

    console.log(data);
  });
