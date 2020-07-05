import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { get, debounce } from "lodash";
import moment from "moment";
import { Spin, Table, message, Popconfirm } from "antd";
import { PlusCircleOutlined, EditOutlined, RightCircleOutlined, DeleteOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import Search from "../sharedComponents/Search";

import { StyledActionsWrapper, StyledCreateWrapper, StyledWrapper } from "./style";

import { fetchProductsAction, deleteProductAction } from "../../modules/actions/product";

const ProductLists = ({
  fetchProducts,
  fetching,
  products,
  deleteProduct
}) => {
  useEffect(() => {
    fetchProducts();
    /*eslint-disable-next-line react-hooks/exhaustive-deps*/
  }, []);

  const handleProductDelete = id => {
    deleteProduct(id).then(res => {
      message.success("Deleted successfully");
      fetchProducts();
    })
  }

  const handleSearch = debounce(searchTxt => fetchProducts(searchTxt), 1000);

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: "20%"
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      width: "40%"
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity'
    },
    {
      title: 'Created Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: date => moment(date).format("MMM DD YYYY hh:mm A")
    },
    {
      title: 'Action',
      dataIndex: 'actions',
      key: 'actions',
      render: (_, record) => {
        return <StyledActionsWrapper>
          <Link to={`/products/${record.id}`}>
            <RightCircleOutlined title="Show" />
          </Link>
          <Link to={`/products/${record.id}/edit`}>
            <EditOutlined title="edit" />
          </Link>
          <Popconfirm title="Are you sure？" icon={<QuestionCircleOutlined style={{ color: 'red' }}/>} onConfirm={() => handleProductDelete(record.id)}>
            <DeleteOutlined title="delete" />
          </Popconfirm>
        </StyledActionsWrapper>
      }
    },
  ];
  return (
    <>
    <StyledCreateWrapper>
      <Link to="/products/new">
        Add New Product
        <PlusCircleOutlined />
      </Link>
      <Search onChange={handleSearch}/>
    </StyledCreateWrapper>
    <StyledWrapper>
      {fetching && <Spin/>}
      <Table
        dataSource={products}
        columns={columns}
        pagination={false}
        bordered
        rowKey="id"
      />
    </StyledWrapper>
    </>
  )
};

PropTypes.defaultProps = {
  fetching: false,
  products: []
};

ProductLists.propTypes = {
  fetching: PropTypes.bool,
  products: PropTypes.arrayOf(PropTypes.object),
  fetchProducts: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired
};

export default connect((state) => ({
  fetching: get(state, "product.fetching", false),
  products: get(state, "product.lists", [])
}), {
  fetchProducts: fetchProductsAction,
  deleteProduct: deleteProductAction
})(ProductLists);