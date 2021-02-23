var firebaseConfig = {
    apiKey: "AIzaSyAB9ouDP9uLmyLoldNaAt3qZXU5dy1zp1A",
    authDomain: "let-s-chatwebapp.firebaseapp.com",
    projectId: "let-s-chatwebapp",
    storageBucket: "let-s-chatwebapp.appspot.com",
    messagingSenderId: "395593350852",
    appId: "1:395593350852:web:9d392bca77a2fb04339391",
    measurementId: "G-99M42BTCLP"
  };
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "Lets_ChatWebApp_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "Lets_ChatWebApp_room.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
