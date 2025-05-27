"use strict";
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
// Реализуйте функцию fetchData используя Generic. Функция должна возвращать Promise.
var fetchData = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(url)];
            case 1:
                res = _a.sent();
                return [2 /*return*/, res.json()];
        }
    });
}); };
//Типизируйте функцию. userId - число
function getUserActivities(userId) {
    return fetchData("/api/activities/".concat(userId));
}
var a = {
    canEditProfile: true
};
// Реализуйте функцию logMessage, которая принимает StringOrNumber и не возвращает значение (void)
function logMessage(message) {
    console.log(message); // Реализуйте вывод сообщения в консоль
}
// Реализуйте функцию throwError, которая никогда не возвращает управление (never)
function throwError(errorMsg) {
    throw new Error(errorMsg); // Бросьте исключение с errorMsg
}
// Реализуйте Type Guard для проверки, является ли значение строкой
function isString(value) {
    if (typeof value === 'string') {
        return true; // Верните результат проверки типа
    }
    else {
        return false;
    }
}
// Реализуйте функцию assertIsNumber, которая использует asserts для утверждения типа number
function assertIsNumber(value) {
    if (typeof value !== 'number') {
        throwError("value is not number");
    }
}
// Завершите функцию processValue, используя isString и assertIsNumber
function processValue(value) {
    isString(value) ? console.log("Count symbol" + value.length) : value.toFixed(0); // Реализуйте логику проверки и обработки значения
}
// Type Alias и Union
// type StringOrNumber = string | number; кажется это лишнее
//сделайте  Type Guard для определения, является ли значение строкой
// function isString(value) {    Дублирование???
// }
// создайте asserts function на число.
// function assertIsNumber(value: any): asserts {  Дублирование.
// }
// // Использование Type Guard и Asserts
// function processValue(value: StringOrNumber) {   и зачем это?
//   if (isString(value)) {
//     console.log(`String value: ${value.toUpperCase()}`);
//   } else {
//     assertIsNumber(value);
//     console.log(`Number value: ${value.toFixed(2)}`);
//   }
// }
//---------------------------------------------------------------------------------
