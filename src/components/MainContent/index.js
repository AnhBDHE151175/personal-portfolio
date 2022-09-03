import "./style.scss";
import { Row, Col } from "antd";
import { MAIN_CONTENT } from "../../contansts/mainContanst";

function MainContent() {
  return (
    <Row className="content">
      <Col className="content__text" span={12}>
        <Row className="content__name">{MAIN_CONTENT.NAME}</Row>
        <Row className="content__title">{MAIN_CONTENT.TITLE}</Row>
        <Row className="content__descript">{MAIN_CONTENT.DESCRIPT}</Row>
      </Col>
      <Col className="content__image" span={12}></Col>
    </Row>
  );
}

export default MainContent;
