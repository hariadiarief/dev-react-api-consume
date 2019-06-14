import React from "react";
import { Header, Segment, Image } from "semantic-ui-react";

import Page from "./Page";

const Home = () => {
  return (
    <div>
      <Page>
        <Segment>
          <Header as="h1" textAlign="center">
            Front-End Task
            <Header.Subheader>API Consume</Header.Subheader>
          </Header>
          <Image
            src="/image/databaselogo.png"
            className="rotate-center"
            size="small"
            centered
          />
          <Image />
        </Segment>
      </Page>
    </div>
  );
};

export default Home;
