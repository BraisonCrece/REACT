import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

  return (
    <section className='twitter-recomendations'>
      <TwitterFollowCard userName={'braisoncrece'} isFollowing>
        Brais Fernández Díaz
      </TwitterFollowCard>
      <TwitterFollowCard userName='midudev' name='Miguel Ángel Durán' isFollowing={false} />
      <TwitterFollowCard userName='anamariasosam' name='Ana María Sosam' isFollowing />
      <TwitterFollowCard userName='IbaiLlanos' name='Ana María Sosam' isFollowing />
      <TwitterFollowCard userName='blindma1den' name='Daniela Ether Rodríguez' isFollowing />

    </section>
  )
}

