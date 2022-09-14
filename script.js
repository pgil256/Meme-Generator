// const currentImg= document.getElementById("userInput1");
// const currentTopText= document.getElementById("userInput2");
// const currentBottomText= document.getElementById("userInput3");

// function createAMeme(currentImg, currentTopText,currentBottomText){
//     newMeme= document.createElement('div');

//     currentImg.addEventListener('submit',function(event){
//         event.preventDefault;
//         const newImg= event.target.document.createElement('img');
//         newImg.classList.add('newMemeImg');
//         newImg.src=currentImg.value;
//         newMeme.append(newImg);
//     });

//     currentTopText.addEventListener('submit',function(event){
//         event.preventDefault;
//         const newTopText= event.target.document.createElement('div');
//         newTopText.classList.add('newMemeTopText');
//         newTopText.innerText=currentTopText.value;
//         newMeme.append(newTopText);
//     });

//     currentBottomText.addEventListener('submit',function(event){
//         event.preventDefault;
//         const newBottomText= event.target.document.createElement('div');
//         newBottomText.classList.add('newMemeBottomText');
//         newBottomText.innerText=currentBottomText.value;
//         newMeme.append(newTopText);
//     });
   
//     button.addEventListener('click', function(event){
//         event.preventDefault;
//         toContainer.append(newMeme);
//     });
//     form.reset();
// }
// newMeme.addEventListener('click', function(event){
//     event.preventDefault;
//     newMeme.remove();
// });

const form = document.getElementById("memeForm");
let img = document.getElementsByTagName('img');

form.addEventListener('submit', function(event) {
      event.preventDefault();
      let newMeme = document.createElement("div");
      let newTopText = document.createElement("div");
      let newBottomText = document.createElement("div");
      let img = document.createElement("img");
      
      
      img.src = document.getElementById('userInput1').value;

      newTopText.classList.add("newMemeTopText");
      newTopText.innerHTML = document.getElementById('userInput2').value;
      
      newBottomText.classList.add("newMemeBottomText");
      newBottomText.innerHTML = document.getElementById('userInput3').value;
      
      newMeme.classList.add("newMeme");
      newMeme.appendChild(newTopText);
      newMeme.appendChild(newBottomText);
      newMeme.appendChild(img);
      
      let divForMeme = document.getElementById("memeContainer");
      divForMeme.appendChild(newMeme);

      document.getElementById("userInput1").value = "";
      document.getElementById("userInput2").value = "";
      document.getElementById("userInput3").value = "";

      newMeme.addEventListener('click', function handleClick(event) {
          newMeme.remove();
      })

     
});

