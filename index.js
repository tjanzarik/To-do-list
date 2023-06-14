// Old way 
// document.getElementById("add-list").addEventListener
// (
//     "click",()=>
//     {   
//         //create list and the add the checkbox and delte button 
//         let newele= document.createElement('li');
//         newele.innerHTML="<div><input type='checkbox'>" +
//                         document.querySelector("input").value +
//                         "</div><button><img class='btn' src='./img/trash-2.svg' alt='trash'></button>";
        
//         //to change the contenteditable and append a child 
//        .appendChild(newele);
//         document.getElementById("parent-list").lastChild.contentEditable = "true";

//         //change the style to make it look better
//         document.getElementById("parent-list").lastChild.style.display= "flex";
//         document.getElementById("parent-list").lastChild.style.justifyContent="space-between";

//         // make all the delete button work 
//         const delbtn= document.querySelectorAll(".btn");
//         delbtn.forEach
//         (
//             (btn)=>
//             btn.addEventListener
//             (
//                 "click",()=>
//                 btn.parentNode.parentNode.remove()
//             )
//         )
//     }
// );

//Variable 
const addList = document.getElementById("add-list")
const ParentList=document.getElementById("parent-list")
const form= document.getElementById("form")
let toDoList=[]

//get the input and add other function  
addList.addEventListener("click",(event)=>{
    event.preventDefault();
    let newcontent=form.input.value;
    toDoList.push(newcontent);
    //create the list 
    render(toDoList);
    //delete the element in array and the list 
    buttonWork();
})

//create an element and style it  
function createelement(element){
    let newele=document.createElement('li');
    newele.innerHTML="<div><input type='checkbox'>" +
                        element +"</div><button><img class='btn' src='./img/trash-2.svg' alt='trash'></button>";
    newele.style.display= "flex";
    newele.style.justifyContent="space-between";
    return   newele;             
}

//add all elemets to the list 
function render(arr){
    ParentList.innerHTML="";
    arr.forEach((ele)=>{
    console.log("what the element is " + ele)
    let newChild = createelement(ele);
    document.getElementById("parent-list").appendChild(newChild);
    }
    )
}

//delete the element in array and the list 
function buttonWork(){
        const delbtn= document.querySelectorAll(".btn");
        delbtn.forEach
        (
            (btn)=>
            {  
                btn.addEventListener
                ("click",()=>{
                let arabtn=Array.from(delbtn);
                let num=arabtn.indexOf(btn);
                toDoList.splice(num, 1);
                btn.parentNode.parentNode.remove();
                })
            }
        )
}