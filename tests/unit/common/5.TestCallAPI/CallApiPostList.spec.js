import { mount } from "@vue/test-utils";
import axios from "axios";
import PostList from "@/call-api/PostList.vue";
import { nextTick } from "vue";
import flushPromises from "flush-promises";
const mockPostList = [
  { id: 1, title: "title1" },
  { id: 2, title: "title2" },
];

// Following lines tell Jest to mock any call to `axios.get`
// and to return `mockPostList` instead
jest.spyOn(axios, "get").mockResolvedValue(mockPostList);
describe("Test call api", () => {
  it("click button call api", async () => {
    const wrapper = mount(PostList);

    await wrapper.get("button").trigger("click");

    // Let's assert that we've called axios.get the right amount of times and
    // with the right parameters.
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/api/posts");

    // Wait until the DOM updates.
    await flushPromises();
    //await nextTick();
    //nextTick(() => {
      // Finally, we make sure we've rendered the content from the API.
      const posts = wrapper.findAll('[data-test="post"');
      console.log(posts[0].text());
      expect(posts).toHaveLength(2);
      expect(posts.text()).toContain("title1");
      expect(posts.text()).toContain("title2");
    //});
  });
});
