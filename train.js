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

      var trainName = $("#trainName-input").val().trim();
      var trainDestination = $("#destination-input").val().trim();
      var firstTrainTime = $("#firstTime-input").val().trim();
      var trainFrequecny = $("#frequecny-input").val().trim();

      var newTrain = {
        name: trainName,
        destination: trainDestination,
        time: firstTrainTime,
        frequecny: trainFrequecny
      };

      database.ref().push(newTrain);
 
      console.log(newTrain.name);
      console.log(newTrain.destination);
      console.log(newTrain.time);
      console.log(newTrain.frequecny);


      $("#trainName-input").val("");
      $("#destination-input").val("");
      $("#firstTime-input").val("");
      $("#frequecny-input").val("");
  });

  database.ref().on("child_added",function(childSnapshot){
console.log(childSnapshot.val());

      var trainName = childSnapshot.val().name;
      var trainDestination = childSnapshot.val().destination;
      var firstTrainTime = childSnapshot.val().time;
      var trainFrequecny = childSnapshot.val().frequecny;

      console.log(trainName);
      console.log(trainDestination);
      console.log(firstTrainTime);
      console.log(trainFrequecny);

    });