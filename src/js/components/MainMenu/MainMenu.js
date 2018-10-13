// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  // onLinkSelect: (id: number) => void,
}

const selectedStyle = {
backgroundColor: "white",
color: "slategray"
}

const MainMenu = (props: Props) =>
  <nav className='menu'>
    <NavLink to='/' activeStyle={selectedStyle}>
      [Home]
    </NavLink>
  </nav>

export default MainMenu;