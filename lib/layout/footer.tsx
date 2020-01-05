import React from "react";
import { scopeClassMaker } from "../helpers/classes";

interface Props extends React.HTMLAttributes<HTMLElement> {}

const sc = scopeClassMaker("bui-layout");
const Footer: React.FunctionComponent<Props> = (props) => {
	const { className, ...rest } = props;
	return (
		<div className={sc("footer", { extra: className })} {...rest}>
			{props.children}
		</div>
	);
};

export default Footer;
