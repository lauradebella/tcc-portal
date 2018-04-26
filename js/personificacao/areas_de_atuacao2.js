var myConfig =   {
  "type":"bubble",
  "background-color":"#fff",
  "title":{
                            "text":"Transições entre as áreas de <br>atuação das mulheres na computação",
                            "y":"1%",
                            "background-color":"none",
                            "font-size":"20px",
                            "font-color":"#000000"
  }, 
  "plot":{
      "tooltip":{
          "thousands-separator":",",
          "fontSize":15,
          "text":"%node-size-value %kl<br>viraram/permaneceram<br>%vl",
          "rules":[
              {
                  "rule":"%node-size-value >= 20",
                  "background-color":"#82b1ff"
              },
              {
                  "rule":"%node-size-value >= 15 && %node-size-value < 20",
                  "background-color":"#00bcd4"
              },
              {
                  "rule":"%node-size-value >= 10 && %node-size-value < 15",
                  "background-color":"#9c27b0"
              },
              {
                  "rule":"%node-size-value >= 5 && %node-size-value < 10",
                  "background-color":"#e91e63"
              },
              {
                  "rule":"%node-size-value < 5",
                  "background-color":"#b388ff"
              }
          ]
      },
      "marker":{
          "rules":[
              {
                  "rule":"%node-size-value >= 20",
                  "background-color":"#82b1ff",
                  "alpha":0.8
              },
              {
                  "rule":"%node-size-value >= 15 && %node-size-value < 20",
                  "background-color":"#00bcd4",
                  "alpha":0.8
              },
              {
                  "rule":"%node-size-value >= 10 && %node-size-value < 15",
                  "background-color":"#9c27b0",
                  "alpha":0.8
              },
              {
                  "rule":"%node-size-value >= 5 && %node-size-value < 10",
                  "background-color":"#e91e63",
                  "alpha":0.8
              },
              {
                  "rule":"%node-size-value < 5",
                  "background-color":"#b388ff",
                  "alpha":0.8
              }
          ]
      }
  },
  "plotarea":{
                            "margin":"100px 10px 100px 150px"

                        },
  "scaleX":{
      "zooming":true,
      "label":{
          "text":"Papel Inicial"
      },
      "thousands-separator":","
  },
  "scaleY":{  
    "step":1,
      "label":{
          "text":"Papel Atual"
      }
  },
  "source": {
                "text": "Fonte: questionário de personificação",
                "x": "-70%"
              },
  "series":[
      {
          "values":[
              ["Desenvolvedoras","Desenvolvedoras",87],
              ["Desenvolvedoras","Testadoras",32],
              ["Desenvolvedoras","Professoras",2],
              ["Desenvolvedoras","Pesquisadoras",35],
              ["Desenvolvedoras","Analistas",0],
              ["Desenvolvedoras","Designers",2],
              ["Desenvolvedoras","Gerentes de Projeto",13],

              ["Testadoras","Desenvolvedoras",30,],
              ["Testadoras","Testadoras",37,],
              ["Testadoras","Professoras",0,],
              ["Testadoras","Pesquisadoras",14,],
              ["Testadoras","Analistas",1,],
              ["Testadoras","Designers",0,],
              ["Testadoras","Gerentes de Projeto",15,],

              ["Professoras","Desenvolvedoras",25,],
              ["Professoras","Testadoras",5,],
              ["Professoras","Professoras",1,],
              ["Professoras","Pesquisadoras",24,],
              ["Professoras","Analistas",0,],
              ["Professoras","Designers",1,],
              ["Professoras","Gerentes de Projeto",5,],

              ["Pesquisadoras","Desenvolvedoras",2,],
              ["Pesquisadoras","Testadoras",6,],
              ["Pesquisadoras","Professoras",0,],
              ["Pesquisadoras","Pesquisadoras",2,,],
              ["Pesquisadoras","Analistas",0,],
              ["Pesquisadoras","Designers",1,],
              ["Pesquisadoras","Gerentes de Projeto",6,],

              ["Analistas","Desenvolvedoras",37,],
              ["Analistas","Testadoras",23,],
              ["Analistas","Professoras",0,],
              ["Analistas","Pesquisadoras",14,],
              ["Analistas","Analistas",1,],
              ["Analistas","Designers",0,],
              ["Analistas","Gerentes de Projeto",16],

              ["Designers","Desenvolvedoras",10,],
              ["Designers","Testadoras",6,],
              ["Designers","Professoras",0,],
              ["Designers","Pesquisadoras",7,],
              ["Designers","Analistas",0,],
              ["Designers","Designers",1,],
              ["Designers","Gerentes de Projeto",36],

              ["Gerentes de Projeto","Desenvolvedoras",30,],
              ["Gerentes de Projeto","Testadoras",21,],
              ["Gerentes de Projeto","Professoras",0,],
              ["Gerentes de Projeto","Pesquisadoras",12,],
              ["Gerentes de Projeto","Analistas",1,],
              ["Gerentes de Projeto","Designers",0,],
              ["Gerentes de Projeto","Gerentes de Projeto",35,],

          ],
          "legendItem":{
              "visible":false
          },
          "legendMarker":{
              "visible":false
          }
      },
      
      {
          "legendItem":{
              "text":"Population < 1,000,000"
          },
          "legendMarker":{
              "backgroundColor":"#b388ff"
          }
      },
      {
          "legendItem":{
              "text":"10,000,000 > Population > 1,000,000"
          },
          "legendMarker":{
              "backgroundColor":"#82b1ff"
          }
      }
  ]
};

zingchart.render({ 
	id : 'areas_de_atuacao', 
	data : myConfig, 
	height : '100%', 
	width: '100%' 
});