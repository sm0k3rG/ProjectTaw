import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'; // Importa desde @prisma/client

@Injectable()

export class PrismaService extends PrismaClient implements OnModuleInit{
    async onModuleInit(){
        await this.$connect();
    }
}
