import { navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import EventForm from 'src/components/EventForm/EventForm'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'

const CREATE_EVENT_MUTATION = gql`
  mutation createEventMutation(
    $name: String!
    $date: DateTime!
    $sendReminder: Boolean!
  ) {
    createEvent(
      input: { name: $name, date: $date, sendReminder: $sendReminder }
    ) {
      id
    }
  }
`

const NewEventPage = () => {
  const [createEvent, createEventStatus] = useMutation(CREATE_EVENT_MUTATION, {
    onCompleted: (data) => {
      const id = data.createEvent.id
      toast.success('Event created')
      navigate(routes.eventInvite({ id }))
    },
    onError: (error) => {
      console.error({ error })
      toast.error(error.message)
    },
  })

  const handleSubmit = async (data: Record<string, string>) => {
    await createEvent({
      variables: {
        name: data.eventName,
        date: data.eventDate,
        sendReminder: data.sendReminder,
      },
    })
  }

  return (
    <>
      <MetaTags title="Set up your Event" />

      <div className="auth-page">
        <HeaderWithRulers
          className="mb-8 text-white"
          heading="Set Up Your Event"
        />
        <EventForm
          handleSubmit={handleSubmit}
          mutationStatus={createEventStatus}
        />
      </div>
    </>
  )
}

export default NewEventPage
