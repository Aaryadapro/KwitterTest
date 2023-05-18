var firebaseConfig = { 
      apiKey: "AIzaSyDKgf5VNRvi3LoEMIuatAFzSwUJT9t7Jhc",
       authDomain: "kwitter-aarya.firebaseapp.com",
        databaseURL: "https://kwitter-aarya-default-rtdb.firebaseio.com",
         projectId: "kwitter-aarya",
          storageBucket: "kwitter-aarya.appspot.com",
           messagingSenderId: "500086453067",
            appId: "1:500086453067:web:80beff9d869d6f0e632ece"
};
              // Initialize Firebase 
            firebase.initializeApp(firebaseConfig);
            
username = localStorage.getItem("user_name");
document.getElementById("username").innerHTML = "Welcome "+username+"!";

 function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(Room_names)

      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);

      localStorage.setItem("room_name", name);

      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      
      window.location = "index.html";
}

