import React from 'react';
import { Col } from 'antd';
import { Link } from 'react-router-dom';
import { ColContent } from '../ColContent';

export const Cols = () => {
  const id1 = '1';
  const id2 = '2';
  const id3 = '3';
  const id4 = '4';
  const id5 = '5';

  return (
    <>
      <Col span={8}><Link to={`/old-batch`}><ColContent>Old Batch</ColContent></Link></Col>
      <Col span={8}><Link to={`/${id1}`}><ColContent>{id1}</ColContent></Link></Col>
      <Col span={8}><Link to={`/${id2}`}><ColContent>{id2}</ColContent></Link></Col>
      <Col span={8}><Link to={`/${id3}`}><ColContent>{id3}</ColContent></Link></Col>
      <Col span={8}><Link to={`/${id4}`}><ColContent>{id4}</ColContent></Link></Col>
      <Col span={8}><Link to={`/${id5}`}><ColContent>{id5}</ColContent></Link></Col>
  </>
);
};