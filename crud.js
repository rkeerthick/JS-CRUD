let list = [
    {id:1, name:"aaa", email:"a@mail.com"}, {id:2, name:"bbb", email:"b@mail.com"}
]
let id = 3
function readAll() {
    localStorage.setItem("object", JSON.stringify(list))
    let table_data = document.querySelector(".form-table")

    let obj = localStorage.getItem('object')
    let obj_data = JSON.parse(obj)
    let element = ""

    obj_data.map((prop) => (
        element += `
        <tr>
            <td>${prop.name}</td>
            <td>${prop.email}</td>
            <td>
                <button class="edit" onclick="{edit(${prop.id})}">Edit</button>
                <button class="delete" onclick="{remove(${prop.id})}">Delete</button>
            </td>
        </tr>
        `
    ))

    table_data.innerHTML = element
}

function create() {
    document.querySelector(".input-form").style.display = "block"
    document.querySelector(".create").style.display = "none"

    document.querySelector(".table").style.opacity = 0.15;

}

function add() {
    let name = document.querySelector("#name").value
    let email = document.querySelector("#email").value
    document.querySelector(".table").style.opacity = 1;
    let new_object = {
        id:id, name:name, email:email
    }
    id++;

    list.push(new_object)

    document.querySelector(".input-form").style.display = "none"
    document.querySelector(".create").style.display = "block"

    readAll();
}

function edit(id) {
    document.querySelector(".update-form").style.display = "block"
    document.querySelector(".input-form").style.display = "none"
    document.querySelector(".create").style.display = "none"
    
    document.querySelector(".table").style.opacity = 0.15;

    let obj = list.find(prop => prop.id === id)
    document.querySelector("#uid").value = obj.id
    document.querySelector("#uname").value = obj.name
    document.querySelector("#uemail").value = obj.email
}

function update() {

    document.querySelector(".table").style.opacity = 1;
    let id = parseInt(document.querySelector("#uid").value)
    let name = document.querySelector("#uname").value
    let email = document.querySelector("#uemail").value
    let index = list.findIndex(prop => prop.id === id)
    list[index] = {id, name, email}

    document.querySelector(".update-form").style.display = "none"
    document.querySelector(".create").style.display = "block"

    readAll()
}

function remove(id) {
    list = list.filter(prop => prop.id != id)
    readAll();
}