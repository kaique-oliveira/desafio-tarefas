const { PrismaClient } = require('@prisma/client');

const dbTaks = new PrismaClient();

module.exports = dbTaks;
