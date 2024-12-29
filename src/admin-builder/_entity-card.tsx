import { AdminClientEntityBuilderContainer } from './_container'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { GetEntityResult } from './_types'
import { Button } from '@/components/ui/button'
import { useTransition } from 'react'

export const EntityCardProvider = AdminClientEntityBuilderContainer.provider(
  ({ deps: { config, action } }) => {
    return function EntityCard({
      entity,
      onDelete,
    }: {
      entity: GetEntityResult
      onDelete?: () => void
    }) {
      const [isLoading, startTransition] = useTransition()

      if (isLoading) {
        return <div>Loading...</div>
      }

      return (
        <Card>
          <CardHeader>
            <CardTitle>ID: {entity.id}</CardTitle>
          </CardHeader>
          <CardContent>
            {Object.entries(entity).map(([key, value]) => {
              if (!config.fields.find((field) => field.name === key)) {
                return null
              }

              return (
                <div key={key}>
                  {key}: {String(value)}
                </div>
              )
            })}
          </CardContent>
          <CardFooter className="justify-end gap-3">
            <Button>Edit</Button>
            <Button
              variant={'destructive'}
              onClick={() =>
                startTransition(async () => {
                  await action({ type: 'delete', id: entity.id })
                  onDelete?.()
                })
              }
            >
              Delete
            </Button>
          </CardFooter>
        </Card>
      )
    }
  }
)
