// @flow
import React from 'react';
import MainMenu from '../MainMenu/MainMenu';

type Props = {
  children: React$Element<*>
}

const PageTemplate = ({children}: Props) =>
  <div className='wrapper'>
    <header className='header'>
      <MainMenu />
    </header>
    <main className='main'>
      {children}
    </main>
    <footer className='footer'>
    </footer>
  </div>

export  default PageTemplate;