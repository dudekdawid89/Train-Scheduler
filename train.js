  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAPVLoPZ6D2ErJfI6ftRkJRqNNGP6Fg1dQ",
    authDomain: "train-scheduler-71738.firebaseapp.com",
    databaseURL: "https://train-scheduler-71738.firebaseio.com",
    projectId: "train-scheduler-71738",
    storageBucket: "train-scheduler-71738.appspot.com",
    messagingSenderId: "400896639790",
    appId: "1:400896639790:web:544da7d5037e6b4e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();


  $("#submit").on("click", function(event){
      event.preventDefault();

      var trainName = $("")
      var trainDestination = $("")
      var firstTrainTime = $("")
      var trainFrequecny = $("")

  })