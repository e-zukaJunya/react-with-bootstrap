import CustomToggle from "components/common/CustomToggle";
import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";

const ChangeSeating: React.FC = () => {
  const [activeKey, setActiveKey] = useState("1");
  console.log(activeKey)

  const keys = {
    first: "1",
    second: "2",
    third: "3"
  };

  const handleChange = (key: string) => {
    setActiveKey(key);
  };

  return (
    <div>
      <Accordion defaultActiveKey={keys.first}>
        <Card>
          {/* todo 開閉しない */}
          {/* <Card.Header onClick={() => handleChange(keys.first)}> */}
          <Card.Header>
            <CustomToggle
              onChange={handleChange}
              name={"changeSeating"}
              label={"文章指定"}
              eventKey={keys.first}
              id={"assignSentence"}
              checked={activeKey === keys.first}
            />
          </Card.Header>
          <Accordion.Collapse eventKey={keys.first}>
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          {/* <Card.Header onClick={() => handleChange(keys.second)}> */}
          <Card.Header>
            <CustomToggle
              onChange={handleChange}
              name={"changeSeating"}
              label={"従業員コード指定"}
              eventKey={keys.second}
              id={"assignEmployee"}
              checked={activeKey === keys.second}
            />
          </Card.Header>
          <Accordion.Collapse eventKey={keys.second}>
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default ChangeSeating;
