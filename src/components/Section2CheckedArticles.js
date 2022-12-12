import "../styles/Section.css";

function Section2CheckedArticle({
  articleAdded,
  updateArticleAdded,
  articleChecked,
  updateArticleChecked,
  listArticlesAdded,
  updateListArticlesAdded,
}) {
  function uncheckArticle(el) {
    updateArticleChecked(articleChecked.filter((els) => els !== el));
    updateListArticlesAdded([...listArticlesAdded, el]);
    updateArticleAdded([...articleAdded, el.article]);
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
          {articleChecked.map((el, index) => (
            <li key={`${el.article}-${index}`}>
              <label>
                <input
                  type="checkbox"
                  checked
                  onChange={(e) => uncheckArticle(el)}
                />
                {el.article}
                <input
                  type="text"
                  placeholder="détail(quantité, poids, marque, etc)"
                  value={el.quantité}
                  disabled
                />
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Section2CheckedArticle;
