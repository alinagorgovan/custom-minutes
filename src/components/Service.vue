<template>
  <div>
    <b-card
      :title="data.name"
      :img-src="data.img"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        {{data.description}}
      </b-card-text>

      <h4><b-badge pill variant="success">{{data.price}} RON</b-badge></h4>
      <b-button href="/calendar" style="float:right;" variant="primary">Book</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ['data'],
};
</script>
