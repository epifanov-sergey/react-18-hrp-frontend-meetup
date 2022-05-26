import React, { lazy, Suspense }  from 'react';
import { createRoot } from 'react-dom/client';
import { Row, Spin } from 'antd';
import 'antd/dist/antd.css';
import { Viewport } from './components/Viewport';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { NotDynamic } from './components/NotDynamic';
import { UseTransition } from './components/UseTransition';
import { NewBatch } from './components/NewBatch';

const container = document.getElementById('root');
const root = createRoot(container);

const fetchData = () => new Promise(
  (resolve: Function) => setTimeout(() => resolve(), 5000)
);

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
        <Route path="/use-transition" element={<UseTransition />}/>
        <Route path="/new-batch" element={<NewBatch />} />
        <Route path="/:id" element={<div />} />
      </Routes>
    </HashRouter>
  </Viewport>
);

root.render(<App/>);