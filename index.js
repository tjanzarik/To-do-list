
document.getElementById("add-list").addEventListener
(
    "click",()=>
    {   
        //create list and the add the checkbox and delte button 
        let newele= document.createElement('li');
        newele.innerHTML="<div><input type='checkbox'>" +
                        document.querySelector("input").value +
                        "</div><button><img class='btn' src='./img/trash-2.svg' alt='trash'></button>";
        
        //to change the contenteditable and append a child 
        document.getElementById("parent-list").appendChild(newele);
        document.getElementById("parent-list").lastChild.contentEditable = "true";

        //change the style to make it look better
        document.getElementById("parent-list").lastChild.style.display= "flex";
        document.getElementById("parent-list").lastChild.style.justifyContent="space-between";

        // make all the delete button work 
        const delbtn= document.querySelectorAll(".btn");
        delbtn.forEach
        (
            (btn)=>
            btn.addEventListener
            (
                "click",()=>
                btn.parentNode.parentNode.remove()
            )
        )
    }
);


