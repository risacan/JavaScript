"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function judgeUserType(user) {
    if ("gender" in user) {
        var u0 = user;
        console.log("User type is UserA432 | UserB432");
    }
    if ("name" in user) {
        var u1 = user;
        console.log("user type is UserA432");
        return;
    }
    var u2 = user;
    console.log("user type is UserB");
}
