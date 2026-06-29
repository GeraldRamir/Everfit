import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  return new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });
}

let prismaInstance = globalForPrisma.prisma ?? createPrismaClient();

/** Recreate client when schema changes mid-dev (e.g. after prisma generate). */
if (process.env.NODE_ENV !== "production" && !prismaInstance.challenge) {
  prismaInstance = createPrismaClient();
}

export const prisma = prismaInstance;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prismaInstance;

export function parseJsonArray(value: string): string[] {
  try {
    return JSON.parse(value) as string[];
  } catch {
    return [];
  }
}
