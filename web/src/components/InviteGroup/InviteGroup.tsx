import { EmailField, Form, Label, TextField, useForm } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import ListInvitesCell, { QUERY } from '../ListInvitesCell'
import RoundButton from '../RoundButton/RoundButton'

const CREATE_INVITE_MUTATION = gql`
  mutation CreateInviteMutation(
    $eventId: String!
    $email: String!
    $name: String!
    $eventDate: String!
    $eventName: String!
    $eventCreator: String!
  ) {
    createInvite(
      input: {
        eventId: $eventId
        status: INVITED
        email: $email
        name: $name
        eventDetails: {
          eventName: $eventName
          eventDate: $eventDate
          eventCreator: $eventCreator
        }
      }
    ) {
      name
      email
    }
  }
`

const InviteGroup = ({ id }) => {
  const formMethods = useForm()
  const [createInvite, createInviteStatus] = useMutation(
    CREATE_INVITE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Invite sent!')
        formMethods.reset()
      },
      onError: (error) => {
        toast.error(error.message)
        console.error(error.message)
      },
      refetchQueries: [QUERY],
    }
  )
  const handleSubmit = (data) => {
    createInvite({
      variables: { ...data, eventId: id },
    })
  }
  return (
    <div>
      <div className="label ml-5 dark:text-white">
        Invite a friend or family member
      </div>
      <Form onSubmit={handleSubmit} formMethods={formMethods}>
        <fieldset disabled={createInviteStatus.loading}>
          <div className="mb-10 ml-5 flex items-center gap-5 bg-spanishGreen p-4 dark:bg-blackPearl">
            <div className="field mb-0 flex-1">
              <Label name="name">Name</Label>
              <TextField name="name" className="input" placeholder="" />
            </div>
            <div className="field mb-0 flex-1">
              <Label name="email">Email</Label>
              <EmailField name="email" className="input" placeholder="" />
            </div>
            <RoundButton status="warning" type="submit" />
          </div>
        </fieldset>
      </Form>

      <div className="grid grid-cols-2 gap-x-12 gap-y-8">
        <ListInvitesCell id={id} />
      </div>
    </div>
  )
}

export default InviteGroup
