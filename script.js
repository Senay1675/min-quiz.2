
let checkAnswerBtn = document.querySelector("#checkAnswer");

checkAnswerBtn.addEventListener("click", () => {
    
    let firstQ = document.querySelector("[name=first]:checked").value;
    let secondQ = document.querySelector("[name=second]:checked").value;
    let thirdQ = document.querySelector("[name=third]:checked").value;
    let fourthQ = document.querySelector("[name=fourth]:checked").value;
    let fifthQ = document.querySelector("[name=fifth]:checked").value;
    let sixthQ = document.querySelector("[name=sixth]:checked").value;
    let seventhQ = document.querySelector("[name=seventh]:checked").value;
    let eightQ = document.querySelector("[name=eight]:checked").value;
    let nineQ = document.querySelector("[name=nine]:checked").value;
    let tenQ = document.querySelector("[name=ten]:checked").value;

    
    let score = 0;
    let totalQuestions = 10;

    if(firstQ === "CaptainAmerica"){
        score++;
    }
    if(secondQ === "hand"){
        score++;
    }
    if(thirdQ === "isengard"){
        score++;
    }
    if(fourthQ === "dirtydancing"){
        score++;
    }
    if(fifthQ === "henry"){
        score++;
    }
    if(sixthQ === "madagascar"){
        score++;
    }
    if(seventhQ === "goose" && "maverick"){
        score++;
    }
    if(eightQ === "tokyo"){
        score++;
    }
    if(nineQ === "red"){
        score++;
    }
    if(tenQ === "carlos"){
        score++;
    }

    let percentage = (score / totalQuestions) * 100;
    let resultDiv = document.getElementById("result"); 

    if(percentage >= 75){
        console.log("All those hours you've spent on movies have not been in vain. Excelent!");
        resultDiv.innerHTML = `Riktigt bra jobbat (grönt): Du fick ${score} rätt av ${totalQuestions}. (${percentage}%)`;
        resultDiv.className = "result green";
    }
    else if(percentage >= 50){
        console.log("You have passed. Well done!");
        resultDiv.innerHTML = `Bra (gul/orange): Du fick ${score} rätt av ${totalQuestions}. (${percentage}%)`;
        resultDiv.className = "result yellow";
    }
    else {
        console.log("Sorry, you have failed. Step your game up!");
        resultDiv.innerHTML = `Riktigt bra jobbat (grönt): Du fick ${score} rätt av ${totalQuestions}. (${percentage}%)`;
        resultDiv.className = "result green";
    }
 console.log(score);

   // Display the modal
   let modal = document.getElementById("resultModal");
   modal.style.display = "block";

   // Close the modal
   let span = document.getElementsByClassName("close")[0];
   span.onclick = function() {
       modal.style.display = "none";
   }

   window.onclick = function(event) {
       if (event.target == modal) {
           modal.style.display = "none";
       }
   }
});