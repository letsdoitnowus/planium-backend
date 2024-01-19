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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const workers_service_1 = require("../workers/workers.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(workerService, jwtService) {
        this.workerService = workerService;
        this.jwtService = jwtService;
    }
    async signInWorker(email, password) {
        const worker = await this.workerService.findOne({ email });
        if (!worker) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const isMatch = await this.comparePasswords(password, worker.password);
        if (!isMatch) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const payload = {
            sub: worker._id,
        };
        const token = this.jwtService.sign(payload);
        return {
            message: 'Logueado correctamente',
            data: {
                access_token: token,
            },
        };
    }
    async comparePasswords(password, storedPasswordHash) {
        return bcrypt.compare(password, storedPasswordHash);
    }
    async validateWorkerSession(workerId) {
        const worker = await this.workerService.findById(workerId);
        if (!worker) {
            throw new common_1.UnauthorizedException('No se encontró el operario');
        }
        return {
            message: 'Operario verificado correctamente',
            data: worker,
        };
    }
    async refreshToken(payload) {
        const token = this.jwtService.sign(payload);
        return {
            message: 'Token actualizado',
            data: {
                access_token: token,
            },
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [workers_service_1.WorkersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map