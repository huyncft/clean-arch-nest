.PHONY: install build start dev test lint format docker-up docker-down gen migrate push pull up check studio

install:
	pnpm install

build:
	pnpm build

start:
	pnpm start:prod

dev:
	pnpm start:dev

test:
	pnpm test

lint:
	pnpm lint

format:
	pnpm format

docker-up:
	docker-compose up -d

docker-down:
	docker-compose down

gen:
	npx kysely-codegen --out-file ./src/infrastructure/database/kysely/types.d.ts

migrate:
	npx drizzle-kit migrate --config ./src/config/drizzle.config.ts

push:
	npx drizzle-kit push --config ./src/config/drizzle.config.ts

pull:
	npx drizzle-kit pull --config ./src/config/drizzle.config.ts

up:
	npx drizzle-kit up --config ./src/config/drizzle.config.ts

check:
	npx drizzle-kit check --config ./src/config/drizzle.config.ts
	
studio:
	npx drizzle-kit studio --config ./src/config/drizzle.config.ts
