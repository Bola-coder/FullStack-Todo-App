import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ShowPassword = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((current) => !current);
  };
  let Icon;
  let type = "";

  if (show) {
    Icon = <FaEyeSlash />;
    type = "text";
  } else {
    Icon = <FaEye />;
    type = "password";
  }
  const values = { Icon, type, handleShow };
  return values;
};

export default ShowPassword;
