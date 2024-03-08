import React from 'react'

interface Props{
    params: {slug: string[]}
    searchParams: {sortOrder: string}
}

const page = ({params: {slug},searchParams:{sortOrder}}: Props) => {
  return (
    <div>
      ProductPage {slug} {sortOrder}
    </div>
  )
}

export default page
