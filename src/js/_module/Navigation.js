'use strict'

export default class {
  /**
   * Constructor
   */
  constructor() {
    // Clone
    this.Element = document.createElement('div')
    this.Element.className = 'navigation'
    this.Navigation = document.querySelector('.footer__content').cloneNode(true)
    this.Element.appendChild(this.Navigation)
    document.body.appendChild(this.Element)

    // iOS Scroll Measure
    // [reference] https://qiita.com/noraworld/items/2834f2e6f064e6f6d41a
    const HANDLE_TOUCH_MOVE = (event, element) => {
      if (
        event.target === element &&
        element.scrollTop !== 0 &&
        element.scrollTop + element.clientHeight !== element.scrollHeight
      ) {
        event.stopPropagation()
      } else {
        event.preventDefault()
      }
    }
    const SCROLL_LIMITEDLY = element => {
      element.scrollTop = 1
      element.addEventListener(
        'scroll',
        () => {
          if (element.scrollTop === 0) {
            element.scrollTop = 1
          } else if (
            element.scrollTop + element.clientHeight ===
            element.scrollHeight
          ) {
            element.scrollTop = element.scrollTop - 1
          }
        },
        {
          passive: true,
        }
      )
      document.addEventListener(
        'touchmove',
        HANDLE_TOUCH_MOVE(event, element),
        {
          passive: false,
        }
      )
    }
    const SCROLL_RESTART = element => {
      document.removeEventListener(
        'touchmove',
        HANDLE_TOUCH_MOVE(event, element),
        {
          passive: false,
        }
      )
    }

    // Trigger
    this.Trigger = document.querySelector('.trackNavigation__trigger')
    this.Trigger.addEventListener('click', () => {
      if (!this.Trigger.classList.contains('-active')) {
        this.Trigger.classList.add('-active')
        this.Element.classList.add('-active')
        SCROLL_LIMITEDLY(this.Element)
      } else {
        this.Trigger.classList.remove('-active')
        this.Element.classList.remove('-active')
        SCROLL_RESTART(this.Element)
      }
    })
  }
}
