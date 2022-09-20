import { mount } from "@vue/test-utils";
import App from '@/components/MathApp.vue';

describe("App", () => {
    // Inspect the raw component options
    it("has data", () => {
        expect(typeof App.data).toBe("function");
    });
});

describe("Mounted App", () => {
    const wrapper = mount(App);

    test("is a Vue instance", () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it("renders the correct markup", () => {
        expect(wrapper.html()).toContain(
            "<p>What is the sum of the two numbers?</p>"
        );
    });

    // it's also easy to check for the existence of elements
    it("has a buttons", () => {
        expect(wrapper.contains("button")).toBe(true);
    });

    it("renders correctly with different data", async () => {
        wrapper.setData({ x1: 5, x2: 10 });
        await wrapper.vm.$nextTick();
        expect(wrapper.text()).toContain("10");
    });

    it("button click without correct sum", () => {
        expect(wrapper.vm.message).toBe("");
        const button = wrapper.find("button");
        button.trigger("click");
        expect(wrapper.vm.message).toBe("TRY AGAIN");
    });

    it("button click with correct sum", () => {
        wrapper.setData({ guess: "15" });
        const button = wrapper.find("button");
        button.trigger("click");
        expect(wrapper.vm.message).toBe("SUCCESS!");
    });

    it('renders correctly', () => {
        const wrapper = mount(App, {
            data() {
                return {
                    x1: 37,
                    x2: 100
                }
            }
        })
        expect(wrapper.element).toMatchSnapshot()
    })

    it('test message', () => {
        const wrapper = mount(App);
        wrapper.vm.check();
        expect(wrapper.vm.nvcuong1.name).toBe('a');
    });
});