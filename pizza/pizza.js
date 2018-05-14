const ratio=.6;
        var images=document.getElementsByTagName('img');
        var switches=document.getElementsByTagName("input");
        var ingredients=[];
        var canvas=document.getElementById("canvas");
        var ctx=canvas.getContext('2d');
        console.log(images);
        
        
        window.onload=function(){
            for(var i=0; i<images.length; i++){
                ingredients.push({img: images[i], size: images[i].width, on: switches[i].checked, frequency: images[i].getAttribute("class")});
            }
            makePizza();
            console.log(ingredients[images.length-1].img)
            document.addEventListener("click", function(){
                console.log("clicked");
                makePizza();});
        };
        function drawCenter(img, x, y, width, height){
            ctx.drawImage(img, x-width/2, y-height/2, width, height);
        }
        
        function makePizza(){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for(var i=0; i<ingredients.length; i++){
                if(switches[i].checked==true && switches[0].checked==true){
                    ingredients[i].on=true;
                }
                else{
                    ingredients[i].on=false;
                }
                if(ingredients[i].on){
                    if(ingredients[i].frequency=="single"){
                        drawCenter(ingredients[i].img, canvas.width/2, canvas.height/2, ingredients[i].size*ratio, ingredients[i].size*ratio);
                    }
                    else{
                        for(var x=0; x<10; x++){
                            drawCenter(ingredients[i].img, getRandomInt(canvas.width/2-ingredients[0].size/3*ratio, canvas.width/2+ingredients[0].size/4), getRandomInt(canvas.width/2-ingredients[0].size/4*ratio, canvas.height/2+ingredients[0].size/4*ratio),  ingredients[i].size*ratio, ingredients[i].size*ratio);
                        }
                    }
                }
            }
        }
        function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        }

        
        
        