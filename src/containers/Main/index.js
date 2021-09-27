import { Card, Divider, Spin } from "antd";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types';

import CardMonster from "../../components/Card";

import './style.scss';

const Main = ({
  items,
  fetchMoreData,
  itemsRaces,
  fetchMoreDataRaces,
  hasMoreMonster,
  hasMoreRaces
}) => {
  
  return <main>
      <div className="cards" id="cards">
        {
          items !== null && 
          <InfiniteScroll
            dataLength={items.length}
            next={fetchMoreData}
            hasMore={hasMoreMonster}
            loader={<><Spin style={{marginLeft:'50px'}}/></>}
            scrollableTarget='cards'
          >
            <Card style={{position:'relative'}} title={<Divider orientation='center'><h2>Monster</h2></Divider>}>
              {
                items.map((i, index) => (
                  <CardMonster name={i.name} key={index} id={i.index} type='monsters'/>
                ))
              }
            </Card>
          </InfiniteScroll>
        }
      </div>
    <div className="cards" id="cards">
        {
          itemsRaces !== null && 
          <InfiniteScroll
            dataLength={itemsRaces.length}
            next={fetchMoreDataRaces}
            hasMore={hasMoreRaces}
            loader={<h4><Spin/></h4>}
            scrollableTarget='cards'
          >
            <Card title={<Divider orientation='center'><h2>Races</h2></Divider>}>
              {
                itemsRaces.map((i, index) => (
                  <CardMonster name={i.name} key={index} id={i.index} type='races'/>
                ))
              }
            </Card>
          </InfiniteScroll>
        }
      </div>
  </main>;
};

Main.propTypes = {
  items: PropTypes.array,
  fetchMoreData: PropTypes.func,
  itemsRaces: PropTypes.array,
  fetchMoreDataRaces: PropTypes.func,
  hasMoreMonster: PropTypes.bool,
  hasMoreRaces: PropTypes.bool
};

export default Main;