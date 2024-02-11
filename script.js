var inp = document.getElementById("inp");
var todoTxt = document.getElementById("txtContainer");

function  addItem() {
    var para = document.createElement('P');
    para.innerHTML = inp.value;
    inp.appendChild(para);
    todoTxt.appendChild(para);

    para.setAttribute("id","paraID");
    para.style.backgroundColor = "grey";
    para.style.padding = "10px";
    para.style.borderRadius = "5px";

    var btn = document.createElement('BUTTON');
    btn.setAttribute("onclick","delPara(this)");
    btn.setAttribute("class","dltBtn");
    btn.innerHTML = "Delete";
    
    btn.style.marginRight = "5px";
    btn.style.marginLeft = "5px";
    btn.style.backgroundColor = "white";
    btn.style.border = "none";
    btn.style.borderRadius = "5px";
    
    para.appendChild(btn);

    var editBtn = document.createElement('BUTTON');
    editBtn.setAttribute("onclick","editPara(this)");
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute("class","editBtn");
    
    editBtn.style.marginRight = "5px";
    editBtn.style.backgroundColor = "white";
    editBtn.style.border = "none";
    editBtn.style.borderRadius = "5px";
    
    para.appendChild(editBtn);
    inp.value = "";
}

function delPara(element){
    var parent = element.parentNode;
    parent.remove();
}

let dltBtn2 = document.getElementById("dlt");

function allDlt(element) {
    let dlt = document.getElementById("paraID");
    while (todoTxt.firstChild) {
        todoTxt.removeChild(todoTxt.firstChild);
      }   
    inp.value = ""; 
} 

