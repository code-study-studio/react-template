import React from 'react';
import PageTemplate from '../PageTemplate/PageTemplate.js';

type Props = {
  // onLinkSelect: (id: number) => void,
}

const Route404 = (props: Props) =>
  <PageTemplate>
    <section className="content">
      <h1>404</h1>
    </section>
  </PageTemplate>

export default Route404;