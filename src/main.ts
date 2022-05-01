import { createServer } from "@graphql-yoga/common";
import SchemaBuilder from "@pothos/core";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// const builder = new SchemaBuilder<{ PrismaTypes: PrismaTypes }>({
//   plugins: [PrismaPlugin],
//   prisma: {
//     client: prisma,
//   },
// });

const builder = new SchemaBuilder({});

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      args: {
        name: t.arg.string(),
      },
      resolve: (_parent, { name }) => `hello, ${name || "World"}`,
    }),
  }),
});

// builder.prismaObject("Colletable", {
//   fields: (t) => ({
//     id: t.exposeID("id"),
//     edition: t.exposeInt("edition"),
//     name: t.exposeString("name"),
//     image: t.exposeString("image"),
//   }),
//   findUnique: (collectable) => ({ id: collectable.id }),
// });

const yoga = createServer({
  schema: builder.toSchema({}),
});
yoga.start();
