'use strict'

export default class {
  /**
   * Constructor
   */
  constructor() {
    // Variables
    this.$Target = document.querySelectorAll('.-inview')
    this.$Target_array = Array.prototype.slice.call(this.$Target, 0)
    this.Option = {
      root: null,
      rootMargin: '0px 0px',
      threshold: 0,
    }

    // Functions
    const doWhenIntersect = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('-inviewActive')
          this.Observer.unobserve(entry.target)
        }
      })
    }

    // Triggers
    this.Observer = new IntersectionObserver(doWhenIntersect, this.Option)
    this.$Target_array.forEach(item => {
      this.Observer.observe(item)
    })
  }
}
