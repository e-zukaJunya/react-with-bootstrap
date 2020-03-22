import React, { useState } from "react";
import { Button, Tabs, Tab } from "react-bootstrap";

const Home = () => {
  const [key, setKey] = useState("home");
  return (
    <div>
      <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k: string) => setKey(k)}>
        <Tab eventKey="home" title="Home">
          <div>1個目</div>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <Button>bst button</Button>
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          <div>3個目</div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Home;
