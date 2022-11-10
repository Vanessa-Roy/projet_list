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
    console.log("articles ajoutés : ", listArticlesAdded);
    console.log("articles sélectionnés : ", listArticlesChecked);
}
function addToTheCheckedList(e) {
    if(e.checked === true) {
        listArticlesChecked.push(e.parentElement.textContent);
        let li = document.createElement('li');
        li.appendChild(e.parentElement);
        articleChecked.appendChild(li);
        e.removeAttribute("onclick","addToTheCheckedList(this)");
        e.setAttribute("type","button");
        e.setAttribute("value","remettre dans les articles ajoutés");
        e.setAttribute("class","backToTheList");
        e.setAttribute("onclick","removeAndAddToTheList(this)")
        let indexOfArticleAdded = listArticlesAdded.indexOf(e.parentElement.textContent);
        let articleAddedRemoved = listArticlesAdded.splice(indexOfArticleAdded, 1);
        console.log("articles ajoutés : ", listArticlesAdded);
        console.log("articles sélectionnés : ", listArticlesChecked);
    } else {
        console.log("not checked yet");
    }
}
function removeAndAddToTheList(e) {
    listArticlesAdded.push(e.parentElement.textContent);
    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.setAttribute("type","checkbox");
    checkbox.setAttribute("onclick","addToTheCheckedList(this)");
    let label = document.createElement('label');
    label.innerHTML = e.parentElement.textContent;
    label.appendChild(checkbox);
    li.appendChild(label);
    articleAdded.appendChild(li);
    let indexOfArticleChecked = listArticlesChecked.indexOf(e.parentElement.textContent);
    let articleCheckedRemoved = listArticlesChecked.splice(indexOfArticleChecked, 1);
    e.parentElement.innerHTML = "";
    console.log("articles ajoutés : ", listArticlesAdded);
    console.log("articles sélectionnés : ", listArticlesChecked);
}