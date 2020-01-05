import React from "react";
import { scopeClassMaker } from "../classes";
import "./layout.scss";
const sc = scopeClassMaker("bui-layout");

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Layout: React.FunctionComponent<Props> = (props) => {
	const { className, ...rest } = props;

	return (
		<div className={sc("", { extra: className })} {...rest}>
			{props.children}
		</div>
	);
};

export default Layout;
