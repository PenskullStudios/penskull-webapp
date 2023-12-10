import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

const prisma = globalThis.prisma ?? prismaClientSingleton();

const dummyData = [
  {
    name: "John",
    workingHours: 40,
    tasksCompleted: "25",
    comments: "Met deadlines",
  },
  {
    name: "Alice",
    workingHours: 35,
    tasksCompleted: "30",
    comments: "Exceptional performance",
  },
  {
    name: "Bob",
    workingHours: 45,
    tasksCompleted: "20",
    comments: "Improvement needed in time management",
  },
];

async function main() {
  for (const ele of dummyData) {
    await prisma.employee.create({
      data: {
        name: ele.name,
        workingHours: ele.workingHours,
        tasksCompleted: ele.tasksCompleted,
        comments: ele.comments,
      },
    });
  }
}
main();
