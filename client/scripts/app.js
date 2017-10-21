// Create an app object with methods

   
  
  
  
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
