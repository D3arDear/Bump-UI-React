import React from "react";
import { scopeClassMaker } from "../helpers/classes";
const sc = scopeClassMaker("bui-layout");
interface Props extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FunctionComponent<Props> = (props) => {
	const { className, ...rest } = props;
	return (
		<div className={sc("header", { extra: className })} {...rest}>
			{props.children}
		</div>
	);
};

export default Header;
