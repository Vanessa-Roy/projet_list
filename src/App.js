import "./styles/App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Section1AddedArticles from "./components/Section1AddedArticles";
import Section2CheckedArticles from "./components/Section2CheckedArticles";

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

  return (
    <div>
      <Header
        articleAdded={articleAdded}
        updateArticleAdded={updateArticleAdded}
      />
      <section>
        <Section1AddedArticles
          articleAdded={articleAdded}
          updateArticleAdded={updateArticleAdded}
          articleChecked={articleChecked}
          updateArticleChecked={updateArticleChecked}
        />
        <Section2CheckedArticles
          articleAdded={articleAdded}
          updateArticleAdded={updateArticleAdded}
          articleChecked={articleChecked}
          updateArticleChecked={updateArticleChecked}
        />
      </section>
      <footer>
        <h4>Made with ❤️ by Vanessa Roy</h4>
      </footer>
    </div>
  );
}

export default App;
