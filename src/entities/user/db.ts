import { entityConfig } from './config'
import { EntitySchemaBuilder } from '@/admin-builder/entity-schema-builder'
import { dbClient } from '@/shared/db-client'

export const UserEntitySchema = EntitySchemaBuilder.init({
  config: entityConfig,
  dbClient,
})
