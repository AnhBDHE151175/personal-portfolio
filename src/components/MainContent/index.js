import "./style.scss";
import { Row, Col } from "antd";
import { MAIN_CONTENT } from "../../contansts/mainContanst";

function MainContent({ data, imageInRight }) {
  return (
    <Row className="content">
      {!imageInRight && <Col className="content__image" span={12}></Col>}
      <Col className="content__text" span={12}>
        <Row className="content__name">{data.NAME}</Row>
        <Row className="content__title">{data.TITLE}</Row>
        <Row className="content__descript">{data.DESCRIPT}</Row>
      </Col>
      {imageInRight && <Col className="content__image" span={12}></Col>}
    </Row>
  );
}

export default MainContent;
