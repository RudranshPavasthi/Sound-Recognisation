function startClassification() {
  navigator.mediaDevices.getUserMedia({
    audio: true
  });
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dFltDQIqX/model.json', modelReady);
}

function modelReady() {
  classifier.classify(gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    sound_name = results[0].label;
    sound_accuracy = Math.floor(results[0].confidence * 100);
    document.getElementById("result_label").innerHTML = "I can Hear " + sound_name;
    document.getElementById("result_confidence").innerHTML = "Accuracy:" + sound_accuracy + "%";
    img1 = document.getElementById("alien1");
    if (sound_name == "barking") {
      img1.src = "https://shravaripatil.github.io/Sound_controlled_animals/bark.gif";
      
    }
    else if (sound_name=="meowing"){
      img1.src = "https://shravaripatil.github.io/Sound_controlled_animals/meow.gif";
      
    }
   
    else {
      img1.src = "https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
    

    }
  }
}