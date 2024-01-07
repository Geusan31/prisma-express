import { Request, Response } from "express";
import prisma from "../../prisma/client";

export const getAllPost = async (req: Request, res: Response) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
};

export const getPost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await prisma.post.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.json(post);
};

export const createPost = async (req: Request, res: Response) => {
  const { title, body, authorId } = req.body;
  const newPost = await prisma.post.create({
    data: { title, body, authorId: Number(authorId) },
  });
  res.json(newPost);
};

export const updatePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, body } = req.body;
  const updatePost = await prisma.post.update({
    where: {
      id: Number(id),
    },
    data: { title, body },
  });
  res.json(updatePost);
};

export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletePost = await prisma.post.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(deletePost);
};

export const getPostWithUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
  });

  res.json(post);
};
