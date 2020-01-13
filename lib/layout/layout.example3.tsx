import React from "react";
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Aside from "./aside";
import "./layout.example.scss";

export default function() {
  return (
    <div>
      <div>
        <h2>Third example</h2>
        <p>Layout wrapped by layout with aside right</p>
        <Layout className="hi" style={{ height: "200px" }}>
          <Header className="edge">Header</Header>
          <Layout>
            <Content className="c">Content</Content>
            <Aside className="side">Aside</Aside>
          </Layout>
          <Footer className="edge">Footer</Footer>
        </Layout>
      </div>
    </div>
  );
}
