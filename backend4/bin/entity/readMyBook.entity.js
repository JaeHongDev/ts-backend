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
exports.ReadMyBook = void 0;
var typeorm_1 = require("typeorm");
var book_entity_1 = require("./book.entity");
var user_entity_1 = require("./user.entity");
var ReadMyBook = (function () {
    function ReadMyBook() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], ReadMyBook.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.User; }, function (user) { return user.readMyBooks; }),
        __metadata("design:type", user_entity_1.User)
    ], ReadMyBook.prototype, "users", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return book_entity_1.Book; }, function (book) { return book.readMyBooks; }),
        __metadata("design:type", book_entity_1.Book)
    ], ReadMyBook.prototype, "books", void 0);
    ReadMyBook = __decorate([
        typeorm_1.Entity()
    ], ReadMyBook);
    return ReadMyBook;
}());
exports.ReadMyBook = ReadMyBook;
//# sourceMappingURL=readMyBook.entity.js.map