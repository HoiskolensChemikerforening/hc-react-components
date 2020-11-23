import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { H3, P } from "../../components/Text";
import { Button } from "../../components/Button.js";

export const NewsList = () => {
  useEffect(() => {
    fetchArticles();
  }, []);

  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const data = await fetch("http://localhost:8000/nyheter/api/");
    const items = await data.json();
    setArticles(items);
  };

  return (
      <NewsListContainer>
        <ButtonContainer>
          <Link to="/nyheter/ny">
            <Button primary>Opprett nyhet</Button>
          </Link>
        </ButtonContainer>
        {articles.map((article) => (
            <NewsItem key={article.id}>
              <ImageContainer img={article.image}/>
              <H3 bold>
                {article.title}
              </H3>
              <P>
                <span style={{fontWeight: "800"}}>{article.author.full_name}</span>
                / {article.published_date} timer siden
              </P>
            </NewsItem>
        ))}
      </NewsListContainer>
  )
};

const NewsListContainer = styled.div`
    width: 100%;
    margin: 0;
    display: flex;
    flex-flow: column nowrap;
`;

const NewsItem = styled.div`
    margin: 20px 0;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
`;

const ImageContainer = styled.div`
    width: 100%;
    padding-bottom: 67%;
    background: url(${props => props.img});
    background-size: cover;
`;