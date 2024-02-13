"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const users = [];
const registerUser = (username) => {
    const newUser = { id: generateUserId(), username };
    users.push(newUser);
    return newUser;
};
exports.registerUser = registerUser;
const generateUserId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};
