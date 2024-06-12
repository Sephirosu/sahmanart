import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const messages = await prisma.message.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.status(200).json(messages);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
