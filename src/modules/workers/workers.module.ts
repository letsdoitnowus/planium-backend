import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkersService } from './workers.service';
import { UsersModule } from '@module/users/users.module';
import { Worker, WorkerSchema } from '@schema/Worker';
import { WorkersController } from './workers.controller';
import { ProjectsModule } from '@module/projects/projects.module';

@Module({
  imports: [
    ProjectsModule,
    MongooseModule.forFeature([{ name: Worker.name, schema: WorkerSchema }]),
    UsersModule,
  ],
  providers: [WorkersService],
  controllers: [WorkersController],
  exports: [WorkersService],
})
export class WorkersModule {}
