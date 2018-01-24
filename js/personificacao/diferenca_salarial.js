zingchart.render({
    id: 'diferenca_salarial',
    data: {
        type: "pie",
        "title":{
                            "text":"Diferenças salariais entre gêneros",
                            "background-color":"none",
                            "font-size":"20px",
                            "font-color":"#000000"
                        },
        labels : [
          {
            text : "das mulheres ainda <br>identifica diferenças<br> salariais entre gêneros",
            x : "50%",
            y : "62%",
            anchor : "c",
            fontSize : "15px",
            fontColor : "#7e57c2",
            alpha : 0.7
          },
          {
            text: "40",
            y : "36%",
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
            y : "38%",
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
            slice: '50%',
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
                    rule: "%i == 0",
                    text: "%v mulheres identificam diferenças salariais",
                    shadow: false,
                    borderRadius: 4
                }, {
                    rule: "%i == 1",
                    text: "%v mulheres não identificam diferenças salariais",
                    shadow: false,
                    borderRadius: 4
                }]
            }
        },
        plotarea: {
            margin: "dynamic",
        },
        series: [{
            values: [50],
            "gradient-colors" : "white white #7e57c2 white" ,
            "gradient-stops" : "0.2 0.5 0.5",
            fillType : "radial",
            borderWidth: "0px",
            shadow: 0,
            backgroundColor:'#7e57c2'
        }, {
            values: [75],
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
    width : "725"
});