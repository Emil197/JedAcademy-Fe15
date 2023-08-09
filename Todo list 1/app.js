var items = ["item 1", "item 2", "item 3", "item 4"];
var list = document.querySelector("#mylist");
var html = "";



items.forEach(function (item) {
    create(item);
});
list.addEventListener("click", function (item) {
    if (item.target.tagname = "li") {
        item.target.classList.toggle("checked")
    }

})

document.querySelector("#btnCreate").onclick = function () {
    var item = document.querySelector("#txtitem").value;
    if (item === "") {
        alert("deger gir")
        return;
    }
    create(item);

}
function create(item) {
    var li = document.createElement("li")
    var t = document.createTextNode(item)
    li.className = "list-group-item"
    li.appendChild(t)
    list.appendChild(li)
    var span = document.createElement("span")
    var text = document.createTextNode("X")
    span.className = "close"
    span.appendChild(text)
    li.appendChild(span)
    span.onclick = function () {
        var li = this.parentElement;
        li.style.display = "none"
    }
}