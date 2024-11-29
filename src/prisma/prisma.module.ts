import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// Global Module
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
