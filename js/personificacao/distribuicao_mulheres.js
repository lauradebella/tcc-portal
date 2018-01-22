zingchart.THEME="classic";
 
zingchart.MODULESDIR = "https://cdn.zingchart.com/modules/";
zingchart.loadModules("maps,maps-world-countries");
 
var chartData = {
    "graphset":[
        {
          "background-color":"#fff",
            "shapes": [
                {
                    "type": "zingchart.maps",
                    "options": {
                        "id": "map",
                        "groups": ["AFRICA"],
                        "name": "world.countries",
                        "scale":true,
                        "style": {
                          "items": {
                            "ZAF": {
                              "background-color": "#C30",
                              "tooltip": {
                                "text": "This is a tooltip for South Africa"
                              },
                              "hover-state": {
                                "background-color":"#F30"
                              }
                            },
                            "DZA": {
                              "background-color": "#7CA82B",
                              "tooltip": {
                                "text": "This is a tooltip for Algeria"
                              },
                              "hover-state": {
                                "background-color": "#0C3"
                              }
                            }
                          }
                        }
                    }
                }
            ]
        }
    ]
}
 
zingchart.render({
    id: "myChart",
    data: chartData,
    height:"100%",
    width:"100%"
});
 