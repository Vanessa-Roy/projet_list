import "./styles/App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Section1AddedArticles from "./components/Section1AddedArticles";
import Section2CheckedArticles from "./components/Section2CheckedArticles";

function App() {
  const [articleAdded, updateArticleAdded] = useState([]);
  const [listArticlesAdded, updateListArticlesAdded] = useState([]);
  const [articleChecked, updateArticleChecked] = useState([]);

  console.log(articleAdded);
  console.log(articleChecked);
  console.log(listArticlesAdded);

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

  useEffect(() => {
    let jsonListQuantity = localStorage.getItem("listArticlesAdded");
    jsonListQuantity != null &&
      updateListArticlesAdded(JSON.parse(jsonListQuantity));
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "listArticlesAdded",
      JSON.stringify(listArticlesAdded)
    );
  }, [listArticlesAdded]);

  return (
    <div>
      {console.log("articles ajoutés: ", articleAdded)}
      {console.log("articles cochés: ", articleChecked)}
      {console.log("articles ajoutés avec quantité: ", listArticlesAdded)}
      <Header
        articleAdded={articleAdded}
        updateArticleAdded={updateArticleAdded}
        listArticlesAdded={listArticlesAdded}
        updateListArticlesAdded={updateListArticlesAdded}
      />
      <section>
        <Section1AddedArticles
          articleAdded={articleAdded}
          updateArticleAdded={updateArticleAdded}
          articleChecked={articleChecked}
          updateArticleChecked={updateArticleChecked}
          listArticlesAdded={listArticlesAdded}
          updateListArticlesAdded={updateListArticlesAdded}
        />
        <Section2CheckedArticles
          articleAdded={articleAdded}
          updateArticleAdded={updateArticleAdded}
          articleChecked={articleChecked}
          updateArticleChecked={updateArticleChecked}
          listArticlesAdded={listArticlesAdded}
          updateListArticlesAdded={updateListArticlesAdded}
        />
      </section>
      <footer>
        <h4>Made with ❤️ by Vanessa Roy</h4>
      </footer>
    </div>
  );
}

export default App;
