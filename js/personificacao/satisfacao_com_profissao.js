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
    text: 'Satisfação das mulheres<br> com suas profissões',
    backgroundColor: "white",
    offsetX: 10,
    fontSize: "20px"
  },
  plotarea: {
    margin: "100px auto"  
  },
  series : [//"#e91e63", "#9c27b0", "#2196f3", "#00bcd4", "#009688", "#ffc107", "#cddc39", "#ff5722", "#4caf50"
    {
      text: "Satisfeita",
      values : [137],
      backgroundColor: "#e91e63"
    },
    {
      text: "Muito Satisfeita",
      values : [67],
      backgroundColor: "#00bcd4"
    },
    {
      text: "Pouco Satisfeita",
      values : [21],
      backgroundColor: "#9575cd"
    },
    {
      text: "Insatisfeita",
      values : [4],
      backgroundColor: "#8bc34a"
    },
    
    
  ]
};
 
zingchart.render({ 
  id : 'satisfacao_com_profissao', 
  data : myConfig, 
  height: 500, 
  width: 500 
});