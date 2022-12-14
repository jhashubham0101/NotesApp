   console.log("I am shubham");
    showNotes();
    // if user add a notes , add it to the local storage.
    let addBtn = document.getElementById("addBtn");
    addBtn.addEventListener("click",function(e)
     {
        let addText = document.getElementById("addText");
        let notes = localStorage.getItem("notes"); // maybe notes is available from before
        if(notes == null)
        {
            notesObj=[];
        }
        else
        {
        notesObj = JSON.parse(notes);   //JSON.parse is used to convert String to objects.
        }
        notesObj.push(addText.value);
        localStorage.setItem("notes" , JSON.stringify(notesObj)); // JSON.stringify use to convert it into a string.
        addText.value ="";
        console.log(notesObj);
    
        showNotes();
    })

// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show!`;
  }
}

// Function to delete a note
function deleteNote(index) {
//   console.log("I am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

