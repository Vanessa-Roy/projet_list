import "../styles/Section.css";

function Section2CheckedArticle({
  articleChecked,
  updateArticleChecked,
  listArticlesAdded,
  updateListArticlesAdded,
}) {
  function uncheckArticle(index) {
    updateListArticlesAdded([...listArticlesAdded, articleChecked[index]]);
    updateArticleChecked(articleChecked.filter((el, i) => i !== index));
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
                  checked={true}
                  onChange={(e) => uncheckArticle(index)}
                />
                {el.article}
                <input
                  className="inputText"
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
