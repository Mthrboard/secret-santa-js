import { useEffect, useRef } from 'react'

import { DateField, Form, Label, Submit, TextField } from '@redwoodjs/forms'

import Checkbox from 'src/components/Checkbox/Checkbox'
import { formatDateFromDbForInput } from 'src/helpers/dateHelpers'

interface EventFormProps {
  buttonLabel?: string
  mutationStatus?: {
    loading?: boolean
  }
  defaultValues?: {
    eventName?: string
    eventDate?: string
    eventReminder?: boolean
  }
  handleSubmit: (data) => void
}

const EventForm = ({
  buttonLabel = 'Submit',
  mutationStatus,
  defaultValues = {},
  handleSubmit,
}: EventFormProps) => {
  const eventNameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    eventNameRef.current?.focus()
  }, [])

  return (
    <Form onSubmit={handleSubmit} className="auth-form">
      <fieldset disabled={mutationStatus.loading}>
        <div className="field">
          <Label name="eventName" errorClassName="error">
            Event Name
          </Label>
          <TextField
            name="eventName"
            errorClassName="error"
            placeholder=""
            defaultValue={defaultValues?.eventName}
            ref={eventNameRef}
          />
        </div>
        <div className="field">
          <Label name="eventDate" errorClassName="error">
            Date
          </Label>
          <DateField
            name="eventDate"
            errorClassName="error"
            placeholder=""
            defaultValue={formatDateFromDbForInput(defaultValues?.eventDate)}
          />
        </div>
        <div className="field">
          <Checkbox
            defaultChecked={defaultValues?.eventReminder}
            name="sendReminder"
            label="Send out a reminder for an event"
          />
        </div>
        <Submit>{buttonLabel}</Submit>
      </fieldset>
    </Form>
  )
}

export default EventForm
