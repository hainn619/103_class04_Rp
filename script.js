//alert("hello !!");

let todolist = [];


function addarray(){
    let task = document.getElementById('todo').value;
    todolist.push(task);
    console.log(todolist);    
    // document.write(task);
    //document.getElementById('todolist').innerHTML='<li>${todolist[i]}</li>'
    //document.write(`<li>${todolist[i]}</li>`);
}

function showlist(){   
    let ullist = document.getElementById('todolist');
    ullist.innerHTML="";    
    let bodylist = "";

    for (let i = 0; i < todolist.length; i++) {
        bodylist += ` <li> ${todolist[i]}</li>`;
    }
    ullist.innerHTML = bodylist;
}
