import type { ListInvitesQuery } from 'types/graphql'

import {
  type CellSuccessProps,
  type CellFailureProps,
  useMutation,
} from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import Card from '../Card/Card'

export const QUERY = gql`
  query ListInvitesQuery($id: String!) {
    event(id: $id) {
      invite {
        email
        id
        name
        status
        user {
          avatar
        }
      }
      name
      id
    }
  }
`

const DELETE_INVITE_MUTATION = gql`
  mutation DeleteInviteMutation($id: String!) {
    deleteInvite(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ event }: CellSuccessProps<ListInvitesQuery>) => {
  const [deleteInvite] = useMutation(DELETE_INVITE_MUTATION, {
    onCompleted: () => {
      toast.success('Invite deleted')
    },
    onError: (error) => {
      toast.error(error.message)
      console.error(error)
    },
    refetchQueries: [QUERY],
  })

  const handleDelete = (inviteId) => {
    deleteInvite({
      variables: {
        id: inviteId,
      },
    })
  }

  return event.invite.map((invite) => {
    return (
      <Card
        key={invite.id}
        avatar={{
          alt: invite.name,
          avatar: invite.user?.avatar,
          letter: invite.name[0],
        }}
        email={invite.email}
        name={invite.name}
        isCloseShowing={true}
        handleClose={() => handleDelete(invite.id)}
      />
    )
  })
}
