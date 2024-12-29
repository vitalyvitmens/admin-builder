import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { AdminClientEntityBuilderContainer } from './_container'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { GetEntityResult } from './_types'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export const UpsertEntityFormProvider =
  AdminClientEntityBuilderContainer.provider(({ deps: { action, config } }) => {
    return function UpsertEntityForm({
      defaultValue,
      onSuccess,
    }: {
      defaultValue?: GetEntityResult
      onSuccess?: () => void
    }) {
      const [isLoading, startTransition] = useTransition()
      const id = defaultValue?.id
      const form = useForm({
        defaultValues: {
          ...defaultValue,
        },
      })

      const handleSubmit = form.handleSubmit((data) => {
        startTransition(async () => {
          if (id) {
            await action({
              type: 'update',
              id,
              data,
            })
          } else {
            await action({
              type: 'create',
              data,
            })
          }

          onSuccess?.()
        })
      })

      return (
        <Form {...form}>
          <form onSubmit={handleSubmit} className="space-y-8">
            {config.fields.map((fieldConfig) => {
              return (
                <FormField
                  key={fieldConfig.name}
                  control={form.control}
                  name={fieldConfig.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{fieldConfig.title}</FormLabel>
                      <FormControl>
                        {fieldConfig.type === 'select' ? (
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="..." />
                            </SelectTrigger>
                            <SelectContent>
                              {fieldConfig.options.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        ) : fieldConfig.type === 'text' ? (
                          <Input
                            placeholder="..."
                            {...field}
                            value={String(field.value)}
                          />
                        ) : null}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )
            })}
            <Button type="submit" disabled={isLoading}>Submit</Button>
          </form>
        </Form>
      )
    }
  })
