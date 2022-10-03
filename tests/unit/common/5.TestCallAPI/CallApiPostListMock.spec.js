import { mount } from "@vue/test-utils";
import axios from "axios";
import PostList from "@/test-components/5.call-api/PostList.vue";
import { nextTick } from "vue";
import flushPromises from "flush-promises";
const mockPostList = [
  { id: 1, title: "title1" },
  { id: 2, title: "title2" },
];

jest.mock("axios");

describe("Test call api", () => {
  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it("VD1: test call api get", async () => {
    // Following lines tell Jest to mock any call to `axios.get`
    // and to return `mockPostList` instead
    axios.get.mockImplementation((url) => {
      switch (url) {
        case "/api/posts":
          return Promise.resolve(mockPostList);
        case "":
          return Promise.resolve([]);
        default:
          return Promise.resolve(null);
      }
    });
    const wrapper = mount(PostList);
    
    await flushPromises();
    expect(axios.get).toHaveBeenCalledWith("/api/posts");
    
    console.log(wrapper.html());
    const posts = wrapper.findAll('[data-test="post-item"]');
    expect(posts.at(0).text()).toContain('title1')
    expect(posts.at(1).text()).toContain('title2')
   
  });

  it("VD2: test call api post khi reload", async () => {
    axios.post.mockImplementation((url, params) => {
      console.log(params);
      switch (url) {
        case "/api/posts":
          return Promise.resolve(mockPostList);
        case "":
          return Promise.resolve([]);
        default:
          return Promise.resolve(null);
      }
    });

    const wrapper = mount(PostList);
    await wrapper.find(".button-add").trigger("click");
   // await flushPromises();
    expect(axios.post).toHaveBeenCalledWith("/api/posts", { id: "111" });

    
  });
});
