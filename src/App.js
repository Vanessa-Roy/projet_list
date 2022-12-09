import "./styles/App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";

function App() {
  const [articleAdded, updateArticleAdded] = useState([]);
  const [articleChecked, updateArticleChecked] = useState([]);

  useEffect(() => {
    let jsonAdd = localStorage.getItem("articleAdded");
    jsonAdd != null && updateArticleAdded(JSON.parse(jsonAdd));
  }, []);

  useEffect(() => {
    localStorage.setItem("articleAdded", JSON.stringify(articleAdded));
  }, [articleAdded]);

  useEffect(() => {
    let jsonChecked = localStorage.getItem("articleChecked");
    jsonChecked != null && updateArticleChecked(JSON.parse(jsonChecked));
  }, []);

  useEffect(() => {
    localStorage.setItem("articleChecked", JSON.stringify(articleChecked));
  }, [articleChecked]);

  function checkArticle(article) {
    updateArticleAdded(articleAdded.filter((articles) => articles !== article));
    updateArticleChecked([...articleChecked, article]);
  }
  function uncheckArticle(article) {
    updateArticleChecked(
      articleChecked.filter((articles) => articles !== article)
    );
    updateArticleAdded([...articleAdded, article]);
  }
  return (
    <div>
      <Header
        articleAdded={articleAdded}
        updateArticleAdded={updateArticleAdded}
      />
      <section>
        <div className="section1">
          {articleAdded.length === 0 ? (
            <h4>Ici s'afficheront les articles ajoutés</h4>
          ) : (
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
          )}
        </div>
        <div className="section2">
          {articleChecked.length !== 0 && (
            <button
              className="resetButton"
              onClick={() => updateArticleChecked([])}
            >
              🗑️Nettoyer la liste
            </button>
          )}
          {articleChecked.length === 0 ? (
            <h4>Ici s'afficheront les articles cochés</h4>
          ) : (
            <ul>
              {articleChecked.map((article, index) => (
                <li key={`${article}-${index}`}>
                  <label>
                    <input
                      type="checkbox"
                      checked
                      onChange={() => uncheckArticle(article)}
                    />
                    {article}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <footer>
        <h4>Made with ❤️ by Vanessa Roy</h4>
      </footer>
    </div>
  );
}

export default App;
