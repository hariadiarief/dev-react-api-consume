import React, { Component } from "react";

import {
  Button,
  Card,
  Image,
  Divider,
  Header,
  Icon,
  Segment
} from "semantic-ui-react";
import Page from "./Page";

class Instructor extends Component {
  constructor() {
    super();

    this.state = {
      dataConsume: []
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const data = await response.json();
      console.log(data);
      this.setState({
        dataConsume: data.data
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleClick = item => {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${
        item.email
      }&su=Doogether Member&body=Hai ${
        item.first_name
      }, saya ingin bertanya ...`,
      "_blank"
    );
  };

  render() {
    return (
      <div>
        <Page>
          <Segment>
            <Header as="h1">Body Workout instructor</Header>
            <Divider />
            <Card.Group itemsPerRow={3}>
              {this.state.dataConsume.map((item, index) => (
                <Card key={index} value={item.id}>
                  <Card.Content>
                    <Image
                      floated="right"
                      src={item.avatar}
                      as="a"
                      href={item.avatar}
                      target="_blank"
                      size="mini"
                      circular
                    />
                    <Card.Header>
                      {item.first_name} {item.last_name}
                    </Card.Header>
                    <Card.Meta>{item.email}</Card.Meta>
                    <Card.Description>
                      {item.first_name} is a experienced body workout instructor
                      instructor.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Button
                      basic
                      floated="right"
                      color="green"
                      onClick={() => this.handleClick(item)}
                    >
                      <Icon name="google" /> Send E-mail
                      {/* <a>Send E-mail</a> */}
                    </Button>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          </Segment>
        </Page>
      </div>
    );
  }
}

export default Instructor;