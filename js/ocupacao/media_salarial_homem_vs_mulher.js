zingchart.THEME="classic";
var myConfig = {
    "graphset": [
        {
            "type": "bar",
            "background-color": "white",
            "title": {
                "text": "Comparação da média salarial entre homens e mulheres <br>que atuam em áreas da computação",
                "font-color": "black",
                "backgroundColor": "none",
                "font-size": "20px",
                "alpha": 1,
                "y": "15px",
                "x": "15px"
            },
            "tooltip": {
                "text": "R$%v "
            },
            "plotarea": {
                "margin": "80 60 100 60",
                "y": "125px"
            },
            "legend": {
                "layout": "x3",
                "y": "17%",
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
            "plot": {
                "animation": {
                    "effect": "ANIMATION_SLIDE_BOTTOM"
                }
            },
            "scale-x": {
                "line-color": "#7E7E7E",
                "labels": [
                   "2003",
                   "2004",
                   "2005",
                   "2006",
                   "2007",
                   "2008",
                   "2009",
                   "2010",
                   "2011",
                   "2012",
                   "2013",
                   "2014"
                ],
                "item": {
                    "font-color": "#7e7e7e"
                },
                "guide": {
                    "visible": false
                }
            },
            "scale-y": {
                "line-color": "#7E7E7E",
                "item": {
                    "font-color": "#7e7e7e"
                },
                "values": "1000:5000:100",
                "guide": {
                    "visible": true
                },
                "label": {
                  "text": "Salário",
                  "font-family": "arial",
                  "font-angle":0,
                  "bold": true,
                  "font-size": "14px",
                  "font-color": "#7E7E7E",
                  "offset-y":"-160px",
                  "offset-x":"20px"
            },
            },
            "series": [
                {
                    "values": [
                        2371.84,
                        2550.57,
                        2701.56,
                        2874.13,
                        2988.84,
                        3234.38,
                        3431.25,
                        3566.36,
                        4034.00,
                        4394.01,
                        4804.77,
                        5119.70
                    ],
                    "alpha": 0.95,
                    "borderRadiusTopLeft": 7,
                    "background-color": "#00bcd4",
                    "text": "Homens"
                },
                {
                    "values": [
                        1618.19,
                        1765.41,
                        1922.17,
                        2066.12,
                        2190.99,
                        2438.71,
                        2757.72,
                        2876.97,
                        3442.75,
                        3768.12,
                        4173.93,
                        4450.53
                    ],
                    "borderRadiusTopLeft": 7,
                    "alpha": 0.95,
                    "background-color": "#e91e63",
                    "text": "Mulheres"
                }   
            ]
        }
    ]
};
 
zingchart.render({ 
	id : 'media_salarial_homem_vs_mulher', 
	data : myConfig, 
	height: 400, 
	width: "60% "
});