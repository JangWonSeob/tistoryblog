import { gql, useQuery } from '@apollo/client';
import styled from "styled-components"
import Movie from "../../components/Movie";
import Tabs from '../../components/Tabs';
import React, { useState, useEffect } from "react";


const GET_MOVIES = gql`
  {
    movies {
      id
      title
      rating
      summary
      date_uploaded
      medium_cover_image
      description_intro
    }
  }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr 100px;
    width: 100%;
    display: block-inline;
`;

const Loading = styled.div`
    font-size: 18px;
    opacity: 0.5;
    font-weight: 500;
    margin-top: 10px;
`;

const Movies =styled.div`
    dispaly: block;
    display: grid;
    grid-template-columns: 1fr;
    grid-line: grey;
    hight: 100px;
    grid-gap: 25px;
    width: 60%;
`;

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTItle = () => {
      const htmlTitle = document.querySelector("title");
      htmlTitle.innerHTML = title;
    };
    useEffect(updateTItle, [title]);
    return setTitle;
  };

const Home = () => {
    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("Tistory"));
    const { loading, data } = useQuery(GET_MOVIES);
    console.log(data);
    return (
        <Container>
            <Header>
            <Tabs/>
            </Header>
            {loading && <Loading>Loading...</Loading>}
                <Movies>
                    {data?.movies?.map(m => (
                        <Movie key={m.id} 
                        id={m.id}
                        title={m.title}
                        bg={m.medium_cover_image}
                        rating={m.rating}
                        summary={m.summary}
                        day={m.date_uploaded}
                        des={m.description_intro}
                        />
                    ))}
                </Movies>
        </Container>
    );
};

export default Home;