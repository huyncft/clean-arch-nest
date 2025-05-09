<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Clean Architecture with NestJS

Dự án này được xây dựng theo mô hình Clean Architecture sử dụng NestJS, PostgreSQL, Docker, MinIO, Redis và Prisma.

## Cấu trúc thư mục

```
src/
├── application/          # Use cases và business logic
│   ├── common/          # Shared business logic
│   └── use-cases/       # Use cases
├── domain/              # Enterprise business rules
│   ├── entities/        # Business objects
│   ├── repositories/    # Repository interfaces
│   └── services/        # Domain services
├── infrastructure/      # Frameworks và tools
│   ├── database/        # Database configuration
│   ├── external-services/ # External services
│   └── repositories/    # Repository implementations
└── interfaces/          # Interface adapters
    ├── controllers/     # Controllers
    ├── dtos/           # Data Transfer Objects
    └── middlewares/    # Middlewares
```

## Yêu cầu

- Node.js >= 18
- Docker và Docker Compose
- pnpm

## Cài đặt

1. Clone repository:

```bash
git clone <repository-url>
cd clean-arch-nest
```

2. Cài đặt dependencies:

```bash
pnpm install
```

3. Tạo file .env từ .env.example:

```bash
cp .env.example .env
```

4. Khởi động các services:

```bash
make docker-up
```

5. Chạy migrations:

```bash
make prisma-migrate
```

## Phát triển

1. Chạy ứng dụng ở chế độ development:

```bash
make dev
```

2. Chạy tests:

```bash
make test
```

3. Kiểm tra linting:

```bash
make lint
```

4. Format code:

```bash
make format
```

## API Documentation

Sau khi chạy ứng dụng, bạn có thể truy cập Swagger UI tại:

```
http://localhost:3000/api
```

## Monitoring

- Prometheus: http://localhost:9090
- Grafana: http://localhost:3000
- Health Check: http://localhost:3000/health

## Clean Architecture

Dự án này tuân theo các nguyên tắc của Clean Architecture:

1. **Independence of Frameworks**: Không phụ thuộc vào bất kỳ framework nào.
2. **Testability**: Business rules có thể được test mà không cần UI, database, web server, hoặc bất kỳ external element nào.
3. **Independence of UI**: UI có thể thay đổi mà không ảnh hưởng đến phần còn lại của hệ thống.
4. **Independence of Database**: Business rules không bị ràng buộc với database.
5. **Independence of any external agency**: Business rules không biết gì về thế giới bên ngoài.

## Contributing

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add some amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
