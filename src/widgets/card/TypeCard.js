import React from "react";
import { Card, Theme } from "@lugia/lugia-web";
import styled from "styled-components";
import Widget from "@lugia/lugia-web/dist/consts";
import avatarImgSrc from "../../../public/card-avatar-circle.png";
import cardImgSrc from "../../../public/card.jpg";

const Wrapper = styled.div`
  display: inline-block;
`;
const CardWrapper = styled.div`
  display: inline-block;
  padding-right: 10px;
  padding-top: 10px;
`;
export default class TypeCard extends React.Component<any, any> {
  render() {
    const imageVCard = {
      [Widget.Card]: {
        Container: {
          normal: {
            width: 200,
            height: 220,
            opacity: 0.8
          }
        },
        CardImageContainer: {
          normal: {
            width: 200,
            height: 150
          }
        },
        CardImage: {
          normal: {
            width: 200,
            height: 160
          }
        },
        CardTitle: {
          normal: {
            width: 100,
            height: 20
          }
        },
        CardOperation: {
          normal: {
            color: "blue"
          }
        }
      }
    };
    const imageHCard = {
      [Widget.Card]: {
        Container: {
          normal: {
            width: 360,
            height: 180
          }
        },
        CardImageContainer: {
          normal: {
            width: 160,
            height: 100
          }
        },
        CardImage: {
          normal: {
            width: 160,
            height: 180
          }
        }
      }
    };
    const avatarVCard = {
      [Widget.Card]: {
        Container: {
          normal: {
            width: 160,
            height: 220
          }
        },
        CardAvatarContainer: {
          normal: {
            width: 160,
            height: 100,
            padding: {
              top: 20
            }
          }
        },

        CardAvatar: {
          SrcAvatar: {
            normal: {
              width: 80,
              height: 80
            }
          }
        }
      }
    };
    const avatarHCard = {
      [Widget.Card]: {
        Container: {
          normal: {
            width: 260,
            height: 180
          }
        },

        CardAvatar: {
          SrcAvatar: {
            normal: {
              width: 80,
              height: 80,
              margin: {
                top: 10
              }
            }
          }
        }
      }
    };
    return (
      <Wrapper>
        <div style={{ display: "inline-flex" }}>
          <CardWrapper>
            <Theme config={avatarVCard}>
              <Wrapper>
                <Card
                  type={"avatar"}
                  title={"This is title"}
                  description={"This is description"}
                  imageOrientation={"vertical"}
                  avatar={avatarImgSrc}
                  shadow={"hover"}
                />
              </Wrapper>
            </Theme>
          </CardWrapper>

          <CardWrapper>
            <Theme config={imageVCard}>
              <Card
                viewClass={"cardImage"}
                type={"image"}
                imageOrientation={"vertical"}
                title={"This is title"}
                description={"This is description"}
                image={cardImgSrc}
                shadow={"hover"}
              />
            </Theme>
          </CardWrapper>
        </div>
        <br />
        <div style={{ display: "inline-flex" }}>
          <CardWrapper>
            <Theme config={avatarHCard}>
              <Wrapper>
                <Card
                  type={"avatar"}
                  title={"This is title"}
                  description={"This is description"}
                  avatar={avatarImgSrc}
                  shadow={"hover"}
                />
              </Wrapper>
            </Theme>
          </CardWrapper>
          <CardWrapper>
            <Theme config={imageHCard}>
              <Wrapper>
                <Card
                  type={"image"}
                  title={"This is title"}
                  imageOrientation={"horizontal"}
                  description={"This is description"}
                  image={cardImgSrc}
                  shadow={"hover"}
                />
              </Wrapper>
            </Theme>
          </CardWrapper>
        </div>
      </Wrapper>
    );
  }
}
