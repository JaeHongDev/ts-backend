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
exports.User = void 0;
var typeorm_1 = require("typeorm");
var readMyBook_entity_1 = require("./readMyBook.entity");
var userCommunity_entity_1 = require("./userCommunity.entity");
var User = (function () {
    function User() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("varchar"),
        __metadata("design:type", String)
    ], User.prototype, "nameFirst", void 0);
    __decorate([
        typeorm_1.Column("varchar"),
        __metadata("design:type", String)
    ], User.prototype, "nameLast", void 0);
    __decorate([
        typeorm_1.Column("varchar"),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column("varchar"),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column("datetime"),
        __metadata("design:type", Date)
    ], User.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.Column("dateTime"),
        __metadata("design:type", Date)
    ], User.prototype, "updateAt", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return readMyBook_entity_1.ReadMyBook; }, function (table) { return table.users; }),
        __metadata("design:type", Array)
    ], User.prototype, "readMyBooks", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return userCommunity_entity_1.UserCommunity; }, function (userCommunity) { return userCommunity.users; }),
        __metadata("design:type", Array)
    ], User.prototype, "userCommunities", void 0);
    User = __decorate([
        typeorm_1.Entity()
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.entity.js.map