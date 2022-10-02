import { shallowMount } from "@vue/test-utils";
import TestPropsAndData from "@/test-components/1.TestPropsAndData/TestPropsAndData.vue";
import { nextTick } from "vue";

describe("DemoTestPropAndData.spec.js", () => {
  let cmp;

  beforeEach(() => {
    cmp = shallowMount(TestPropsAndData);
  });

  // Mô tả test case và chi tiết ntn
  test("Ví dụ 1.renders props.msg when passed", async () => {
    /**
     * Fake data, props có 2 cách:
     * + Fake qua Arguments {Object} options của mount() hoặc shallowMount()
     * + Fake qua Methods của Wrapper => wrapper.setData({Object} data), wrapper.setProps({Object} props)
     */
    const wrapper = shallowMount(TestPropsAndData, {
      propsData: { msg: "new message 123" },
      data() {
        return {
          dataBoolean: true,
        };
      },
    });

    // act

    wrapper.vm.inputValue = "hello";
    // assert
    /**
     * Expect 2 cách:
     * + Thông qua Methods của wrapper là props() đối với prop, data không có methods
     * + Thông qua Properties của wapper là vm đổi với cả data và prop
     */

    expect(wrapper.vm.inputValue).toBe("hello");
  });

  describe("Properties and computed", () => {
    it("returns trả về chuỗi đã đảo ngược nếu reversed != true", () => {
      cmp.setData({ inputValue: "123" });
      expect(cmp.vm.reversedInput).toBe("123");
    });

    it("returns trả về chuỗi đã đảo ngược nếu reversed = true", async () => {
      cmp.setData({ inputValue: "123" });
      await cmp.setProps({ reversed: true });
      expect(cmp.vm.reversedInput).toBe("321");
    });
  });

  describe("Watchers - inputValue", () => {
    let spy;

    beforeAll(() => {
      spy = jest.spyOn(console, "log");
    });

    afterEach(() => {
      spy.mockClear();
    });

    it("không được gọi nếu giá trị trống", async () => {
      await cmp.setData({ inputValue: "" });
      expect(spy).not.toBeCalled();
    });

    it("không được gọi nếu các giá trị giống nhau", async () => {
      cmp = shallowMount(TestPropsAndData, {
        data: () => ({ inputValue: "foo" }),
      });
      await cmp.setData({ inputValue: "foo" });
      expect(spy).not.toBeCalled();
    });

    it("được gọi với giá trị mới trong các trường hợp khác", async () => {
      await cmp.setData({ inputValue: "foo" });
      expect(spy).toBeCalled();
    });
  });
});
