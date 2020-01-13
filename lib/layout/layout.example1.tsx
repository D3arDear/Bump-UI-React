import React from "react";
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import "./layout.example.scss";

export default function() {
  return (
    <div>
      <div>
        <h2>First example</h2>
        <Layout className="hi" style={{ height: "200px" }}>
          <Header className="edge">Header</Header>
          <Content className="c">Content</Content>
          <Footer className="edge">Footer</Footer>
        </Layout>
      </div>
    </div>
  );
}
