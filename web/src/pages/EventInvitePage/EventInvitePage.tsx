import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import EditEventCell from 'src/components/EditEventCell'
import EventHeaderCell from 'src/components/EventHeaderCell'
import InviteGroup from 'src/components/InviteGroup/InviteGroup'

const EventInvitePage = ({ id }) => {
  const [isEditEventShowing, setIsEditEventShowing] = useState(false)

  const toggleEditEventSlideOut = () => {
    setIsEditEventShowing((prev) => !prev)
  }
  return (
    <div className="relative">
      <MetaTags title="Invite friends and Family" />

      <EventHeaderCell id={id} showEditForm={toggleEditEventSlideOut} />
      <InviteGroup id={id} />
      <div
        className={`fixed bottom-0 right-0 top-0 z-50 w-3/4 transition-transform duration-500 ${
          isEditEventShowing ? 'translate-x-0' : 'translate-x-[120%]'
        }`}
      >
        <EditEventCell id={id} handleClose={toggleEditEventSlideOut} />
      </div>
    </div>
  )
}

export default EventInvitePage
