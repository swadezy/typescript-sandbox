var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    // constructor runs when class is used
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User created', this.name);
    }
    // methods
    User.prototype.register = function () {
        console.log(this.name, 'is now registered');
    };
    User.prototype.payInvoice = function () {
        console.log(this.name, 'has paid their invoice');
    };
    return User;
}());
var seanUser = new User('Sean', 'smwade1115@gmail.com', 28);
console.log(seanUser.email);
seanUser.register();
// classes extending to other classes inherit properties of first class
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = 
        // super is required for inherited props
        _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var mikeMember = new Member(1, 'Mike', 'mike@mike.com', 33);
mikeMember.payInvoice();
