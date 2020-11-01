"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finishAndSave = void 0;
exports.finishAndSave = async ({ project }) => {
    await project.save();
    project.emitSync();
};
