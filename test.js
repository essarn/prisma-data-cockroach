const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// prisma.colletable
//   .create({
//     data: { name: "Mugg grön", edition: 1, image: "https://image.com/1" },
//   })
//   .then((test) => console.log(test));

const result = prisma.colletable.findMany().then((data) => console.log(data));
