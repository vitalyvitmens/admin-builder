'use server'

import { entityConfig } from './config'
import { EntityActionBuilder } from '@/admin-builder/action'
import { dbClient } from '@/shared/db-client'

export const userAction = EntityActionBuilder.init({
  config: entityConfig,
  dbClient,
})
