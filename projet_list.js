const listArticlesAdded = [];
const listArticlesChecked = [];
const button = document.getElementById("button");
button.addEventListener("click",function(event){
    event.preventDefault();
});
function addToTheList() {
    const articleAdded = document.getElementById("articleAdded");
    const article = document.getElementById("articleToAdd").value;
    listArticlesAdded.push(article);
    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.setAttribute("type","checkbox");
    checkbox.setAttribute("onclick","addToTheCheckedList(this)");
    let label = document.createElement('label');
    label.innerHTML = article;
    label.appendChild(checkbox);
    li.appendChild(label);
    articleAdded.appendChild(li);
}
function addToTheCheckedList(e) {
    if(e.checked === true) {
        listArticlesChecked.push(e.parentElement.textContent);
        let li = document.createElement('li');
        li.appendChild(e.parentElement);
        articleChecked.appendChild(li);
        e.removeAttribute("onclick","addToTheCheckedList(this)");
        e.setAttribute("type","hidden");
    } else {
        console.log("not checked yet");
    }
    console.log(listArticlesChecked);
}