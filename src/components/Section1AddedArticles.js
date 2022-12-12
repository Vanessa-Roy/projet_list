import "../styles/Section.css";

function Section1AddedArticles({
  articleChecked,
  updateArticleChecked,
  listArticlesAdded,
  updateListArticlesAdded,
}) {
  function checkArticle(index) {
    updateArticleChecked([
      ...articleChecked,
      {
        article: listArticlesAdded[index].article,
        quantité: listArticlesAdded[index]["quantité"],
      },
    ]);
    updateListArticlesAdded(listArticlesAdded.filter((el, i) => i !== index));
  }
  function changeQuantity(e, index) {
    const temp = [...listArticlesAdded];
    temp[index]["quantité"] = e.target.value;
    updateListArticlesAdded(temp);
  }

  return (
    <div className="section1">
      {listArticlesAdded.length === 0 ? (
        <h4>Ici s'afficheront les articles ajoutés</h4>
      ) : (
        <ul>
          {listArticlesAdded.map((article, index) => (
            <li key={`${article}-${index}`}>
              <label>
                <input
                  type="checkbox"
                  checked={false}
                  onChange={() => checkArticle(index)}
                />
                {article.article}
                <input
                  className="inputText"
                  type="text"
                  placeholder="détail(quantité, poids, marque, etc)"
                  maxLength={25}
                  value={article["quantité"]}
                  onChange={(e) => changeQuantity(e, index)}
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
