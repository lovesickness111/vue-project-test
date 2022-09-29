
import { mount } from "@vue/test-utils";
import HomeView from "@/views/HomeView";

// test('Ví dụ đơn giản về slot', () => {
//     const wrapper = mount(HomeView, {
//         slots: {
//             default: '10 task done'
//         }
//     })
//     console.log(wrapper.html())
//     // Test xem content có render ra không
//     expect(wrapper.html()).toContain('10 task done');

//     // Test xem tag main có contain text không
//     expect(wrapper.find('div#todo-app').text()).toContain('10 task done');
// })



test('Named Slots test', () => {
    const wrapper = mount(HomeView, {
        slots: {
            typeOfTask: '<div>Status</div>',
            taskDisplay: '<div>Count 5</div>'
        }
    })

    console.log(wrapper.html());

    expect(wrapper.html()).toContain('<div>Status</div>');
    expect(wrapper.html()).toContain('<div>Count 5</div>');
})



// test('Multiples slot test', () => {
//     const wrapper = mount(HomeView, {
//         slots: {
//             default: [
//                 '<div id="one">One</div>',
//                 '<div id="two">Two</div>'
//             ]
//         }
//     })

//     console.log(wrapper.html());
//     expect(wrapper.find('#one').exists()).toBe(true)
//     expect(wrapper.find('#two').exists()).toBe(true)
// })



// test('scoped slots', () => {
//     const wrapper = mount(HomeView, {
//         slots: {
//             scoped: `<template #scoped="params">{{ params.description}}</template>`
//         }
//     })

//     expect(wrapper.html()).toContain('one task selected');
// });