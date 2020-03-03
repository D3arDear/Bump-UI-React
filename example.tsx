import React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, NavLink, Route } from "react-router-dom";
import { Layout, Header, Content, Footer, Aside } from "./lib/layout/layout";
import "./example.scss";
import { Icon } from "./lib";
import IconDemo from "./lib/icon/icon.demo";
import ButtonDemo from "./lib/button/button.demo";
import DialogDemo from "./lib/dialog/dialog.demo";
import LayoutDemo from "./lib/layout/layout.demo";
import FromDemo from "./lib/form/form.demo";
import ScrollDemo from "./lib/scroll/scroll.demo";
import CitySelectDemo from "./lib/citySelect/citySelect.demo";

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
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout</NavLink>
            </li>
            <li>
              <NavLink to="/form">Form</NavLink>
            </li>
            <li>
              <NavLink to="/scrollArea">Scroll Area</NavLink>
            </li>
            <li>
              <NavLink to="/citySelect">City Select</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/icon" component={IconDemo} />
          <Route path="/button" component={ButtonDemo} />
          <Route path="/dialog" component={DialogDemo} />
          <Route path="/layout" component={LayoutDemo} />
          <Route path="/form" component={FromDemo} />
          <Route path="/scrollArea" component={ScrollDemo} />
          <Route path="/citySelect" component={CitySelectDemo} />
        </Content>
      </Layout>
      <Footer className="site-footer">&copy; Brenz</Footer>
    </Layout>
  </Router>,
  document.querySelector("#root"),
);
