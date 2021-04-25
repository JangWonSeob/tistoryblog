import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components"

const Container = styled.li`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Sidebar = () => {
  return (
    <section id="sidebar">
      <div className="inner">
        <nav>
          <ul>
            <Container><Link to="/">Home</Link></Container>
            <Container><Link to="/30730/">Sample</Link></Container>
            <Container><Link to="/refresh">refresh</Link></Container>
            <Container><Link to="/Sample3">Sample3</Link></Container>
            <Container><Link to="/search">Sarch</Link></Container>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Sidebar;