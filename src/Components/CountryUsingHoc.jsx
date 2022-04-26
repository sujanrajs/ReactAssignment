import React from "react";
import PropTypes from "prop-types";
import withCountry from "../Hoc/withCountry";

const CountryUsingHoc = ({ country, error }) => {
  let data;
  if (country) {
    data = country.map((country_name) => {
      return country_name.name.common;
    });
  }
  if (error) {
    data = error.message;
  }
  return (
    <div>
      <p>Fetched Country Name using React HoC: {data}</p>
    </div>
  );
};

CountryUsingHoc.propTypes = {
  data: PropTypes.array,
  error: PropTypes.object,
};
export default withCountry(CountryUsingHoc, "sweden");
