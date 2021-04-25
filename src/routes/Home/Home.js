import { gql, useQuery } from '@apollo/client';
import styled from "styled-components"
import Movie from "../../components/Movie";
import Sidebar from "../../components/Sidebar";


const GET_MOVIES = gql`
  {
    movies {
      id
      title
      rating
      summary
      date_uploaded
      medium_cover_image
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
`;

const Logo = styled.h1`
    color: red;
    font-family: Helvetica, sans-serif;
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
                <Logo>Tistory</Logo> 
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
                        />
                    ))}    
                </Movies>
        </Container>
    );
};