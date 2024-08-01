import { notFound } from 'next/navigation';
import React from 'react'

export default function SingleBlog({params}) {
    const {id}=  params;
     if (id === '6') {
        notFound()
     }
  return (
    <div className='mt-8 p-6'>
      The <strong>Blog</strong> id is <strong>{id}</strong>
     </div>
  )
}
