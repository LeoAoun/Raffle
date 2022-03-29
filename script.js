values = []

function del(id, choice) {
    let element = document.getElementById(id)
    element.remove()
    values = values.filter(value => value != choice)
}

function addvalue() {
    
    let id = Date.now()
    let choice = document.getElementById("inputT").value
    let list = document.getElementById("list")
    if(choice == ''){

    }else{
    values.push(choice)
    list.innerHTML += `<li id="${id}">${choice}<button class="x" onclick="del('${id}','${choice}')">X</button></li>`
  
    }
}

function clean(){
    document.getElementById("inputT").value = ''
}

function sortear(){
    result = Math.floor(Math.random()*(values.length))

    if(values[result] == undefined){
        document.getElementById("result").innerHTML = `<div style="color: red">(Please, enter a value)</div>`
    }else{

   
    document.getElementById("result").innerHTML = values[result]
    
    }
}