import "./styles.scss";
import { Col, Row } from "antd";
import { CARD_CONTENT } from "../../contansts/cardContant";
function Card() {
  return (
    <Row className="card" style={{ width: "100%" }}>
      {CARD_CONTENT.map((item, index) => {
        return (
          <Col className="card__item" xl={6} lg={6} md={12} sm={24} xs={24}>
            <Row className="card__icon">{item.icon}</Row>
            <Row className="card__title">{item.title}</Row>
            <Row className="card__descript">{item.descript}</Row>
          </Col>
        );
      })}
    </Row>
  );
}
export default Card;
