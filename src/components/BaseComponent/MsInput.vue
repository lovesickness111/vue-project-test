<template>
  <div class="wrap-input">
    <input
      data-test="input-task"
      type="text"
      class="input-task"
      name="input-task"
      v-on="listeners"
      :value="value"
      :ref="'MsInput'"
    />
  </div>
</template>
<script>
export default {
  name: "MsInput",
  data() {
    return {
      internalText: "",
    };
  },
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        change: () => {
         //   const a = e.KeyCode;
          this.internalText  = this.$refs["MsInput"].value;
          this.$emit("valueChange", this.internalText );
        },
      };
    },
  },
};
</script>
<style lang="css">
.wrap-input {
  height: 32px;
  width: 50%;
  display: flex;
  align-items: center;
  max-width: 600px;
}

.input-task {
  height: 100%;
  flex-grow: 1;
  margin-right: 16px;
  border-radius: 8px;
  border: none;
  padding: 0px 8px;
}

.wrap-button {
  height: 100%;
  cursor: pointer;
  padding: 0px 16px;
  background: #3085d6;
  border: unset;
  border-radius: 8px;
  color: white;
  font-weight: bold;
}
</style>
