import React from "react";
import { Container } from "./SharedLayout.styled";
import { NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <header>
      <Container>
        <nav>
          <ul className="listHeader">
            <li className="listHeaderItem">
              <NavLink to ="/" className="listHeaderLink">Home</NavLink>
            </li>
            <li>
            <NavLink to ="/movies" className="listHeaderLink">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
    </>
  )

}

export default Layout;