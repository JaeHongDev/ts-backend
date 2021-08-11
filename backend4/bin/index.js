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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var User = (function () {
    function User() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return ReadMyBook; }, function (table) { return table.users; }),
        __metadata("design:type", Array)
    ], User.prototype, "readMyBooks", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return UserCommunity; }, function (userCommunity) { return userCommunity.users; }),
        __metadata("design:type", Array)
    ], User.prototype, "userCommunities", void 0);
    User = __decorate([
        typeorm_1.Entity()
    ], User);
    return User;
}());
var Community = (function () {
    function Community() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Community.prototype, "id", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return UserCommunity; }, function (userCommunity) { return userCommunity.communities; }),
        __metadata("design:type", Array)
    ], Community.prototype, "userCommunities", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return BookCommunity; }, function (bookCommunity) { return bookCommunity.communities; }),
        __metadata("design:type", Array)
    ], Community.prototype, "bookCommunities", void 0);
    Community = __decorate([
        typeorm_1.Entity()
    ], Community);
    return Community;
}());
var Book = (function () {
    function Book() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Book.prototype, "id", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return ReadMyBook; }, function (table) { return table.books; }),
        __metadata("design:type", Array)
    ], Book.prototype, "readMyBooks", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return BookCommunity; }, function (bookCommunity) { return bookCommunity.books; }),
        __metadata("design:type", Array)
    ], Book.prototype, "bookCommunities", void 0);
    Book = __decorate([
        typeorm_1.Entity()
    ], Book);
    return Book;
}());
var ReadMyBook = (function () {
    function ReadMyBook() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], ReadMyBook.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return User; }, function (user) { return user.readMyBooks; }),
        __metadata("design:type", User)
    ], ReadMyBook.prototype, "users", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Book; }, function (book) { return book.readMyBooks; }),
        __metadata("design:type", Book)
    ], ReadMyBook.prototype, "books", void 0);
    ReadMyBook = __decorate([
        typeorm_1.Entity()
    ], ReadMyBook);
    return ReadMyBook;
}());
var UserCommunity = (function () {
    function UserCommunity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], UserCommunity.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return User; }, function (user) { return user.id; }),
        __metadata("design:type", User)
    ], UserCommunity.prototype, "users", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Community; }, function (community) { return community.id; }),
        __metadata("design:type", Community)
    ], UserCommunity.prototype, "communities", void 0);
    UserCommunity = __decorate([
        typeorm_1.Entity()
    ], UserCommunity);
    return UserCommunity;
}());
var BookCommunity = (function () {
    function BookCommunity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], BookCommunity.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Book; }, function (book) { return book.bookCommunities; }),
        __metadata("design:type", Book)
    ], BookCommunity.prototype, "books", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Community; }, function (community) { return community.bookCommunities; }),
        __metadata("design:type", Community)
    ], BookCommunity.prototype, "communities", void 0);
    BookCommunity = __decorate([
        typeorm_1.Entity()
    ], BookCommunity);
    return BookCommunity;
}());
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var connection, data, user, book, community;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, typeorm_1.createConnection({
                        type: "mysql",
                        host: "localhost",
                        port: 50001,
                        username: "root",
                        password: "root",
                        database: "TEST",
                        entities: [User, Community, Book, ReadMyBook, UserCommunity, BookCommunity],
                        synchronize: true,
                        dropSchema: true
                    })];
                case 1:
                    connection = _a.sent();
                    return [4, connection.query("show databases")];
                case 2:
                    data = _a.sent();
                    [User, Community, Book].forEach(function (entity) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4, connection
                                        .createQueryBuilder()
                                        .insert()
                                        .into(entity)
                                        .values({})
                                        .execute()];
                                case 1:
                                    _a.sent();
                                    return [2];
                            }
                        });
                    }); });
                    return [4, connection
                            .getRepository(User)
                            .createQueryBuilder("user")
                            .where("user.id = :id", { id: 1 })
                            .getOne()];
                case 3:
                    user = _a.sent();
                    return [4, connection
                            .getRepository(Book)
                            .createQueryBuilder("book")
                            .where("book.id = :id", { id: 1 })
                            .getOne()];
                case 4:
                    book = _a.sent();
                    return [4, connection
                            .getRepository(Community)
                            .createQueryBuilder("community")
                            .where("community.id = :id", { id: 1 })
                            .getOne()];
                case 5:
                    community = _a.sent();
                    return [4, connection
                            .createQueryBuilder()
                            .insert()
                            .into(ReadMyBook)
                            .values({ users: user, books: book })
                            .execute()];
                case 6:
                    _a.sent();
                    return [4, connection
                            .createQueryBuilder()
                            .insert()
                            .into(UserCommunity)
                            .values({ users: user, communities: community })
                            .execute()];
                case 7:
                    _a.sent();
                    return [4, connection
                            .createQueryBuilder()
                            .insert()
                            .into(BookCommunity)
                            .values({ communities: community, books: book })
                            .execute()];
                case 8:
                    _a.sent();
                    console.log(data);
                    return [2];
            }
        });
    });
}
main();
//# sourceMappingURL=index.js.map