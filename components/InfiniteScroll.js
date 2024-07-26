// components/InfiniteScroll.js
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import styled from 'styled-components';

const Item = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

const Loading = styled.div`
  text-align: center;
  padding: 1rem;
`;

const InfiniteScrollComponent = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchMoreData = async () => {
    try {
      const result = await axios.get(`https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/preferred_langs=hindi&page=${page}&lang=english`);
      setItems((prevItems) => [...prevItems, ...result.data.items]);
      setPage(page + 1);

      if (result.data.items.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching infinite scroll data:", error);
      setHasMore(false); // stop further attempts to load more data
    }
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<Loading>Loading...</Loading>}
    >
      {items.map((item, index) => (
        <Item key={index}>{item.title}</Item>
      ))}
    </InfiniteScroll>
  );
};

export default InfiniteScrollComponent;
