import "../styles/Header.css";
import { useState } from "react";

function Header({ articleAdded, updateArticleAdded }) {
  const [articleInput, updateArticleInput] = useState("");

  function submitArticle(e) {
    updateArticleAdded([...articleAdded, articleInput]);
    updateArticleInput("");
    e.preventDefault();
  }
  return (
    <header>
      <h1>Ma liste de course</h1>
      <form onSubmit={submitArticle}>
        <input
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
