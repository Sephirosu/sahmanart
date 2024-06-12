import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { content } = req.body;
    const message = await prisma.message.create({
      data: { content },
    });
    res.status(201).json(message);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
