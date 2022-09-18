import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import UnitTestHelpers from "../UnitTestHelpers";

// Nhóm các test case
describe("HelloWorld.vue", () => {
  // Mô tả test case và chi tiết ntn
  it("renders props.msg when passed", () => {
    // set up trước khi test

    // Có 2 cách để gắn giá trị cho props hoặc Data trong component
    // Cach1:  mount component HelloWorld.vue với option là gán cho props msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg: "new message" },
    });
    // Cách 2: gán prop với hàm setprop
    wrapper.setProps({ msg: "new message" });
    // ------------------------Test thử giao diện có render ra msg nội dung là "'new message'" hay không----------------------------------------
    let h = new UnitTestHelpers(wrapper, expect);
    // assert
    h.textContainInDOM("new message", ".hello");
  });
});
