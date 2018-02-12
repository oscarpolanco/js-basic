// BUDGET CONTROLLER
var bugetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };
})();

// UI CONTROLLER
var UIController = (function() {

    var DOMString = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function() {
            return {
                // will be either inc or exp
                type: document.querySelector(DOMString.inputType).value,
                description: document.querySelector(DOMString.inputDescription).value,
                value: document.querySelector(DOMString.inputValue).value
            };
        },

        getDOMStrings: function() {
            return DOMString;
        }
    };
})();

// GLOBAL APP CONTROLLER
var controller = (function(bugetCtrl, UICtrl) {

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if(event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function() {
        // 1. Get filed input data
        var input = UICtrl.getInput();

        // 2. Add the item to the budget controller

        // 3. Add item ti the UI

        // 4. Calculate the budget

        // 5. Display the bufget on the UI
    };

    return {
        init: function() {
            console.log('started');
            setupEventListeners();
        }
    };

})(bugetController, UIController);

controller.init();
