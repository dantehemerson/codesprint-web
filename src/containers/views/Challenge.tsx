import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import challengeDucks from 'reducers/challenge'
import { ChallengeDto } from 'reducers/challenge/types/challenge.type'

type Selector = {
  challenge: {
    challenge: ChallengeDto
    status: string
  }
}

const {
  getChallenge,
  resetValues
} = challengeDucks.creators

export default function Challenge({ match }: any) {
  const { params: { id } } = match
  const dispatch = useDispatch()

  const { challenge, status } = useSelector((state: Selector) => state.challenge)

  useEffect(() => {
    dispatch(getChallenge(id))

    return () => dispatch(resetValues())
  }, [])

  if(status === 'LOADING') return <div></div>

  return (
    <>
      <article
        className='container px-4 py-24 mx-auto' itemID='#' itemScope
        itemType='http://schema.org/BlogPosting'>
        <div className='w-full mx-auto mb-12 text-center md:w-2/3'>
          <p className='mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase'>Development</p>
          <h1 className='mb-3 text-4xl font-bold text-gray-900 md:leading-tight md:text-5xl' itemProp='headline' title='Rise of Tailwind - A Utility First CSS Framework'>
            {challenge.title}
          </h1>
          <p className='text-gray-700'>
            Written by
            <span
              className='byline author vcard' itemProp='author'
              itemType='http://schema.org/Person'>
              <a
                className='text-primary hover:text-primary-dark' href='#' itemProp='url'
                rel='author noopener noreferrer' target='_blank'><span itemProp='name'>{' ' + challenge.createdBy?.name + ' '}</span></a>
            </span>
            on <time dateTime='2010-08-07 11:11:03-0400' itemProp='datePublished dateModified'>Jan 02 2021</time>
          </p>
        </div>
        <div className='mx-auto max-w-md prose' dangerouslySetInnerHTML={{ __html: challenge.bodyHtml }}>
        </div>
      </article>
    </>
  )
}
