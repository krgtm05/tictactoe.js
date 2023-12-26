let boxes = document.querySelectorAll(".box");
let arr = [0,0,0,0,0,0,0,0,0];
let game = true;
let player1  = true; 
let player2 = false;
let tictac = document.querySelector(".tictac");
let winnerName = document.querySelector(".winner");

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    
]


const disableBox = ()=>{
    for(box of boxes){
        box.disabled = true;
    }
}

const undisableBox = ()=>{
    for(box of boxes){
        box.disabled = false;
    }
}
let cnt = 0;
boxes.forEach((box,idx)=>{  
    box.addEventListener("click",()=>{
        if(arr[idx]===0){
            if(game){
                box.innerText="X";
                box.style.color = "#d81e5b";
                game = !game;
                
                
            }
            else{
                box.innerText="O"
                box.style.color = "#23395b";
                game = !game;
            }
            arr[idx] = 1;
            //active player styling noting else
            if(player1 === true){
                document.querySelector(".player1").classList.remove("active");
                document.querySelector(".player2").classList.add("active");
                player2 = true;
                player1 = false;
            }
            else{
                document.querySelector(".player2").classList.remove("active");
                document.querySelector(".player1").classList.add("active");
                player1 = true;
                player2 = false;
            }
             //active player styling noting else

        }
        checkWinner();

        //draw condition
        cnt++;
        console.log(cnt);
        if(cnt === 9){
            tictac.classList.add("hide");
            winnerName.innerText = `Draw`;
            winnerName.classList.remove("hide");

            cnt = 0;
            reset.innerText = "New Game";
            reset.style.backgroundColor="green"
            disableBox();
        }
    });
    
   
});



const displyWinner = (winner) =>{
    tictac.classList.add("hide");
    winnerName.innerText = `Winner is ${winner}`
    winnerName.classList.remove("hide");
    

}

const checkWinner = () =>{
    for(let pattern of winPattern){
        // console.log(pattern);
        // console.log(pattern[0]+' '+ pattern[1]+' '+ pattern[2]);
        let firstVal = boxes[pattern[0]].innerText;
        let secVal = boxes[pattern[1]].innerText;
        let thirdVal = boxes[pattern[2]].innerText;

        if(firstVal === secVal && secVal=== thirdVal &&thirdVal==='X'){
            console.log('winner X');
            displyWinner("X");
            reset.innerText = "New Game";
            reset.style.backgroundColor="green"
            disableBox();
            return true;
        }
        else if(firstVal === secVal && secVal=== thirdVal &&thirdVal==='O'){
            console.log('winner O');
            displyWinner("O");
            reset.innerText = "New Game";
            reset.style.backgroundColor="green"
            disableBox();
            return true;
        }

        
    }


}
    
let resetFun = () =>{
    boxes.forEach((box)=>{
        box.innerText='';   //making everything clean in the board
    });

    for(let i=0;i<10;i++){
        arr[i] = 0; //makinf the array all 0
    }

        document.querySelector(".player2").classList.remove("active"); //removing active button if by chance it si on player two
        document.querySelector(".player1").classList.add("active"); //removing active button if by chance it si on player two
        winnerName.classList.add("hide");
        tictac.classList.remove("hide");
        reset.style.backgroundColor = "#d81e5b";
        reset.innerText = "Reset";
        undisableBox();
        cnt = 0;
        game = true;

}

let reset = document.querySelector(".reset");
reset.addEventListener("click",resetFun);

    
// if(!checkWinner() && cnt === 9){
//     displyWinner("Draw");
// }
