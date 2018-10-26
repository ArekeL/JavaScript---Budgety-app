// BUDGET CONTROLLER
var budgetController = (function() {

  // some code

})();

// UI CONTROLLER
var UIController = (function() {

  // some code
}() );

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
  document.querySelector('.add__btn').addEventListener('click', function() {
    console.log('Button was clicked');


  });

  document.addEventListener('keypress', function(event){
    console.log(event);
  });

} )(budgetController, UIController);
