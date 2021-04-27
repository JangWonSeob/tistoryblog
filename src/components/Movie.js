import { useMutation } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components"
import gql from 'graphql-tag';

const LIKE_MOVIE = gql`
    mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!){
        toggleLikeMovie(id: $id, isLiked: $isLiked) @client
    }
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 100px;
    text-decoration: none;
    
`;

const Poster = styled.div`
    background-image: url(${props => props.bg});
    height: 200px;
    width: 150px;
    background-size: cover;
    margin-left: 500px;
    display:inline;
`;

const Moviedata = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    text-decoration: none;
    padding-bottom: 50px;
    border-bottom: 1px solid gray;
`;
const Title = styled.h1`
  color: red;
  font-size: 40px;
  margin-bottom: 15px;
  text-decoration: none;
`;
const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
  color: #2f3640;
`;
const Summary = styled.div`
    font-size: 20px;
    margin-bottom: 10px;
    color: #2f3640;
    
`;

export default ({ id, bg, title, summary, day, des }) => {
    const [toggleMovie] = useMutation(LIKE_MOVIE, { variables: {id: parseInt(id)} });
    return (
        <Container>
            <Link to={`/${id}`}>
                <Moviedata>
                    <Title>{title}</Title>
                    <Subtitle>
                        {day}
                    </Subtitle>
                    <Summary>
                        {summary ? summary.slice(0,140) : ""}
                        {des ? des.slice(0,140) : ""}
                    </Summary>
                    <Poster bg={bg}></Poster>
                </Moviedata>
            </Link>
        </Container>
    );
}

