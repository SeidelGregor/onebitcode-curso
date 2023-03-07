function addPhone(){
    let phoneForm = document.getElementById("phones")
    let phonePosition = phoneForm.children.length + 1
    let newPhone = phoneForm.children[phoneForm.children.length -1].cloneNode(true)
    newPhone.querySelector("label").innerText = "Telefone " + phonePosition + ": "
    newPhone.querySelector("input").value = ""
    phoneForm.appendChild(newPhone)
}

function showPhone(){
    let message = ""
    const phones = document.getElementsByName("phone")
    phones.forEach((phone, index) =>{
        message += "Telefone " + (index + 1) + ": " + (phone.value) + "\n"
    })
    alert(message)
}