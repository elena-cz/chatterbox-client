// Create an app object with methods
var App = function() {
  this.server = 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages';
  this.count = 0;
  this.messages = [];
  this.username = null;
};


// Method to hold most of our jquery, will run as soon as app starts
App.prototype.init = function() {
  
  console.log(this, ' at top of init');
  this.fetch.call(this, this.storeMessages.bind(this));
  
  
  $(document).ready(function() {
    
    $('#main').append('<h4>Our app loaded!!</h4>');
    
    $('#message_form').submit(function(event) {
      event.preventDefault();
      var msgText = $('#msg_text').val();
      msgText = filterXSS(msgText);
      this.handleSubmit(msgText);
    }.bind(this));
    
    
    if (this.username === null && window.location.search !== undefined) {
      var newSearchStr = window.location.search;
      this.username = newSearchStr.replace(/%20/g, ' ').slice(10);
    }
    
    $('.clear_btn').click(function() {
      this.clearMessages();
    }.bind(this));
        
  }.bind(this));
  
};

App.prototype.storeMessages = function(data) {
  this.messages = data.responseJSON.results;
  console.log(this, ' within storeMessages');
  this.renderMessage();
};



//get new message at a set time interval & and when someone posts. 
//get message from server, when doc loads 
App.prototype.fetch = function(callback) {
  console.log(this, ' within fetch');
  $.ajax({
    url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
    type: 'GET',
    dataType: 'json',
    complete: function(data) { callback(data); }
  });
  
};



//display messages
App.prototype.renderMessage = function(message) {
  //need to read the message. QA check to see if its bad 
   //QA later on
   
   //Loop through each message
   // Get username and message text
   // Prepend to chats div 
   
   
  console.log(this, ' within renderMessage');
  console.log(this.messages);
  

  
  
  
  // for (var i = 0; i < this.messages.length; i++) {
  var username = message.username;
  var text = filterXSS(message.text);
    // var date = this.messages[i].createdAt;
  $('#chats').prepend(
    `<div>
      <h4>${username}</h4>
      <p>${text}</p>
    </div>`);
  // }

};

//requires user interaction and input. send message to server [post]
App.prototype.send = function(message) {
  // Send a POST request to the server
  console.log(message);
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
  });
};

//hide message from user 
App.prototype.clearMessages = function() {
// dont want to delete data
// hide data [users side]
  $('#chats').empty();
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
App.prototype.handleSubmit = function(msgText) {
  // Escape user input
  // Create message object from user input
  // Call send on message
  var roomname = '';
  
  var message = {
    username: this.username,
    text: msgText,
    roomname: roomname
  };
  
  this.send(message);


  console.log(msgText, " under handleSubmit");
  
  
  
};
// Takes user input and escapes text
App.prototype.escapeText = function(input) {
  
};


var app = new App();

app.init();



  
  
// var getMessages = function(callback) {
//   $.ajax({
//     url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
//     type: 'GET',
//     dataType: 'json',
//     complete: function(data) { callback(data); }
//   });
// };

// let jsonResults = null;

// var storeMessages = function(data) {
  

//   jsonResults = data.responseJSON.results; 

// };

// getMessages(storeMessages);

// setTimeout(function() { console.log(jsonResults); }, 2000);
  
  
  
  
  
  
  
  
  
  
  // console.log(Object.keys(jsonResults));

// $('.clear_btn').click(function() {
//   $('#main').append('<h2>hello world</h2>');
// });

// $('.chat_btn').addClass('blueText');


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
