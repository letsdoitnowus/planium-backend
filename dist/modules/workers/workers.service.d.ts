/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { Worker, WorkerDocument } from '@/schemas/Worker';
import { CreateWorkerDto } from '@/modules/workers/dto/create-worker.dto';
export declare class WorkersService {
    private readonly workerModel;
    constructor(workerModel: Model<WorkerDocument>);
    create(worker: CreateWorkerDto): Promise<{
        message: string;
        data: {
            _id: import("mongoose").Types.ObjectId;
            __v?: any;
            $locals: Record<string, unknown>;
            $op: "remove" | "save" | "validate";
            $where: Record<string, unknown>;
            baseModelName?: string;
            collection: import("mongoose").Collection<import("bson").Document>;
            db: import("mongoose").Connection;
            errors?: import("mongoose").Error.ValidationError;
            id?: any;
            isNew: boolean;
            schema: import("mongoose").Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
                [x: string]: any;
            }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
                [x: string]: any;
            }>> & import("mongoose").FlatRecord<{
                [x: string]: any;
            }> & Required<{
                _id: unknown;
            }>>;
            name: string;
            email: string;
            nationality: string;
            phone: Record<string, any>;
            personalInformation: Record<string, any>;
            emergencyContact: Record<string, any>;
            fileId: import("mongoose").Types.ObjectId;
        };
    }>;
    findAll(): Promise<Worker[]>;
    findById(id: string): Promise<Worker>;
    findOne(where: Record<string, string>): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Worker> & Worker & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, Worker> & Worker & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    private verifyEmailExists;
}
