
zingchart.MODULESDIR = "https://cdn.zingchart.com/modules/";
          var myConfig =  {  
             type:'chord',
             "background-color":"#fff",
             "options":{  
                "angle-padding":1,
                "color-type":"palette",
                "palette":["#e91e63", "#00bcd4", "#9575cd", "#009688", "#9c27b0", "#e91e63", "#3f51b5"],
                "style":{

                  "label":{
                    "visible":false
                  }
                }, 
             },
              "title":{
                            "text":"Transições entre as áreas de <br>atuação das mulheres na computação",
                            "y":"1%",
                            "background-color":"none",
                            "font-size":"20px",
                            "font-color":"#000000"
                        }, 
              "legend": {
                  "layout": "x5",
                  "y": "11%",
                  "x": "10.5%",
                  "overflow": "page",
                  "alpha": 0.05,
                  "shadow": false,
                  "marker": {
                      "type": "circle",
                      "border-color": "none",
                      "size": "8px"
                  },
                  "border-width": 0,
                  "maxItems": 10,
                  "toggle-action": "remove",
                  "pageOn": {
                      "backgroundColor": "#000",
                      "size": "10px",
                      "alpha": 0.65
                  },
                  "pageOff": {
                      "backgroundColor": "#7E7E7E",
                      "size": "10px",
                      "alpha": 0.65
                  },
                  "pageStatus": {
                      "color": "black"
                  }
              },

            "plotarea":{
                            "margin":"100px auto auto auto"

                        },
             // Specify your chart type here. 
          series:[  
           {  
                   values:[  
                      87,
                      32,
                      2,
                      35,
                      0,
                      2,
                      13
                   ],
                   "text":"Desenvolvedoras"
                },
                {  
                   values:[  //dev, test, prof, pes,ana, dsi, gerente
                      30,
                      37,
                      0,
                      14,
                      1,
                      0,
                      15
                   ],
                   "text":"Testadoras"
                },
                {  
                   values:[  //dev, test, prof, pes,ana, dsi, gerente
                      25,
                      5,
                      1,
                      24,
                      0,
                      1,
                      5
                   ],
                   "text":"Professora"
                },
                {  
                   values:[  //dev, test, prof, pes,ana, dsi, gerente
                      20,
                      6,
                      0,
                      22,
                      0,
                      1,
                      6
                   ],
                   "text":"Pesquisadora"
                },
                {  
                   values:[  //dev, test, prof, pes,ana, dsi, gerente
                      37,
                      23,
                      0,
                      14,
                      1,
                      0,
                      16
                   ],
                   "text":"Analista de Requisitos"
                },
                {  
                   values:[  //dev, test, prof, pes,ana, dsi, gerente
                      10,
                      6,
                      0,
                      7,
                      0,
                      1,
                      3
                   ],
                   "text":"Designer"
                },
                {  
                   values:[  
                      30,
                      21,
                      0,
                      12,
                      1,
                      0,
                      35
                   ],
                   "text":"Gerente de Projeto"
                },
             ]
          };
           
          zingchart.render({ 
            id : 'areas_de_atuacao', 
            data : myConfig, 
            height: '100%', 
            width: '1000px'
          });