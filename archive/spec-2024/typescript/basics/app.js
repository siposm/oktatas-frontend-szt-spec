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
var a = "110";
console.log(a);
var names = ["alma", "szilvia", "ferec"];
names.forEach(function (x) { return console.log(x); });
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
        this.credit = 0;
    }
    return Student;
}());
var s1 = new Student("Ferenc A Hallgató");
console.log(s1);
var FrontendStudent = /** @class */ (function (_super) {
    __extends(FrontendStudent, _super);
    function FrontendStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FrontendStudent;
}(Student));
var s2 = new FrontendStudent("Új hallgató");
console.log(s2);
