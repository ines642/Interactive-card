let nam = document.querySelector("#name")
let num =document.querySelector("#num")
let mm =document.querySelector("#mm")
let yy =document.querySelector("#yy")
let cvc =document.querySelector("#cvc")
let btn =document.querySelector(".btn")
let cardCode =document.querySelector(".code")
let user =document.querySelector(".user-name")
let month =document.querySelector(".month")
let year =document.querySelector(".year")
let input =document.querySelectorAll('input')
let body=document.querySelector('body')

let NUM = 1234567890
let str = ''
console.log(typeof str);

/*for(var i=0 ; i<input.length ; i++){
console.log(input[i]);
var a
input[i].addEventListener('keydown' , ()=>{
KeyboardEvent='a'
})
}
*/
/* nam.addEventListener('click' , ()=>{
    console.log('clicked');
   nam.style.color='red'
   console.log(nam.value)
}) */
/* nam.addEventListener('keypress' , (e)=>{
    
   nam.style.color='blue'
   console.log(nam.value)
   console.log(e.key); 
   let k=[]
   k.push(e.key)
   console.log(k);
})  */
/* cardCode.innerText='1111 1111 1111 1111'
var a ;

nam.addEventListener('keypress' , (e)=>{
    a=e.key
    console.log(a);
    
})
if(nam.event='click'){
    console.log('click');
} */
/* if(KeyboardEvent='keypress'){
    console.log('keypres');
    console.log(KeyboardEvent.key);
} */

//finnaly worked
for(var i =0 ; i<input.length;i++){
let arr=[]
input[i].addEventListener('keypress' , (e)=>{
    let target=e.target
    let key=e.key

    console.log(target);
    console.log(key);

    arr.push(key)
    console.log(arr);
    
  
    if(target==input[0]){
        //alert(target.getAttribute('id'))
    user.innerText=arr.join("")
    if(arr.length==3){
        return arr[0]
    }
    }
    if(target==input[1]){
        //alert(target.getAttribute('id'))
        cardCode.innerText=arr.join("")
    }
    if(target==input[2]){
        //alert(target.getAttribute('id'))
        month.innerText=arr.join("")
    }
    if(target==input[3]){
        //alert(target.getAttribute('id'))
        year.innerText=arr.join("")
    }
    


    
   /*  let check = key*1
    if(check ==key){
      console.log('numb' );
    }else{
      console.log('string')
    } */
  
})
input[i].addEventListener('keydown' , (e)=>{
    let key=e.key
    let target=e.target
    if(key=='Backspace'){
        console.log('bs');
        arr.pop(key)
        if(target==input[0]){
        user.innerText=arr.join("")
    }
        if(target==input[1]){
        cardCode.innerText=arr.join("")
    }
        if(target==input[2]){
        month.innerText=arr.join("")
    }
        if(target==input[3]){
        year.innerText=arr.join("")
    }
    }
})
}

