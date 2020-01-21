import * as React from "react";
import { Dropmenu, Theme, Menu } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";
import styled from "styled-components";

const data = [];

for (let i = 0; i < 10; i++) {
  const title = "选项" + i;
  data.push({ value: title, text: title });
}

const Box = styled.div`
  display: inline-block;
  margin: 0 10px;
`;

const Container = styled.div`
  padding: 20px 0;
`;

const menu = <Menu data={data} />;

export default class extends React.Component<any, any> {
  render() {
    const defaultView = {
      [Widget.DropMenu]: {
        Container: {
          normal: {
            width: 120
          }
        }
      }
    };
    return (
      <div>
        <Theme config={defaultView}>
          <Container>
            <Box>
              <Dropmenu menus={menu}>
                <Dropmenu.Button type="basic" onClick={this.onClick}>
                  Click me
                </Dropmenu.Button>
              </Dropmenu>
            </Box>

            <Box>
              <Dropmenu menus={menu}>
                <Dropmenu.Button divided={false}>Click me</Dropmenu.Button>
              </Dropmenu>
            </Box>

            <Box>
              <Dropmenu action={"hover"} menus={menu}>
                <Dropmenu.Button>Hover arrow</Dropmenu.Button>
              </Dropmenu>
            </Box>

            <Box>
              <Dropmenu action={"hover"} menus={menu}>
                <Dropmenu.Button type="primary" divided={false}>
                  Hover me
                </Dropmenu.Button>
              </Dropmenu>
            </Box>

            <Box>
              <Dropmenu menus={menu}>
                <Dropmenu.Button type="primary">Click arrow</Dropmenu.Button>
              </Dropmenu>
            </Box>
          </Container>

          <Container>
            <Box>
              <Dropmenu
                menus={menu}
                type="basic"
                divided={false}
                action={"hover"}
                onClick={this.onClick}
                text={"Hover me"}
              ></Dropmenu>
            </Box>

            <Box>
              <Dropmenu menus={menu} text={"Click right"}></Dropmenu>
            </Box>

            <Box>
              <Dropmenu menus={menu} text={"Hover right"}></Dropmenu>
            </Box>

            <Box>
              <Dropmenu
                action={"hover"}
                type="primary"
                menus={menu}
                text={"Hover Right"}
              ></Dropmenu>
            </Box>

            <Box>
              <Dropmenu
                action={"click"}
                type="primary"
                menus={menu}
                text={"Click Right"}
              ></Dropmenu>
            </Box>
          </Container>
        </Theme>
      </div>
    );
  }
}
