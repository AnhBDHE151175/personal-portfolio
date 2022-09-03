import "./styles.scss";
import { Row } from "antd";
import { SKILL } from "../../contansts/skillConstant";
import Card from "../Card";

function MySkill() {
  return (
    <Row className="skill">
      <Row className="skill__header">
        <p>{SKILL.TITLE}</p>
        <h1>{SKILL.MY_KNOWLEDGE}</h1>
      </Row>
      <Row className="skill__content">
        <Card></Card>
      </Row>
    </Row>
  );
}
export default MySkill;
