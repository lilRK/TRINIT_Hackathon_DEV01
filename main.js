const firebaseConfig = {
    apiKey: "AIzaSyAQQ1zeYE_XrfYNtkoA-avAfxcwU_h6UZI",
    authDomain: "doogoodngo.firebaseapp.com",
    databaseURL: "https://doogoodngo-default-rtdb.firebaseio.com",
    projectId: "doogoodngo",
    storageBucket: "doogoodngo.appspot.com",
    messagingSenderId: "359208790435",
    appId: "1:359208790435:web:623e76b05aef7f2ab61216"
};

  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var doogoodngoDB = firebase.database().ref("doogoodngo");
  
  document.getElementById("doogoodngo").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var goal = getElementVal("goal");
    var prvs = getElementVal("prvs");
    var fund = getElementVal("fund");
  
    saveMessages(name, prvs, goal, fund);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("doogoodngo").reset();
  }
  
  const saveMessages = (name, prvs, goal, fund) => {
    var newdoogoodngo = doogoodngoDB.push();
  
    newdoogoodngo.set({
      name: name,
      prvs: prvs,
      goal: goal,
      fund: fund,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };