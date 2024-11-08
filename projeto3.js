const prompt = require("prompt-sync") ()

function printInfo(){
    console.log("Contact Management System")
    console.log("-------------------------")
    console.log("1. Add a contact")
    console.log("2. Delete a contact")
    console.log("3. View contacts")
    console.log("4. Search contacts")
    console.log("5. Exit")
}

function addContact() {
    const name = prompt("Name: ")
    const email = prompt("Email: ")
    const contact = {
        name: name,
        email: email
    }
    contacts.push(contact)
    console.log("Added!")
}

function deleteContact() {
    for(let i = 0; i < contacts.length; i++){
        const contact = contacts[i]
    console.log((i + 1).toString() + ":", contact.name)
    }
    const number = parseInt(prompt("Enter an ID: "))
    if (isNaN(number) || number > contacts.length) {
        console.log("Invalid.")
        return
    }
    contacts.splice(number - 1, 1)
    console.log("Removed.")
}

function listContacts(contacts) {
    for (let contact of contacts){
        console.log("###########")
        console.log(contact.name)
    console.log(contact.email)
    }
}

function searchContact() {
    const searchString = prompt("Search: ").toLowerCase()
    const results = [];

    for (let contact of contacts) {
        if(contact.name.toLowerCase().includes(searchString)) results.push(contact)
    }

    listContacts(results)
} 

const contacts = []
let keepGoing = true;

printInfo()

while (keepGoing){
const number = prompt("Enter an operation(1-5): ")
console.log()
switch(number) {
    case "1":
        addContact()
        break;
    case "2":
        deleteContact()
        break;
    case "3":
        listContacts(contacts)
        break;
    case "4":
        searchContact()
        break;
    case "5":
        keepGoing = false;
        break;
        default:
            console.log("Unknown.")
        break;
    }
}