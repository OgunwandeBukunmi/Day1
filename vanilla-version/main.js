
const button = document.getElementById("add-button");
const input = document.getElementById("input");
const List = document.querySelector(".Lists");

function Delete(e) {
  e.target.parentElement.remove();
}

function createElement(data) {
  const parentElement = document.createElement("li");
  const spanContent = document.createElement("span");
  const spanContentText = document.createTextNode(data);
  spanContent.appendChild(spanContentText);
  parentElement.appendChild(spanContent);
  let spanRemove = document.createElement("a");
  const spanRemoveText = document.createTextNode("\u00d7");
  spanRemove.onclick = Delete;
  spanRemove.appendChild(spanRemoveText);
  parentElement.appendChild(spanRemove);
  List.appendChild(parentElement);
}
button.addEventListener("click", (e) => {
  let data = input.value;
  createElement(data);
});
