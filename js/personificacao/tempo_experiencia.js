var myConfig = {

  "background-color":"#ffffff",
  type: "hbar",
   "title":{
                            "text":"Tempo de experiência das mulheres na área",
                            "y":"5%",
                            "background-color":"none",
                            "font-size":"20px",
                            "font-color":"#000000"
                        },
  tooltip:{
    padding: 10,
    fontSize: 14,
    text: "%v mulheres com <br> %t",
    backgroundColor: "#fff",
    fontColor: "#444",
    borderRadius: "5px",
    borderColor: "#333",
    borderWidth: 1
  },
 
  legend: {
    offsetY: 80,
    offsetX: 30,
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
 	  labels: ['Anos de <br>Experiência'],
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
 	    text: "Número de Mulheres",
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
		  text: "Menos de um ano<br> de experiência",
		  values: [13],
		  backgroundColor: "#f5f5f5",
		  rules: [
		    { rule: '%i==0', backgroundColor: '#e0f2f1'},
		  ]
		},
 
		{
		  text: "Entre um ano e <br>cinco anos de experiência",
		  values: [81],
		  backgroundColor: "#bdbdbd",
		  rules: [
		    { rule: '%i==0', backgroundColor: '#b2dfdb'},
		  ]
		},
		{
		  text: "Mais de cinco e menos de <br>dez anos de experiência",
		  values: [56],
		  backgroundColor: "#9e9e9e",
		  rules: [
		    { rule: '%i==0', backgroundColor: '#80cbc4'},
		  ]
		},
    {
      text: "Entre dez e quinze <br>anos de experiência",
      values: [49],
      backgroundColor: "#757575",
      rules: [
        { rule: '%i==0', backgroundColor: '#4db6ac'},
      ]
    },
     {
      text: "Mais de quinze e menos de <br>vinte anos de experiência",
      values: [9],
      backgroundColor: "#616161",
      rules: [
        { rule: '%i==0', backgroundColor: '#26a69a'},
      ]
    },
     {
      text: "Vinte anos ou <br>mais de experiência",
      values: [20],
      backgroundColor: "#424242",
      rules: [
        { rule: '%i==0', backgroundColor: '#009688'},
      ]
    },
	]
};
 
zingchart.render({ 
	id : 'tempo_experiencia', 
	data : myConfig, 
	height: 500, 
	width: 500 
});