const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const resolvers = {
  Author: {
    poems: (parent) => {
      return prisma.poem.findMany({ where: { authorId: parent.id } });
    },
  },

  Poem: {
    author: (parent) => {
      return prisma.author.findUnique({ where: { id: parent.authorId } });
    },
  },

  Query: {
    getAllAuthors: () => {
      return prisma.author.findMany();
    },
    getAuthor: (parent, args) => {
      return prisma.author.findUnique({ where: { id: args.id } });
    },
    getAllPoems: () => {
      return prisma.poem.findMany();
    },
    getPoem: (parent, args) => {
      return prisma.poem.findUnique({ where: { id: args.id } });
    },
  },

  Mutation: {
    createAuthor: (parent, args) => {
      return prisma.author.create({
        data: {
          name: args.name,
          birthDate: args.birthDate || null,
        },
      });
    },
    updateAuthor: (parent, args) => {
      return prisma.author.update({
        where: { id: args.id },
        data: {
          name: args.name || undefined,
          birthDate: args.birthDate || undefined,
        },
      });
    },
    deleteAuthor: (parent, args) => {
      return prisma.author.delete({ where: { id: args.id } });
    },
    createPoem: (parent, args) => {
      return prisma.poem.create({
        data: {
          title: args.title,
          content: args.content,
          author: { connect: { id: args.authorId } },
        },
      });
    },
    updatePoem: (parent, args) => {
      return prisma.poem.update({
        where: { id: args.id },
        data: {
          title: args.title || undefined,
          content: args.content || undefined,
        },
      });
    },
    deletePoem: (parent, args) => {
      return prisma.poem.delete({ where: { id: args.id } });
    },
  },
};

module.exports = {
  resolvers,
};
