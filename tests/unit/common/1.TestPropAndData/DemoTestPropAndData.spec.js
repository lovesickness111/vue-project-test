import { shallowMount } from "@vue/test-utils";
import TestPropsAndData from "@/test-components/1.TestPropsAndData/TestPropsAndData.vue";
import UnitTestHelpers from '@/test-factories/UnitTestHelpers'

// Nhóm các test case
describe("TestPropsAndData.vue", () => {
  // Mô tả test case và chi tiết ntn
  it("renders props.msg when passed", () => {
    /**
    * Fake data, props có 2 cách:
    * + Fake qua Arguments {Object} options của mount() hoặc shallowMount()
    * + Fake qua Methods của Wrapper => wrapper.setData({Object} data), wrapper.setProps({Object} props)
    */
    const wrapper = shallowMount(TestPropsAndData, {
      propsData: { msg: "new message" },
      data() {
        return {
          show: true
        }
      }
    });
    // await wrapper.setProps({ msg: "new message" });
    // await wrapper.setData({ show: true });

    /**
    * Expect 2 cách:
    * + Thông qua Methods của wrapper là props() đối với prop, data không có methods
    * + Thông qua Properties của wapper là vm đổi với cả data và prop
    */
    expect(wrapper.vm.msg).toBe('new message')
    expect(wrapper.vm.show).toBe(true)
    // expect(wrapper.props().msg).toBe('new message')
    // expect(wrapper.props('msg')).toBe('new message')

    // ------------------------Test thử giao diện có render ra msg nội dung là "'new message'" hay không----------------------------------------
    let h = new UnitTestHelpers(wrapper, expect);
    // assert
    h.textContainInDOM("new message", ".hello");
  });
});
