import React from "react";
import { scopeClassMaker } from "../classes";
import "./layout.scss";
const sc = scopeClassMaker("bui-layout");

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Layout: React.FunctionComponent<Props> = (props: any) => {
	const { className, ...rest } = props;

	return (
		<div className={[sc(), className].join(" ")} {...rest}>
			{props.children}
		</div>
	);
};

export default Layout;
