import React from "react";
import PropTypes from "prop-types";

import image from '../../images/image.jpg';

import './style.scss';
import { Card, Col, Input, Row, Form, List, Divider } from "antd";
import { useSelector } from "react-redux";

const Profile = ({data, list, name}) => {
  const { width } = useSelector(state => state.width);
  return <div className='profile'>
    <Card style={{margin:'10px'}}>
      <Row>
        <Col span={width<1390 ? 22 : 4} style={{margin: '20px'}}>
          <div className='container' style={{ backgroundImage: `url(${image})` }}>
            <h2>{name}</h2>
          </div>
        </Col>
        <Col  span={width<1390 ? 22 : 18} offset={1}>
          <Row>
            <Col span={24}>
          <Form
            layout='horizontal'>
              <Row>
                {
                  data.length>0 &&
                  <>
                  {
                    data.map(item=><>
                      {
                        (item[1].length < 40 || typeof item[1] === 'number') ?
                          <Col span={width<860 ? 22 :10}>
                            <Form.Item
                            labelCol={{span:7}}
                            label={`${item[0]} :`}>
                              <Input value={item[1]} disabled/>
                            </Form.Item>
                          </Col>
                        :
                        <Col span={10}>
                          <Form.Item
                          labelCol={{span:7}}
                          label={`${item[0]} :`}>
                            <Input.TextArea value={item[1]} rows={4} disabled/>
                          </Form.Item>
                        </Col>
                      }
                      </>)
                  }
                  </>
                }
            
            </Row>
            </Form>
            </Col>
          </Row>
        </Col>
        <Divider/>
        <Col span={24}>
            {
              list.length>0 &&
              <>
              <Row>
                {
                  list.map(item=><>
                  <Col span={width<860 ? 22 : 11} style={{margin: '10px'}}>
                    <List
                      header={<div>{item.name}</div>}
                      bordered
                    >
                      {
                        Array.isArray(item.data) ? <>
                          {
                            item.data.map(itemData=><>
                            {
                              Object.entries(itemData).map(itemDataObject=><>
                                <List.Item>
                                  - 
                                  {
                                    (typeof itemDataObject[1] === 'string' || typeof itemDataObject[1] === 'number') ?
                                    <><strong> {itemDataObject[0]}: </strong> {itemDataObject[1]}</>
                                    :
                                    <><strong> {itemDataObject[0]}: </strong> {itemDataObject[1].name}</>
                                  }
                                </List.Item>
                              </>)
                            }
                            </>)
                          }
                        </>
                        :
                        Object.entries(item.data).map(itemObject1=><List.Item>
                          - <strong>{itemObject1[0]}: </strong> 
                          {
                            (typeof itemObject1[1] === 'string' || typeof itemObject1[1] === 'number') ?
                            <>{itemObject1[1]}</>
                            :
                            <>{itemObject1[1].name}</>
                          }
                        </List.Item>)
                      }
                    </List>
                    </Col>
                  </>)
                }
                </Row>
              </>
            }
            </Col>
      </Row>
    </Card>
  </div>;
};

Profile.propTypes = {
  data: PropTypes.array,
  setDataList: PropTypes.func,
  list: PropTypes.array,
  name: PropTypes.string
};

export default Profile;