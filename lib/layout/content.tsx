import React from "react";
import { scopeClassMaker } from "../classes";
const sc = scopeClassMaker("bui-layout");

const Content = () => {
	return <div className={sc("content")}>Content</div>;
};

export default Content;
