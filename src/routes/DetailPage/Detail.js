import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';
import styled from "styled-components";
import Sidebar from "../../components/Sidebar";
import { Link } from 'react-router-dom';

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
      language
      rating    
      summary
      isLiked @client
    }
    suggestions(id: $id){
        id
        title
      }
  }
`;


const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: black;
`;

const Logo = styled.h1`
  text-decoration: none;
  outline: none;
  word-break: break-all;
  font-size: 26px;
  color: #f25555;
  line-height: 32px;
  font-weight: 600;
`;



const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 15px;
  color: red;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
`;




const Detail = () => {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_MOVIE, {
      variables: { id: parseInt(id) }
    });
    console.log(data);
    return (
        <Container>
          <Logo><Link to="/">Tistory</Link></Logo>
          <Column>
            <Title>{loading ? "Loading..." : `${data.movie.title} ${data.movie.isLiked ? "":""}`}</Title>
                <Subtitle>
                    {data?.movie?.language} · {data?.movie?.rating}
                </Subtitle>
                <Description>{data?.movie?.description_intro}</Description>
            </Column>
          <Poster bg={data?.movie?.description_intro}></Poster>
        </Container>
      );
};

export default Detail;
