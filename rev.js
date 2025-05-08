document.addEventListener('DOMContentLoaded', function() {

const allstars=document.querySelectorAll('.star');
score = document.querySelector(".score");

allstars.forEach((star,i)=>{
  star.onclick = function () {
    current_star = i + 1;
    score.innerText = `${current_star}/5`;

    allstars.forEach((star,j) => {
      if (current_star >= j +1){
        star.innerHTML ='&#9733;';
      }else { 
        star.innerHTML ='&#9734;';
      }
    });
    console.log(`Clicked star: ${current_star}`);
  };
});
});

