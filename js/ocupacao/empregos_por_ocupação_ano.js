
            var myConfigEmpregosOcupacao = {
              type: 'line', 
              title: {
                text: 'Número de empregos por ocupação entre 2003 e 2014 no Brasil do gênero feminino'
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
              series: [
                {
                  values: [135,126,289,247,248,211,305,400,480,443,473,483],
                  text: 'Diretoras de Serviços de Informática',
                  "line-color":"#8bc34a",
                  "marker":{
                      "background-color":"#8bc34a",
                      "border-color":"#8bc34a"
                  }
                },
                {
                  values: [185,229,267,298,376,408,414,455,550,581,645,771],
                  text: 'Engenheiras em Computação',
                  "line-color":"#ffc107",
                  "marker":{
                      "background-color":"#ffc107",
                      "border-color":"#ffc107"
                  }
                },
                {
                  values: [1621,2027,2334,2683,3325,3440,3845,4345,5873,6130,7213,7792],
                  text: 'Gerentes de Tecnologia da Informação',
                  "line-color":"#3f51b5",
                  "marker":{
                      "background-color":"#3f51b5",
                      "border-color":"#3f51b5"
                  }
                },
                {
                  values: [943,1814,1724,1752,2059,2365,3088,3391,3725,3749,3484,3873],
                  text: 'Administradoras de Tecnologia da Informação',
                  "line-color":"#00bcd4",
                  "marker":{
                      "background-color":"#00bcd4",
                      "border-color":"#00bcd4"
                  }
                },
                {
                  values: [24743,27741,31042,35334,38904,43332,46198,48934,53592,55758,60019,61541],
                  text: 'Analistas de Tecnologia da Informação',
                  "line-color":"#009688",
                  "marker":{
                      "background-color":"#009688",
                      "border-color":"#009688"
                  }
                },
                {
                  values: [9236,9222,10261,11283,11309,12384,12483,13922,15019,15634,15912,17101],
                  text: 'Cientistas da Informação',
                  "line-color":"#9c27b0",
                  "marker":{
                      "background-color":"#9c27b0",
                      "border-color":"#9c27b0"
                  }
                },
                {
                  values: [25395,28646,29403,30317,30358,31783,32043,34724,8760,9090,9442,9416],
                  text: 'Técnicas de Desenvolvimento de Sistemas',
                  "line-color":"#ff5722",
                  "marker":{
                      "background-color":"#ff5722",
                      "border-color":"#ff5722"
                  }
                },
                {
                  values: [14907,15558,15764,17153,16735,18251,18080,19613,20760,18901,19753,19797],
                  text: 'Técnicas em Operação de Computadores',
                  "line-color":"#e91e63",
                  "marker":{
                      "background-color":"#e91e63",
                      "border-color":"#e91e63"
                  }
                },
                {
                  values: [46590,49055,46393,44339,43689,42800,40298,41000,39922,37790,33891,32757],
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
              id: 'empregos_por_ocupação_ano', 
              data: myConfigEmpregosOcupacao, 
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
              var plotLength = zingchart.exec('empregos_por_ocupação_ano', 'getplotlength', {
                  graphid : 0
              });
              
              for (var i = 0; i < plotLength; i++) {
                plotInfo = zingchart.exec('empregos_por_ocupação_ano', 'getobjectinfo', {
                    object : 'plot',
                    plotindex : i
                });
                nodeInfo = zingchart.exec('empregos_por_ocupação_ano', 'getobjectinfo', {
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
