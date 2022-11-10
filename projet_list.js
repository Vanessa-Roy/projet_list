let listArticlesAdded = [];
let listArticlesChecked = [];
const button = document.getElementById("button");
button.addEventListener("click",function(event){
    event.preventDefault();
});
const removeAllAddedArticlesButton = document.getElementById('buttonForSupprAddedArticles');
const removeAllCheckedArticlesButton = document.getElementById('buttonForSupprCheckedArticles');
function addToTheList() {
    removeAllAddedArticlesButton.removeAttribute("hidden");
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
        removeAllCheckedArticlesButton.removeAttribute("hidden");
        listArticlesChecked.push(e.parentElement.textContent);
        e.removeAttribute("onclick","addToTheCheckedList(this)");
        e.setAttribute("type","button");
        e.setAttribute("value","✅");
        e.setAttribute("onclick","removeAndAddToTheList(this)")
        let trashButton = document.createElement('input');
        trashButton.setAttribute("type","button");
        trashButton.setAttribute("value","🗑️");
        trashButton.setAttribute("onclick","removeTheArticleChecked(this)")
        let li = e.parentElement.parentElement;
        e.parentElement.appendChild(trashButton);
        li.appendChild(e.parentElement);
        articleChecked.appendChild(li);
        let indexOfArticleAdded = listArticlesAdded.indexOf(e.parentElement.textContent);
        let articleAddedRemoved = listArticlesAdded.splice(indexOfArticleAdded, 1);
        ShowTheRemoveButton();

        console.log("articles ajoutés : ", listArticlesAdded);
        console.log("articles sélectionnés : ", listArticlesChecked);
    } else {
        console.log("not checked yet");
    }
}
function removeAndAddToTheList(e) {
    listArticlesAdded.push(e.parentElement.textContent);
    let li = e.parentElement.parentElement;
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
    ShowTheRemoveButton();
    console.log("articles ajoutés : ", listArticlesAdded);
    console.log("articles sélectionnés : ", listArticlesChecked);
}
function removeTheArticleChecked(e) {
    let indexOfArticleChecked = listArticlesChecked.indexOf(e.parentElement.textContent);
    let articleCheckedRemoved = listArticlesChecked.splice(indexOfArticleChecked, 1);
    e.parentElement.parentElement.remove();
    ShowTheRemoveButton();
    console.log("articles ajoutés : ", listArticlesAdded);
    console.log("articles sélectionnés : ", listArticlesChecked);
}
function removeAllArticlesChecked() {
    let ul = document.getElementById("articleChecked")
    ul.innerHTML = "";
    listArticlesChecked = [];
    removeAllCheckedArticlesButton.setAttribute("hidden","true");
    console.log("articles ajoutés : ", listArticlesAdded);
    console.log("articles sélectionnés : ", listArticlesChecked);
}
function removeAllArticlesAdded() {
    let ul = document.getElementById("articleAdded")
    ul.innerHTML = "";
    listArticlesAdded = [];
    removeAllAddedArticlesButton.setAttribute("hidden","true");
    console.log("articles ajoutés : ", listArticlesAdded);
    console.log("articles sélectionnés : ", listArticlesChecked);
}
function ShowTheRemoveButton() {
    if (listArticlesAdded.length != 0 && listArticlesChecked.length != 0) {
        removeAllAddedArticlesButton.removeAttribute("hidden");
        removeAllCheckedArticlesButton.removeAttribute("hidden");
        console.log("dans le listArticlesAdded.length != 0 && listArticlesChecked.length != 0","taille fichier article ajouté : ", listArticlesAdded.length,"taille fichier article checké : ",listArticlesChecked.length);
    } else if (listArticlesAdded.length == 0 && listArticlesChecked.length != 0) {
        removeAllAddedArticlesButton.setAttribute("hidden","true");
        removeAllCheckedArticlesButton.removeAttribute("hidden");
        console.log("dans le listArticlesAdded.length == 0 && listArticlesChecked.length != 0","taille fichier article ajouté : ", listArticlesAdded.length,"taille fichier article checké : ",listArticlesChecked.length);
    } else if (listArticlesAdded.length != 0 && listArticlesChecked.length == 0) {
            removeAllAddedArticlesButton.removeAttribute("hidden");
            removeAllCheckedArticlesButton.setAttribute("hidden","true");
            console.log("dans le listArticlesAdded.length != 0 && listArticlesChecked.length == 0","taille fichier article ajouté : ", listArticlesAdded.length,"taille fichier article checké : ",listArticlesChecked.length);
    } else if (listArticlesAdded.length == 0 && listArticlesChecked.length == 0) {
            removeAllAddedArticlesButton.setAttribute("hidden","true");
            removeAllCheckedArticlesButton.setAttribute("hidden","true");
            console.log("dans le listArticlesAdded.length == 0 && listArticlesChecked.length == 0","taille fichier article ajouté : ", listArticlesAdded.length,"taille fichier article checké : ",listArticlesChecked.length);
    }
};