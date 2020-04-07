Function.prototype.myBind = function (context) {
    var func = this;

    return function() {
      return func.apply(context, arguments);
    }
};

function addPropToNumber(number) { return this.prop + number; }

var bound = addPropToNumber.myBind({ prop: 9 });
bound(1) // 10

