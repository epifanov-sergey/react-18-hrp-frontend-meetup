import React, { Suspense, lazy } from 'react';
import { render } from 'react-dom';
import { Row, Spin } from 'antd';
import 'antd/dist/antd.css';
import { Viewport } from './components/Viewport';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Item } from './components/Item';
import { NotDynamic } from './components/NotDynamic';
import {OldBatch} from './components/OldBatch';

const fetchData = () => new Promise((resolve: Function) => setTimeout(() => resolve(), 5000));

const DC = lazy(() => fetchData().then(() => import('./components/Cols')));

const ColsWrapper = () => {
  return (
    <Row gutter={[24, 16]}>
      <Suspense fallback={<Spin />}>
        <DC/>
        <NotDynamic />
      </Suspense>
    </Row>
  );
};



const App = () => (
  <Viewport>
    <HashRouter>
      <Routes>
        <Route path="/" element={<ColsWrapper />} />
        <Route path="/old-batch" element={<OldBatch />}/>
        <Route path="/:id" element={<Item />} />
      </Routes>
    </HashRouter>
  </Viewport>
);
render(<App />, document.getElementById('root'));