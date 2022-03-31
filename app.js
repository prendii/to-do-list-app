let button = document.getElementById("add-button");
button.addEventListener('click', () => {
    // creating new task and adding it  
    let createList = document.createElement("Li");
    createList.className = "li";
    let text = document.getElementById("input").value;
    if (text === '') {
      alert("You must write something!");
    } else {
      let input = document.getElementById("input");
      input.value = "";
      let addOn = document.createTextNode(text);
      createList.appendChild(addOn);
      document.getElementById("list").appendChild(createList);
      // created x button
      var span = document.createElement("SPAN");
      var x = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(x);
      createList.appendChild(span);
      let lists = 1;
      // when x button is clicked remove the list item
      // when clicked add a checked symbol
      if (lists > 0) {
        span.addEventListener('click', () => {
          createList.style.display = "none";
        })
        createList.addEventListener('click', () => {
          createList.classList.toggle('checked');
            })
        } 
      // clear tasks pressing clear
      let clear = document.getElementById("clear-text")
      clear.addEventListener('click', () => {
        createList.style.display = "none";
      })  
    }   
})

// submit task using enter
let input = document.getElementById("input");
input.addEventListener("keyup", (event) => {
  if(event.key === 'Enter') {
    button.click();
  } else {
    event.preventDefault();
  }
})
