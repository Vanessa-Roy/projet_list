import "./styles/App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Section1AddedArticles from "./components/Section1AddedArticles";
import Section2CheckedArticles from "./components/Section2CheckedArticles";

function App() {
  const [listArticlesAdded, updateListArticlesAdded] = useState([]);
  const [articleChecked, updateArticleChecked] = useState([]);

  console.log(articleChecked);
  console.log(listArticlesAdded);

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
      {console.log("articles cochés: ", articleChecked)}
      {console.log("articles ajoutés avec quantité: ", listArticlesAdded)}
      <Header
        listArticlesAdded={listArticlesAdded}
        updateListArticlesAdded={updateListArticlesAdded}
      />
      <section>
        <Section1AddedArticles
          articleChecked={articleChecked}
          updateArticleChecked={updateArticleChecked}
          listArticlesAdded={listArticlesAdded}
          updateListArticlesAdded={updateListArticlesAdded}
        />
        <Section2CheckedArticles
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
