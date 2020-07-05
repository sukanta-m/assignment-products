import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Input } from "antd";

const Search = ({
  onChange
}) => {
  const [searchTxt, setSearchTxt] = useState();
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTxt(value);
    onChange(value.trim());
  };

  return (
    <Input
      placeholder="Search"
      onChange={handleChange}
      value={searchTxt}
    />
  )
};

Search.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default Search;