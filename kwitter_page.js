var firebaseConfig = {
    apiKey: "AIzaSyAn8vHKgfbh_z3RqSw-J-jIfQEQaRzK53s",
    authDomain: "qwitter-83bbb.firebaseapp.com",
    databaseURL: "https://qwitter-83bbb-default-rtdb.firebaseio.com",
    projectId: "qwitter-83bbb",
    storageBucket: "qwitter-83bbb.appspot.com",
    messagingSenderId: "88824874458",
    appId: "1:88824874458:web:62a8ddf05b3bf514ed2ce3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var user_name=localStorage.getItem("username");
var room_name=localStorage.getItem("roomname");

function send()
{
 message_sent=document.getElementById("message").value;
 firebase.database().ref(room_name).push({ name: user_name, message:message_sent , like: 0 });
 document.getElementById("message").value=""
}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code

      } });  }); }
getData();