import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { get } from "lodash";
import { Spin, PageHeader, Descriptions } from "antd";
import moment from "moment";
import { fetchProductAction } from "../../modules/actions/product";

const ProductDetails = ({
  fetchProduct,
  products,
  match,
  fetching,
  history
}) => {
  const { id } = match.params;

  useEffect(() => {
    if (!products.length) {
      fetchProduct(id);
    }
    /*eslint-disable-next-line react-hooks/exhaustive-deps*/
  }, [id]);

  const product = products.find(p => p.id === parseInt(id, 10));

  if (fetching || !product) {
    return <Spin/>;
  }
  
  const renderContent = (column = 2) => (
    <Descriptions size="large" column={column}>
      <Descriptions.Item label="Description">{product.description}</Descriptions.Item>
      <Descriptions.Item label="Quantity">
        {product.quantity}
      </Descriptions.Item>
      <Descriptions.Item label="Creation Time">{moment(product.createdAt).format("MMM DD YYYY hh:mm A")}</Descriptions.Item>
      <Descriptions.Item label="Price">${product.price}</Descriptions.Item>
    </Descriptions>
  );
  
  const Content = ({ children }) => {
    return (
      <div className="content">
        <div className="main">{children}</div>
      </div>
    );
  };

  return (
    <div>
      <PageHeader
        className="site-page-header-responsive"
        onBack={history.goBack}
        title={product.name}
      >
        <Content>{renderContent()}</Content>
      </PageHeader>
    </div>
  )
};

ProductDetails.defaultProps = {
  fetching: false
};

ProductDetails.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  fetching: PropTypes.bool,
  fetchProduct: PropTypes.func.isRequired
};

export default connect(state => ({
  products: get(state, "product.lists", []),
  fetching: get(state, "product.fetching", false)
}), {
  fetchProduct: fetchProductAction
})(ProductDetails);