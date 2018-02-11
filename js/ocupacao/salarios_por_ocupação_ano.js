var myConfigSalarioOcupacao = {
              type: 'line', 
              title: {
                text: 'Média salárial por ocupação entre 2003 e 2014 no Brasil do gênero feminino'
              },
              subtitle: {
                text: ''
              },
              plot: {
                tooltip: {
                  visible: false
                },
                cursor: 'hand'
              },
              crosshairX:{},
              scaleX: {
                markers: [],
                offsetEnd:75,
                labels: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014]
              },
              "legend": {
                  "layout": "x3",
                  "y": "9%",
                  "x": "15.5%",
                  "overflow": "page",
                  "alpha": 0.05,
                  "shadow": false,
                  "marker": {
                      "type": "circle",
                      "border-color": "none",
                      "size": "8px"
                  },
                  "border-width": 0,
                  "maxItems": 3,
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
              "plotarea": {
                  "margin": "60 60 100 60",
                  "y": "100px"
              },
              series: [
                {
                  values: [3579.11,4489.61,2968.08,4139.12,4233.87,5895.08,6035.07,5487.89,6519.41,8502.09,8656.65,9878.88],
                  text: 'Diretoras de Serviços de Informática',
                  "line-color":"#8bc34a",
                  "marker":{
                      "background-color":"#8bc34a",
                      "border-color":"#8bc34a"
                  }
                },
                {
                  values: [4294.77,4320.23,4799.56,4970.67,5135.87,5207.3,5616.31,5868.76,6428.32,6989.07,7337.26,7426.79],
                  text: 'Engenheiras em Computação',
                  "line-color":"#ffc107",
                  "marker":{
                      "background-color":"#ffc107",
                      "border-color":"#ffc107"
                  }
                },
                {
                  values: [5222.49,5393.58,5675.73,5901.01,5792.2,6923.91,7188.43,7422.81,7143.29,8125.59,8809.64,9374.96],
                  text: 'Gerentes de Tecnologia da Informação',
                  "line-color":"#3f51b5",
                  "marker":{
                      "background-color":"#3f51b5",
                      "border-color":"#3f51b5"
                  }
                },
                {
                  values: [2988.94,2192.57,2707.53,2985.74,3146.43,3196.36,3385.92,3582.14,3682.25,4126.91,4385.72,4641.71],
                  text: 'Administradoras de Tecnologia da Informação',
                  "line-color":"#00bcd4",
                  "marker":{
                      "background-color":"#00bcd4",
                      "border-color":"#00bcd4"
                  }
                },
                {
                  values: [2327.28,2521.13,2595.78,2783.21,2870.07,3005.84,3326.01,3759.86,4114.2,4353.37,4592.47,4801.43],
                  text: 'Analistas de Tecnologia da Informação',
                  "line-color":"#009688",
                  "marker":{
                      "background-color":"#009688",
                      "border-color":"#009688"
                  }
                },
                {
                  values: [1207.25,1331.53,1393.44,1249.73,1291.18,1418.61,1683.15,1841.82,3031.39,3273.44,3507.08,3832.11],
                  text: 'Cientistas da Informação',
                  "line-color":"#9c27b0",
                  "marker":{
                      "background-color":"#9c27b0",
                      "border-color":"#9c27b0"
                  }
                },
                {
                  values: [3489.53,3715.13,3844.76,3988.61,4026.41,4345.92,4630.73,4610.09,4979.98,5235.23,5600.95,5821.26],
                  text: 'Técnicas de Desenvolvimento de Sistemas',
                  "line-color":"#ff5722",
                  "marker":{
                      "background-color":"#ff5722",
                      "border-color":"#ff5722"
                  }
                },
                {
                  values: [1064.33,1138,1203.7,1203.56,1239.68,1314.49,1404.8,1453.79,1494.69,1676.61,1821.76,1979.21],
                  text: 'Técnicas em Operação de Computadores',
                  "line-color":"#e91e63",
                  "marker":{
                      "background-color":"#e91e63",
                      "border-color":"#e91e63"
                  }
                },
                {
                  values: [715.54,788.48,824.91,944.05,1014.43,1134.84,1370.86,1467.45,1584.97,1678.96,1875.83,2019.39],
                  text: 'Processadoras de Dados',
                  "line-color":"#03a9f4",
                  "marker":{
                      "background-color":"#03a9f4",
                      "border-color":"#03a9f4"
                  }
                },
              ]
            };
             
            zingchart.render({ 
              id: 'salarios_por_ocupação_ano', 
              data: myConfigSalarioOcupacao, 
              height: '100%', 
              width: '100%' 
            });
             

            /*
             * define Marker class to construct
             * markers on the fly easier.
             */
            function Marker(_index) {
              return {
                type: 'line',
                lineColor: '#424242',
                lineWidth: 1,
                range: [_index],
                flat: false,
              }
            }
             
            /*
             * define Label class to construct
             * labels on the fly easier.
             */
            function Label(_text, _id, _offsetX, _offsetY) {
              return {
                  id: _id,
                  text: _text,
                  angle: 0,
                  padding:'5 10 5 10',
                  wrapText:true,
                  textAlign: 'left',
                  backgroundColor: '#eeeeee',
                  offsetX: _offsetX,
                  offsetY: _offsetY ? _offsetY : 0,
                  cursor: 'pointer',
                  flat: false,
                  fontStyle: 'bold',
                  fontSize: 13,
                }
            }
             
            // format the label text
            function formatLabelText(_nodeindex, _scaleText) {
              var plotInfo = null;
              var nodeInfo;
              var seriesText = '';
              var labelString = isNaN(_scaleText) ? _scaleText + '<br>' : '';
              var color = '';
              var plotLength = zingchart.exec('salarios_por_ocupação_ano', 'getplotlength', {
                  graphid : 0
              });
              
              for (var i = 0; i < plotLength; i++) {
                plotInfo = zingchart.exec('salarios_por_ocupação_ano', 'getobjectinfo', {
                    object : 'plot',
                    plotindex : i
                });
                nodeInfo = zingchart.exec('salarios_por_ocupação_ano', 'getobjectinfo', {
                    object : 'node',
                    plotindex : i,
                    nodeindex: _nodeindex
                });
                color = plotInfo.lineColor ? plotInfo.lineColor : plotInfo.backgroundColor1;
                seriesText = plotInfo.text ? plotInfo.text : ('Series ' + (i+1));
                labelString += '<span style="color:' + color + '">' + seriesText + ':</span>' +
                               ' ' + nodeInfo.value + '<br>';
              }
              
              return labelString;
            }