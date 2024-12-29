import { AdminEntityConfig } from '@/admin-builder/server'

export const entityConfig: AdminEntityConfig = {
  name: 'users',
  title: 'Users',
  fields: [
    {
      type: 'text',
      name: 'name',
      title: 'Name',
    },
    {
      type: 'text',
      name: 'email',
      title: 'Email',
    },
    {
      type: 'select',
      name: 'role',
      title: 'Role',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
    },
  ],
}
