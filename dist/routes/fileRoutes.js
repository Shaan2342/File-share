"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const multer_1 = __importDefault(require("multer"));
const fileController_1 = require("../controllers/fileController");
const router = express.Router();
const upload = (0, multer_1.default)({ dest: 'uploads/' });
router.post('/upload', upload.single('file'), (req, res) => {
    // Check if req.file exists
    if (!req.file) {
        res.status(400).json({ message: 'No file uploaded' });
        return;
    }
    // Now you can safely access properties of req.file
    const { filename } = req.file;
    const { userId } = req.body;
    const filePath = req.file.path;
    const uploadedFile = (0, fileController_1.uploadFile)(filename, filePath, userId);
    res.json({ message: 'File uploaded successfully', file: uploadedFile });
});
router.post('/share', (req, res) => {
    const { fileId, userId } = req.body;
    (0, fileController_1.shareFile)(fileId, userId);
    res.json({ message: 'File shared successfully' });
});
exports.default = router;
