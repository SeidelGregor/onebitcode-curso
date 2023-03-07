function Show(){
    let nameByName = document.getElementsByName("fullname")
    let nameById = document.getElementById("name")
    let phoneByName = document.getElementsByName("phone")
    let phonesById = document.getElementById("phones")

    console.log(nameByName)
    for(cont = 0; cont < nameByName.length; cont++){
        console.log(nameByName[cont].value)
    }

    console.log(nameById)
    console.log(nameById.value)

    console.log(phoneByName)
    for(cont = 0; cont < phoneByName.length; cont++){
        console.log(phoneByName[cont].value)
    }

    console.log(phonesById)
    console.log(phonesById.value)
}