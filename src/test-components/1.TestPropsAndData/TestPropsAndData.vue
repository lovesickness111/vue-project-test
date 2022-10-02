<template>
  <div>
    <b class="hello">This is the message {{ msg }}</b>
    <form action="">
      <input type="text" v-model="inputValue" />
      <span class="reversed">{{ reversedInput }}</span>
    </form>
  </div>
</template>

<script>
import { string } from "yargs";

export default {
  name: "TestPropsAndData",
  props: {
    msg: {
      type: String,
      default: "",
    },
    reversed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },

  computed: {
    reversedInput() {
      return this.reversed
        ? this.inputValue.split("").reverse().join("")
        : this.inputValue;
    },
  },

  watch: {
    inputValue(newVal, oldVal) {
      if (newVal.trim().length && newVal !== oldVal) {
        console.log(newVal);
      }
    },
  },
};
</script>
