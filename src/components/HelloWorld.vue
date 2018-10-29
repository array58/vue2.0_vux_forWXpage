<template>
  <div>
    <XButton>dddd</XButton>
    <div class="test_less">
      <div>dddddddddd</div>
    </div>
  </div>
</template>

<script>
import { XButton } from 'vux'

export default {
  components: {
    XButton
  }
}
</script>

<style lang="less">
  .test_less{
    div{
      background: yellow;
    }
  }
</style>