$(document).ready(function() {

    $.ajax({
      url: "https://bb-election-api.herokuapp.com/",
      method: "GET",
      data: {},
      dataType: "json"
    }).done(function (responseData){
      var people = responseData.candidates;
      $('<ul>').appendTo('body');
      people.forEach(function(person){
      $('<li>').append('name: ' + person.name + ' votes: ' + person.votes).appendTo('body ');
      })
    })

});
