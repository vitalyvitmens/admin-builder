import { entityConfig } from './config'
import { EntityDbBuilder } from '@/admin-builder/db'
import { dbClient } from '@/shared/db-client'

export const userDb = EntityDbBuilder.init({
  config: entityConfig,
  dbClient,
})
