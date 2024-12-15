let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#newgame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;  

let winningpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       console.log("Box was clicked.");
       if (box.innerText !== "") {
        return; // Exit if the box is already clicked
    }
       if(turnO){
        box.innerText = "O"; //player O
        turnO = false;
       }
       else{
        box.innerText = "X"; //player X
        turnO = true;
       }
        checkwinner();   
        
        
    })
    
})
const resetgame=()=>{
    turnO = true;
    enableboxes(); //it calls the functions which allows the buttons to be clicked.
    msgContainer.classList.add("hide"); //this hides the message by enabling the hide class.
   
}
const disbleboxes=()=>{
    for(let box of boxes){
        box.disabled = true; //this prevents the box to clicked.
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled = false; //this allows the box to clicked.
        box.innerText=""; // this clear the boxes 
    }
}
 const checkwinner = ()=>{
    for(pattern of winningpatterns){
      // this helps us to access the value inside the each box when they are clicked.
        let pos1val =boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if(pos1val != "" && pos2val != "" && pos3val !="") // so the values in the boxes of the pattern shouldn't be empty
        {
            if(pos1val === pos2val && pos2val === pos3val)
            {
               console.log("Winner is",pos1val);
              
               showwinner(pos1val);
            }

        }
    }
    if (Array.from(boxes).every((box) => box.innerText !== "")) {
        draw();
    }

 }
 const showwinner= (winner) =>{
    msg.innerText = `Congratulations the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disbleboxes(); //this call the function so that the game stops

 }

 newbtn.addEventListener("click",resetgame);
 reset.addEventListener("click",resetgame);

 const draw = ()=>
 {
    msg.innerText = `The game has been drawn`;
    msgContainer.classList.remove("hide");
    disbleboxes(); //this call the function so that the game stops

 }