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

`;

const Poster = styled.div`
    background-image: url(${props => props.bg});
    height: 200px;
    width: 150px;
    background-size: cover;
    margin-left: 500px;
    border-bottom: 5px solid gray;
    
`;

const Moviedata = styled.div`
    display: grid;
    grid-template-columns: 1fr;

`;

export default ({ id, bg, title, rating, summary, day }) => {
    const [toggleMovie] = useMutation(LIKE_MOVIE, { variables: {id: parseInt(id)} });
    return (
        <Container>
            <Link to={`/${id}`}>
                <Moviedata>
                    {title} - {rating}/10
                    {summary}
                    {day}
                </Moviedata>
                <Poster bg={bg} />
            </Link>
        </Container>
    );
}

