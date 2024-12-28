import { entityConfig } from './config'
import { EntitySchemaBuilder } from '@/admin-builder/entity-schema-builder'

export const UserEntitySchema = EntitySchemaBuilder.init({
  config: entityConfig,
})
