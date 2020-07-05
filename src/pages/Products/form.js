import React from "react";
import PropTypes from 'prop-types';
import { Form, Button, InputNumber, Input } from "antd";
import { StyledForm } from "./style";

const ProductForm = ({
  onSubmit,
  product = {}
}) => {
  /*eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      number: '${label} is not a validate number!',
    }
  };

  const { name, description, price, quantity } = product;

  return (
    <StyledForm
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      layout="horizontal"
      onFinish={onSubmit}
      validateMessages={validateMessages}
    >
      <Form.Item label="Name" name="name" rules={[{required: true}]} initialValue={name}>
        <Input/>
      </Form.Item>
      <Form.Item label="Description" name="description" rules={[{required: true}]} initialValue={description}>
        <Input.TextArea/>
      </Form.Item>
      <Form.Item label="Price" name="price" rules={[{required: true, type: 'number'}]} initialValue={price}>
        <InputNumber/>
      </Form.Item>
      <Form.Item label="Quantity" name="quantity" rules={[{required: true,  type: 'number'}]} initialValue={quantity}>
        <InputNumber/>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 24 }} style={{textAlign: "center"}}>
        <Button htmlType="submit" type="primary" style={{background: "black", color: "white"}}>{product.id ? "Update" : "Create"}</Button>
      </Form.Item>
    </StyledForm>
  )
};

ProductForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  product: PropTypes.object
};
export default ProductForm;