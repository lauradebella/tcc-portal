var myConfig = {

  "background-color":"#ffffff",
  type: "hbar",
   "title":{
                            "text":"Percentual de mulheres nas empresas de computação",
                            "y":"5%",
                            "background-color":"none",
                            "font-size":"20px",
                            "font-color":"#000000"
                        },
  tooltip:{
    padding: 10,
    fontSize: 14,
    text: "%v empresas com <br> %t mulheres",
    backgroundColor: "#fff",
    fontColor: "#444",
    borderRadius: "5px",
    borderColor: "#333",
    borderWidth: 1
  },
 
  "source": {
    "text": "Fonte: questionário de benefícios da diversidade",
    "x": "-70%"
  },
  legend: {
    offsetY: 80,
    offsetX: 0,
    padding: 10,
    backgroundColor: "transparent",
    borderWidth: "0px",
    highlightPlot: true,
    item: {
      fontSize: 18,
      fontColor: "#666",
      fontFamily: "Roboto",
      
    },
    marker:{
      borderRadius: 10,
      borderWidth: "0px",
    },
    cursor: "hand"
  },
  plotarea:{
    margin: "100 130 70 100"
  },
  plot:{
    borderRadius: "0 5 5 0",
    hightlightMarker: {
      backgroundColor:"red"
    },
    highlightState: {
      backgroundColor:"red"
    },
     animation:{
 	    effect: 4,
 	    method: 0,
 	    sequence: 1
 	  }
  },
 	scaleX: {
 	  labels: ['Percentual <br>de Mulheres'],
 	  item: {
 	    fontFamily: "Roboto",
 	    fontSize: 14
 	  },
 	  lineColor: "#DDD",
 	  tick:{
 	    visible: false
 	  }
 	},
 	scaleY: {
 	  label:{
 	    offsetY: 5,
 	    text: "Número de Empresas",
 	    fontColor: "#777",
 	    fontSize: 14,
 	    fontFamily: "Roboto",
 	  },
 	  item: {
 	    // fontColor: "#fff",
 	    fontFamily: "Roboto",
 	    fontSize: 14
 	  },
 	  lineWidth: 0,
 	  tick: {
 	    visible: false
 	  },
 	  guide:{
 	    lineStyle: "solid",
 	    lineColor: "#DDD"
 	  },
 	  values: "0:150:10"
 	},
	series : [
	  {
		  text: "Menos de 10%",
		  values: [67],
		  backgroundColor: "#f5f5f5",
		  rules: [
		    { rule: '%i==0', backgroundColor: '#ede7f6'},
		  ]
		},
 
		{
		  text: "acima de 10% até 30%",
		  values: [106],
		  backgroundColor: "#bdbdbd",
		  rules: [
		    { rule: '%i==0', backgroundColor: '#d1c4e9'},
		  ]
		},
		{
		  text: "acima de 30% até 50%",
		  values: [84],
		  backgroundColor: "#9e9e9e",
		  rules: [
		    { rule: '%i==0', backgroundColor: '#b39ddb'},
		  ]
		},
    {
      text: "acima de 50% até 70%",
      values: [26],
      backgroundColor: "#757575",
      rules: [
        { rule: '%i==0', backgroundColor: '#9575cd'},
      ]
    },
     {
      text: "acima de 70%",
      values: [6],
      backgroundColor: "#616161",
      rules: [
        { rule: '%i==0', backgroundColor: '#7e57c2'},
      ]
    },
     {
      text: "Estou desempregado atualmente",
      values: [48],
      backgroundColor: "#424242",
      rules: [
        { rule: '%i==0', backgroundColor: '#673ab7'},
      ]
    },
    {
      text: "Não sei",
      values: [68],
      backgroundColor: "#424242",
      rules: [
        { rule: '%i==0', backgroundColor: '#5e35b1'},
      ]
    },
	]
};
 
zingchart.render({ 
	id : 'percentual_mulheres', 
	data : myConfig, 
	height: 500, 
	width: 900 
});