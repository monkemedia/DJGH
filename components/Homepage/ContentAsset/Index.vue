<template lang="pug, md">
  .container
    .columns
      .column
        .content-asset.has-text-centered
          h3.title
            | {{ data.title }}
          span.description(v-html="$md.render(data.description)")
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../node_modules/sass-rem/rem';
  @import '../../../node_modules/sass-mq/mq';
  @import '~assets/css/utilities/variables.scss';
  @import '~assets/css/utilities/mixins.scss';

  .content-asset {
    padding: 40px 0;
  }

  .title {
    font-size: rem(40px);
    margin-bottom: 20px;
    @include ExtraBoldUppercase();
  }

  .subtitle {
    font-size: rem(35px);
    color: $white;
    @include ExtraBold();
    margin: 0;
  }

  .description {
    width: 100%;
    max-width: 700px;
    display: inline-block;
  }

  p {
    font-size: rem(13px);
    color: $grey-light;
    line-height: 1.6;
  }

  .button {
    color: $white;
    margin: 0;
  }

</style>
