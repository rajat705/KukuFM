import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .list-item {
    width: 200px;
    margin: 1rem;
    padding: 1rem;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const InfiniteScrollComponent = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const fetchMoreData = async () => {
    const result = await axios.get(
      `https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=1&lang=engli`
    );
    setItems([...items, ...result.data.items]);
    setPage(page + 1);
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <ListWrapper>
        {items.map((item, index) => (
          <div key={index} className="list-item">
            {item.title}
          </div>
        ))}
      </ListWrapper>
    </InfiniteScroll>
  );
};

export default InfiniteScrollComponent;
