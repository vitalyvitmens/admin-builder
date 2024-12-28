import { createModule } from 'tiny-invert'
import { EntitySchemaProvider } from './_entity-schema'

export type { AdminBuilderField, AdminEntityConfig } from './_types'

export const EntitySchemaBuilder = createModule(EntitySchemaProvider)
