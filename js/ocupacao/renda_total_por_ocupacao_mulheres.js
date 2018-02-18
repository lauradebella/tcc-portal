var myConfig = {
  type: "pie", 
  backgroundColor: "white",
  plot: {
    borderColor: "white",
    borderWidth: 5,
    // slice: 90,
    valueBox: {
      placement: 'out',
      text: '%t<br>%npv%',
      fontFamily: "Open Sans"
    },
    tooltip:{
      fontSize: '18',
      fontFamily: "Open Sans",
      padding: "5 5",
      text: "%t<br>R$%v"
    },
    animation:{
      effect: 2, 
      method: 5,
      speed: 500,
      sequence: 1
    }
  },
  title: {
    fontColor: "black",
    text: 'Renda total gerada por mulheres<br> em cada uma das ocupações em 2014',
    backgroundColor: "white",
    offsetX: 10,
    fontSize: "20px"
  },
  
    "source": {
      "text": "Fonte: RAIS",
      "x": "-90%"
    },
  plotarea: {
    margin: "70px 0 0 0"  
  },
  series : [//"#e91e63", "#9c27b0", "#2196f3", "#00bcd4", "#009688", "#ffc107", "#cddc39", "#ff5722", "#4caf50"
    {
      text: "Diretores de Serviços de Informática",
      values : [4771503.76],
      backgroundColor: "#00bcd4"
    },
    {
      text: "Engenheiros em Computação",
      values : [5726061.26],
      backgroundColor: "#4caf50"
    },
    {
      text: "Gerentes de Tecnologia da Informação",
      values : [73049692.58],
      backgroundColor: "#00bcd4"
    },
    {
      text: "Cientistas da Informação",
      values : [82109322.68],
      backgroundColor: "#e91e63"
    },
    {
      text: "Administradores de Tecnologia da Informação",
      values : [17977374.31],
      backgroundColor: "#009688",
    },
    {
      text: "Analistas de Tecnologia da Informação",
      values : [36083234.4],
      backgroundColor: "#ffc107",
    },
    {
      text: "Técnicos de Desenvolvimento de Sistemas",
      values : [358246646.6],
      backgroundColor: "#9c27b0",
    },
    {
      text: "Técnicos em Operação de Computadores",
      values : [39182593,33],
      backgroundColor: "#cddc39",
    },
    {
      text: "Processadores de Dados",
      values : [66149172.99],
      backgroundColor: "#ff5722",
      
    }
  ]
};
 
zingchart.render({ 
  id : 'renda_total_por_ocupacao_mulheres', 
  data : myConfig, 
  height: 500, 
  width: "100%" 
});