// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InfiniteScrollComponent from '../components/InfiniteScroll';
import Carousel from '../components/Carousel';
import styled from 'styled-components';

const MainContent = styled.main`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>KukuFM Landing Page</title>
        <link rel="stylesheet" type="text/css" href="/slick/slick.css" />
        <link rel="stylesheet" type="text/css" href="/slick/slick-theme.css" />
      </Head>
      <Header />
      <MainContent>
        <Carousel />
        <InfiniteScrollComponent />
      </MainContent>
      <Footer />
    </div>
  );
}



// // pages/index.js
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import Carousel from '../components/Carousel';
// import InfiniteScrollComponent from '../components/InfiniteScroll';

// export default function Home() {
//   return (
//     <div>
//       <Header />
//       <main style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
//         <Carousel />
//         <InfiniteScrollComponent />
//       </main>
//       <Footer />
//     </div>
//   );
// }