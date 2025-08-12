// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import serverless from 'serverless-http';

// let server: any; // এখানে Handler বাদ

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.init();
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//   const expressApp = app.getHttpAdapter().getInstance();
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
//   server = serverless(expressApp);
// }

// export default async function handler(req: any, res: any) {
//   if (!server) {
//     await bootstrap();
//   }
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
//   return server(req, res);
// }

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
