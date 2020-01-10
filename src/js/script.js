'use strict'

/**
 * CSS
 */
import '../scss/style.scss'

/**
 * Polyfill
 */
import 'intersection-observer'
import elementClosest from 'element-closest'
elementClosest(window)
import objectFitImages from 'object-fit-images'

/**
 * Vue
 */
import Vue from 'vue'
Vue.config.productionTip = false
import axios from 'axios'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 550,
  easing: 'ease-in-out',
  offset: -40,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
})

/**
 * Vendor
 */
import lazySizes from 'lazysizes'
import Swiper from 'swiper'
import * as PhotoSwipe from 'photoswipe'
// import * as PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'

/**
 * Script
 */
import _Inview from './_module/Inview'
import _Modal from './_module/Modal'
import _Accordion from './_module/Accordion'

/**
 * New Vue
 */
new Vue({
  el: '#application',

  /**
   * Data / 配列を管理
   */
  data: function() {
    return {}
  },

  /**
   * Created / DOM用意する前
   */
  created: function() {
    // キャッシュ対策
    axios.interceptors.request.use(config => {
      if (typeof config.params === 'undefined') {
        config.params = {}
      }
      if (typeof config.params === 'object') {
        if (
          typeof URLSearchParams === 'function' &&
          config.params instanceof URLSearchParams
        )
          config.params.append('time', Date.now())
        else config.params._ = Date.now()
      }
      return config
    })
    // 読み込むjson
  },

  /**
   * Mounted / DOMを用意した（マウント）後に実行
   */
  mounted: function() {
    new _Inview()
    new _Modal()
    new _Accordion()
  },

  /**
   * BeforeUpdate / データの更新時にrender前に実行
   */
  beforeUpdate: function() {},

  /**
   * Updated / 更新後に実行
   */
  updated: function() {
    objectFitImages('.objectFitImage')
  },

  /**
   * Computed / 算出プロパティ
   */
  computed: {},

  /**
   * Methods / 関数
   */
  methods: {
    // Smooth Scroll
    smoothScroll(target, delay = 340) {
      event.preventDefault()
      let $TARGET
      if (target === 'closest-accordion') {
        $TARGET = event.target.closest('.\\@accordion')
      } else {
        $TARGET = document.querySelector(target)
      }
      setTimeout(() => {
        this.$scrollTo($TARGET)
      }, delay)
    },

    // Transition
    beforeEnter(el) {
      el.style.transitionDelay = 89 * parseInt(el.dataset.index, 10) + 'ms'
    },
    afterEnter(el) {
      el.style.transitionDelay = ''
    },
  },
})
