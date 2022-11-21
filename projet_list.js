document.getElementById("articleToAdd").focus();
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
const removeAllCheckedArticlesButton = document.getElementById('buttonForSupprCheckedArticles');

function addToTheList() {
    const articleAdded = document.getElementById("articleAdded");
    const article = document.getElementById("articleToAdd").value;
    const textExplication = document.getElementById("explicationTextAddArticle");
    listArticlesAdded.push(article);
    let li = document.createElement("li");
    li.innerHTML = "<label> <input type='checkbox' onclick='addToTheCheckedList(this)'/>" + article + "</label>";
    articleAdded.appendChild(li);
    articleToAdd.value="";
    button.setAttribute("disabled","true");
    if (textExplication != null) {
            textExplication.remove();
    };
    article.focus();
    showTheRemoveButton();
}
function addToTheCheckedList(e) {
    if(e.checked === true) {
        listArticlesChecked.push(e.parentElement.textContent);
        const textExplication = document.getElementById("explicationTextCheckArticle");
        e.removeAttribute("onclick","addToTheCheckedList(this)");
        e.setAttribute("type","checkbox");
        e.setAttribute("value", "true");
        e.setAttribute("disabled", "true");
        e.setAttribute("onclick","removeAndAddToTheList(this)")

        let li = e.parentElement.parentElement;
        li.appendChild(e.parentElement);
        articleChecked.appendChild(li);

        let indexOfArticleAdded = listArticlesAdded.indexOf(e.parentElement.textContent);
        listArticlesAdded.splice(indexOfArticleAdded, 1);
        if (textExplication != null) {
                textExplication.remove();
        };
        showTheRemoveButton();
    } else {
        console.log("not checked yet");
    }
}

function removeAllArticlesChecked() {
    let ul = document.getElementById("articleChecked")
    ul.innerHTML = "";
    listArticlesChecked = [];
    document.getElementById("articleToAdd").focus();
    showTheRemoveButton();

}

function showTheRemoveButton() {
    if (listArticlesAdded.length != 0 && listArticlesChecked.length != 0) {
        removeAllCheckedArticlesButton.removeAttribute("hidden");
    } else if (listArticlesAdded.length == 0 && listArticlesChecked.length != 0) {
        removeAllCheckedArticlesButton.removeAttribute("hidden");
        document.getElementById("articleAdded").innerHTML = "<p id='explicationTextAddArticle'> ici s'afficheront les articles ajoutés </p>";
    } else if (listArticlesAdded.length != 0 && listArticlesChecked.length == 0) {
        removeAllCheckedArticlesButton.setAttribute("hidden","true");
        document.getElementById("articleChecked").innerHTML = "<p id='explicationTextCheckArticle'> ici s'afficheront les articles achetés </p>";
    } else if (listArticlesAdded.length == 0 && listArticlesChecked.length == 0) {
        removeAllCheckedArticlesButton.setAttribute("hidden","true");
        document.getElementById("articleAdded").innerHTML = "<p id='explicationTextAddArticle'> ici s'afficheront les articles ajoutés </p>";
        document.getElementById("articleChecked").innerHTML = "<p id='explicationTextCheckArticle'> ici s'afficheront les articles achetés </p>";
    }
};