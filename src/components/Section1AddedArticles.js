import "../styles/Section.css";

function Section1AddedArticles({
  articleAdded,
  updateArticleAdded,
  articleChecked,
  updateArticleChecked,
  listArticlesAdded,
  updateListArticlesAdded,
}) {
  function checkArticle(article) {
    let articlePresent = listArticlesAdded.map((el) => el.article);
    let indexOfArticle = articlePresent.indexOf(article);
    updateArticleAdded(articleAdded.filter((articles) => articles !== article));
    let newListArticlesAdded = listArticlesAdded.filter(function (el) {
      return el.article !== article;
    });
    updateListArticlesAdded(newListArticlesAdded);
    updateArticleChecked([
      ...articleChecked,
      {
        article: article,
        quantité: listArticlesAdded[indexOfArticle]["quantité"],
      },
    ]);
    console.log(articleChecked);
  }
  function changeQuantity(e, article) {
    console.log("articles ajoutés avec quantité: ", listArticlesAdded);
    let articlePresent = listArticlesAdded.map((el) => el.article);
    let indexOfArticle = articlePresent.indexOf(article);
    if (indexOfArticle !== -1) {
      listArticlesAdded[indexOfArticle]["quantité"] = e.target.value;
      updateListArticlesAdded(listArticlesAdded);
    } else {
      updateListArticlesAdded([
        ...listArticlesAdded,
        { article: article, quantité: e.target.value },
      ]);
    }
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
                <input
                  type="text"
                  placeholder="détail(quantité, poids, marque, etc)"
                  onChange={(e) => changeQuantity(e, article)}
                />
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Section1AddedArticles;
