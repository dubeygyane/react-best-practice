import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <h1><Link to={"/dashboard/first"}>Go to dashboard</Link></h1>
  )
}
