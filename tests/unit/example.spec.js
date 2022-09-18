import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import UnitTestHelpers from '@/common/UnitTestHelpers'

// Nhóm các test case
describe('HelloWorld.vue', () => {

  // Mô tả test case và chi tiết ntn
  it('renders props.msg when passed', () => {
    // set up
    const msg = 'new message'
    // act
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    let h = new UnitTestHelpers(wrapper, expect)
    // assert 
    h.see('new message', ".hello");
  })


})
