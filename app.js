// BUDGET CONTROLLER
var bugetController = (function() {

})();

// UI CONTROLLER
var UIController = (function() {
    // Some code
})();

// GLOBAL APP CONTROLLER
var controller = (function(bugetCtrl, UICtrl) {

    var ctrlAddItem = function() {
        // 1. Get filed input data

        // 2. Add the item to the budget controller

        // 3. Add item ti the UI

        // 4. Calculate the budget

        // 5. Display the bufget on the UI
        console.log('test');
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if(event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
})(bugetController, UIController);
