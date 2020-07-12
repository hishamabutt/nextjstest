import React from 'react';
import Layout from '../components/layout';
import { Jumbotron, Container } from 'reactstrap';

export default function about() {
  return (
    <Layout>
      <div>
        <Jumbotron
          fluid
          style={{
            position: 'fixed',

            width: '100%',
            height: '100%',
          }}
        >
          <Container fluid>
            <h1 className='display-3'>This is Next.js Test App</h1>
            <p className='lead'>
              I Have done Routing and SSR in Next.js. This is simple app which
              get the data from api using (getInitailProps and fetch) and print
              it in table.
            </p>
          </Container>
        </Jumbotron>
      </div>
    </Layout>
  );
}
