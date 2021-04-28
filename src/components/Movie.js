import { useMutation } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components"
import gql from 'graphql-tag';
import "./Movie.css"

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
    width: 300px;
    background-size: cover;
`;

const Moviedata = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    text-decoration: none;
    padding-bottom: 30px;
    border-bottom: 1px solid gray;
`;
const Title = styled.h1`
  color: #1e272e;
  font-size: 40px;
  margin-bottom: 15px;
`;
const Subtitle = styled.h4`
  font-size: 15px;
  margin-bottom: 10px;
  color: #2f3640;
  text-decoration: none;
`;
const Summary = styled.div`
    font-size: 20px;
    margin-bottom: 10px;
    color: #808e9b;
`;

const DataText = styled.div`
    display: flex;
    flex-direction: column;
`;
const Data = styled.div`
    display: flex;
    flex-direction: row;
`;

const Movie = ({ id, bg, title, summary, day, des }) => {
    const [toggleMovie] = useMutation(LIKE_MOVIE, { variables: {id: parseInt(id)} });
    return (
        <Container>
            <Link to={{
                pathname:`/detail/${id}`
            }}>
                <Moviedata id="movie">
                    <Data>
                    <DataText>
                        <Title>{title}</Title>
                        <Summary>
                            {summary ? `${summary.slice(0,140)}...` : ""}
                            {des ? `${des.slice(0,140)}...` : ""}
                        </Summary>
                        <Subtitle>
                            {day}
                        </Subtitle>
                    </DataText>
                    <Poster bg={bg}></Poster>
                    </Data>
                </Moviedata>
            </Link>
        </Container>
    );
}

export default Movie;
