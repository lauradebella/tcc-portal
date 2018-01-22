
          var myConfig =  {  
             type:'chord',
             "background-color":"#fff",
             "options":{  
                "angle-padding":1,
                "color-type":"palette",
                "palette":[  
                   "#F44336",
                   "#E91E63",
                   "#9C27B0",
                   "#673AB7",
                   "#3F51B5",
                   "#03A9F4",
                   "#00BCD4",
                   "#009688",
                   "#4CAF50",
                   "#8BC34A",
                   "#CDDC39",
                   "#FFEB3B",
                   "#FFC107",
                   "#FF9800",
                   "#FF5722"
                ],
                "style":{

                  "label":{
                    "visible":false
                  }
                }, 
             },
              "title":{
                            "text":"Transições entre as áreas de atuação das mulheres na computação",
                            "y":"1%",
                            "background-color":"none",
                            "font-size":"20px",
                            "font-color":"#000000"
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
            width: '100%'
          });