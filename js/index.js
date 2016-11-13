
var request = new XMLHttpRequest();
var username = "andreaweb";
request.onload = printInfo;
request.open('get', 'https://api.github.com/users/'+username, true);
request.send();

function printInfo() {
  var apiObj = JSON.parse(this.responseText);
  //new info will only be printed if username is valid
  if(apiObj.login){
      //the sections with conditionals will be hidden if data is null or false
      $("span").empty().append(apiObj.login);
      !apiObj.name ? $(".name").hide() : $(".name").show, $(".name h1").empty().append(apiObj.name);
      !apiObj.location ? $(".location").hide() : $(".location").show, $(".location h2").empty().append(apiObj.location);
      !apiObj.bio ? $(".motto").hide() : $(".motto").show(), $(".motto h2").empty().append('"'+apiObj.bio+ '"');
      $(".followers h2").empty().append(apiObj.followers);
      $(".following h2").empty().append(apiObj.following);
      $(".repos h2").empty().append(apiObj.public_repos);
      $(".face img").remove();
      $(".face").append('<img src='+apiObj.avatar_url+'>');
     document.body.scrollTop = document.documentElement.scrollTop = 0;
  }else{
     alert("Invalid username!");
  }
}

//so pressing Enter works as a click
$(".username").keyup(function(event){
    if(event.keyCode == 13){
        $("button").click();
    }
});

//when clicking button, will verify if username exists and print new info
$("button").click(function(){
  username = $("input").val();
  request.open('get', 'https://api.github.com/users/'+username, true);
  request.send();
  printInfo();
});
