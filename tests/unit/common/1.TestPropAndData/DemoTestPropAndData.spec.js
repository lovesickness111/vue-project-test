import { shallowMount } from "@vue/test-utils";
import TestPropsAndData from "@/test-components/1.TestPropsAndData/TestPropsAndData.vue"; 

describe("DemoTestPropAndData.spec.js", () => {
  let cmp;

  beforeEach(() => {
    cmp = shallowMount(TestPropsAndData);
  });



  describe("Properties", () => {
    it("returns trả về chuỗi đã đảo ngược nếu reversed != true", () => {
      cmp.setData({ inputValue: "Yoo" });
      expect(cmp.vm.reversedInput).toBe("Yoo");
    });

    it("returns trả về chuỗi đã đảo ngược nếu reversed = true", async () => {
      cmp.setData({ inputValue: "Yoo" });
      await cmp.setProps({ reversed: true });
      expect(cmp.vm.reversedInput).toBe("ooY");
    });
  });


  describe('Watchers - inputValue', () => {
    let spy

    beforeAll(() => {
      spy = jest.spyOn(console, 'log')
    })

    afterEach(() => {
      spy.mockClear()
    })

    it('không được gọi nếu giá trị trống', () => {
      cmp.setData({ inputValue: "   " });
      expect(spy).not.toBeCalled();
    })

    it('không được gọi nếu các giá trị giống nhau', () => {
      cmp = shallowMount(TestPropsAndData, {
        data: () => ({ inputValue: "foo" })
      });
      cmp.setData({ inputValue: "foo" });
      expect(spy).not.toBeCalled();
    })

    it('được gọi với giá trị mới trong các trường hợp khác',async () => { 
      await cmp.setData({ inputValue: "foo" }); 
      expect(spy).toBeCalled();
    })
  })
});







// // Nhóm các test case
// describe("TestPropsAndData.vue", () => {
//   // Mô tả test case và chi tiết ntn
//   it("renders props.msg when passed", () => {
//     /**
//     * Fake data, props có 2 cách:
//     * + Fake qua Arguments {Object} options của mount() hoặc shallowMount()
//     * + Fake qua Methods của Wrapper => wrapper.setData({Object} data), wrapper.setProps({Object} props)
//     */
//     const wrapper = shallowMount(TestPropsAndData, {
//       propsData: { msg: "new message" },
//       data() {
//         return {
//           show: true
//         }
//       }
//     });
//     // await wrapper.setProps({ msg: "new message" });
//     // await wrapper.setData({ show: true });

//     /**
//     * Expect 2 cách:
//     * + Thông qua Methods của wrapper là props() đối với prop, data không có methods
//     * + Thông qua Properties của wapper là vm đổi với cả data và prop
//     */
//     expect(wrapper.vm.msg).toBe('new message')
//     expect(wrapper.vm.show).toBe(true)
//     // expect(wrapper.props().msg).toBe('new message')
//     // expect(wrapper.props('msg')).toBe('new message')

//     // ------------------------Test thử giao diện có render ra msg nội dung là "'new message'" hay không----------------------------------------
//     let h = new UnitTestHelpers(wrapper, expect);
//     // assert
//     h.textContainInDOM("new message", ".hello");
//   });
// });
