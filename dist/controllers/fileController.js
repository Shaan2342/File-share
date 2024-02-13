"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shareFile = exports.uploadFile = void 0;
const files = [];
const uploadFile = (filename, path, owner) => {
    const newFile = { id: generateFileId(), filename, path, owner, sharedWith: [] };
    files.push(newFile);
    return newFile;
};
exports.uploadFile = uploadFile;
const shareFile = (fileId, userId) => {
    const file = files.find((f) => f.id === fileId);
    if (file) {
        file.sharedWith.push(userId);
    }
};
exports.shareFile = shareFile;
const generateFileId = () => {
    // Implement your logic to generate a unique file ID
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};
