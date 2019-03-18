

//creates list items - generates one list item
function createListItem (text) {
  var li = document.createElement('li');
  li.textContent = text;
  return li;
}
// function with the arguments takes a parent and array of children, and for each child
//in that array it's gonna append that child to the parent element 
function appendChildren (parent, children) {
  children.forEach(function (child){
    parent.appendChild(child)
  });
}

// items.forEach(function(li) {
//   myList.appendChild(li);
// }); 



//we define the parent and child elements
var myList = document.getElementById('myList');
console.log(myList);

var items = [
  createListItem('dom'),
  createListItem('jessie'),
  createListItem('jay')

];

appendChildren(myList,items);


















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