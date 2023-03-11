import './styles.scss'

import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg'

function MenuItem({ icon, title, action, isActive = null }: any) {
  return (
    <button
      className={`menu-item${isActive && isActive() ? ' is-active' : ''}`}
      onClick={action}
      title={title}
    >
      <svg className="remix">
        <use xlinkHref={`${remixiconUrl}#ri-${icon}`} />
      </svg>
    </button>
  )
}

export default MenuItem
