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
exports.Community = void 0;
var typeorm_1 = require("typeorm");
var bookCommunity_entity_1 = require("./bookCommunity.entity");
var userCommunity_entity_1 = require("./userCommunity.entity");
var Community = (function () {
    function Community() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Community.prototype, "id", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return userCommunity_entity_1.UserCommunity; }, function (userCommunity) { return userCommunity.communities; }),
        __metadata("design:type", Array)
    ], Community.prototype, "userCommunities", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return bookCommunity_entity_1.BookCommunity; }, function (bookCommunity) { return bookCommunity.communities; }),
        __metadata("design:type", Array)
    ], Community.prototype, "bookCommunities", void 0);
    Community = __decorate([
        typeorm_1.Entity()
    ], Community);
    return Community;
}());
exports.Community = Community;
//# sourceMappingURL=community.entity.js.map