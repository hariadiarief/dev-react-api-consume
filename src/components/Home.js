import React from "react";
import { Header, Segment } from "semantic-ui-react";

import Page from "./Page";

const Home = () => {
  return (
    <div>
      <Page>
        <Segment>
          <Header as="h1" textAlign="center">
            Doogether Front-End Task
            <Header.Subheader>API Consume</Header.Subheader>
          </Header>
        </Segment>
      </Page>
    </div>
  );
};

export default Home;