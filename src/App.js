import "./styles/App.css";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [articleAdded, updateArticleAdded] = useState([]);
  const [articleChecked, updateArticleChecked] = useState([]);

  function checkArticle(article) {
    updateArticleAdded(articleAdded.filter((articles) => articles !== article));
    updateArticleChecked([...articleChecked, article]);
  }
  return (
    <div>
      <Header
        articleAdded={articleAdded}
        updateArticleAdded={updateArticleAdded}
      />
      <section>
        <div className="section1">
          {articleAdded.length === 0 && (
            <h4>Ici s'afficheront les articles ajoutés</h4>
          )}
          <ul>
            {articleAdded.map((article, index) => (
              <li key={`${article}-${index}`}>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => checkArticle(article)}
                  />
                  {article}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="section2">
          {articleChecked.length === 0 && (
            <h4>Ici s'afficheront les articles cochés</h4>
          )}
          {articleChecked.length !== 0 && (
            <button onClick={() => updateArticleChecked([])}>
              🗑️Nettoyer la liste
            </button>
          )}
          <ul>
            {articleChecked.map((article, index) => (
              <li key={`${article}-${index}`}>
                <label>
                  <input type="checkbox" />
                  {article}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
