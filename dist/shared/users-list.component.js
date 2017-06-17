"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("./user.service");
var UsersListComponent = (function () {
    function UsersListComponent(userService) {
        this.userService = userService;
    }
    UsersListComponent.prototype.ngOnInit = function () {
        this.users = this.userService.getUsers();
        console.log(this.users);
    };
    return UsersListComponent;
}());
UsersListComponent = __decorate([
    core_1.Component({
        template: "\n    <div>\n    <h1>Here are all Users</h1>\n    <hr/>\n    <div class=\"row\">\n      <div *ngFor=\"let user of users\" class=\"col-md-5\">\n        <user-thumbnail [user]=\"user\"></user-thumbnail>\n      </div>\n    </div>\n  </div>\n  ",
        styles: ["\n    h1 { margin-top: 30px; }\n  "]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UsersListComponent);
exports.UsersListComponent = UsersListComponent;
//# sourceMappingURL=users-list.component.js.map