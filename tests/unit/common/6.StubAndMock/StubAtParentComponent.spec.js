import { shallowMount, mount } from "@vue/test-utils";
import ParentComponent from "@/test-components/6.StubAndMock/ParentComponent.vue";
import UnitTestHelpers from "@/test-factories/UnitTestHelpers";

// Nhóm các test case
describe("Test component ParentComponent", () => {
  // Mô tả test case và chi tiết ntn
  it("renders component ParentComponent.vue mà không render ChildComponent.vue", async () => {
    // act
    const wrapper = mount(ParentComponent, {
      stubs: {
        //ChildComponent: true, // cách 1, component con sẽ ko render ra, chỉ hiện dưới dạng 1 tag <childcomponent-stub></childcomponent-stub>
        ChildComponent: { template: "<nvcuong1/>" }, // cách 2, fake template của component con
      },
    });


    // log ra thử xem ông này render ra cái gì
    console.log(wrapper.html());
    // assert
    expect(wrapper.html()).toContain("<nvcuong1></nvcuong1>");
  });
});
