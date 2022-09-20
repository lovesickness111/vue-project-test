import { shallowMount, mount } from "@vue/test-utils";
import ParentComponent from "@/test-components/6.StubAndMock/ParentComponent.vue";
import UnitTestHelpers from "@/test-factories/UnitTestHelpers";

// Nhóm các test case
describe("Test component ParentComponent", () => {
  // Mô tả test case và chi tiết ntn
  it("renders component ParentComponent.vue mà không render ChildComponent.vue", () => {
    // act
    const wrapper = mount(ParentComponent, {
      stubs: {
        ChildComponent: true, // cách 1, component con sẽ ko render ra, chỉ hiện dưới dạng 1 tag <childcomponent-stub></childcomponent-stub>
        //{ template: "<span/>" } // cách 2, fake template của component con
      },
    });

    let helper = new UnitTestHelpers(wrapper, expect);

    // log ra thử xem ông này render ra cái gì
    console.log(wrapper.html());
    // assert

    helper.textContainInDOM('parent component', ".full-name");
    // không có ông con
    helper.domHasLength(".full-name-child", 0);


  });
});
