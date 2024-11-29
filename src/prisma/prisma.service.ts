import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// Logic that takes care of instantiating PrismaClient and connecting to the database.

@Injectable()
export class PrismaService extends PrismaClient {
  async moduleInit() {
    await this.$connect();
  }
}
