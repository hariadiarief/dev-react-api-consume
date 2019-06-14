import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Segment, Menu } from "semantic-ui-react";

class Navbar extends Component {
  state = { activeItem: window.location.pathname };

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Menu position="right">
            <Menu.Item
              as={Link}
              to="/"
              name="Home"
              active={activeItem === "/"}
            />
            <Menu.Item
              as={Link}
              to="/instructor"
              name="Instructor"
              active={activeItem === "/instructor"}
            />
            <Menu.Item
              as={Link}
              to="/memberList"
              name="Member List"
              active={activeItem === "/memberList"}
            />
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }
}

export default Navbar;