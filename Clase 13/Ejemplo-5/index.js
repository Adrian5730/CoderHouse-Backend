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
Object.defineProperty(exports, "__esModule", { value: true });
const operaciones = __importStar(require("./src/lib/operaciones"));
const mensaje = "Hola typescript";
console.log(mensaje);
let num1 = 10, num2 = 4;
console.log(`La suma de ${num1} mas ${num2} es de ${operaciones.sumar(num1, num2)}`);
console.log(`La resta de ${num1} menos ${num2} es de ${operaciones.restar(num1, num2)}`);
console.log(`La multipliacion de ${num1} por ${num2} es de ${operaciones.mult(num1, num2)}`);
console.log(`La division de ${num1} dividido ${num2} es de ${operaciones.div(num1, num2)}`);
