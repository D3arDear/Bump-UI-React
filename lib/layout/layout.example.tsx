import React from "react";
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Aside from "./aside";
// import Layout from "./layout"

export default function() {
	return (
		<div>
			<div>
				<h2>First example</h2>
				<Layout className="hi" style={{ height: "200px" }}>
					<Header></Header>
					<Content></Content>
					<Footer></Footer>
				</Layout>
			</div>
			<div>
				<h2>Second example</h2>
				<p>Layout wrapped by layout with aside left</p>
				<Layout className="hi" style={{ height: "200px" }}>
					<Header></Header>
					<Layout>
						<Aside></Aside>
						<Content></Content>
					</Layout>
					<Footer></Footer>
				</Layout>
			</div>
			<div>
				<h2>Third example</h2>
				<p>Layout wrapped by layout with aside right</p>
				<Layout className="hi" style={{ height: "200px" }}>
					<Header></Header>
					<Layout>
						<Content></Content>
						<Aside></Aside>
					</Layout>
					<Footer></Footer>
				</Layout>
			</div>
			<div>
				<h2>Forth example</h2>
				<p>HCF inside of Layout and wrapped by Layout with Aside</p>
				<Layout className="hi" style={{ height: "200px" }}>
					<Aside></Aside>
					<Layout>
						<Header></Header>
						<Content></Content>
						<Footer></Footer>
					</Layout>
				</Layout>
			</div>
		</div>
	);
}
