import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { InjectKysely } from 'nestjs-kysely';
import type { DB } from './types.d.ts';
import { Kysely } from 'kysely';

@Injectable()
export class KyselyService implements OnModuleDestroy {
  constructor(@InjectKysely() private readonly kysely: Kysely<DB>) {}

  get db() {
    return this.kysely;
  }

  async onModuleDestroy() {
    await this.db.destroy();
  }
}
