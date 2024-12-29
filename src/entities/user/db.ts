import { dbClient } from '@/shared/db-client'
import { entityConfig } from './config'
import { EntityDbBuilder } from '@/admin-builder/db'

export const userDb = EntityDbBuilder.init({
  config: entityConfig,
  dbClient,
})
