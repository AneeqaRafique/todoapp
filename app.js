var list = document.getElementById('list')

function addToDo(){
    var todoitem = document.getElementById('todoitem');

    //crate li tag with text node

    var li = document.createElement('li');
    var liText= document.createTextNode(todoitem.value);
    li.setAttribute("class","li")
    li.appendChild(liText);
    list.appendChild(li);
    todoitem.value = ""
   // create delete button
   var delbtn = document.createElement('button');
   var delText = document.createTextNode('delete');
   delbtn.setAttribute("class","butn")
   delbtn.setAttribute("onclick","deleteItem(this)")
   delbtn.appendChild(delText);
   li.appendChild(delbtn)
   // create edit button
   var editbtn = document.createElement('button');
   var editText = document.createTextNode('edit');
   editbtn.setAttribute("class","butn")
   editbtn.setAttribute("onclick","editItem(this)")
   editbtn.appendChild(editText);
   li.appendChild(editbtn)

}

function deleteItem(e){
    e.parentNode.remove()
}
function deleteAll(){
    list.innerHTML = "";
}
function editItem(e){
var val = e.parentNode.firstChild.nodeValue;
var editvalue = prompt("Edit to Do value", e.parentNode.firstChild.nodeValue);
e.parentNode.firstChild.nodeValue = editvalue
}