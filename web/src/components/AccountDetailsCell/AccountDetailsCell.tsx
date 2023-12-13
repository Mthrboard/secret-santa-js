import type { AccountDetailsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Avatar from '../Avatar/Avatar'

export const QUERY = gql`
  query AccountDetailsQuery($id: Int!) {
    user(id: $id) {
      id
      avatar
      firstName
      lastName
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ user }: CellSuccessProps<AccountDetailsQuery>) => {
  console.log(user)
  return (
    <>
      <Avatar
        avatar={user.avatar}
        alt={user.firstName}
        letter={user.firstName ? user.firstName[0] : '?'}
      />
      <div className="text-left">
        <div className="text-sm">Logged in as</div>
        <div className="text-lg">
          <strong>{`${user.firstName} ${user.lastName}`}</strong>
        </div>
      </div>
    </>
  )
}
