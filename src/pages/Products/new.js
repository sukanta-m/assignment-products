import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { get } from "lodash";
import { message, Spin } from "antd";
import ProductForm from "./form";
import { createProductAction } from "../../modules/actions/product";

const CreateProduct = ({
  createProduct,
  upserting,
  history
}) => {
  const onSave = (data) => {
    const date = new Date();
    const params = {
      ...data,
      createdAt: date,
      updatedAt: date
    }
    createProduct(params).then(res => {
      message.success("Created successfully");
      history.push("/products");
    });
  }

  return (
    <div>
      {upserting && <Spin/>}
      <h1>Create New product</h1>
      <ProductForm onSubmit={onSave}/>
    </div>
  )
};

CreateProduct.defaultProps = {
  upserting: false
};

CreateProduct.propTypes = {
  createProduct: PropTypes.func.isRequired,
  upserting: PropTypes.bool
};

export default connect(state => ({
  upserting: get(state, "product.upserting", false)
}), {
  createProduct: createProductAction
})(CreateProduct);