import styled from 'styled-components';

export const StyledAppContainer = styled.div`

max-width: 1200px;
width: 100%;
margin: 0 auto;
padding: 0 15px;


  .title {
    margin-left: auto;
    margin-right: auto;
    max-width: 320px;
    margin-bottom: 22px;
    text-align: center;
  }

  .moviesListLink {
    text-decoration: none;
    color: black;
  }

  .moviesList {
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: space-between;
    
  }
`;
