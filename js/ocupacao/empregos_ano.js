
            var myConfigEmpregosGenero = {
              type: 'line', 
              title: {
                text: 'Número de empregos na computação por gênero entre 2003 e 2014'
              },
              plot: {
                tooltip: {
                  visible: false
                },
                cursor: 'hand'
              },
              
              "source": {
                "text": "Fonte: RAIS",
                "x": "-90%"
              },
              "legend": {
                  "layout": "x3",
                  "y": "9%",
                  "x": "34.5%",
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
              crosshairX:{},
              scaleX: {
                markers: [],
                offsetEnd:75,
                labels: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014]
              },
              series: [
                {
                  values: [196464,215074,234632,258049,279556,311193,333336,367104,375710,392989,418368,439693],
                  text: 'Gênero masculino',
                  "line-color":"#00bcd4",
                  "marker":{
                      "background-color":"#00bcd4",
                      "border-color":"#00bcd4"
                  }
                },
                {
                  values: [123755,134418,137477,143406,147003,154974,156754,166784,148681,148076,150832,153531],
                  text: 'Gênero feminino',
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
              data: myConfigEmpregosGenero, 
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
             
            


            
             