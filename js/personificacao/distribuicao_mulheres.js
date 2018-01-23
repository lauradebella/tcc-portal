zingchart.THEME="classic";
 
zingchart.MODULESDIR = "https://cdn.zingchart.com/modules/";
zingchart.loadModules("maps,maps-world-countries, maps-bra");
 
var chartData = {
    "graphset":[
        {
          "background-color":"#fff",
            "shapes": [
                {
                    "type": "zingchart.maps",
                    "options": {
                        "id": "map",
                        "name": "bra",
                        "scale":true,
                        
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
 