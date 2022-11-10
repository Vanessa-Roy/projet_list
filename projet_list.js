let listArticlesAdded = [];
let listArticlesChecked = [];
const button = document.getElementById("button");
button.addEventListener("click",function(event){
    event.preventDefault();
});
const articleToAdd = document.getElementById("articleToAdd");
articleToAdd.addEventListener("input",function(event){
    if(articleToAdd.value === ""){
    button.setAttribute("disabled","true");
    } else {
    button.removeAttribute("disabled");   
    }
});
const removeAllAddedArticlesButton = document.getElementById('buttonForSupprAddedArticles');
const removeAllCheckedArticlesButton = document.getElementById('buttonForSupprCheckedArticles');
function addToTheList() {
    const articleAdded = document.getElementById("articleAdded");
    const article = document.getElementById("articleToAdd").value;
    listArticlesAdded.push(article);
    let li = document.createElement("li");
    li.innerHTML = "<label> <input type='checkbox' onclick='addToTheCheckedList(this)'/>" + article + "</label>";
    articleAdded.appendChild(li);
    articleToAdd.value="";
    button.setAttribute("disabled","true");
    showTheRemoveButton();
    console.log("articles ajoutés : ", listArticlesAdded);
    console.log("articles sélectionnés : ", listArticlesChecked);
}
function addToTheCheckedList(e) {
    if(e.checked === true) {
        listArticlesChecked.push(e.parentElement.textContent);
        
        e.removeAttribute("onclick","addToTheCheckedList(this)");
        e.setAttribute("type","button");
        e.setAttribute("value","✅🛒");
        e.setAttribute("onclick","removeAndAddToTheList(this)")

        let li = e.parentElement.parentElement;
        li.appendChild(e.parentElement);
        articleChecked.appendChild(li);

        let indexOfArticleAdded = listArticlesAdded.indexOf(e.parentElement.textContent);
        listArticlesAdded.splice(indexOfArticleAdded, 1);
        showTheRemoveButton();

        console.log("articles ajoutés : ", listArticlesAdded);
        console.log("articles sélectionnés : ", listArticlesChecked);
    } else {
        console.log("not checked yet");
    }
}
function removeAndAddToTheList(e) {
    listArticlesAdded.push(e.parentElement.textContent);
    let li = e.parentElement.parentElement;
    let label = document.createElement('label');
    label.innerHTML = "<input type='checkbox' onclick='addToTheCheckedList(this)'></input>" + e.parentElement.textContent;
    li.appendChild(label);
    articleAdded.appendChild(li);
    let indexOfArticleChecked = listArticlesChecked.indexOf(e.parentElement.textContent);
    listArticlesChecked.splice(indexOfArticleChecked, 1);
    e.parentElement.innerHTML = "";
    showTheRemoveButton();
    console.log("articles ajoutés : ", listArticlesAdded);
    console.log("articles sélectionnés : ", listArticlesChecked);
}
function removeTheArticleChecked(e) {
    let indexOfArticleChecked = listArticlesChecked.indexOf(e.parentElement.textContent);
    listArticlesChecked.splice(indexOfArticleChecked, 1);
    e.parentElement.parentElement.remove();
    showTheRemoveButton();
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
function showTheRemoveButton() {
    if (listArticlesAdded.length != 0 && listArticlesChecked.length != 0) {
        removeAllAddedArticlesButton.removeAttribute("hidden");
        removeAllCheckedArticlesButton.removeAttribute("hidden");
    } else if (listArticlesAdded.length == 0 && listArticlesChecked.length != 0) {
        removeAllAddedArticlesButton.setAttribute("hidden","true");
        removeAllCheckedArticlesButton.removeAttribute("hidden");
    } else if (listArticlesAdded.length != 0 && listArticlesChecked.length == 0) {
            removeAllAddedArticlesButton.removeAttribute("hidden");
            removeAllCheckedArticlesButton.setAttribute("hidden","true");
    } else if (listArticlesAdded.length == 0 && listArticlesChecked.length == 0) {
            removeAllAddedArticlesButton.setAttribute("hidden","true");
            removeAllCheckedArticlesButton.setAttribute("hidden","true");
    }
};