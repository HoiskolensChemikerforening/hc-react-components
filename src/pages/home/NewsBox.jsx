import React, {useState, useEffect} from "react";
import "../../index.css";
import {NewsListing} from "./NewsListing";
import {Col, Row} from "../../components/FlexLayout";
import {P} from "../../components/Text";


function NewsBox() {
  // Declares a var articles, and an update function, useState sets initial value to an empty list.
  const [latestArticle, setLatestArticle] = useState(null);
  const [articles, setArticles] = useState([]);
  const [token, setToken] = useState(null);

  // Runs once when the HomePage component is loaded
  useEffect(() => {
    fetchArticlesData();
    fetchToken();
  }, []);

  async function fetchToken() {
    const response = await fetch("http://localhost:8000/api-token-auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        username: "anja",
        password: "passord",
      }),
    });
    const jsonData = await response.json();
    console.log(jsonData);

  }

  // Gets all articles from the news api url and sets the articles variable
  async function fetchArticlesData() {
    const response = await fetch("http://localhost:8000/nyheter/api/", );
    const jsonData = await response.json();
    setLatestArticle(jsonData[0]);
  }

  return (
      <Col flex={10}>
        {latestArticle ? <NewsListing key={latestArticle.id} article={latestArticle} isMainArticle={true}/>
            : <P>Ingen artikler finnes</P>}

        <br/>
        <Row flex={10}>
          {articles.map(article => (
              <NewsListing key={article.id} article={article} isMainArticle={false}/>
          ))}
        </Row>
      </Col>
  );
}

export {NewsBox};