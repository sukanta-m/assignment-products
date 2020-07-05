import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

class ErrorHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
  }

  render() {
    const { history, children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div style={{ textAlign: "center" }}>
          <h1> Sorry, something went wrong.</h1>
          <h2> We are working on it and we will get it fixed as soon as we can. </h2>
          <GoBacK onClick={history.goBack}>Go Back</GoBacK>
        </div>
      );
    }

    return children;
  }
}

export default withRouter(ErrorHandler);

const GoBacK = styled.h3`
  color: green;
`;
