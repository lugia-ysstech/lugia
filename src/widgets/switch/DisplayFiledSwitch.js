/**
 *
 * create by liangguodong
 *
 */
import React from "react";
import { Switch } from "@lugia/lugia-web";
export default class InverseSwitch extends React.Component<any, any> {
  render() {
    return (
      <div style={{ margin: "20px" }}>
        <section style={{ marginBottom: "20px" }}>
          <h3>displayFiled</h3>
          <Switch
            displayFiled={"left"}
            data={[{ left: "年", name: "ppp" }, { left: "月", name: "ww" }]}
          />
        </section>
        <section style={{ marginBottom: "20px" }}>
          <h3>no displayFiled, have text</h3>
          <Switch
            data={[
              { text: "日", left: "年", name: "ppp" },
              { text: "时", left: "月", name: "ww" }
            ]}
          />
        </section>
        <section style={{ marginBottom: "20px" }}>
          <h3>no displayFiled no text</h3>
          <Switch
            data={[{ left: "年", name: "ppp" }, { left: "月", name: "ww" }]}
          />
        </section>
      </div>
    );
  }
}
