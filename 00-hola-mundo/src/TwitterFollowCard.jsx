import { useState } from 'react'

export function TwitterFollowCard({ children, userName, name }) {
  const [isFollowingState, setIsFollowingState] = useState(false)

  const text = isFollowingState ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowingState
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowingState(!isFollowingState)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={`https://unavatar.io/${userName}`}
          alt={`El avatar de ${userName}`} />
        <div className='tw-followCard-info'>
          <strong>{name ? name : children}</strong>
          <span className='tw-followCard-username'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick} >
          <span className='tw-follow'>{text}</span>
          <span className='tw-unFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}


