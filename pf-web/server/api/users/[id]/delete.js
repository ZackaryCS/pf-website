import { pool } from '~/server/db'

export default defineEventHandler(async (event) => {
  const id = event.context.params.id

  try {
    await pool.query('DELETE FROM users WHERE id = ', [id])
    return { message: 'User deleted successfully' }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Server Error',
    })
  }
})
