.PHONY: install build start dev test lint format docker-up docker-down gen migrate studio push

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
	pnpm prisma generate

migrate:
	pnpm prisma migrate dev

studio:
	pnpm prisma studio 

push:
	pnpm prisma db push