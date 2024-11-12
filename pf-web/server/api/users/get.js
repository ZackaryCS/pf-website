import { pool } from '~/server/db'

export default defineEventHandler(async (event) => {
  try {
    const result = await pool.query('SELECT * FROM users')
    return result.rows
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Server Error',
    })
  }
})
