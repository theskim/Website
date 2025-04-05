import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import "./Background.scss";
import { setSideBar } from "../../";

const BackgroundAll = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="background__all"
      onClick={() => dispatch(setSideBar(false))}
    >
      <div className="box__all">{children}</div>
    </div>
  );
};

BackgroundAll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BackgroundAll;
