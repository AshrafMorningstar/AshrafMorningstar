function createCloseButton(li) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
  
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    span.onclick = () => span.parentElement.style.display = "none";
  }
  
  document.querySelectorAll('li').forEach(createCloseButton);
  
  document.querySelector('ul').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI')
      e.target.classList.toggle('checked');
  });
  
  function add() {
    let li = document.createElement('LI');
    let input_value = document.form_main.task.value;
    let input_text = document.createTextNode(input_value);
  
    li.appendChild(input_text);
    document.querySelector('ul').appendChild(li);
    document.form_main.task.value = "";
  
    createCloseButton(li);
  }

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar