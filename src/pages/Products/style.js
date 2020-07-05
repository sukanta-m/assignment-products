import styled from "styled-components";
import { Form } from "antd";

export const StyledWrapper = styled.div`
  border: 1px solid #f0f0f0;
  margin-top: 20px;
  table {
    td {
      padding: 16px 8px;
    }
  }
  button {
    width: 100%;
    font-size: 14px;
  }
  .ant-pagination-options {
    display: inline-block;
  }
`;

export const StyledCreateWrapper = styled.div`
display: flex;
justify-content: space-between;
margin-top: 10px;
.anticon {
  margin-left: 5px;
}

input {
  max-width: 500px;
}
`;

export const StyledActionsWrapper = styled.div`
isplay: flex;
align-items: center;
a, span {
  margin-right: 5px;
}
`;

export const StyledForm = styled(Form)`
.ant-input-number {
  width: 100%;
}
`;