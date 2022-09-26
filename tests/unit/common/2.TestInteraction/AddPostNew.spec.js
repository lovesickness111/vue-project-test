import { mount } from "@vue/test-utils";
import AddPostNew from "@/test-components/5.call-api/AddPostNew.vue";
import { nextTick } from "vue";

describe("đăng bài", () => {
  it("đăng bài thành công hay không???", async () => {
    const wrapper = mount(AddPostNew, {
        stubs: {
            Editor: true,
        }
    });
    await nextTick();
    console.log(wrapper.html());
  });
});
