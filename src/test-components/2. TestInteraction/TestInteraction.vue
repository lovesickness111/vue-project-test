<template>
  <main id="Home-view">
    <MsCombobox
      :options="options"
      @selected="validateSelection($event)"
      v-on:filter="getDropdownValues"
      :disabled="false"
      class="ms-combo-custom"
      name="zipcode"
      :maxItem="10"
      placeholder="Please select an option"
    >
      <template v-slot:itemDropdown="slotData">
        <div class="nvcuong1" @click="showItem(slotData)">
          nvcuong2 custom: {{ slotData.data.name }}
        </div>
      </template>
    </MsCombobox>
  </main>
</template>
<script>
import MsCombobox from "@/components/BaseComponent/MsCombobox.vue";

export default {
  name: "TestInteraction",
  components: {
    MsCombobox,

  },
  data() {
    return {
      options: [
        { name: "Cat", id: "cat" },
        { name: "Dog", id: "dog" },
        { name: "Elephant", id: "elephant" },
        { name: "Girafe", id: "girafe" },
        { name: "Snake", id: "snake" },
        { name: "Spider", id: "spider" },
        { name: "Unicorn", id: "unicorn" },
      ],
      selected: { name: null, id: null },
      valueDate: "",
      srcIframe: "http://localhost:3000/",
      iframeLoading: true,
      visiblePopup: false,
    };
  },
  created() {
    this.getEmployee();
  },
  methods: {
    onLoad() {
      console.log("iframe loaded");
      this.iframeLoading = false;
    },
    onIframeLoad() {
      console.log("iframe loaded");
    },
    /**
     * xử lý thay đổi giá trị date
     * @param {*} event
     */
    changeInputDateHandler(event) {
      if (event.target && event.target.value) {
        this.valueDate = event.target.value;
      }
    },
    getEmployee() {},
    // sự kiện khi 1 item dc chọn
    validateSelection(selection) {
      this.selected = selection;
      console.log(selection.name + " has been selected");
    },
    // sự kiện khi tìm kiếm trong input
    getDropdownValues(keyword) {
      console.log(
        "You could refresh options by querying the API with " + keyword
      );
    },
    // sự kiện bấm vào 1 item custom
    showItem(slotData) {
      this.visiblePopup = true;
    },
    /**
     * khi giá trị datebox thay đổi
     * @param {*} e data thay đổi
     */
    onDateBoxChanged(e) {
      console.log("thay đổi ngày tháng");
    },
  },
};
</script>

<style lang="scss">
#Home-view {
  .nvcuong1 {
    height: 32px;
  }

  .mt-16 {
    margin-top: 16px;
  }

  // đặt bookmark: Ctrl Alt K
  // next bookmark: ctrl alt L
  // previous bookmark: ctrl alt J

  // previous pointer: alt <
  // previous pointer: alt >
  .ms-combo-custom {
    margin-right: 32px;
  }
}

.iframe-wrapper {
  border: 1px solid gray;
  height: 600px;

  .ms-iframe {
    height: 100%;
    width: 100%;

    iframe {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
