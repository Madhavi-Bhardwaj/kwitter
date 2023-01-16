
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB9jjsSDCtOn2c_IjEkoIa-xdG2ZDaNn1Y",
      authDomain: "kwitter-5300a.firebaseapp.com",
      databaseURL: "https://kwitter-5300a-default-rtdb.firebaseio.com",
      projectId: "kwitter-5300a",
      storageBucket: "kwitter-5300a.appspot.com",
      messagingSenderId: "688792301622",
      appId: "1:688792301622:web:e71d96b8d0c4f487326897"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -" + Room_names);
row="<div class='room_name' id="+ Room_names +" onclick='redirctToRoomName (this.id)'>#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });
      localStorage.setItem("room name", room_name);
      window.location = "kwitter_room.html";

}

function redirctToRoomName(name){
console.log(name);
localStorage.setItem("room name",name);
window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}