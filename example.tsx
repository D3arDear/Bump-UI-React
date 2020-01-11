import React from "react";
import ReactDom from "react-dom";
import IconExample from "./lib/icon/icon.example";
import ButtonExample from "./lib/button/button.example";
import DialogExample from "./lib/dialog/dialog.example";
import LayoutExample from "./lib/layout/layout.example";
import { HashRouter as Router, Link, Route } from "react-router-dom";
import { Layout, Header, Content, Footer, Aside } from "./lib/layout/layout";
import "./example.scss";
import { Icon } from "./lib";

ReactDom.render(
	<Router>
		<Layout className="site-page">
			<Header className="site-header">
				<div className="site-logo">
					<Icon name="bui-logo"></Icon>
					<span>BUI</span>
				</div>
			</Header>
			<Layout>
				<Aside className="site-aside">
					<h2>组件</h2>
					<ul>
						<li>
							<Link to="/icon">Icon</Link>
						</li>
						<li>
							<Link to="/button">Button</Link>
						</li>
						<li>
							<Link to="/dialog">Dialog</Link>
						</li>
						<li>
							<Link to="/layout">Layout</Link>
						</li>
					</ul>
				</Aside>
				<Content className="site-main">
					<Route path="/icon" component={IconExample} />
					<Route path="/button" component={ButtonExample} />
					<Route path="/dialog" component={DialogExample} />
					<Route path="/layout" component={LayoutExample} />
				</Content>
			</Layout>
			<Footer className="site-footer">&copy; Brenz</Footer>
		</Layout>
	</Router>,
	document.querySelector("#root"),
);
