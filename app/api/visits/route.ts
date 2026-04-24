import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

export async function GET() {
  const visits = await db.visit.findMany();
  return Response.json(visits);
}

export async function POST(req: Request) {
  const data = await req.json();

  const visit = await db.visit.create({
    data: {
      ...data,
      visitDate: new Date(data.visitDate),
    },
  });

  return Response.json(visit);
}
