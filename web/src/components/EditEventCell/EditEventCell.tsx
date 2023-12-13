import type {
  FindEditEventQuery,
  FindEditEventQueryVariables,
} from 'types/graphql'

import {
  type CellSuccessProps,
  type CellFailureProps,
  useMutation,
} from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import EventForm from '../EventForm/EventForm'
import SlideInPanel from '../SlideInPanel/SlideInPanel'

export const QUERY = gql`
  query FindEditEventQuery($id: String!) {
    event: event(id: $id) {
      id
      name
      date
      sendReminder
    }
  }
`

const UPDATE_EVENT_MUTATION = gql`
  mutation UpdateEventMutation($id: String!, $input: UpdateEventInput!) {
    updateEvent(id: $id, input: $input) {
      id
      date
      name
      sendReminder
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEditEventQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  event,
  handleClose,
}: CellSuccessProps<FindEditEventQuery, FindEditEventQueryVariables> & {
  handleClose: () => void
}) => {
  const [updateEvent, updateEventStatus] = useMutation(UPDATE_EVENT_MUTATION, {
    onCompleted: () => {
      toast.success('Event was successfully updated')
      handleClose()
    },
    onError: (error) => {
      toast.error(error.message)
      console.error({ error })
    },
  })

  const handleSubmit = (data) => {
    updateEvent({
      variables: {
        id: event.id,
        input: {
          name: data.eventName,
          date: data.eventDate,
          sendReminder: data.eventReminder,
        },
      },
    })
  }
  return (
    <div>
      <SlideInPanel handleClose={handleClose}>
        <h1 className="font-condensed text-[116px] uppercase leading-[0.8] text-white">
          Event Details
        </h1>
        <h2 className="font-handwriting text-3xl uppercase text-white">
          Edit the current event
        </h2>
        <EventForm
          buttonLabel="Update"
          defaultValues={{
            eventName: event?.name,
            eventDate: event?.date,
            eventReminder: event?.sendReminder,
          }}
          handleSubmit={handleSubmit}
          mutationStatus={updateEventStatus}
        />
      </SlideInPanel>
    </div>
  )
}
