import React from "react";
import { Card } from 'antd';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import './style.scss';
import { useSelector } from "react-redux";

const CardMonster = ({name,index, id, type}) => {
  const { width } = useSelector(state => state.width);
  const gridStyle = {
    width: width <750 ? width <550 ? '100%' : '40%' : '24%',
    textAlign: 'center',
  };

  return <><Link to={`/${type}/${id}`}>
    <Card.Grid className='cardGrid' key={index} style={gridStyle}>{name}</Card.Grid></Link>
  </>;
};

CardMonster.propTypes = {
  name: PropTypes.string,
  index: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
};

export default CardMonster;