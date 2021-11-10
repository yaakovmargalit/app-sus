import { utilService } from './../../../services/util-service.js';
import { storageService } from './../../../services/async-storage-service.js';
const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}


const EMAILS_KEY = 'emails';
_createEmails()


export const emailService = {
    query,
    remove,
    save,
    getEmptyEmail,
    getById,
    removeReview,
    add,
    loggedinUser
};

function query() {
    return storageService.query(EMAILS_KEY)
}

function remove(emailId) {
    return storageService.remove(EMAILS_KEY, emailId);
}

function add(email) {
    var newEmail = getEmptyEmail()
    console.log(email)
    console.log(newEmail)
    storageService.post('books', newEmail)
    return newEmail
}


function removeReview(bookId, reviewId) {
    console.log(bookId)
    const book = storageService.get(EMAILS_KEY, bookId);
    return book.then(book => {
        console.log(book)
        var idx = book.reviews.findIndex(review => review.id === reviewId)
        book.reviews.splice(idx, 1)
        storageService.put(EMAILS_KEY, book)
    })

}

function save(book) {
    if (book.id) return storageService.put(EMAILS_KEY, book);
    else return storageService.post(EMAILS_KEY, book);
}

function getById(emailId) {
    return query()
        .then(emails => emails.find(email => email.id === emailId))
}

function getEmptyEmail() {
    return {
        id: utilService.makeId(9),
        subject: '',
        body: '',
        d: false,
        sentAt: 1551133930594,
        from: '',
        fromName: '',
        to: ''
    }
}




function _createEmails() {
    let emails = utilService.loadFromStorage(EMAILS_KEY);
    if (!emails || !emails.length) {
        emails = [{
                id: 'e101',
                subject: 'Important message',
                body: 'Would love to catch up sometimes',
                d: false,
                sentAt: 15511895784587,
                from: 'ebay@ebay.com',
                fromName: 'eBay',
                to: 'user@appsus.com',
            },
            {
                id: 'e102',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                d: false,
                sentAt: 15511335745874,
                from: 'ted@ebay.com',
                fromName: 'TED',
                to: 'user@appsus.com',
            },
            {
                id: 'e103',
                subject: 'Time is up',
                body: 'Would love to catch up sometimes',
                d: false,
                sentAt: 15511895784887,
                from: 'netflix@ebay.com',
                fromName: 'Netflix',
                to: 'user@appsus.com',
            },
            {
                id: 'e104',
                subject: 'The invitation has arrived',
                body: 'Would love to catch up sometimes',
                d: false,
                sentAt: 15511887775898,
                from: 'amazon@ebay.com',
                fromName: 'Amazon',
                to: 'user@appsus.com',
            },
            {
                id: 'e105',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                d: false,
                sentAt: 15511899875874,
                from: 'udemy@ebay.com',
                fromName: 'Udemy',
                to: 'user@appsus.com',
            },
            {
                id: 'e106',
                subject: 'The course is over',
                body: 'Would love to catch up sometimes',
                d: false,
                sentAt: 15511885788796,
                from: 'google@ebay.com',
                fromName: 'Google',
                to: 'user@appsus.com',
            }

        ]
        utilService.saveToStorage(EMAILS_KEY, emails);
    }
    return emails;
}