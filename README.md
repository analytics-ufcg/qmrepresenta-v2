# Quem Me Representa 2.0

O QMR calcula a compatibilidade entre um eleitor e os deputados federais de acordo com as posições de ambos sobre temas dos últimos anos.
Este repositório é um redesign do projeto em www.qmrepresenta.com.br, tanto visual quanto no backend. 

No visual, temos uma nova interface ([demo aqui](https://paul0vinicius.github.io/qmrepresenta-reactjs/)), feita em React.js. Usamos [Create React App](https://github.com/facebookincubator/create-react-app) e [Material UI](https://material-ui-next.com/). Para mais dicas, tem esse [guia](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Para rodar

```
npm install
npm start
```

Você terá um servidor em [localhost:3000](localhost:3000).

## Backend

Não há servidor. Usamos o [rcongresso](https://github.com/analytics-ufcg/rcongresso) para gerar um json que é nosso banco com as informações das votações dos deputados. Para gerar:

`RScript src/scripts/pega_votacoes.R`
