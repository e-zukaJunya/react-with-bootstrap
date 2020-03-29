import ChangeSeating from "components/changeSeating/ChangeSeatingCont";
import React, { useState } from "react";
import { Button, Container, Tab, Tabs } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import styles from "components/tab/tab.module.scss";
const MyTab: React.FC = () => {
  const [key, setKey] = useState("home");
  const [selected, setSelected] = useState([] as Option[]);
  type Option = {
    id: number;
    name: string;
    age: number;
  };
  const options = [
    { id: 1, name: "飯塚淳也", age: 24 },
    { id: 2, name: "飯塚瞳", age: 23 }
  ];
  return (
    <Container className={styles.tabContainer}>
      <h1>Innovation app</h1>
      <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k: string) => setKey(k)}>
        <Tab eventKey="home" title="Home">
          <Typeahead<Option>
            id="basic-typeahead-example"
            labelKey="name"
            multiple={true}
            onChange={setSelected}
            options={options}
            placeholder="Choose a state..."
            selected={selected}
          />
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <Button>bst button</Button>
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <ChangeSeating />
        </Tab>
        <Tab eventKey="last" title="最後">
          <div>4個目</div>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default MyTab;
