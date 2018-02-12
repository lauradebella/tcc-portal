var myConfig = {
 	type: "treemap", 
  "background-color":"#fff",
  "title":{
          "text":"Idade das mulheres que responderam o questionário",
          "y":"1%",
          "background-color":"none",
          "font-size":"20px",
                            "font-color":"#808080"
      },
 	"plotarea":{
 	  "margin":"70px 40px 40px 40px"
 	},
 	options: {
 	  "max-children":[6,6,6],
 	  "tooltip-box":{
 	    "text":"%value mulheres com<br /> %text"
 	      },
 	      "aspect-type":"transition",
    "color-start":"#ede7f6",
    "color-end":"#673ab7"
 	  },
	series : [
		 {
      text: "19 anos",
      value: 2,
      "data-catagory":"19 anos",
        box:{
          fontSize:20
        },
      },
      {
      text: "20 anos",
      value: 4,
      "data-catagory":"20 anos",
        box:{
          fontSize:20
        },
      },
     {
			text: "21 anos",
			value: 6,
			"data-catagory":"21 anos",
			  box:{
			    fontSize:20
			  },
			},
      {
      text: "22 anos",
      value: 11,
      "data-catagory":"22 anos",
        box:{
          fontSize:20
        },
      },
  		{
      text: "23 anos",
      value: 12,
      "data-catagory":"23 anos",
        box:{
          fontSize:20
        },
      },
      {
      text: "24 anos",
      value: 17,
      "data-catagory":"24 anos",
        box:{
          fontSize:20
        },
      },
      {
      text: "25 anos",
      value: 15,
      "data-catagory":"25 anos",
        box:{
          fontSize:20
        },
      },
      {
      text: "26 anos",
      value: 16,
      "data-catagory":"26 anos",
        box:{
          fontSize:20
        },
      },
      {
      text: "27 anos",
      value: 18,
      "data-catagory":"27 anos",
        box:{
          fontSize:20
        },
      },
      {
      text: "28 anos",
      value: 13,
      "data-catagory":"28 anos",
        box:{
          fontSize:20
        },
      },
      {
      text: "29 anos",
      value: 17,
      "data-catagory":"29 anos",
        box:{
          fontSize:20
        },
      },
      {
      text: "30 anos",
      value: 11,
      "data-catagory":"30 anos",
        box:{
          fontSize:20
        },
      },
      {
      text: "31 anos",
      value: 11,
      "data-catagory":"31 anos",
        box:{
          fontSize:20
        },
      },
      {
      text: "32 anos",
      value: 7,
      "data-catagory":"32 anos",
        box:{
          fontSize:20
        },
      },
      {
      text: "33 anos",
      value: 8,
      "data-catagory":"33 anos",
        box:{
          fontSize:20
        },
      },
      {
      text: "34 anos",
      value: 12,
      "data-catagory":"34 anos",
        box:{
          fontSize:20
        },
      },
      {
      text: "35 anos",
      value: 9,
      "data-catagory":"35 anos",
        box:{
          fontSize:20
        },
      },
      {
      text: "36 anos",
      value: 2,
      "data-catagory":"36 anos",
        box:{
          fontSize:20
        },
      },
      {
      text: "37 anos",
      value: 5,
      "data-catagory":"37 anos",
        box:{
          fontSize:20
        },
      },
      {
      text: "38 anos",
      value: 2,
      "data-catagory":"38 anos",
        box:{
          fontSize:20
        },
      },
      {
      text: "39 anos",
      value: 6,
      "data-catagory":"39 anos",
        box:{
          fontSize:20
        },
      },
      {
      text: "41 anos",
      value: 6,
      "data-catagory":"41 anos",
        box:{
          fontSize:20
        },
      },
      {
      text: "42 anos",
      value: 5,
      "data-catagory":"42 anos",
        box:{
          fontSize:20
        },
      },
      {
      text: "43 anos",
      value: 1,
      "data-catagory":"43 anos",
        box:{
          fontSize:20
        },
      },
      {
      text: "44 anos",
      value: 5,
      "data-catagory":"44 anos",
        box:{
          fontSize:20
        },
      },
      {
      text: "45 anos",
      value: 4,
      "data-catagory":"45 anos",
        box:{
          fontSize:20
        },
      },
      {
      text: "46 anos",
      value: 3,
      "data-catagory":"46 anos",
        box:{
          fontSize:20
        },
      },
      {
      text: "63 anos",
      value: 1,
      "data-catagory":"63 anos",
        box:{
          fontSize:20
        },
      },
]
};
 
zingchart.render({ 
	id : 'idades', 
	data : myConfig, 
	height: 500, 
	width: 850,
	hideprogresslogo: true,
	output: 'canvas'
});