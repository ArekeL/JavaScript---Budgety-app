
// BUDGET CONTROLER
var budgetController = (function(){
  //Some code
});

// UI CONTROLLER
var UIController = (function(){

// Some code

});

// GLOBAL CONTROLLER
var controller = (function(budgetCTRL, UICTrl){

  var ctrlAddItem = function() {
    // 1. Get the field input data

    // 2. Add the item to the bidget CONTROLLER

    // 3. Add the item to the UI

    // 4. Calculate the budget

    // 5. Display the budget on the
    console.log('It works');
  };


  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event){

     if(event.keyCode === 13 || event.which === 13) {
       ctrlAddItem();
     }

  });







})(budgetController, UIController);

var budgetController = (function() {
    var x = 23;

    var add = function(a) {
      return x + a;
    }

    return {
      publicTest: function(b) {
        console.log(add(b));
      }
    }
})();

