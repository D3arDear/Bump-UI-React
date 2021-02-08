import React from "react";
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Aside from "./aside";
import "./layout.example.scss";

export default function () {
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
