import React from "react";
import PropTypes from "prop-types";

import { get } from "../../api/module/monster";
import Profile from "../../containers/Profile";
import Header from '../../containers/Header';

const Detail = ({ match }) => {
  const [data, setData] = React.useState([]);
  const [params] = React.useState({type: match.params.type, name: match.params.name});
  const [list, setList] = React.useState([]);
  const [name, setName] = React.useState('');

  React.useEffect(()=>{
    getDetail();
  },[]);

  const getDetail = async() => {
    const response = await get(`${params.type}/${params.name}`);
    let source = [];
    let sourceObject = [];
    setName(response.data.name);
    for (let prop in response.data) {
      if(prop!=='url' && prop!=='index'){
        if(typeof response.data[prop] === 'number' || typeof  response.data[prop] === 'string'){
          source.push([prop,response.data[prop]]);
        }else{
          
          if(response.data[prop] !== null){
            if(Array.isArray(response.data[prop])){
              if(response.data[prop].length>0){
                sourceObject.push({name:prop, data:response.data[prop]});
              }
            }else{
              sourceObject.push({name:prop, data:response.data[prop]});
            }
          }
        }
      }
    }
    setData(source);
    setList(sourceObject);
  };

  return <>
    <Header/>
    {
      data !== null &&
      <Profile data={data} type={params.type} list={list} name={name}/>
    }
  </>;
};

Detail.propTypes = {
  match: PropTypes.array
};

export default Detail;