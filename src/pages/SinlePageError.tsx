import React from 'react'
import { useRouteError } from 'react-router-dom'

const SinglePageError = () => {
  const error = useRouteError()

  if (error instanceof Error) {
    return <h2>{error.message}</h2>
  }

  return <h2>An unknown error occurred.</h2>
}

export default SinglePageError
