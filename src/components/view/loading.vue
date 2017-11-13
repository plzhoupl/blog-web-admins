<style scoped>
  #loading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-left: 50%;
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.5);
    padding-top: 25%;
  }

  .dots-loading-container {
    width: 66px;
    -webkit-animation: expand .75s ease-in-out infinite alternate;
    -moz-animation: expand .75s ease-in-out infinite alternate;
    -ms-animation: expand .75s ease-in-out infinite alternate;
    animation: expand .75s ease-in-out infinite alternate;
  }

  .dot {
    width: 13px;
    height: 13px;
    border-radius: 50%;
    position: absolute;
  }

  .dot.dot-a {
    -webkit-animation: scaleA 1.5s ease-in-out infinite;
    -moz-animation: scaleA 1.5s ease-in-out infinite;
    -ms-animation: scaleA 1.5s ease-in-out infinite;
    animation: scaleA 1.5s ease-in-out infinite;
    background-color: #f66;
    left: 0%
  }

  .dot.dot-b {
    -webkit-animation: scaleB 1.5s ease-in-out infinite;
    -moz-animation: scaleB 1.5s ease-in-out infinite;
    -ms-animation: scaleB 1.5s ease-in-out infinite;
    animation: scaleB 1.5s ease-in-out infinite;
    background-color: #93f;
    left: 33%
  }

  .dot.dot-c {
    -webkit-animation: scaleC 1.5s ease-in-out infinite;
    -moz-animation: scaleC 1.5s ease-in-out infinite;
    -ms-animation: scaleC 1.5s ease-in-out infinite;
    animation: scaleC 1.5s ease-in-out infinite;
    background-color: #c9ff22;
    left: 66%
  }

  .dot.dot-d {
    -webkit-animation: scaleD 1.5s ease-in-out infinite;
    -moz-animation: scaleD 1.5s ease-in-out infinite;
    -ms-animation: scaleD 1.5s ease-in-out infinite;
    animation: scaleD 1.5s ease-in-out infinite;
    background-color: #0f9;
    left: 100%
  }

  @-moz-keyframes scaleA {
    0% {
      transform: scale(1)
    }
    30% {
      transform: scale(1.5)
    }
    60% {
      transform: scale(1)
    }
  }

  @-webkit-keyframes scaleA {
    0% {
      transform: scale(1)
    }
    30% {
      transform: scale(1.5)
    }
    60% {
      transform: scale(1)
    }
  }

  @-o-keyframes scaleA {
    0% {
      transform: scale(1)
    }
    30% {
      transform: scale(1.5)
    }
    60% {
      transform: scale(1)
    }
  }

  @keyframes scaleA {
    0% {
      transform: scale(1)
    }
    30% {
      transform: scale(1.5)
    }
    60% {
      transform: scale(1)
    }
  }

  @-moz-keyframes scaleB {
    10% {
      transform: scale(1)
    }
    40% {
      transform: scale(1.5)
    }
    70% {
      transform: scale(1)
    }
  }

  @-webkit-keyframes scaleB {
    10% {
      transform: scale(1)
    }
    40% {
      transform: scale(1.5)
    }
    70% {
      transform: scale(1)
    }
  }

  @-o-keyframes scaleB {
    10% {
      transform: scale(1)
    }
    40% {
      transform: scale(1.5)
    }
    70% {
      transform: scale(1)
    }
  }

  @keyframes scaleB {
    10% {
      transform: scale(1)
    }
    40% {
      transform: scale(1.5)
    }
    70% {
      transform: scale(1)
    }
  }

  @-moz-keyframes scaleC {
    20% {
      transform: scale(1)
    }
    50% {
      transform: scale(1.5)
    }
    80% {
      transform: scale(1)
    }
  }

  @-webkit-keyframes scaleC {
    20% {
      transform: scale(1)
    }
    50% {
      transform: scale(1.5)
    }
    80% {
      transform: scale(1)
    }
  }

  @-o-keyframes scaleC {
    20% {
      transform: scale(1)
    }
    50% {
      transform: scale(1.5)
    }
    80% {
      transform: scale(1)
    }
  }

  @keyframes scaleC {
    20% {
      transform: scale(1)
    }
    50% {
      transform: scale(1.5)
    }
    80% {
      transform: scale(1)
    }
  }

  @-moz-keyframes scaleD {
    30% {
      transform: scale(1)
    }
    65% {
      transform: scale(1.5)
    }
    100% {
      transform: scale(1)
    }
  }

  @-webkit-keyframes scaleD {
    30% {
      transform: scale(1)
    }
    65% {
      transform: scale(1.5)
    }
    100% {
      transform: scale(1)
    }
  }

  @-o-keyframes scaleD {
    30% {
      transform: scale(1)
    }
    65% {
      transform: scale(1.5)
    }
    100% {
      transform: scale(1)
    }
  }

  @keyframes scaleD {
    30% {
      transform: scale(1)
    }
    65% {
      transform: scale(1.5)
    }
    100% {
      transform: scale(1)
    }
  }

  @-moz-keyframes expand {
    from {
      width: 66px
    }
    to {
      width: 100px;
      transform: translateX(-17px)
    }
  }

  @-webkit-keyframes expand {
    from {
      width: 66px
    }
    to {
      width: 100px;
      transform: translateX(-17px)
    }
  }

  @-o-keyframes expand {
    from {
      width: 66px
    }
    to {
      width: 100px;
      transform: translateX(-17px)
    }
  }

  @keyframes expand {
    from {
      width: 66px
    }
    to {
      width: 100px;
      transform: translateX(-17px)
    }

  }

  #loading .closed {
    opacity: 0;
    -webkit-transform: translate3D(600px, 0, 0);
    transform: translate3D(600px, 0, 0);
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;

  }
</style>
<template>
  <div id="loading" v-show="display">
    <div id="dots-loader" class="dots-loading-container">
      <div class="dot dot-a"></div>
      <div class="dot dot-b"></div>
      <div class="dot dot-c"></div>
      <div class="dot dot-d"></div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      display: {
        default: true,
        type: Boolean
      }
    }
  }

</script>
