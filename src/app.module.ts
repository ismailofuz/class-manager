import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ClassesModule } from './classes/classes.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { SubmissionsModule } from './submissions/submissions.module';
import { SubjectsModule } from './subjects/subjects.module';
import { AttendanceModule } from './attendance/attendance.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [UsersModule, ClassesModule, AssignmentsModule, SubmissionsModule, SubjectsModule, AttendanceModule, RolesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
