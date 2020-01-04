import React from "react"
import ReactDom from "react-dom"
import IconExample from "./lib/icon/icon.example"
import ButtonExample from "./lib/button/button.example"
import DialogExample from "./lib/dialog/dialog.example"
import { HashRouter as Router, Link, Route } from "react-router-dom"

ReactDom.render(
	<Router>
		<div>
			<header>
				<div className="logo">BUI</div>
			</header>
			<div>
				<aside>
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
					</ul>
				</aside>
				<main>
					<Route path="/icon" component={IconExample} />
					<Route path="/button" component={ButtonExample} />
					<Route path="/dialog" component={DialogExample} />
				</main>
			</div>
		</div>
	</Router>,
	document.querySelector("#root"),
)
