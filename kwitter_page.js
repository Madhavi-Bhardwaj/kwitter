//YOUR FIREBASE LINKS
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


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(massage_data);
name = message_data['name'];
message = message_data['message'];
like = massage_data['like']
name_with_tag = "<h4>"+ name + "<img class='user_tick' src='tick.png'></img>"
message_with_tag = "<h4 class='message_h4'>"+ message + "</h4>"
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" vlue="+like+" onclick='updateLike()thi.id'>"
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
      document.getElementById("msg").value = "";
}

function updateLike(){
      console.log("clicked on like button -"+ message_id);
      button_id = message_id;
      likes = document.getElementById(button_id.value);
      updateLike = Number(likes) + 1;
      console.log(update_like);
      firebase.database().ref(room_name).child(message_id).update({
            like : update_like
      })
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}