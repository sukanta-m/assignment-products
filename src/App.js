import React, { lazy, Suspense } from "react";
import { Layout } from "antd";
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from "./pages/sharedComponents/header";
import ErrorHandler from "./pages/sharedComponents/ErrorHandler";
import Progress from "./pages/sharedComponents/Progress";

import styled from "styled-components";
import 'antd/dist/antd.css'

const ProductLists = lazy(() => import("./pages/Products"));
const NewProductPage = lazy(() => import("./pages/Products/new"));
const ShowProductPage = lazy(() => import("./pages/Products/show"));
const EditProductPage = lazy(() => import("./pages/Products/edit"));

function App() {
  return (
    <StyledLayout>
      <Header/>
      <Wrapper>
        <ErrorHandler>
          <Router/>
        </ErrorHandler>
      </Wrapper>
    </StyledLayout>
  );
}

const Router = () => {
  return (
    <Suspense fallback={<Progress />}>
      <Switch>
        <Route exact path="/" component={ProductLists} />
        <Route exact path="/products" component={ProductLists} />
        <Route exact path="/products/new" component={NewProductPage} />
        <Route exact path="/products/:id" component={ShowProductPage} />
        <Route exact path="/products/:id/edit" component={EditProductPage} />
      </Switch>
    </Suspense>
  );
};


const StyledLayout = styled(Layout)`
  background: white;
  .fixed-header {
    top: 0px !important;
  }
  margin-top: 0px;
`;

const Wrapper = styled.div`
  position: relative;
  width: 90%;
  margin: auto;

  h1 {
    justify-content: center;
    display: flex;
    b {
      margin-left: 5px;
    }
  }
`;

export default App;
