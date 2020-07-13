import NavbarComponent from './Navbar';
import Head from 'next/head';

const Layout = (props) => (
  <div>
    <Head>
      <title>Country Details</title>
      <meta
        name='description'
        content='Next.js Testing App which show few countries details.'
      />
      <meta
        name='keywords'
        content='Next.js,SSR,Routing,Nextjs Roution,Countries alpha2code,alpha2Code,Countries details,Countries captial'
      ></meta>
    </Head>
    <NavbarComponent />
    {props.children}
  </div>
);

export default Layout;
