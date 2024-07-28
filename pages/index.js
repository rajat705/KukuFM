import Header from '../components/Header';
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';

// Use dynamic imports for lazy loading
const Carousel = dynamic(() => import('../components/Carousel'), { ssr: false });
const InfiniteScroll = dynamic(() => import('../components/InfiniteScroll'), { ssr: false });

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <InfiniteScroll />
        <Carousel />
      </main>
      <Footer />
    </>
  );
}
