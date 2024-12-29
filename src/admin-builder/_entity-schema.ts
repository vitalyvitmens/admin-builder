import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'
import { ConfigContainer } from './_container'

export const EntitySchemaProvider = ConfigContainer.provider((ctx) => {
  const fields = Object.fromEntries(
    ctx.deps.config.fields.map((field) => {
      return [field.name, text(field.name)]
    })
  )

  const entitySchema = pgTable(ctx.deps.config.name, {
    id: serial('id'),
    ...fields,
    createdAt: timestamp('created_at'),
    updatedAt: timestamp('updated_at'),
  })

  return entitySchema
})
