import "../styles/Header.css";
import { useState } from "react";

function Header({ listArticlesAdded, updateListArticlesAdded }) {
  const [articleInput, updateArticleInput] = useState("");

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
  return (
    <header>
      <h1>Ma liste de course</h1>
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
