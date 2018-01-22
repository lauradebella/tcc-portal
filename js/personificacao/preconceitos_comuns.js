
            var myConfig = {
              "graphset":[
                
                {
                  "type":"pie",
                  "backgroundColor": "white",
                  "plotarea":{
                    "margin":"40"
                  },
                  "scale":{
                    "sizeFactor":1
                  },
                  "title":{
                            "text":"Principais preconceitos sofridos pelas mulheres no ambiente de trabalho",
                            "y":"1%",
                            "background-color":"none",
                            "font-size":"20px",
                            "font-color":"#000000"
                        },
                  "plot":{
                    "valueBox":{
                      "visible":false
                    },
                    "refAngle":270,
                    "angleStart":270,
                    "detach":false,
                    "slice":"100%",
                    "totals":[100],
                    "animation":{
                      "speed":1000,
                      "effect":2,
                      "method":0
                    },
                    "hoverState":{
                      "visible":false
                    }
                  },
                  "series":[
                    {
                      "size":"100%",
                      "values":[63],
                      "backgroundColor":"#F61F64",
                      "borderWidth":46,
                      "borderColor":"#F61F64",
                      "text":"Piadas sobre \n'mulher na TI'",
                      "tooltip":{
                          "x":365,    
                          "y":243,
                          "width":120,
                          "fontSize":15,
                          "padding":30,
                          "color": "black",
                          "font-weight": "bold",
                          "anchor":"c",
                          "fontFamily":"Lucida Sans Unicode",
                          "text":"<span style='color:%color'>%plot-text</span><br><span style='font-size:31px;font-weight:bold;color:%color;'>%node-percent-value%</span>", 
                          "align":"left",
                          "borderWidth":0,
                          "backgroundColor":"none",
                        }
                    },
                    {
                      "size":"75%",
                      "values":[49],
                      "backgroundColor":"#6fe71c",
                      "borderWidth":46,
                      "borderColor":"#6fe71c",
                      "text":"Não fui \nreconhecida",
                      "tooltip":{
                          "x":365,    
                          "y":243,
                          "width":120,
                          "fontSize":15,
                          "padding":30,
                          "color": "black",
                          "font-weight": "bold",
                          "anchor":"c",
                          "fontFamily":"Lucida Sans Unicode",
                          "text":"<span style='color:%color'>%plot-text</span><br><span style='font-size:31px;font-weight:bold;color:%color;'>%node-percent-value%</span>",
                          "align":"left",
                          "borderWidth":0,
                          "backgroundColor":"none",
                        }
                    },
                    {
                      "size":"50%",
                      "values":[39],
                      "backgroundColor":"#19ecd5",
                      "borderWidth":46,
                      "borderColor":"#19ecd5",
                      "text":"Vida pessoal \nquestionada",
                      "tooltip":{
                          "x":365,    
                          "y":243,
                          "width":120,
                          "fontSize":15,
                          "padding":30,
                          "color": "black",
                          "font-weight": "bold",
                          "anchor":"c",
                          "fontFamily":"Lucida Sans Unicode",
                          "text":"<span style='color:%color'>%plot-text</span><br><span style='font-size:31px;font-weight:bold;color:%color;'>%node-percent-value%</span>",
                          "align":"left",
                          "borderWidth":0,
                          "backgroundColor":"none",
                  },
                    }
                  ],
                  "shapes":[
                    {
                      "type":"pie",
                      "flat":true,
                      "x":362,
                      "y":250,
                      "backgroundColor":"#F61F64",
                      "alpha":0.25,
                      "size":234,
                      "slice":187,
                      "placement":"bottom"
                    },
                    {
                      "type":"pie", //green done
                      "flat":true,
                      "x":362,
                      "y":250,
                      "backgroundColor":"#78ff1b",
                      "alpha":0.25,
                      "size":182,
                      "slice":134,
                      "placement":"bottom"
                    },
                    {
                      "type":"pie", //blue done
                      "flat":true,
                      "x":362,
                      "y":250,
                      "backgroundColor":"#0efbe1",
                      "alpha":0.25,
                      "size":129,
                      "slice":82,
                      "placement":"bottom"
                    },
                    {
                      "type":"line",
                      "lineWidth":3,
                      "lineCap":"round",
                      "lineColor":"#000",
                      "points":[
                        [0,0],
                        [22,0],
                        null,
                        [10,-10],
                        [22,0],
                        [10,10]
                      ],
                      "offsetX":350,
                      "offsetY":42
                    },
                    {
                      "type":"line",
                      "lineWidth":3,
                      "lineCap":"round",
                      "lineColor":"#000",
                      "points":[
                        [0,0],
                        [22,0],
                        null,
                        [10,-10],
                        [22,0],
                        [10,10],
                        null,
                        [20,-10],
                        [32,0],
                        [20,10]
                      ],
                      "offsetX":350,
                      "offsetY":95
                    },
                    {
                      "type":"line",
                      "lineWidth":3,
                      "lineCap":"round",
                      "lineColor":"#000",
                      "points":[
                        [0,0],
                        [0,22],
                        null,
                        [-10,12],
                        [0,0],
                        [10,12]
                      ],
                      "offsetX":360,
                      "offsetY":135
                    }
                  ]
                }
              ]
            };
             
            zingchart.render({ 
                id : 'preconceitos_comuns', 
                data : myConfig, 
                height: 500, 
                width: 725 
            });