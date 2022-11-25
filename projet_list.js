// ~~~~~~~~ general part ~~~~~~~~

// initialise the variables needed
let listArticlesAdded = [];
let listArticlesChecked = [];

// place the cursor into the form when the page loads
document.getElementById("articleToAdd").focus();

// decide to display the remove button or not
const removeAllCheckedArticlesButton = document.getElementById('buttonForSupprCheckedArticles');
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

// get the previous articles added and articles checked when the page loads
let jsonAdd = localStorage.getItem('listArticlesAdded');
let jsonCheck = localStorage.getItem('listArticlesChecked');

let jsonAddParse = JSON.parse(jsonAdd);
let jsonCheckParse = JSON.parse(jsonCheck);

// check if there are already previous articles added or not
if (jsonAdd != null) {
    listArticlesAdded = jsonAddParse;
    // create for each articles added a new line
    for (element of jsonAddParse) {
        let li = document.createElement("li");
        li.innerHTML = "<label><input type='checkbox' onclick='addToTheCheckedList(this)'/>" + element + "</label>";
        // add to the html into the id block articleAdded
        articleAdded.appendChild(li);
        // check if there is the explanation text and in that case remove it
        const textExplication = document.getElementById("explicationTextAddArticle");
        if (textExplication != null) {
            textExplication.remove();
        };
    }
} else {
    listArticlesAdded = [];
};
// check if there are already previous articles checked or not
if (jsonCheck != null) {
    listArticlesChecked = jsonCheckParse;
    // create for each articles checked a new line
    for (element of jsonCheckParse) {
        let li = document.createElement("li");
        li.innerHTML = "<label><input type='checkbox' value='true' disabled='true' checked />" + element + "</label>";
        // add to the html into the id block articleChecked
        articleChecked.appendChild(li);
        // check if there is the explanation text and in that case remove it
        const textExplication = document.getElementById("explicationTextCheckArticle");
        if (textExplication != null) {
            textExplication.remove();
        };
        // display the remove button
        removeAllCheckedArticlesButton.removeAttribute("hidden");
    }
} else {
    listArticlesChecked = [];
};

// ~~~~~~~~ form part ~~~~~~~~

// initialise the variables needed
const button = document.getElementById("button");
const articleToAdd = document.getElementById("articleToAdd");
// check if there are any text into the form before accept the button click
articleToAdd.addEventListener("input",function(event){
    if(articleToAdd.value === ""){
        button.setAttribute("disabled","true");
    } else {
        button.removeAttribute("disabled");   
    }
});

// ~~~~~~~~ section general part ~~~~~~~~

// ~~~ section part 1 (Article added) ~~~

// ~~ function for add a new article into the list ~~
function addToTheList() {
    // initialise the variables needed
    const articleAdded = document.getElementById("articleAdded");
    const article = document.getElementById("articleToAdd").value;
    // add the new article into the right object
    listArticlesAdded.push(article);
    // create a new line for the article
    let li = document.createElement("li");
    li.innerHTML = "<label><input type='checkbox' onclick='addToTheCheckedList(this)'/>" + article + "</label>";
    // add to the html into the id block articleAdded
    articleAdded.appendChild(li);
    //reset the form input text
    articleToAdd.value="";
    button.setAttribute("disabled","true");
    // check if there is the explanation text and in that case remove it
    const textExplication = document.getElementById("explicationTextAddArticle");
    if (textExplication != null) {
            textExplication.remove();
    };
    // place the cursor into the form when the article is added
    document.getElementById("articleToAdd").focus();
    // call the function to check if we need to display the remove button or not
    showTheRemoveButton();
    // send the information to local storage in case the user returns to this page after loading the same nav
    localStorage.setItem('listArticlesAdded', JSON.stringify(listArticlesAdded));
}

// ~~~ section part 2 (Article checked) ~~~

// ~~ function for check an article from the listn ~~
function addToTheCheckedList(e) {
    // add the new article into the right object and remove it from the wrong object
    listArticlesChecked.push(e.parentElement.textContent);
    let indexOfArticleAdded = listArticlesAdded.indexOf(e.parentElement.textContent);
    listArticlesAdded.splice(indexOfArticleAdded, 1);
    // edit the  article's line by removing or add attributes
    e.removeAttribute("onclick","addToTheCheckedList(this)");
    e.setAttribute("type","checkbox");
    e.setAttribute("value", "true");
    e.setAttribute("disabled", "true");
    // move into the html id block articleChecked
    let li = e.parentElement.parentElement;
    articleChecked.appendChild(li);
    // check if there is the explanation text and in that case remove it
    const textExplication = document.getElementById("explicationTextCheckArticle");
    if (textExplication != null) {
            textExplication.remove();
    };
    // call the function to check if we need to display the remove button or not
    showTheRemoveButton();
    // send the information to local storage in case the user returns to this page after loading the same nav
    localStorage.setItem('listArticlesAdded', JSON.stringify(listArticlesAdded));
    localStorage.setItem('listArticlesChecked', JSON.stringify(listArticlesChecked));
}

// ~~ function for remove all the articles checked ~~
function removeAllArticlesChecked() {
    // initialise the variables needed
    let ul = document.getElementById("articleChecked")
    //reset the section part 2 articleChecked
    ul.innerHTML = "";
    //reset the right object
    listArticlesChecked = [];
    // place the cursor into the form when the remove button is triggered
    document.getElementById("articleToAdd").focus();
    // call the function to check if we need to display the remove button or not
    showTheRemoveButton();
    // send the information to local storage in case the user returns to this page after loading the same nav
    localStorage.setItem('listArticlesAdded', JSON.stringify(listArticlesAdded));
    localStorage.setItem('listArticlesChecked', JSON.stringify(listArticlesChecked));
}