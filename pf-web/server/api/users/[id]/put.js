import { pool } from '~/server/db'

export default defineEventHandler(async (event) => {
  const id = event.context.params.id
  const body = await readBody(event)
  const { name, email, password } = body

  try {
    const result = await pool.query(
      'UPDATE users SET name = , email = , password =  WHERE id =  RETURNING *',
      [name, email, password, id]
    )
    return result.rows[0]
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Server Error',
    })
  }
})
