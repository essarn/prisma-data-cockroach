import { createServer } from "@graphql-yoga/common";
import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import { PrismaClient } from "@prisma/client";
import type PrismaTypes from "../prisma/pothos-types";

const prisma = new PrismaClient();

const builder = new SchemaBuilder<{ PrismaTypes: PrismaTypes }>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
  },
});

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
