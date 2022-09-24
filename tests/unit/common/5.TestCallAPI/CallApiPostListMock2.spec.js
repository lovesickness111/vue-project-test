import { mount } from "@vue/test-utils";
import axios from "axios";
import PostList from "@/test-components/5.call-api/PostList.vue";
import { nextTick } from "vue";

const mockPostList = [
  { id: 1, title: "title1" },
  { id: 2, title: "title2" },
];

describe("Test call api", () => {
  it("test render child component", async () => {
    // Following lines tell Jest to mock any call to `axios.get`
    // and to return `mockPostList` instead
    jest.spyOn(axios, "get").mockResolvedValue(mockPostList);
    const wrapper = mount(PostList);
    await nextTick();
    expect(axios.get).toHaveBeenCalledTimes(1);
    console.log(wrapper.html());
  });
});
