import React from 'react'

const page = (props: { searchParams: { q: string } }) => {
  return <div>{props.searchParams.q}</div>
}

export default page
