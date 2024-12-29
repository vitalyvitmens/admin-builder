import { EntityClientBuilder } from '@/admin-builder/client'
import { entityConfig } from './config'
import { userAction } from './action'

export const userClient = EntityClientBuilder.init({
  config: entityConfig,
  action: userAction,
})
