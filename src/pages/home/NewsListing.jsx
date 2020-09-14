import React from "react";
import "../../index.css";
import styled from "styled-components";
import {P, Link} from "../../components/Text";
import parse from "html-react-parser";


const NewsListing = ({article, isMainArticle}) => {
  let detailUrl = "http://localhost:8000/nyheter/" + article.id.toString() + "/" + article.slug + "/";
  return (
      <Card href={detailUrl}>
        <ImageContainer>
          {isMainArticle ? <MainImage src={article.image}/>
              : <Image src={article.image}/>}

          {isMainArticle ?
              <MainOverlay>
                <ReadMore>Les mer</ReadMore>
              </MainOverlay>
              :
              <Overlay>
                <ReadMore>Les mer</ReadMore>
              </Overlay>
          }
        </ImageContainer>
        <Title>{article.title}</Title>
        <TitleLine/>
        <div>{parse(article.content)}</div>
      </Card>
  );
};

const Card = styled(Link)`
    width: 100%;
    @media only screen and (min-width: 992px) {
        width: 48%;
  }
`;

const ImageContainer = styled.div`
    overflow: auto;
    position: relative;
    height: ${props => props.children[0].height || "auto"};
`;

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 300px;
`;

const MainImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 18px;
    padding: 5px 0;
`;

const TitleLine = styled.div`
    height: 5px;
    background-color: var(--primary);
    width: 30px;
    margin-bottom: 5px;
`;

const Overlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 300px;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: var(--primary);
    &:hover {
        opacity: 0.5;
    }
`;

const MainOverlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: var(--primary);
    &:hover {
        opacity: 0.5;
    }
`;

const ReadMore = styled(P)`
    margin: 0;
    font-weight: bold;
    opacity: 1 !important;
`;


export {NewsListing};