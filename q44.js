function sandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("sandwiches orders");
    for (var i = 0; i < items.length; i++) {
        console.log(" -".concat(items[i]));
    }
}
console.log('enjoy your sandwich hussain');
sandwiches("capsicum", "bbq", "tomato");
sandwiches("beef", "cheese");
sandwiches("mayou", "garlic chicken");
