import React from "react";

import { getAll } from "../../api/module/monster";
import { getAll as getRaces } from "../../api/module/races";
import Header from '../../containers/Header';
import Main from "../../containers/Main";

const Home = () => {
  const [monster,setMonster] = React.useState(null);
  const [hasMoreMonster,setHasMoreMonster] = React.useState(true);
  const [races,setRaces] = React.useState(true);
  const [hasMoreRaces,setHasMoreRaces] = React.useState(null);
  const [items, setItems] = React.useState(null);
  const [itemsRaces, setItemsRaces] = React.useState(null);

  React.useEffect(()=>{
    getAllMonster();
    getAllRaces();
  },[]);

  const getAllRaces = async() => {
    const response = await getRaces();
    setRaces(response.data.results);
    setItemsRaces(response.data.results.slice(0,16));
  };

  const getAllMonster = async() => {
    const response = await getAll();
    setMonster(response.data.results);
    setItems(response.data.results.slice(0,16));
  };
  
  const fetchMoreData = () => {
    setHasMoreMonster(monster.length!==items.length);
    if((monster.length-items.length)>=8){
      setTimeout(() => {
        setItems(monster.slice(0,items.length+8));
      }, 2000);
    }if((monster.length-items.length)<8){
      if(monster.length!==items.length){
        setTimeout(() => {
          setItems(monster);
        }, 2000);
      }
    }
  };

  const fetchMoreDataRaces = () => {
    setHasMoreRaces(races.length!==itemsRaces.length);
    if((races.length-itemsRaces.length)>=8){
      setTimeout(() => {
        setItemsRaces(races.slice(0,itemsRaces.length+8));
      }, 2000);
    }if((races.length-itemsRaces.length)<8){
      if(races.length!==itemsRaces.length){
        setTimeout(() => {
          setItemsRaces(races);
        }, 2000);
      }
    }
  };
  
  return <>
    <Header/>
    <Main items={items} 
    fetchMoreData={fetchMoreData} 
    itemsRaces={itemsRaces} 
    fetchMoreDataRaces={fetchMoreDataRaces}
    hasMoreMonster={hasMoreMonster}
    hasMoreRaces={hasMoreRaces}/>
  </>;
};

export default Home;