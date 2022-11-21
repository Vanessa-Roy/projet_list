document.getElementById("articleToAdd").focus();
let jsonAdd = localStorage.getItem('listArticlesAdded');
let jsonCheck = localStorage.getItem('listArticlesChecked');
let jsonAddParse = JSON.parse(jsonAdd);
let jsonCheckParse = JSON.parse(jsonCheck);
let listArticlesAdded = [];
let listArticlesChecked = [];
const removeAllCheckedArticlesButton = document.getElementById('buttonForSupprCheckedArticles');


if (jsonAdd != null) {
    listArticlesAdded = jsonAddParse;
    for (element of jsonAddParse) {
        let li = document.createElement("li");
        li.innerHTML = "<label><input type='checkbox' onclick='addToTheCheckedList(this)'/>" + element + "</label>";
        articleAdded.appendChild(li);
        const textExplication = document.getElementById("explicationTextAddArticle");
        if (textExplication != null) {
            textExplication.remove();
        };
    }
} else {
    listArticlesAdded = [];
};

if (jsonCheck != null) {
    listArticlesChecked = jsonCheckParse;
    for (element of jsonCheckParse) {
        let li = document.createElement("li");
        li.innerHTML = "<label><input type='checkbox' value='true' disabled='true' checked />" + element + "</label>";
        articleChecked.appendChild(li);
        const textExplication = document.getElementById("explicationTextCheckArticle");
        if (textExplication != null) {
            textExplication.remove();
        };
        removeAllCheckedArticlesButton.removeAttribute("hidden");
    }
} else {
    listArticlesChecked = [];
};

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

function addToTheList() {
    const articleAdded = document.getElementById("articleAdded");
    const article = document.getElementById("articleToAdd").value;
    const textExplication = document.getElementById("explicationTextAddArticle");
    listArticlesAdded.push(article);
    let li = document.createElement("li");
    li.innerHTML = "<label><input type='checkbox' onclick='addToTheCheckedList(this)'/>" + article + "</label>";
    articleAdded.appendChild(li);
    articleToAdd.value="";
    button.setAttribute("disabled","true");
    if (textExplication != null) {
            textExplication.remove();
    };
    document.getElementById("articleToAdd").focus();
    showTheRemoveButton();
    localStorage.setItem('listArticlesAdded', JSON.stringify(listArticlesAdded));
}
function addToTheCheckedList(e) {
    if(e.checked === true) {
        listArticlesChecked.push(e.parentElement.textContent);
        const textExplication = document.getElementById("explicationTextCheckArticle");
        e.removeAttribute("onclick","addToTheCheckedList(this)");
        e.setAttribute("type","checkbox");
        e.setAttribute("value", "true");
        e.setAttribute("disabled", "true");

        let li = e.parentElement.parentElement;
        li.appendChild(e.parentElement);
        articleChecked.appendChild(li);

        let indexOfArticleAdded = listArticlesAdded.indexOf(e.parentElement.textContent);
        listArticlesAdded.splice(indexOfArticleAdded, 1);
        if (textExplication != null) {
                textExplication.remove();
        };
        showTheRemoveButton();
        localStorage.setItem('listArticlesAdded', JSON.stringify(listArticlesAdded));
        localStorage.setItem('listArticlesChecked', JSON.stringify(listArticlesChecked));
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
    localStorage.setItem('listArticlesAdded', JSON.stringify(listArticlesAdded));
    localStorage.setItem('listArticlesChecked', JSON.stringify(listArticlesChecked));
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