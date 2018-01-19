
            var myConfigMatriculados = {
              type: 'line', 
              title: {
                text: 'Número de empregos na computação por Gênero entre 2003 e 2014 no Brasil'
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
                  values: [196464,215074,234632,258049,279556,311193,333336,367104,375710,392989,418368,439693],
                  text: 'Numero de empregos do gênero masculinos',
                  "line-color":"#00bcd4",
                  "marker":{
                      "background-color":"#00bcd4",
                      "border-color":"#00bcd4"
                  }
                },
                {
                  values: [123755,134418,137477,143406,147003,154974,156754,166784,148681,148076,150832,153531],
                  text: 'Numero de empregos do gênero femininos',
                  "line-color":"#e91e63",
                  "marker":{
                      "background-color":"#e91e63",
                      "border-color":"#e91e63"
                  }
                }
              ]
            };
             
            zingchart.render({ 
              id: 'empregos_ano', 
              data: myConfigMatriculados, 
              height: '100%', 
              width: '100%' 
            });
             
            function Marker(_index) {
              return {
                type: 'line',
                lineColor: '#424242',
                lineWidth: 1,
                range: [_index],
                flat: false,
              }
            }
             
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
              var plotLength = zingchart.exec('empregos_ano', 'getplotlength', {
                  graphid : 0
              });
              
              for (var i = 0; i < plotLength; i++) {
                plotInfo = zingchart.exec('empregos_ano', 'getobjectinfo', {
                    object : 'plot',
                    plotindex : i
                });
                nodeInfo = zingchart.exec('empregos_ano', 'getobjectinfo', {
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
             
            
            var myConfig = {
              type: 'line', 
              title: {
                text: 'Concluíntes por Gênero entre 2001 e 2015 no Brasil'
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
                labels: [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015]
              },
              series: [
                {
                  values: [7256,9225,11437,16574,21452,23400,26019,28505,36364,34714,33222,33420,31940,32938,34828],
                  text: 'Numero de concluintes do gênero masculinos',
                  "line-color":"#00bcd4",
                  "marker":{
                      "background-color":"#00bcd4",
                      "border-color":"#00bcd4"
                  }
                },
                {
                  values: [3380,3470,3881,5216,6455,6450,6432,6775,8955,7762,6902,7127,6448,6404,6638],
                  text: 'Numero de concluintes do gênero feminino',
                  "line-color":"#e91e63",
                  "marker":{
                      "background-color":"#e91e63",
                      "border-color":"#e91e63"
                  }
                }
              ]
            };
             
            zingchart.render({ 
              id: 'concluintes', 
              data: myConfig, 
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
              var plotLength = zingchart.exec('concluintes', 'getplotlength', {
                  graphid : 0
              });
              
              for (var i = 0; i < plotLength; i++) {
                plotInfo = zingchart.exec('concluintes', 'getobjectinfo', {
                    object : 'plot',
                    plotindex : i
                });
                nodeInfo = zingchart.exec('concluintes', 'getobjectinfo', {
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
             