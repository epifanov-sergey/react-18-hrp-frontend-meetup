import React, { useId } from 'react';
import { Col } from 'antd';
import { Link } from 'react-router-dom';
import { ColContent } from '../ColContent';

export const Cols = () => {
  const id1 = useId();
  const id2 = useId();
  const id3 = useId();
  const id4 = useId();

  return (
    <>
      <Col span={8}><Link to={`/${id1}`}><ColContent>{id1}</ColContent></Link></Col>
      <Col span={8}><Link to={`/${id2}`}><ColContent>{id2}</ColContent></Link></Col>
      <Col span={8}><Link to={`/${id3}`}><ColContent>{id3}</ColContent></Link></Col>
      <Col span={8}><Link to={`/use-transition`}><ColContent>Use Transition</ColContent></Link></Col>
      <Col span={8}><Link to={`/new-batch`}><ColContent>New Batch</ColContent></Link></Col>
      <Col span={8}><Link to={`/${id4}`}><ColContent>{id4}</ColContent></Link></Col>
  </>
);
};