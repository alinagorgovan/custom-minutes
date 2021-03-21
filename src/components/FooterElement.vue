<template>
  <div>
    <div style="font-size:30px; color:white;">{{label}}</div>
    <div style="font-size:15px; color:white;">{{value}}</div>
  </div>
</template>

<script>
export default {
  props: ['label', 'value'],
};
</script>
