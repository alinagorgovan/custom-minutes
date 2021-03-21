<template>
  <div>
    <div>
      <b-card :title="data.service.name">
        <b-card-text>
          Date: <strong>{{data.date}}</strong>
          <br>
          Employee: <strong>{{data.employee.name}}</strong>
          <br>
          Price: <strong>{{data.service.price}}</strong>
          </b-card-text>

        <a href="#" class="card-link">Cancel</a>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
};
</script>
