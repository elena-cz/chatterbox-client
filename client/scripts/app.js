// Create an app object with methods
var App = function() {
  this.server;
  this.count;
};


// Method to hold most of our jquery, will run as soon as app starts
App.prototype.init = function() {
  $(document).ready(function() {
    
    $('#main').append('<h4>Our app loaded!!</h4>');
    
  });
};

//requires user interaction and input. send message to server [post]
App.prototype.send = function() {
  
};

//get new message at a set time interval & and when someone posts. 
//get message from server, when doc loads 
App.prototype.fetch = function() {
  
};

//display messages + something else 
App.prototype.renderMessage = function() {
  //need to read the message. QA check to see if its bad 
  
};

//hide message from user 
App.prototype.clearMessage = function() {
  
};

//create rooms for user 
App.prototype.renderRoom = function() {
  
};
// Lets users click on a username to add as a friend, will need way to keep track
// Bold all messages sent by friend, 
App.prototype.handleUsernameClick = function() {
  
};

// Take in form submission for message
// Escape input to avoid XSS
App.prototype.handleSubmit = function() {
  
};
// Takes user input and escapes text
App.prototype.escapeText = function(input) {
  
};


var app = new App();

app.init();



  
  
var getMessages = function(callback) {
  $.ajax({
    url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
    type: 'GET',
    dataType: 'json',
    complete: function(data) { callback(data); }
  });
};

let jsonResults = null;

var storeMessages = function(data) {
  

  jsonResults = data.responseJSON.results; 

};

getMessages(storeMessages);

setTimeout(function() { console.log(jsonResults); }, 2000);
  
  
  
  
  
  
  
  
  
  
  // console.log(Object.keys(jsonResults));

$('.click_btn').click(function() {
  $('#main').append('<h2>hello world</h2>');
});

$('.chat_btn').addClass('blueText');


// });

  
  // console.log(jsonResults['responseJSON']);


  


/*var message = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};

$.ajax({
  // This is the url you should use to communicate with the parse API server.
  url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
  type: 'POST',
  data: JSON.stringify(message),
  contentType: 'application/json',
  success: function (data) {
    console.log('chatterbox: Message sent');
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message', data);
  }
});*/
