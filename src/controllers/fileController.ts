import { File } from '../models/file';

const files: File[] = [];

export const uploadFile = (filename: string, path: string, owner: string): File => {
  const newFile: File = { id: generateFileId(), filename, path, owner, sharedWith: [] };
  files.push(newFile);
  return newFile;
};

export const shareFile = (fileId: string, userId: string): void => {
  const file = files.find((f) => f.id === fileId);

  if (file) {
    file.sharedWith.push(userId);
  }
};

const generateFileId = (): string => {
  // Implement your logic to generate a unique file ID
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};
