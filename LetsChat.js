var firebaseConfig = { apiKey: "AIzaSyBQyjrjTsIQsGMGcgu-cr1HjszcHi5ZWMk",
 authDomain: "testkwitter.firebaseapp.com", 
 databaseURL: "https://testkwitter.firebaseio.com",
  projectId: "testkwitter",
   storageBucket: "testkwitter.appspot.com",
    messagingSenderId: "624653701634",
     appId: "1:624653701634:web:2cb9a8bd873f17d92d8d1b" }; firebase.initializeApp(firebaseConfig);

document.getElementById("username").innerHTML = "Welcome" + user_name + "!";

function load()
{
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML=user_name;
}

function logout()
{
  window.location="index.html";
}

function addRoom()

  {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "LetsChat.html";
}

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("rooms_div").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name -  " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div> <hr> ";
  document.getElementById("rooms_div").innerHTML += row;
   });
 });
  }
getData();
function redirectToRoomName(name)
