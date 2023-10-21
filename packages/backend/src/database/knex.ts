import * as knex from 'knex';

let DB_PASSWORD = process.env.DB_PASSWORD;
if (!DB_PASSWORD) {
  throw new Error('DB_PASSWORD not set');
}

const knexConfig = {
  client: 'mssql',
  connection: {
    server: process.env.DB_HOST || "collabothon.database.windows.net",
    user: process.env.DB_USER || "jtabac",
    password: DB_PASSWORD,
    database: process.env.DB_NAME || "jtabac",
    options: {
      encrypt: true
    }
  },
};

const db = knex(knexConfig);

export default db;


async function initDb() {
  // create Table Products if not exists
  const hasTableProducts = await db.schema.hasTable('Products');
  if (!hasTableProducts) {
    await db.schema.createTable('Products', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.float('price');
    });
  }
  // create Table Users if not exists
  const hasTableUsers = await db.schema.hasTable('Users');
  if (!hasTableUsers) {
    await db.schema.createTable('Users', (table) => {
      table.increments('id').primary();
      table.string('username');
      table.string('password');
    });
  }
  // create Table Location if not exists
  const hasTableLocation = await db.schema.hasTable('Location');
  if(!hasTableLocation) {
    await db.schema.createTable('Location', (table) => {
      table.increments('id').primary();
      table.integer("user").references('id').inTable('Users');
      table.string('name');
      table.string('street');
      table.string('houseNo');
      table.string('zipCode');
      table.string('city');
      table.float('lat');
      table.float('lon');
      table.string('type');
      table.string('openingHoursText');
      table.string('description');
      table.string('offerTimeText');
    });

    // create table Order if not exists
    const hasTableOrder = await db.schema.hasTable('Order');
    if(!hasTableOrder) {
      await db.schema.createTable('Order', (table) => {
        table.increments('id').primary();
        table.integer("productId").references('id').inTable('Products');
        table.integer("receiverUserId").references('id').inTable('Users');
        table.integer("donorUserId").references('id').inTable('Users');
        table.string('status');
        table.string('workflow');
      });
    }
  }
}

initDb().then(() => console.log('db initialized')).catch((err) => console.log('db init failed', err));

