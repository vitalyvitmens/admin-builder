import { createModule } from 'tiny-invert'
import { EntitySchemaProvider } from './_entity-schema'
import { AdminDbEntityBuilderContainer } from './_container'

const EntryProvider = AdminDbEntityBuilderContainer.provider(
  (ctx) => ctx.innerDeps,
  {
    schema: EntitySchemaProvider,
  }
)

export const EntityDbBuilder = createModule(EntryProvider)
