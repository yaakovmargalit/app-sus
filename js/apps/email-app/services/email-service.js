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
        .then(emails => {
            return emails
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
        from: 'user@appsus.com',
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
                body: 'Would love to catch up sometimes Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                d: false,
                isRead: true,
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
                body: 'Would love to catch up sometimes Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                d: false,
                isRead: false,
                isStarred: true,
                sentAt: 15511335745874,
                from: 'ted@ebay.com',
                fromName: 'TED',
                to: 'user@appsus.com',
            },
            {
                id: 'e103',
                status: 'inbox',
                subject: 'Time is up',
                body: 'Would love to catch up sometimes Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                d: false,
                isRead: false,
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
                body: 'Would love to catch up sometimes Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                d: false,
                isRead: true,
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
                body: 'Would love to catch up sometimes Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                d: false,
                isRead: true,
                isStarred: true,
                sentAt: 15511899875874,
                from: 'udemy@ebay.com',
                fromName: 'Udemy',
                to: 'user@appsus.com',
            },
            {
                id: 'e106',
                status: 'inbox',
                subject: 'The course is over',
                body: 'Would love to catch up sometimes Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                d: false,
                isRead: false,
                isStarred: false,
                sentAt: 15511885788796,
                from: 'google@ebay.com',
                fromName: 'Google',
                to: 'user@appsus.com',
            },
            {
                id: 'e107',
                status: 'inbox',
                subject: 'The course is over',
                body: 'Would love to catch up sometimes Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                d: false,
                isRead: true,
                isStarred: false,
                sentAt: 15511885788796,
                from: 'google@ebay.com',
                fromName: 'Google',
                to: 'user@appsus.com',
            },
            {
                id: 'e108',
                status: 'inbox',
                subject: 'The course is over',
                body: 'Would love to catch up sometimes Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                d: false,
                isRead: false,
                isStarred: false,
                sentAt: 15511885788796,
                from: 'google@ebay.com',
                fromName: 'Google',
                to: 'user@appsus.com',
            },
            {
                id: 'e109',
                status: 'inbox',
                subject: 'The course is over',
                body: 'Would love to catch up sometimes Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                d: false,
                isRead: false,
                isStarred: false,
                sentAt: 15511885788796,
                from: 'google@ebay.com',
                fromName: 'Google',
                to: 'user@appsus.com',
            },
            {
                id: 'e110',
                status: 'inbox',
                subject: 'The course is over',
                body: 'Would love to catch up sometimes Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                d: false,
                isRead: false,
                isStarred: false,
                sentAt: 15511885788796,
                from: 'google@ebay.com',
                fromName: 'Google',
                to: 'user@appsus.com',
            },
            {
                id: 'e111',
                status: 'inbox',
                subject: 'The course is over',
                body: 'Would love to catch up sometimes Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                d: false,
                isRead: false,
                isStarred: false,
                sentAt: 15511885788796,
                from: 'google@ebay.com',
                fromName: 'Google',
                to: 'user@appsus.com',
            },
            {
                id: 'e112',
                status: 'inbox',
                subject: 'The course is over',
                body: 'Would love to catch up sometimes Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                d: false,
                isRead: false,
                isStarred: false,
                sentAt: 15511885788796,
                from: 'google@ebay.com',
                fromName: 'Google',
                to: 'user@appsus.com',
            },
            {
                id: 'e113',
                status: 'sent',
                subject: 'The course is over',
                body: 'Would love to catch up sometimes Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                d: false,
                isRead: false,
                isStarred: false,
                sentAt: 15511885788796,
                from: 'google@ebay.com',
                fromName: 'Google',
                to: 'user@appsus.com',
            },
            {
                id: 'e114',
                status: 'sent',
                subject: 'The course is over',
                body: 'Would love to catch up sometimes Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                d: false,
                isRead: false,
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