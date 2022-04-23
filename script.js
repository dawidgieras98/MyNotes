const addBtn = document.querySelector('.add')
const saveBtn = document.querySelector('.save-icon')
const cancelBtn = document.querySelector('.cancel-icon')
const deleteBtn = document.getElementsByClassName('delete-note')
const deleteAll = document.querySelector('.delete')

const noteArea = document.querySelector('.note-area')
const notePanel = document.querySelector('.note-panel')
const category = document.querySelector('#category')
const textarea = document.querySelector('#text')
const error = document.querySelector('.error')

let selectedValue

let cardID = 0

const openPanel = () => {
    notePanel.style.display = 'flex'   
}

const closePanel = () => {
    notePanel.style.display = 'none'
    error.style.visibility = 'hidden'
    textarea.textContent = ''
    category.selectedIndex = 0
}

const addNote = () => {
    if (textarea.value !== '' && category.options[category.selectedIndex].value !== '0'){
        createNote()
        error.style.visibility ='hidden'
    } else {
        error.style.visibility = 'visible'
    }
}

const createNote = () => {
    const newNote = document.createElement('div')
    newNote.classList.add('note')
    newNote.setAttribute('id', cardID)

    newNote.innerHTML = 
    `<div class="note-header">
     <h3 class="note-title">${selectedValue}</h3>
     <button class="delete-note" onclick="deleteNote(${cardID})">
          <i class="fas fa-times icon"></i>
     </button>
     </div>

     <div class="note-body">
            ${textarea.value}    
     </div>`

    noteArea.appendChild(newNote)
    cardID++
    textarea.value = ''
    category.selectedIndex = 0
    notePanel.style.display = 'none'
    checkColor(newNote)
}

const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text;   
}

const checkColor = note => {
    switch (selectedValue) {
        case 'Shopping':
            note.style.backgroundColor = 'rgb(72,0,255)';
            break;
        case 'Study':
            note.style.backgroundColor = 'rgb(100,100,72)';
            break;
        case 'Work':
            note.style.backgroundColor = 'rgb(10,180,15)';
            break;

    }
}

const deleteNote = id => {  
    const noteToDelete = document.getElementById(id)
    noteArea.removeChild(noteToDelete)
}

const deleteAllNotes = () => {
    console.log('1');
    noteArea.textContent = ''
}

addBtn.addEventListener('click', openPanel)
cancelBtn.addEventListener('click', closePanel)
saveBtn.addEventListener('click', addNote)
deleteAll.addEventListener('click', deleteAllNotes)