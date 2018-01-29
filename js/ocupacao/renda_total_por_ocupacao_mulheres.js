var myConfig = {
  type: "pie", 
  backgroundColor: "white",
  plot: {
    borderColor: "white",
    borderWidth: 5,
    // slice: 90,
    valueBox: {
      placement: 'out',
      text: '%t\n%npv%',
      fontFamily: "Open Sans"
    },
    tooltip:{
      fontSize: '18',
      fontFamily: "Open Sans",
      padding: "5 5",
      text: "%npv%"
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
    text: 'Renda total gerada por mulheres<br> em cada uma das ocupações',
    backgroundColor: "white",
    offsetX: 10,
    fontSize: "20px"
  },
  plotarea: {
    margin: "0 0 0 0"  
  },
  series : [//"#e91e63", "#9c27b0", "#2196f3", "#00bcd4", "#009688", "#ffc107", "#cddc39", "#ff5722", "#4caf50"
    {
      text: "CBO1236",
      values : [4771503.76],
      backgroundColor: "#00bcd4"
    },
    {
      text: "CBO2122",
      values : [5726061.26],
      backgroundColor: "#4caf50"
    },
    {
      text: "CBO1425",
      values : [73049692.58],
      backgroundColor: "#2196f3"
    },
    {
      text: "CBO2612",
      values : [82109322.68],
      backgroundColor: "#e91e63"
    },
    {
      text: "CBO2123",
      values : [17977374.31],
      backgroundColor: "#009688",
    },
    {
      text: "CBO2124",
      values : [36083234.4],
      backgroundColor: "#ffc107",
    },
    {
      text: "CBO3171",
      values : [358246646.6],
      backgroundColor: "#9c27b0",
    },
    {
      text: "CBO3172",
      values : [39182593,33],
      backgroundColor: "#cddc39",
    },
    {
      text: "CBO4121",
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