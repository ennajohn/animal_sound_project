dog = 0;
cat = 0;
lion=0;

function start_classification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/USd4PduCX/model.json", modelReady);
    }
    
    function modelReady(){
        classifier.classify(gotResults);
    }

    function gotResults(error, results){
        if (error){
            console.log(error);
        }
      else{
        console.log(results);
        random_r = Math.floor(Math.random()* 255)+ 1;
        random_g = Math.floor(Math.random()* 255)+ 1;
        random_b = Math.floor(Math.random()* 255)+ 1;

       document.getElementById("result_detected").innerHTML = "Detected dog - " + dog +"Detected cat - " + cat + " Detected lion - " + lion ;
       document.getElementById("result_detected").style.color = "rgb("+random_r+ ","+random_g+","+random_b+")";

       document.getElementById("result_detected").innerHTML = " Detected voice is of - " + results[0].label;
       document.getElementById("result_detected").style.color = "rgb("+random_r+ ","+random_g+","+random_b+")";

     
       img = document.getElementById("hear_image");

       if(results[0].label == "Barking"){
        img.src = "dog-barking.gif";
        dog = dog + 1;
      }

        else if(results[0].label == "Meowing"){
          img.src = "Cat.gif";
          cat = cat + 1;
        }

        else if (results[0].label == "Roaring"){
          img.src = "Lion.gif";
          lion = lion + 1;
        }

        else{
        img.src = "https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
        }
       
     }
    }
