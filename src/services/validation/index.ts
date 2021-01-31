export const isServer = typeof window === 'undefined'

export const isMobile = !isServer
    ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
      )
    : false
