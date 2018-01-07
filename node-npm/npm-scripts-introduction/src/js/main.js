//creates a global getLocation method
(function(){
  window.getLocation = function(){

    //return the location object
    return window.location;
  };
})();

//creates a global getNavigator method
(function(){
  window.getNavigator = function(){

    //return the navigator object
    return window.navigator;
  };
})();

//creates a global getSearch method
(function(){
  window.getSearch = function(){

    //return the search object
    return window.location.search;
  };
})();
