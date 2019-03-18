//-------------------------------------
// APPEND LIST
//-------------------------------------

document.getElementById('append-list-button').addEventListener('click',function(){
  createListItem();
})


//creates list items - generates one list item
function createListItem (text) {
  var li = document.createElement('li');
  li.textContent = text;
  return li;
}
// function with the arguments takes a parent and array of children, and for each child
//in that array it's gonna append that child to the parent element 
// function appendChildren (parent, children) {
//   children.forEach(function (child){
//     parent.appendChild(child)
//   });
// }

//we define the parent and child elements
var myList = document.getElementById('myList');
// console.log(myList);

var items = [
  createListItem('dom'),
  createListItem('jessie'),
  createListItem('jay')

];

items.forEach(function(li) {
  myList.appendChild(li);
}); 

//linked to first function
// appendChildren(myList,items);


//-------------------------------------
// APPEND DIVS
//-------------------------------------

// creating a varible, telling the dom what we want it to be
var element = document.createElement('div');
    element.style.cssText = "width: 12em; height: 12em; background: #c8a2c8;";

    element.onclick = (function(){alert ('u clickd da div');});

// telling it grab the node (div-two)
var target = document.getElementById('div-two');

// targeting the parent node (div) 
// telling it we want the object that we named (var element)
//and telling to insert before our target (var div-two)
document.getElementById('appendDivs').insertBefore(element, target);
// document.getElementById('appendDivs').appendChild(element);

  




































// var topArtist = topArtist;

// topArtist = [
  
//   {
//     number : 1,
//     genre : "rap",
//     followers: 1200,
//     name : "Post Malone"
//   },
//   {
//     number : 2,
//     genre : "pop",
//     followers: 2100,
//     name : "Arianna Grande"
//   },
//   {
//     number : 3,
//     genre : "R&B",
//     followers: 900,
//     name : "Khalid"
//   },
//   {
//     number : 4,
//     genre : "electronic",
//     followers: 800,
//     name : "TENDER"
//   },
//   {
//     number : 5,
//     genre : "rap",
//     followers: 500,
//     name : "EarthGang"
//   }
// ]

// topArtist.map(summary => summary);
// console.log(summary);