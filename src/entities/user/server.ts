import { EntityServerBuilder } from '@/admin-builder/server'
import { entityConfig } from './config'
import { dbClient } from '@/shared/db-client'

export const UserEntityServer = EntityServerBuilder.init({
  config: entityConfig,
  dbClient,
})
