import "../styles/Section.css";

function Section2CheckedArticle({
  articleAdded,
  updateArticleAdded,
  articleChecked,
  updateArticleChecked,
}) {
  function uncheckArticle(article) {
    updateArticleChecked(
      articleChecked.filter((articles) => articles !== article)
    );
    updateArticleAdded([...articleAdded, article]);
  }

  return (
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
  );
}

export default Section2CheckedArticle;
