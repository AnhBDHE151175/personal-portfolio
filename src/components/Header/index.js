import "./styles.scss";
import { Col, Row, Button } from "antd";
import React from "react";
import { HEADER } from "../../contansts/headerContanst";

function Header({ scroll }) {
  return (
    <Row className={scroll ? "header header--scroll" : "header"}>
      <Col className="header__logo" span={6}>
        {HEADER.LOGO}
      </Col>
      <Col className="header__menu" span={12}>
        <p className="header__menu__item">{HEADER.MENU[1]}</p>
        <p className="header__menu__item">{HEADER.MENU[2]}</p>
        <p className="header__menu__item">{HEADER.MENU[3]}</p>
        <p className="header__menu__item">{HEADER.MENU[4]}</p>
      </Col>
      <Col className="header__contact" span={6}>
        <Button className="header__contact__button" primary>
          {HEADER.BUTTON}
        </Button>
      </Col>
    </Row>
  );
}

export default Header;
