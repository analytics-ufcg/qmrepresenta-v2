import React, { Component } from "react";
import Votacao from "../../../desktop-view/components/votacao/Votacao.js";
import Slider from "react-slick";
import ControlledExpansionPanelsMobile from "./ExpansionPanelMobile.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
import Swipeable from "react-swipeable";
import { Collapse } from "antd";
const Panel = Collapse.Panel;

const COLOR_SIM = "rgba(29, 107, 145, 0.4)";
const COLOR_NAO = "rgba(81, 38, 156, 0.4)";
const COLOR_NAO_SEI = "rgba(219, 219, 219, 0.4)";

class VotacaoMobile extends Votacao {
  colorPicker() {
    switch (this.props.value) {
      case 1:
        return COLOR_SIM;
      case -1:
        return COLOR_NAO;
      default:
        return COLOR_NAO_SEI;
    }
  }

  render() {
    var newPainel = (
      <Collapse accordion>
        <Panel
          header={this.props.pergunta}
          key={this.props.key}
          showArrow={false}
          style={{ backgroundColor: this.colorPicker(), padding: "1em" }}
        >
          <p>{this.props.descricao}</p>
        </Panel>
      </Collapse>
    );

    return (
      <div>
        <Swipeable
          onSwipingLeft={this.votaNao.bind(this)}
          onSwipingRight={this.votaSim.bind(this)}
          delta={80}
          flickThreshold={1.2}
        >
          <div>{newPainel}</div>
        </Swipeable>
      </div>
    );
  }

  votaSim() {
    console.log("votou");
    var state = this.state.value;

    switch (state) {
      case 0:
        super.votaSim();
        break;
      case 1:
        super.votaSim();
        break;
      case -1:
        super.votaNaoSei();
        break;
      default:
        break;
    }
  }

  votaNao() {
    var state = this.state.value;

    switch (state) {
      case 0:
        super.votaNao();
        break;
      case 1:
        super.votaNaoSei();
        break;
      case -1:
        super.votaNao();
        break;
      default:
        break;
    }
  }
}

export default VotacaoMobile;
