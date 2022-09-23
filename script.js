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

