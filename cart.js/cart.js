
//Get Sub Total by Row

function getSubTotalByRow(itemNode){
  var price = itemNode.querySelector(".price span").innerHTML
  var quantity = itemNode.getElementsByClassName("quantity")[0].value
  price = parseFloat(price)
  quantity = parseFloat(quantity)
  return (price * quantity).toFixed(2)
}




function updateSubTotalByRow(subTotal, itemNode){
itemNode.querySelector(".sub-total span").innerHTML = subTotal
}



function updateSubTotals(){
var rows = document.getElementsByClassName("row")
for(var i = 0; i < rows.length; i++) {
   var subTotal = getSubTotalByRow(rows[i])
   updateSubTotalByRow(subTotal, rows[i])
}
}
            //Get Total Price 
function getTotalPrice() {
var rows = document.getElementsByClassName("row")
var grandTotal = 0
for(var i = 0; i < rows.length; i++) {
  var subTotal = rows[i].querySelector(".sub-total span").innerHTML
  subTotal = parseFloat(subTotal)
  grandTotal += subTotal
}
document.querySelector("#Total span").innerHTML = grandTotal
}
                  
                         //Delete Rows

var deleteRowHandler = function(event) {
var container = document.getElementsByClassName("container")[0]
var row = event.currentTarget.parentNode
container.removeChild(row)
}

                   // Delete Button
function createDeleteButton(){
var button = document.createElement("button")
button.innerHTML = "Delete"
button.setAttribute("class", "delete btn btn-delete")

button.onclick = deleteRowHandler

return button
}

                   //Create Nodes 

function createSubTotalNode(){
var divNode = document.createElement("div")
divNode.setAttribute("class", "sub-total")
divNode.innerHTML = "$"

var spanNode = document.createElement("span")
spanNode.innerHTML = 0

divNode.appendChild(spanNode)

return divNode
}

function createQuantityInput(){
var inputNode = document.createElement("input")
inputNode.setAttribute("class", "quantity")

return inputNode

}

function createPriceNode(price){
var divNode = document.createElement("div")
divNode.setAttribute("class", "price")
divNode.innerHTML = "$"

var spanNode = document.createElement("span")
spanNode.innerHTML = price

divNode.appendChild(spanNode)

return divNode
}

function createNameNode(name) {
var node = document.createElement("div")
node.setAttribute("class", "name")
node.innerHTML = name

return node
}
         

                //create new rows
function createNewItemRow(itemName, itemUnitPrice){
var row = document.createElement("div")
row.setAttribute("class", "row")
row.appendChild(createNameNode(itemName))
row.appendChild(createPriceNode(itemUnitPrice))
row.appendChild(createQuantityInput())
row.appendChild(createSubTotalNode())
row.appendChild(createDeleteButton())

return row
}



                  //Create New Item

function createNewItem(){
var name = document.getElementById("name").value
var price = document.getElementById("price").value
var newRow = createNewItemRow(name, price)

var rowContainer = document.getElementsByClassName("container")[0]
var calcButton = document.getElementsByClassName("calculate")[0]
rowContainer.insertBefore(newRow, calcButton)
}

window.onload = function(){

var calculatePriceButton = document.getElementById('calc-prices-button');
var createItemButton = document.getElementById('new-item-create');

createItemButton.addEventListener("click", createNewItem) 
var deleteButtons = document.getElementsByClassName('btn-delete');

calculatePriceButton.onclick = function() {
  updateSubTotals()
  getTotalPrice()
};

createItemButton.onclick = createNewItem;
for(var i = 0; i<deleteButtons.length ; i++){
  deleteButtons[i].onclick = deleteRowHandler;
}
}
