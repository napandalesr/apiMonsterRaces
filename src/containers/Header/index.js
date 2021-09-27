import React from "react";
import { PageHeader } from "antd";

import './style.scss';

const Header = () => {
  return <>
    <PageHeader
      className="site-page-header"
      onBack={() => null}
      title="Title"
      subTitle="This is a subtitle"
    />
  </>;
};

export default Header;