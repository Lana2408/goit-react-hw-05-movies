import styled from 'styled-components';


export const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  .listHeader {
    list-style: none;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    gap: 12px;
  }

  .listHeaderLink {
    text-decoration: none;
    color: black;
  }
`;
