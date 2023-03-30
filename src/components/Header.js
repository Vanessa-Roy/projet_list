import "../styles/Header.css";
import { useState } from "react";

function Header({
  listArticlesAdded,
  updateListArticlesAdded,
  currentListId,
  updateCurrentListId,
}) {
  const [articleInput, updateArticleInput] = useState("");
  const [showChangeListIdButton, updateShowChangeListIdButton] = useState(true);

  function submitArticle(e) {
    if (listArticlesAdded.map((el) => el.article).includes(articleInput)) {
      alert("Vous avez déjà entré cet article");
    } else {
      updateListArticlesAdded([
        ...listArticlesAdded,
        { article: articleInput, quantité: "" },
      ]);
      updateArticleInput("");
      e.preventDefault();
    }
  }
  function changeListId() {
    console.log("I'm here");
    // here the function to get the proper list with the new id
  }
  return (
    <header>
      <h1>Ma liste de course</h1>
      <div id="listId">
        <div id="currentListId">N° d'identifiant unique : {currentListId}</div>
        <div id="getListId">
          {showChangeListIdButton && (
            <button
              id="getListIdButton"
              type="button"
              onClick={() => updateShowChangeListIdButton(false)}
            >
              Si vous avez déjà l'identifiant d'une liste, appuyez ici 📜
            </button>
          )}
          {!showChangeListIdButton && (
            <form id="changeListId" onSubmit={changeListId}>
              <input
                className="inputListId"
                type="number"
                placeholder="entrez l'identifiant ici"
                onChange={(e) => updateCurrentListId(e.target.value)}
              />
              <input type="submit" value="OK" />
            </form>
          )}
        </div>
      </div>
      <form onSubmit={submitArticle}>
        <input
          className="inputArticle"
          type="text"
          autoFocus
          placeholder="ajoutez un article ici"
          value={articleInput}
          onChange={(e) => updateArticleInput(e.target.value)}
        />
        <input
          type="submit"
          value="➕"
          disabled={articleInput === "" ? true : false}
        />
      </form>
    </header>
  );
}

export default Header;
