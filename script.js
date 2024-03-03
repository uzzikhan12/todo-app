var inp = document.getElementById("inp");
var parent = document.getElementById("parent");

function addItem(){
    var pera = document.createElement('P');
    pera.setAttribute('class','para');
    var text = inp.value;
    var finalText = document.createTextNode(text);
    pera.appendChild(finalText);

    var editBtn = document.createElement('BUTTON');
    editBtn.setAttribute('class', 'addBtn');
    editBtn.setAttribute('onclick', 'editItems(this)');
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';

    var delBtn = document.createElement("BUTTON");
    delBtn.setAttribute('class', 'addBtn');
    delBtn.setAttribute('onclick', 'delItems(this)');
    delBtn.innerHTML= "<i class='fa fa-trash'></i>";

    var btnParent = document.createElement('DIV');
    btnParent.appendChild(editBtn);
    btnParent.appendChild(delBtn);
    pera.appendChild(btnParent);

    parent.appendChild(pera);
    console.log(pera);
    inp.value = "";
}

function editItems(e){
    var edit = e.parentElement.parentElement;
    var newText = prompt("Enter new text" , edit.firstChild.nodeValue);
    edit.firstChild.nodeValue = newText;
}

function delItems(e){
    var del = e.parentElement.parentElement;
    parent.removeChild(del);
}

function deleteItems(){
    parent.innerHTML = "";
}
