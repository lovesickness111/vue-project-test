import { mount } from "@vue/test-utils";
import App from '@/test-components/7.SnapShotTest/MathApp.vue';

jest.spyOn(axios, 'get').mockResolvedValue(function () { return true; });   

describe("App", () => {
    // Inspect the raw component options
    it("has data", () => {
        expect(typeof App.data).toBe("function");
    });
});

describe("Mounted App", () => {
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
        expect(wrapper.vm.nvcuong1.name).toBe('nvcuong1');
    });
});