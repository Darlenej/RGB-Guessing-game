let array =["rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"]

let squares = document.getElementsByClassName("coloredboxes");

for (let i = 0; i < squares.length; i++) {

    squares[i].style.backgroundColor = array[i];

    squares[i].addEventListener('click', () => {
    
        let userSelectedColor = squares[i].style.backgroundColor;

        if (userSelectedColor === secretColor) {
            document.getElementById("rightAndWrong").innerHTML="Correct!!";

        let head = document.querySelector(".heading");
            head.style.backgroundColor=secretColor;

            for(let j=0; j< squares.length; j++){
                squares[j].style.backgroundColor = secretColor;
            }
        } else {
            document.getElementById("rightAndWrong").innerHTML="Try again... sorry";
            squares[i].style.backgroundColor= "rgb(35, 35,35)";
        }
    });
}
     
let secretColor = selectRandomColor();
// array[1];
document.getElementById("replacer").innerHTML = secretColor;


function selectRandomColor(){
    let randomValue= Math.floor(Math.random()*array.length);
return array[randomValue];

}
console.log (selectRandomColor());


let newArray=[];
function generateRandomColors(){
    for(let k=0; k<6; k++){
        newArray.push(randomColor());
    }
}
generateRandomColors();
// console.log (generateRandomColors());
console.log(newArray);

    function randomColor(){
        let r= Math.floor(Math.random()*256);
        let g= Math.floor(Math.random()*256);
        let b= Math.floor(Math.random()*256);
        let newString= 'rgb('+ r +',' +g +','+b+')';
        return newString;
    }

    resetbtn=document.getElementById("reset");
function reset(){
    resetbtn.addEventListener('click', function() { 
    let array= generateRandomColors;
let newSecretColor = selectRandomColor();
h1.innerHTML= secretColor;






     })


}

        
// function sixSquareColorChanger(){
// for(let i=0; i<squares[i].length; i++){
//     document.getElementById("heading").style.background;
//     document.
// // squares[i]
// }
// };
