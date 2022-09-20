class UnitTestHelpers {
    constructor(wrapper, expect) {
      this.wrapper = wrapper
      this.expect = expect
    }
  /**
   * Test xem có hiện thị triên giao diện không
   * @param {*} text  text cần test hiển thị
   * @param {*} selector element muốn test
   */
    textContainInDOM(text, selector) {
      let wrap = selector ? this.wrapper.find(selector) : this.wrapper
      this.expect(wrap.html()).toContain(text)
    }
    textNotInDOM(text, selector) {
      let wrap = selector ? this.wrapper.find(selector) : this.wrapper
      this.expect(wrap.html()).not.toContain(text)

    }
    /**
     * gắn giá trị text vào input trong DOM
     * @param {*} text 
     * @param {*} input element input có trong DOM
     */
    triggerTextToInput(text, input) {
      let node = this.find(input)
      node.element.value = text
      node.trigger('input')
    }
    /**
     * trigger sự kiện click
     * @param {*} selector 
     */
     triggerClick(selector) {
      this.wrapper.find(selector).trigger('click')
    }
    /**
     * check input có đúng giá trị không
     * @param {} text 
     * @param {*} selector 
     */
    inputValueIs(text, selector) {
      this.expect(this.find(selector).element.value).toBe(text)
    }
    inputValueIsNot(text, selector) {
      this.expect(this.find(selector).element.value).not.toBe(text)
    }
    /**
     * Check DOM có element là selector không
     * @param {*} selector 
     */
    domHas(selector) {
      this.expect(this.wrapper.contains(selector)).toBe(true)
    }
    domHasNot(selector) {
      this.expect(this.wrapper.contains(selector)).toBe(false)
    }
    /**
     * Check DOM có số element đúng không (kiểm tra số phần tử được render chẳng hạn)
     * @param {*} selector 
     * @param {*} length 
     */
    domHasLength(selector, length) {
      this.expect(this.wrapper.findAll(selector).length).toBe(length)
    }
    /**
     * test v-show
     * @param {} selector 
     */
    isVisible(selector) {
      this.expect(this.find(selector).element.style.display).not.toEqual('none')
    }
    isHidden(selector) {
      this.expect(this.find(selector).element.style.display).toEqual('none')
    }
    /**
     * Tìm selector trên DOM
     * @param {} selector 
     * @returns 
     */
    find(selector) {
      return this.wrapper.find(selector)
    }
    /**
     * Check selector có attribute truyền vào hay không?
     * @param {*} selector 
     * @param {*} attribute 
     * @returns 
     */
    hasAttribute(selector, attribute) {
      return this.expect(this.find(selector).attributes()[attribute]).toBeTruthy()
    }


    //#region -----------TEST HÀM/ METHOD------------
    toHaveBeenCalled(func){
      this.expect(func).toHaveBeenCalled();

    }
    //#endregion
  }
  
  export default UnitTestHelpers