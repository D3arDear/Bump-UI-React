import React from "react";
import { scopeClassMaker } from "../classes";
const sc = scopeClassMaker("bui-layout");

const Footer = () => {
	return <div className={sc("footer")}>Footer</div>;
};

export default Footer;
