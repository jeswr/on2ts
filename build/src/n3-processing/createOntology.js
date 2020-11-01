"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOntology = void 0;
const create_store_1 = require("./create-store");
const addOntologyDetails_1 = require("./addOntologyDetails");
exports.createOntology = async (path) => addOntologyDetails_1.addOntologyDetails(await create_store_1.createStore(path), path);
