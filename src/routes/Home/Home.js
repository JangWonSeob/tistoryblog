import { gql, useQuery } from '@apollo/client';
import styled from "styled-components"
import Movie from "../../components/Movie";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom"


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

const Logo = styled.h1`
    font-family: Helvetica, sans-serif;
    padding-bottom: 50px;
    border-bottom: 1px solid gray;
    color: #e84118;
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

export default () => {
    const { loading, data } = useQuery(GET_MOVIES);
    console.log(data);
    return (
        <Container>
            <Header>
                <Logo><Link to="/">Tistory</Link></Logo>
                <Sidebar />
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