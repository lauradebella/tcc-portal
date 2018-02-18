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
      text: "%t<br>%v mulheres"
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
    text: 'Idade das mulheres que responderam o questionário',
    backgroundColor: "white",
    offsetX: 10,
    fontSize: "20px"
  },
  plotarea: {
    margin: "70px 0 0 0"  
  },
series : [
     {
      text: "19 anos",
      values: [2],
      backgroundColor: "#e57373",
      },
      {
      text: "20 anos",
      values: [4],
      backgroundColor: "#f06292",
      },
     {
      text: "21 anos",
      values: [6],
      backgroundColor: "#ba68c8",
      },
      {
      text: "22 anos",
      values: [11],
      backgroundColor: "#9575cd",
      },
      {
      text: "23 anos",
      values: [12],
      backgroundColor: "#7986cb",
      },
      {
      text: "24 anos",
      values: [17],
      backgroundColor: "#64b5f6",
      },
      {
      text: "25 anos",
      values: [15],
      backgroundColor: "#4fc3f7",
      },
      {
      text: "26 anos",
      values: [16],
      backgroundColor: "#4dd0e1",
      },
      {
      text: "27 anos",
      values: [18],
      backgroundColor: "#4db6ac",
      },
      {
      text: "28 anos",
      values: [13],
      backgroundColor: "#81c784",
      },
      {
      text: "29 anos",
      values: [17],
      backgroundColor: "#aed581",
      },
      {
      text: "30 anos",
      values: [11],
      backgroundColor: "#dce775",
      },
      {
      text: "31 anos",
      values: [11],
      backgroundColor: "#fff176",
      },
      {
      text: "32 anos",
      values: [7],
      backgroundColor: "#ffd54f",
      },
      {
      text: "33 anos",
      values: [8],
      backgroundColor: "#ffb74d",
      },
      {
      text: "34 anos",
      values: [12],
      backgroundColor: "#ff8a65",
      },
      {
      text: "35 anos",
      values: [9],
      backgroundColor: "#ef5350",
      },
      {
      text: "36 anos",
      values: [2],
      backgroundColor: "#ef5350",
      },
      {
      text: "37 anos",
      values: [5],
      backgroundColor: "#7e57c2",
      },
      {
      text: "38 anos",
      values: [2],
      backgroundColor: "#5c6bc0",
      },
      {
      text: "39 anos",
      values: [6],
      backgroundColor: "#42a5f5",
      },
      {
      text: "41 anos",
      values: [6],
      backgroundColor: "#29b6f6",
      },
      {
      text: "42 anos",
      values: [5],
      backgroundColor: "#26c6da",
      },
      {
      text: "43 anos",
      values: [1],
      backgroundColor: "#26a69a",
      },
      {
      text: "44 anos",
      values: [5],
      backgroundColor: "#66bb6a",
      },
      {
      text: "45 anos",
      values: [4],
      backgroundColor: "#9ccc65",
      },
      {
      text: "46 anos",
      values: [3],
      backgroundColor: "#d4e157",
      },
      {
      text: "63 anos",
      values: [1],
      backgroundColor: "#ffeb3b",
      },
]
};
 
zingchart.render({ 
  id : 'idades', 
  data : myConfig, 
  height: 500, 
  width: "100%" 
});