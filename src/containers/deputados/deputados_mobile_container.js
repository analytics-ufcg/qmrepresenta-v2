import React, { Component } from 'react';
import Deputado from '../../components/deputado/deputado.js';
import DeputadosContainer from './deputados_container.js';
import Card, { CardActions, CardContent } from 'material-ui/Card';

const cardStyle = {
  margin: '0vh',
  overflowY: 'scroll',
  overflowX: 'hidden',
  height: '20vh',
  width: '60vh'
};

class DeputadosMobileContainer extends DeputadosContainer {

  render(){
    var deputados = this.inicializaComponentesDeputados();

    return(
      <div className="DeputadosContainer">
        <Card style={cardStyle}>
          {deputados}
        </Card>
      </div>
    );
  }

}

export default DeputadosMobileContainer;
