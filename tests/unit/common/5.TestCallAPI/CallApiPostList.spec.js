import { mount } from "@vue/test-utils";
import axios from "axios";
import PostList from "@/test-components/5.call-api/PostList.vue";
import { nextTick } from "vue";
//import flushPromises from "flush-promises";
const mockPostList = [
  { id: 1, title: "title1" },
  { id: 2, title: "title2" },
];

// Following lines tell Jest to mock any call to `axios.get`
// and to return `mockPostList` instead
jest.spyOn(axios, "get").mockResolvedValue(mockPostList);
describe("Test call api", () => {
  it("click button call api", async () => {
    const wrapper = mount(PostList)

    await wrapper.get('button').trigger('click')
    await nextTick()
    // Let's assert that we've called axios.get the right amount of times and
    // with the right parameters.
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('/api/posts')
  
    // Wait until the DOM updates.
    await nextTick()
    console.log(wrapper.html());
    // Finally, we make sure we've rendered the content from the API.
    expect(wrapper.findAll('[data-test="post"]')).toHaveLength(2)
    await nextTick()
    const posts = wrapper.findAll('[data-test="post"]');
    console.log(wrapper.findAll('[data-test="post"]'))
    expect(posts.at(0).text()).toContain('title1')
    expect(posts.at(1).text()).toContain('title2')
    //});
  });
});

