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

function query(criteria) {
    return storageService.query(EMAILS_KEY)
        .then(emails => {
            return emails.filter(email => {

                return email.status === criteria.status
            })
        })
}

function remove(emailId) {
    return storageService.remove(EMAILS_KEY, emailId);
}

function add(email) {
    return storageService.post('emails', email)
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

function save(email) {
    return storageService.put(EMAILS_KEY, email);
}

function getById(emailId) {
    return query()
        .then(emails => emails.find(email => email.id === emailId))
}

function getEmptyEmail() {
    return {
        id: utilService.makeId(9),
        status: 'sent',
        subject: '',
        body: '',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        from: '',
        fromName: 'You',
        to: ''
    }
}




function _createEmails() {
    let emails = utilService.loadFromStorage(EMAILS_KEY);
    if (!emails || !emails.length) {
        emails = [{
                id: 'e101',
                status: 'inbox',
                subject: 'Important message',
                body: 'Would love to catch up sometimes',
                d: false,
                isStarred: false,
                sentAt: 15511895784587,
                from: 'ebay@ebay.com',
                fromName: 'eBay',
                to: 'user@appsus.com',
            },
            {
                id: 'e102',
                status: 'inbox',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                d: false,
                isStarred: false,
                sentAt: 15511335745874,
                from: 'ted@ebay.com',
                fromName: 'TED',
                to: 'user@appsus.com',
            },
            {
                id: 'e103',
                status: 'inbox',
                subject: 'Time is up',
                body: 'Would love to catch up sometimes',
                d: false,
                isStarred: false,
                sentAt: 15511895784887,
                from: 'netflix@ebay.com',
                fromName: 'Netflix',
                to: 'user@appsus.com',
            },
            {
                id: 'e104',
                status: 'inbox',
                subject: 'The invitation has arrived',
                body: 'Would love to catch up sometimes',
                d: false,
                isStarred: false,
                sentAt: 15511887775898,
                from: 'amazon@ebay.com',
                fromName: 'Amazon',
                to: 'user@appsus.com',
            },
            {
                id: 'e105',
                status: 'inbox',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                d: false,
                isStarred: false,
                sentAt: 15511899875874,
                from: 'udemy@ebay.com',
                fromName: 'Udemy',
                to: 'user@appsus.com',
            },
            {
                id: 'e106',
                status: 'inbox',
                subject: 'The course is over',
                body: 'Would love to catch up sometimes',
                d: false,
                isStarred: false,
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