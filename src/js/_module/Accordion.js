'use strict'

export default class {
  /**
   * Constructor
   */
  constructor() {
    this.Duration = 210
    // Set
    this.setting()
  }

  /**
   * Setting
   */
  setting() {
    document.addEventListener('click', event => {
      const $TARGET = event.target.closest('.\\@accordion__trigger')
      if ($TARGET) {
        const $PARENT = event.target.closest('.\\@accordion')
        const $CONTENT = $PARENT.querySelector('.\\@accordion__content')
        $PARENT.classList.toggle('-opened')
        this.slideToggle($CONTENT, $PARENT)
      }
    })
  }

  /**
   * Slide up
   */
  slideUp(target, parent, duration) {
    target.style.transitionProperty = 'height, margin, padding'
    target.style.transitionDuration = duration + 'ms'
    target.style.boxSizing = 'border-box'
    target.style.height = target.offsetHeight + 'px'
    target.offsetHeight
    target.style.overflow = 'hidden'
    target.style.height = 0
    target.style.paddingTop = 0
    target.style.paddingBottom = 0
    target.style.marginTop = 0
    target.style.marginBottom = 0
    window.setTimeout(() => {
      target.style.display = 'none'
      target.style.removeProperty('height')
      target.style.removeProperty('padding-top')
      target.style.removeProperty('padding-bottom')
      target.style.removeProperty('margin-top')
      target.style.removeProperty('margin-bottom')
      target.style.removeProperty('overflow')
      target.style.removeProperty('transition-duration')
      target.style.removeProperty('transition-property')
    }, duration)
  }

  /**
   * slide down
   */
  slideDown(target, parent, duration) {
    target.style.removeProperty('display')
    let display = window.getComputedStyle(target).display

    if (display === 'none') display = 'block'

    target.style.display = display
    let height = target.offsetHeight
    target.style.overflow = 'hidden'
    target.style.height = 0
    target.style.paddingTop = 0
    target.style.paddingBottom = 0
    target.style.marginTop = 0
    target.style.marginBottom = 0
    target.offsetHeight
    target.style.boxSizing = 'border-box'
    target.style.transitionProperty = 'height, margin, padding'
    target.style.transitionDuration = duration + 'ms'
    target.style.height = height + 'px'
    target.style.removeProperty('padding-top')
    target.style.removeProperty('padding-bottom')
    target.style.removeProperty('margin-top')
    target.style.removeProperty('margin-bottom')
    window.setTimeout(() => {
      target.style.removeProperty('height')
      target.style.removeProperty('overflow')
      target.style.removeProperty('transition-duration')
      target.style.removeProperty('transition-property')
    }, duration)
  }

  /**
   * Slide Toggle
   */
  slideToggle(target, parent, duration = this.Duration) {
    if (window.getComputedStyle(target).display === 'none') {
      return this.slideDown(target, parent, duration)
    } else {
      return this.slideUp(target, parent, duration)
    }
  }
}
