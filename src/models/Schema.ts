import { boolean, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const todoSchema = pgTable('todo', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  done: boolean('done').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
