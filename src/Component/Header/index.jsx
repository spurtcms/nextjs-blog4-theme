import React from 'react'
import HeaderServerAction from './HeaderServerAction'
import { fetchGraphQl } from '@/app/api/graphicql'
import { GET_POSTS_CHANNELLIST_QUERY } from '@/app/api/query'

async function Header() {
    let variable_category={"limit": 50, "offset":0,"hierarchylevel": 0}
    const postchannel=await fetchGraphQl(GET_POSTS_CHANNELLIST_QUERY,variable_category) 
  return (
    <>
    <HeaderServerAction postchannel={postchannel?.channelList?.channellist}/>
    </>
  )
}

export default Header
