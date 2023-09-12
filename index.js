var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', onSubmit);
// Delete event
itemList.addEventListener('click', onDelete);
// Filter event
filter.addEventListener('keyup', onFilter);


//adding edit button to all list item
for(let i = 0;itemList.clientHeight;i++){
  const editBtn = document.createElement('button');
  editBtn.className = 'btn btn-sm float-right edition';
  editBtn.appendChild(document.createTextNode('EDIT'));
  itemList[i].appendChild(editBtn);
}
// Add item
function onSubmit(e){
  e.preventDefault();


  const inputValue=document.getElementById('item').value;
  const description =document.getElementById('description').value;
  

  const li = document.createElement('li');

  li.className = 'list-group-item';

  var newText = document.createTextNode(inputValue);
  var descriptionNode = document.createTextNode('description');

   li.appendChild(newText);
   li.appendChild(descriptionNode)


   const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('EDIT'));

  li.appendChild(deleteBtn);

  //adding Edit button
  const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-danger btn-sm float-right delete';
  editBtn.appendChild(document.createTextNode('X'));

  li.appendChild(editBtn);

  item.appendChild();
  

// Remove item
function onDelete(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      item.removeChild(li);
    }
  }
}

// Filter Items
function onFilter(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Getting list
  var items = itemList.getElementsByTagName('li');
  // Converting item from HTML collection to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1 ){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
}