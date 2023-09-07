var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from "class-transformer";
import { IsDefined, IsString, IsInt } from "class-validator";
export class dtoUsuario {
    constructor(data) {
        Object.assign(this, data);
        this.id = 0;
        this.usuario = "";
        this.password = "";
        this.permisos = "";
    }
}
__decorate([
    Expose({ name: 'usuario_id' }),
    IsDefined({ message: () => { throw { status: 422, message: 'el campo usuario_id es obligatorio' }; } }),
    IsInt({ message: () => { throw { status: 422, message: 'El campo usuario_id debe ser de tipo int' }; } }),
    __metadata("design:type", Number)
], dtoUsuario.prototype, "id", void 0);
__decorate([
    Expose({ name: 'usuario' }),
    IsDefined({ message: () => { throw { status: 422, message: 'el campo usuario es obligatorio' }; } }),
    IsString({ message: () => { throw { status: 422, message: 'El campo usuario debe ser de tipo string' }; } }),
    __metadata("design:type", String)
], dtoUsuario.prototype, "usuario", void 0);
__decorate([
    Expose({ name: 'password' }),
    IsDefined({ message: () => { throw { status: 422, message: 'el campo password es obligatorio' }; } }),
    IsString({ message: () => { throw { status: 422, message: 'El campo password debe ser de tipo string' }; } }),
    __metadata("design:type", String)
], dtoUsuario.prototype, "password", void 0);
__decorate([
    Expose({ name: 'permisos' }),
    IsDefined({ message: () => { throw { status: 422, message: 'el campo permisos es obligatorio' }; } }),
    IsString({ message: () => { throw { status: 422, message: 'El campo permisos debe ser de tipo string' }; } }),
    __metadata("design:type", String)
], dtoUsuario.prototype, "permisos", void 0);
