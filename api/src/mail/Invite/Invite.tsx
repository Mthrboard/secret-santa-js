import React from 'react'

import {
  Html,
  Text,
  Body,
  Head,
  Tailwind,
  Preview,
  Container,
} from '@react-email/components'

export function InviteEmail({
  name,
  eventName,
  eventDate,
  eventCreator,
  token,
}: {
  name: string
  eventName: string
  eventDate: string
  eventCreator: string
  token: string
}) {
  return (
    <Html lang="en">
      <Head />
      <Preview>You&apos;re invited to {eventName}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] rounded border border-solid border-gray-200 p-[20px]">
            <Text className="text-[14px] leading-[24px] text-black">
              Hey {name}!
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              I hope this email sleighs you with joy! &apos;Tis the season to be
              merry, and we are putting together an epic Secret Santa
              extravaganza. You, my friend, are cordially invited to join in on
              the festive fun!
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Hold onto your stockings because here are the deets:
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              {eventName}
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              {eventDate}
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Let&apos;s get down to business - Secret Santa style! In case
              you&apos;re not familiar with this holly jolly tradition,
              here&apos;s the scoop: each person will be handed a name out of
              Santa&apos;s mystical hat and become their very own gift-giver
              extraordinaire. You&apos;ll surprise them with a present that will
              make their heart sing Christmas carols!
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              To secure your spot among Santa&apos;s little helpers, please RSVP
              clicking on this link:
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              {`https://example.com/event/${token}`}
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              If you&apos;re able to come, you&apos;ll receive access to fill
              out your own wish list with gift ideas that would make you say,
              "Oh, deer, it&apos;s perfect!" Once everyone has completed their
              lists, we&apos;ll send out a second email revealing who
              you&apos;ll be hunting down the perfect present for.
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Get ready for an unforgettable night full of laughter, surprises,
              and maybe even an appearance by Santa himself (JK, it&apos;s
              probably just one of our mischievous friends in a red suit)!
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Looking forward to having you ho-ho-hop on board! &apos;Tis the
              season to spread joy and have Fa-la-la-la-fabulous festive fun, so
              let&apos;s Secret Santa our socks off!
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              With sugar, spice, and all things nice,
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              {eventCreator}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
