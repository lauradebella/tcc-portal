zingchart.render({
    id: 'sucesso_times',
    data: {
        type: "pie",
        "title":{
                            "text":"Pessoas acreditam que times<br>  com maior diversidade tem mais sucesso",
                            "background-color":"none",
                            "font-size":"20px",
                            "font-color":"#000000"
                        }, 
        "source": {
            "text": "Fonte: questionário de benefícios da diversidade",
            "x": "-40%"
          },
        labels : [
          {
            text : "das pessoas acreditam <br>que os times com maior<br> diversidade de gênero<br>tem mais sucesso",
            x : "50%",
            y : "56%",
            anchor : "c",
            fontSize : "17px",
            fontColor : "#7e57c2",
            alpha : 0.7
          },
          {
            text: "61",
            y : "30 %",
            textAlign : "center",
            //borderWidth : 1,
            //borderColor : "#000",
            offsetX : "-15px",
            width : "100%",
            fontColor: "#7e57c2",
            fontSize: "70px",
            fontFamily : "Avenir"
          },
          {
            text: "%",
            y : "36%",
            textAlign : "center",
            width : "100%",
            offsetX : "40px",
            fontColor: "#7e57c2",
            fontSize: "40px",
            fontFamily : "Avenir",
            alpha : 0.8
          }
        ],
        backgroundColor: "white",
        borderRadius: 4,
        valueBox: {
            visible: true
        },
        plot: {
            slice: '70%',
            refAngle: 270,
            detach: false,
            hoverState: {visible: false},
            valueBox: {visible: false},
            animation:{
              effect:5,
              sequence:3
            },
            tooltip: {
                fontColor: "white",
                rules: [{
                    rule: "%v == 244",
                    text: "%v pessoas acreditem maior sucesso com diversidade",
                    shadow: false,
                    borderRadius: 4
                }, {
                    rule: "%i == 156",
                    text: "%v pessoas não acreditam que diversidade influencia em sucesso",
                    shadow: false,
                    borderRadius: 4
                }]
            }
        },
        plotarea: {
            margin: "dynamic",
        },
        series: [{
            values: [244],
            "gradient-colors" : "white white #7e57c2 white" ,
            "gradient-stops" : "0.2 0.5 0.5",
            fillType : "radial",
            borderWidth: "0px",
            shadow: 0,
            backgroundColor:'#7e57c2'
        }, {
            values: [156],
            backgroundColor: "#7e57c2",
            //"gradient-colors" : "#000000 #7e57c2FFF",
            //"gradient-stops" : "0.9 0.4",
            slice: 155,
            //alpha: "0.5",
            borderWidth: "1px",
            shadow: 0,
            valueBox: {
                visible: false
            }
        }]
 
    },
    height : '500',
    width : "425"
});