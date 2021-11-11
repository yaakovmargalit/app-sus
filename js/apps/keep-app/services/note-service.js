
import { utilService } from '../../../services/util-service.js'
// import { storageService } from '../../../services/local-storage-service.js'

const STORAGE_KEY = 'notesDB';

var gNotes = [];

export const noteService = {
    getNotes,
    remove,
    addTxtNote,
    addImgNote,
    addTodoNote,
    addVideoNote,
    addNote,
    changeNoteColor,
    pinToStart,
    updateLocalStorage
}

function getNotes() {
    return _createNotes()
        .then(notes => {
            gNotes = notes;
            return Promise.resolve(notes);
        })
        .catch(err => {
            console.log('default notes', err);
        });
}

function remove(noteId) {
    const idx = gNotes.findIndex(note => note.id === noteId);
    gNotes.splice(idx, 1);
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

function addNote(noteData) {
    switch (noteData.type) {
        case 'noteText':
            addTxtNote(noteData)
            break;
        case 'noteImg':
            addImgNote(noteData)
            break;
        case 'noteTodo':
            addTodoNote(noteData)
            break;
        case 'noteVideo':
            addVideoNote(noteData)
            break;
    }
}

function addTxtNote(noteData) {
    let note = {
        id: utilService.makeId(),
        type: "noteText",
        isPinned: false,
        info: {
            txt: noteData.val
        },
        style: {
            backgroundColor: "#F7F0CC"
        }
    }
    gNotes.push(note);
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

function addImgNote(noteData) {

    let note = {
        type: "noteImg",
        info: {
            url: noteData.val,
            title: ''
        },
        style: {
            backgroundColor: "#BBDBAB"
        }
    }
    gNotes.push(note);
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}


function addTodoNote(noteData) {
    let todo = {
        id: utilService.makeId(),
        type: "noteTodo",
        isPinned: false,
        info: {
            title: "Things to do:",
            todos: _getTodoArray(noteData.val)
        },
        style: {
            backgroundColor: "#C1C1C1"
        }
    }
    gNotes.push(todo);
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

function _getTodoArray(valStr) {
    let valArray = valStr.split(',')
    let todoArray = valArray.map(todoTxt => {
        return {
            txt: todoTxt,
            isDone: false,
            doneAt: null,
        }
    })
    return todoArray;
}

function changeNoteColor(noteId, color) {
    const idx = gNotes.findIndex(note => note.id === noteId);
    gNotes[idx].style.backgroundColor = color;
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

function pinToStart(noteId) {
    const idx = gNotes.findIndex(note => note.id === noteId);
    let note = { ...gNotes[idx] };
    gNotes.splice(idx, 1);
    gNotes.unshift(note);
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

function updateLocalStorage() {
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

function addVideoNote(noteData) {

    let note = {
        id: utilService.makeId(),
        type: "noteVideo",
        isPinned: true,
        info: {
            videoUrl: noteData.val,
            title: "Video Title",
        },
        style: {
            backgroundColor: "#FFFFFF"
        }
    }
    gNotes.push(note);
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

function _createNotes() {
    let notes = utilService.loadFromStorage(STORAGE_KEY);
    if (notes) {
        return Promise.resolve(notes);
    } else {
        let notes = [
            {
                id: utilService.makeId(),
                type: "noteText",
                isPinned: true,
                info: {
                    txt: "my first note"
                },
                style: {
                    backgroundColor: "#D6ECCB"
                }
            },
            {
                id: utilService.makeId(),
                type: "noteImg",
                isPinned: true,
                info: {
                    url: "https://i.ytimg.com/vi/A4_Czor6KVY/maxresdefault.jpg",
                    title: "fun dog"
                },
                style: {
                    backgroundColor: "#D6ECCB"
                }
            },

        ];
        utilService.saveToStorage(STORAGE_KEY, notes);
        return Promise.resolve(notes);
    }
}
