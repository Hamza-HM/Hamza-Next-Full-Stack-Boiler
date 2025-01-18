import { z } from 'zod';

import { db } from '@/lib/DB';
import { todoSchema } from '@/models/Schema';

const TodoSchema = z.object({
  title: z.string().min(1, { message: 'Title cannot be empty' }),
  description: z.string().min(1, { message: 'Description cannot be empty' }),
  done: z.boolean().optional(),
});

type Todo = z.infer<typeof TodoSchema>;

export default async function addTodo(todo: Todo) {
  try {
    // Validate the input todo data
    const validatedTodo = TodoSchema.parse(todo);

    // Insert the validated todo data, excluding the id field
    if (db) {
      const [savedTodo] = await db
        .insert(todoSchema)
        .values({
          title: validatedTodo.title,
          description: validatedTodo.description,
          done: validatedTodo.done ?? false, // Defaulting to false if not provided
        })
        .returning(); // Returns the inserted todo
      return savedTodo;
    }
    throw new Error('db not initialized');
  } catch (err: unknown) {
    if (err instanceof z.ZodError) {
      return 'Invalid data';
    } else {
      return 'An error occurred, please try again later!';
    }
  }
}
