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

// Variable 
window.addEventListener("load",()=>
{ 
    render(toDoList);
    buttonWork();
    addEdit();
}
)

const addList = document.getElementById("add-list")
const ParentList=document.getElementById("parent-list")
const form= document.getElementById("form")
let toDoList=JSON.parse(localStorage.getItem('Todo'))

//get the input and add other function  
addList.addEventListener("click",(event)=>{
    event.preventDefault();
    let newdate=new Date();
    let stringdate=(newdate.getMonth()+1)+ "."+ newdate.getDate()+ "  ";
    let newcontent={value:form.input.value,date:stringdate};
    toDoList.push(newcontent);
    //create the list 
    render(toDoList);
    //delete the element in array and the list 
    buttonWork();
    addEdit();
})


function addEdit(){
    const allList=  document.querySelectorAll("li div span")

    allList.forEach((ele)=>{
        ele.contentEditable="True"
    }
    )
    allList.forEach((ele,i)=>{
        ele.addEventListener(
            "input",()=>{
                toDoList[i].value=ele.textContent 
                ele.addEventListener("blur", ()=>{
                render(toDoList)
                buttonWork()
                addEdit()
                }
                )
                }
            )
        }
    )
}


//create an element and style it  
function createelement(element){
    let newele=document.createElement('li');
    newele.innerHTML="<div>"+element.date+"<input type='checkbox' class='checkbox'><span>" +
                        element.value +"</span></div><button><img class='btn' src='./img/trash-2.svg' alt='trash'></button>";
    return   newele;             
}

//add all elemets to the list 
function render(arr){
    ParentList.innerHTML="";
    arr.forEach((ele)=>{
    let newChild = createelement(ele);
    document.getElementById("parent-list").appendChild(newChild);
    localStorage.setItem("Todo",JSON.stringify(arr))
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
                render(toDoList)
                buttonWork()
                addEdit()
                })
            }
        )
}