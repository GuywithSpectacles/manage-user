import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import Config from './config/keys';
import * as nano from 'nano';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: Config.database,
      useFactory: () => {
        const couch = nano({
          url: Config.url,
          requestDefaults: {
            auth: {
              username: Config.username,
              password: Config.password,
            },
          },
        });
        couch.db
          .create('user')
          .then((data) => {
            return data;
          })
          .catch((err) => {
            return err;
          });
        return couch.use('user');
      },
    },
  ],
})
export class AppModule {}
