import React from "react";
import blogData from "../data/blog";
import Header from './Header';
import About from './About';
import Article from './Article';
import ArticleList from './ArticleList';
console.log(blogData);

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <About/>
      <Header/>
      <Article/>
      <ArticleList/>
    </div>
  );
  }
 

export default App;
