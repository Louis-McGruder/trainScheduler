
var config = {
  apiKey: "AIzaSyA7B1Z0PrB6wdTQqQUZ6ScWiXGc0NjtVnA",
  authDomain: "train-scheduler-bc6f7.firebaseapp.com",
  databaseURL: "https://train-scheduler-bc6f7.firebaseio.com",
  projectId: "train-scheduler-bc6f7",
  storageBucket: "train-scheduler-bc6f7.appspot.com",
  messagingSenderId: "227883862770"
};

firebase.initializeApp(config);


var database = firebase.database();

// var trainName = "";
// var destination = "";
// var firstTrain = 0;
// var frequency = "";


$("#save-details").on("click", function (event)
{
  
  // prevent form from trying to submit/refresh the page
  event.preventDefault();

  $("#displayTrain").html("");
  $("#displayDestination").html("");
  $("#displayFirstTrain").html("");
  $("#displayFrequency").html("");


  var trainName = $("#trainName").val().trim();
  var destination = $("#destination").val().trim();
  var firstTrain = $("#firstTrain").val().trim();
  var frequency = $("#frequency").val().trim();

  database.ref().set({
    trainName: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency
  });
});

// database.ref().on("value", function(snapshot) {

//   // Print the initial data to the console.
//   console.log(snapshot.val());

//   // Log the value of the various properties
//   console.log(snapshot.val().trainName);
//   console.log(snapshot.val().destination);
//   console.log(snapshot.val().firstTrain);
//   console.log(snapshot.val().frequency);

//   // Change the HTML
//   $("#displayTrain").text(snapshot.val().trainName);
//   $("#displayDestination").text(snapshot.val().destination); 
//   $("#displayFirstTrain").text(snapshot.val().firstTrain); 
//   $("#displayFrequency").text(snapshot.val().frequency);  


//   // If any errors are experienced, log them to console.
// }, function(errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });

