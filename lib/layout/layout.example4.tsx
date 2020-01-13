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
        <h2>Forth example</h2>
        <p>HCF inside of Layout and wrapped by Layout with Aside</p>
        <Layout className="hi" style={{ height: "200px" }}>
          <Aside className="side">Aside</Aside>
          <Layout>
            <Header className="edge">Header</Header>
            <Content className="c">Content</Content>
            <Footer className="edge">Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
}
