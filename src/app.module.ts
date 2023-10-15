import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { TagModule } from '@app/tag/tag.module';
import ormconfig from '@app/ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'mediumclone',
      password: '123',
      database: 'mediumclone',
      entities: [__dirname + '/**/*.entity{.ts, .js}'],
      synchronize: false,
      migrations: [__dirname + '/migrations/**/*.{.ts,.js}'],
      // cli: {
      //   migrationsDir: 'src/migrations',
      // },
    }),
    TagModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
