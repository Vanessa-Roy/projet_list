const listArticlesAdded = [];
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
    li.innerHTML = article;
    checkbox.setAttribute("type","checkbox");
    articleAdded.appendChild(li);
    articleAdded.appendChild(checkbox);
    console.log(listArticlesAdded);
}