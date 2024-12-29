import { AdminClientEntityBuilderContainer } from './_container'
import { EntityCardProvider } from './_entity-card'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { UpsertEntityFormProvider } from './_upsert-entity-form'
import { useEffect, useState, useTransition } from 'react'
import { GetEntityResult } from './_types'

export const EntityPageProvider = AdminClientEntityBuilderContainer.provider(
  ({
    deps: { config, action },
    innerDeps: { EntityCard, UpsertEntityForm },
  }) => {
    return function EntityPage() {
      const [entities, setEntities] = useState<GetEntityResult[]>([])
      const [isLoading, startTransition] = useTransition()

      const fetch = async () => {
        startTransition(async () => {
          await action({ type: 'get' }).then((res) => {
            if (res) {
              setEntities(res)
            }
          })
        })
      }

      useEffect(() => {
        fetch()
      }, [])

      if (isLoading) {
        return <div>Loading...</div>
      }

      return (
        <div className="p-12 max-w-[1200px] mx-auto">
          <h1 className="text-5xl font-bold mb-8">{config.title}</h1>
          <div className="flex gap-4 mb-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" disabled={isLoading}>
                  Create
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create {config.title}</DialogTitle>
                </DialogHeader>
                <UpsertEntityForm onSuccess={() => fetch()} />
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {entities.map((entity) => {
              return (
                <EntityCard
                  key={entity.id}
                  entity={entity}
                  onDelete={() => fetch()}
                />
              )
            })}
          </div>
        </div>
      )
    }
  },
  {
    EntityCard: EntityCardProvider,
    UpsertEntityForm: UpsertEntityFormProvider,
  }
)
