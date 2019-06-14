import React, { Component } from "react";

import { Image, Table } from "semantic-ui-react";
import Page from "./Page";

class MemberList extends Component {
  constructor() {
    super();

    this.state = {
      dataConsume: [],
      open: false
    };
  }

  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

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
      <Page>
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Photo</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.dataConsume.map((item, index) => (
              <Table.Row key={index} value={item.id}>
                <Table.Cell>{item.id}</Table.Cell>

                <Table.Cell>
                  <Image
                    src={item.avatar}
                    as="a"
                    href={item.avatar}
                    target="_blank"
                    size="mini"
                  />
                </Table.Cell>
                <Table.Cell>
                  {item.first_name} {item.last_name}
                </Table.Cell>
                <Table.Cell>{item.email}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Page>
    );
  }
}

export default MemberList;