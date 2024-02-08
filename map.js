let storeContact = new Map()

storeContact.set("Ishant", {
age: 20,
email: "jishu@gmail.com",
location: "Delhi"
})

storeContact.set("Hunny", {
age: 19,
email:"hunny@prateek's-beta.com",
location: "Ghaziabad"
})

storeContact.set("Jatin", {
age: 21,
email: "jatin@bhai.com",
location: "Shahdara"
})

function getContact(name){
    return storeContact.get(name);
}
console.log(getContact("Hunny"));