import React from "react";
import { scopeClassMaker } from "../classes";

interface Props extends React.HTMLAttributes<HTMLElement> {}

const sc = scopeClassMaker("bui-layout");
const Footer: React.FunctionComponent<Props> = (props) => {
	const { className, ...rest } = props;
	return (
		<div className={sc("footer", { extra: className })} {...rest}>
			Footer
		</div>
	);
};

export default Footer;
