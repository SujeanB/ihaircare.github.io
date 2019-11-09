var firebaseConfig = {
    apiKey: "AIzaSyD9Js1VIxDlFM_eqYVaSYnwyqXzU4T-hOo",
    authDomain: "ihaircare.firebaseapp.com",
    databaseURL: "https://ihaircare.firebaseio.com",
    projectId: "ihaircare",
    storageBucket: "ihaircare.appspot.com",
    messagingSenderId: "955787204175",
    appId: "1:955787204175:web:f65418b9553421d5f6fc3a",
    measurementId: "G-LFCELCQ8K2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth.Auth.Persistence.SESSION;

  $("#btn-login").click(function()
  {
    var email = $('#email').val();
    var password = $('#password').val();

    if(email != "" && password != "")
    {
        var result = firebase.auth().signInWithEmailAndPassword(email, password);
        result.catch(function(error)
        {
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert("Message: " + errorMessage);
        });
    }
    else{
        window.alert("Please fill out all fields.")
    }

  });