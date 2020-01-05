import React from "react";
import { scopeClassMaker } from "../classes";
const sc = scopeClassMaker("bui-layout");

const Header = () => {
	return <div className={sc("header")}>Header</div>;
};

export default Header;
