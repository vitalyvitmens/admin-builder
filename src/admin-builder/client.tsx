import { createModule } from 'tiny-invert'
import { AdminClientEntityBuilderContainer } from './_container'
import { EntityPageProvider } from './_entity-page'

const EntryProvider = AdminClientEntityBuilderContainer.provider(
  (ctx) => ctx.innerDeps,

  {
    EntityPage: EntityPageProvider,
  }
)

export const EntityClientBuilder = createModule(EntryProvider)
