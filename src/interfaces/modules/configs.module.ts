import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from 'src/config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
    }),
  ],
})
export class ConfigsModule {}
