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
exports.UserCommunity = void 0;
var typeorm_1 = require("typeorm");
var community_entity_1 = require("./community.entity");
var user_entity_1 = require("./user.entity");
var UserCommunity = (function () {
    function UserCommunity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], UserCommunity.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.User; }, function (user) { return user.id; }),
        __metadata("design:type", user_entity_1.User)
    ], UserCommunity.prototype, "users", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return community_entity_1.Community; }, function (community) { return community.id; }),
        __metadata("design:type", community_entity_1.Community)
    ], UserCommunity.prototype, "communities", void 0);
    UserCommunity = __decorate([
        typeorm_1.Entity()
    ], UserCommunity);
    return UserCommunity;
}());
exports.UserCommunity = UserCommunity;
//# sourceMappingURL=userCommunity.entity.js.map