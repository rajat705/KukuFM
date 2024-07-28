// components/InfiniteScroll.js
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import styled from 'styled-components';

const InfiniteScrollWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 2rem 0;
`;

const Item = styled.div`
  background: #f1f1f1;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InfiniteScrollComponent = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchMoreData();
  }, []);

  const fetchMoreData = async () => {
    const result = await axios(`https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=1&lang=engli`);
    const newItems = result.data.items || [];
    setItems([...items, ...newItems]);
    setPage(page + 1);
    if (newItems.length === 0) {
      setHasMore(false);
    }
  };

  return (
    <InfiniteScrollWrapper>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {items.map((item, index) => (
          <Item key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Item>
        ))}
      </InfiniteScroll>
    </InfiniteScrollWrapper>
  );
};

export default InfiniteScrollComponent;
