import "../styles/Section.css";

function Section1AddedArticles({
  articleAdded,
  updateArticleAdded,
  articleChecked,
  updateArticleChecked,
}) {
  function checkArticle(article) {
    updateArticleAdded(articleAdded.filter((articles) => articles !== article));
    updateArticleChecked([...articleChecked, article]);
  }

  return (
    <div className="section1">
      {articleAdded.length === 0 ? (
        <h4>Ici s'afficheront les articles ajoutés</h4>
      ) : (
        <ul>
          {articleAdded.map((article, index) => (
            <li key={`${article}-${index}`}>
              <label>
                <input type="checkbox" onChange={() => checkArticle(article)} />
                {article}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Section1AddedArticles;
