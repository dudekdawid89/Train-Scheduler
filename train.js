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


    var tFrequency = trainFrequecny;
    var firstTime =firstTrainTime; 
    var firstTimeConverted = moment(firstTime, "HH:mm");
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    var tRemainder = diffTime % tFrequency;
    var tMinutesTillTrain = tFrequency - tRemainder;
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    var arrivalTime = (moment(nextTrain).format("hh:mm"));
    console.log("diffTime: "+diffTime)

    if(diffTime < 0){
      arrivalTime = (moment(firstTime, "HH:mm").format("hh:mm a"))
      tMinutesTillTrain=diffTime*-1;
    }
    else{
      arrivalTime = (moment(nextTrain).format("hh:mm a"))
    }
   
    
    var newButton = $("<button>");
    newButton.attr("data-childid",childSnapshot.key);
    newButton.addClass("delete btn-danger btn");
    newButton.text("Remove");

    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(trainDestination),
      $("<td>").text(trainFrequecny),
      $("<td>").text(arrivalTime),
      $("<td>").text(tMinutesTillTrain),
      $("<td>").html(newButton),
      
    );
  
    // Append the new row to the table
    $("tbody").append(newRow);

  });

  $(document).on("click",".delete",function(){
    var key=$(this).attr("data-child-id") 
   
   
    //David, this gets the node and deletes it from the firebase
    database.ref(key).remove();
   
    //David, this refreshes the page
    location.reload();
   //  alert(key)
   
  })   
        