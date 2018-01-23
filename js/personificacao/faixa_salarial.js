var myConfig = {

  "background-color":"#ffffff",
  type: "hbar",
   "title":{
                            "text":"Faixa salarial das Mulheres",
                            "y":"5%",
                            "background-color":"none",
                            "font-size":"20px",
                            "font-color":"#000000"
                        },
  tooltip:{
    padding: 10,
    fontSize: 14,
    text: "%v mulheres ganhando <br> %t",
    backgroundColor: "#fff",
    fontColor: "#444",
    borderRadius: "5px",
    borderColor: "#333",
    borderWidth: 1
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
  source: {
    text: "Source: sec.gov",
    fontColor: "#666",
    fontFamily: 'Roboto'
  },
 	scaleX: {
 	  labels: ['Faixa salarial <br>das Mulheres'],
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
 	  values: "0:80:10"
 	},
	series : [
	  {
		  text: "Menos de R$1500",
		  values: [37],
		  backgroundColor: "#f5f5f5",
		  rules: [
		    { rule: '%i==0', backgroundColor: '#fce4ec'},
		  ]
		},
 
		{
		  text: "De R$1500 até R$3000",
		  values: [40],
		  backgroundColor: "#bdbdbd",
		  rules: [
		    { rule: '%i==0', backgroundColor: '#f8bbd0'},
		  ]
		},
		{
		  text: "Acima de R$3000 a R$4500",
		  values: [42],
		  backgroundColor: "#9e9e9e",
		  rules: [
		    { rule: '%i==0', backgroundColor: '#f48fb1'},
		  ]
		},
    {
      text: "Acima de R$4500 a R$6000",
      values: [35],
      backgroundColor: "#757575",
      rules: [
        { rule: '%i==0', backgroundColor: '#f06292'},
      ]
    },
     {
      text: "Acima de R$6000 a R$8000",
      values: [40],
      backgroundColor: "#616161",
      rules: [
        { rule: '%i==0', backgroundColor: '#ec407a'},
      ]
    },
     {
      text: "Acima de R$8000 a R$10000",
      values: [18],
      backgroundColor: "#424242",
      rules: [
        { rule: '%i==0', backgroundColor: '#e91e63'},
      ]
    },
    {
      text: "Acima de R$10000",
      values: [17],
      backgroundColor: "#424242",
      rules: [
        { rule: '%i==0', backgroundColor: '#d81b60'},
      ]
    },
	]
};
 
zingchart.render({ 
	id : 'faixa_salarial', 
	data : myConfig, 
	height: 500, 
	width: 725 
});