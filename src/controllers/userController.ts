import prisma from "../../prisma/client";
import { Request, Response } from "express";

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });
  res.json(user);
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const createUser = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
  res.json(createUser);
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const updateUser = await prisma.user.update({
    where: {
      id: Number(id),
    },
    data: { name, email },
  });
  res.json(updateUser);
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleteUser = await prisma.user.delete({
    where: { id: Number(id) },
  });
  res.json(deleteUser);
};

export const getUserWithPosts = async (req: Request, res: Response) => {
  const { id } = req.params

  const user = await prisma.user.findUnique({
      where: { id: Number(id) },
      include: { posts: true },
  })

  res.json(user)
}
