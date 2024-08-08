"use server";

import prisma from "../index";
import { orderFoodFromBigFoodCompany } from "../../api/supplies";

export async function getAll() {
  return await prisma.food.findMany();
}

export async function orderMoreFood(food, count) {
  await orderFoodFromBigFoodCompany(food.name, count);

  await prisma.food.update({
    where: { name: food.name },
    data: { count: { increment: count } },
  });
}
