import type { Prisma, Colletable } from "@prisma/client";
export default interface PrismaTypes {
    Colletable: {
        Name: "Colletable";
        Shape: Colletable;
        Include: never;
        Select: Prisma.ColletableSelect;
        Where: Prisma.ColletableWhereUniqueInput;
        Fields: never;
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
}