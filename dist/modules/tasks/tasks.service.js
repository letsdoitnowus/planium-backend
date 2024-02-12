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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const core_1 = require("@nestjs/core");
const mongoose_2 = require("mongoose");
const Task_1 = require("../../schemas/Task");
const projects_service_1 = require("../projects/projects.service");
let TasksService = class TasksService {
    constructor(taskModel, request, projectsService) {
        this.taskModel = taskModel;
        this.request = request;
        this.projectsService = projectsService;
    }
    async create(createTaskDto, companyId) {
        const userId = new mongoose_2.Types.ObjectId(this.request.user['userId']);
        createTaskDto.projectId = new mongoose_2.Types.ObjectId(createTaskDto.projectId);
        const existProject = await this.projectsService.findById(createTaskDto.projectId);
        if (!existProject) {
            throw new common_1.NotFoundException('El id del proyecto no existe');
        }
        if (createTaskDto?.workerId) {
            createTaskDto.workerId = new mongoose_2.Types.ObjectId(createTaskDto.workerId);
        }
        try {
            await this.taskModel.create({
                ...createTaskDto,
                companyId,
                workerId: createTaskDto?.workerId ? createTaskDto.workerId : userId,
                createdBy: userId,
                updatedBy: userId,
            });
            return {
                message: 'Tarea creada con éxito.',
            };
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(Task_1.Task.name)),
    __param(1, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [mongoose_2.Model, Object, projects_service_1.ProjectsService])
], TasksService);
//# sourceMappingURL=tasks.service.js.map