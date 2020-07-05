import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { get } from "lodash";
import { Spin, message } from "antd";
import ProductForm from "./form";
import { updateProductAction, fetchProductAction } from "../../modules/actions/product";

const UpdateProduct = ({
  updateProduct,
  fetchProduct,
  products,
  match,
  fetching,
  upserting,
  history
}) => {
  const { id } = match.params;
  const product = products.find(p => p.id === parseInt(id, 10));

  useEffect(() => {
    if (!products.length) {
      fetchProduct(id);
    }
    /*eslint-disable-next-line react-hooks/exhaustive-deps*/
  }, [id]);

  const onUpdate = (data) => {
    const params = {
      ...product,
      ...data,
      updatedAt: new Date()
    }
    updateProduct(id, params).then(response => {
      message.success("Updated successfully");
      history.push(`/products/${id}`);
    });
  }
  
  if (fetching || !product) {
    return <Spin/>;
  }

  return (
    <div>
      {upserting && <Spin/>}
      <h1>Edit <b>{product.name}</b></h1>
      <ProductForm onSubmit={onUpdate} product={product}/>
    </div>
  )
};

UpdateProduct.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  fetching: PropTypes.bool,
  upserting: PropTypes.bool
};

UpdateProduct.defaultProps = {
  products: [],
  fetching: false,
  upserting: false
};

export default connect(state => ({
  products: get(state, "product.lists", []),
  fetching: get(state, "product.fetching", false),
  upserting: get(state, "product.upserting", false)
}), {
  updateProduct: updateProductAction,
  fetchProduct: fetchProductAction
})(UpdateProduct);