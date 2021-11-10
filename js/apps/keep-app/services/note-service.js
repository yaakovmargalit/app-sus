import { utilService } from "../../../services/util-service.js"


export const noteService = {
    getNotes,
    addNote,
    addTxtNote

}


var gNotes = [];
const NOTE_KEY = 'notes'
// const notesDB = utilService.loadFromStorage(NOTE_KEY) || _createSamplesNotes()

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
            backgroundColor: "#BFE4DD"
        }
    }
    gNotes.push(note);
    utilService.saveToStorage(NOTE_KEY, gNotes);
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTE_KEY);
    if (notes) {
        return Promise.resolve(notes);
    } else {
        let notes = [
            {
                id: utilService.makeId(),
                type: "noteText",
                isPinned: true,
                info: {
                    txt: "Bye bye Trump :)"
                },
                style: {
                    backgroundColor: "#F6B6B4"
                }
            },
        ]
        utilService.saveToStorage(NOTE_KEY, notes);
        return Promise.resolve(notes);
    }
}
















