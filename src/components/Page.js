import React from "react";
import { Container } from "semantic-ui-react";

import Navbar from "./Navbar";

const Page = props => (
  <Container>
    <Navbar />
    <main>{props.children}</main>
  </Container>
);

export default Page;