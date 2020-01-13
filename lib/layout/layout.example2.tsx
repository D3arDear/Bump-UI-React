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
        <h2>Second example</h2>
        <p>Layout wrapped by layout with aside left</p>
        <Layout className="hi" style={{ height: "200px" }}>
          <Header className="edge">Header</Header>
          <Layout>
            <Aside className="side">Aside</Aside>
            <Content className="c">Content</Content>
          </Layout>
          <Footer className="edge">Footer</Footer>
        </Layout>
      </div>
    </div>
  );
}
