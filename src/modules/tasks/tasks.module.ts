import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from '@/schemas/Task';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { ProjectsModule } from '../projects/projects.module';

@Module({
  imports: [
    ProjectsModule,
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
  providers: [TasksService],
  controllers: [TasksController],
})
export class TasksModule {}
