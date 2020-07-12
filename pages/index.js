import React from 'react';
import Layout from '../components/layout';
import { Jumbotron, Container } from 'reactstrap';
import Fetch from 'isomorphic-unfetch';
import { Table } from 'reactstrap';

const Index = ({ data }) => {
  return (
    <Layout>
      <div>
        <Jumbotron
          fluid
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <Container fluid>
            <h1>Countries Details</h1>
            <Table dark>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Alpha2Code</th>
                  <th>Capital</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d, i) => {
                  return (
                    <tr key={i}>
                      <td>{d.name}</td>
                      <td>{d.alpha2Code}</td>
                      <td>{d.capital}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </Jumbotron>
      </div>
    </Layout>
  );
};

Index.getInitialProps = async function () {
  const res = await Fetch(
    'https://jsonmock.hackerrank.com/api/countries?page=1'
  );
  const resp = await res.json();

  return {
    data: resp.data,
  };
};

export default Index;
