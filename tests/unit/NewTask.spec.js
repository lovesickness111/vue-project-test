import { mount } from '@vue/test-utils'
import NewTask from '@/components/NewTask'

test('emits an event with count when clicked', () => {
  const wrapper = mount(NewTask)

  //Set tên task mới là : write unit test
  const input = wrapper.find('input');
  input.setValue("write unit test");
    //Check xem có event addNewTask không 
  expect(wrapper.emitted()).toHaveProperty('addNewTask');
  wrapper.find('button').trigger('click'); // lần đầu emit ra giá trị new task
  wrapper.find('button').trigger('click'); // Lần 2 để test xem đã clear text input chưa


  
  const addNewTask = wrapper.emitted('addNewTask');

  //Check xem có emit ra đúng task name
  console.log(wrapper.emitted());

  expect(addNewTask[0]).toEqual(['write unit test'])

  //Check xem sau khi thêm mới đã clear text input chưa
  expect(addNewTask[1]).toEqual([''])

  


})