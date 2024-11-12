import { pool } from '~/server/db'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, password } = body

  try {
    const result = await pool.query(
      'INSERT INTO users (name, email, password) VALUES (, , ) RETURNING *',
      [name, email, password]
    )
    return result.rows[0]
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Server Error',
    })
  }
})
