import { VueConstructor } from 'vue';
import {Locale} from './locale';
import './plugin';

declare namespace BUI {
  function install(V: VueConstructor): void;
  const Locale: Locale;
  const Icon: VueConstructor;
  const Button: VueConstructor;
  const Layout: VueConstructor;
  const Input: VueConstructor;
  const InputNumber: VueConstructor;
  const Textarea: VueConstructor;
  const Checkbox: VueConstructor;
  const CheckboxButton: VueConstructor;
  const CheckboxGroup: VueConstructor;
  const Row: VueConstructor;
  const Col: VueConstructor;
  const Form: VueConstructor;
  const FormItem: VueConstructor;
  const Popover: VueConstructor;
  const Modal: VueConstructor;
  const Radio: VueConstructor;
  const RadioGroup: VueConstructor;
  const RadioButton: VueConstructor;
  const Upload: VueConstructor;
  const Navheader: VueConstructor;
  const Sidebar: VueConstructor;
  const Table: VueConstructor;
  const Message: VueConstructor;
  const Collapse: VueConstructor;
  const Pagination: VueConstructor;
  const Popper: VueConstructor;
  const Select: VueConstructor;
  const Tooltip: VueConstructor;
  const CreativeImage: VueConstructor;
  const Breadcrumb: VueConstructor;
  const Tabs: VueConstructor;
  const Tree: VueConstructor;
  const Loading: VueConstructor;
  const Switch: VueConstructor;
  const DatePicker: VueConstructor;
  const RangePicker: VueConstructor;
  const DatePickerNew: VueConstructor;
  const TimePicker: VueConstructor;
  const Progress: VueConstructor;
  // const Scrollbar: VueConstructor;
  const Clickoutside: VueConstructor;
  const Slider: VueConstructor;
  const Cropper: VueConstructor;
  const ColorPicker: VueConstructor;
  const Alert: VueConstructor;
  const Cascader: VueConstructor;
  const Rate: VueConstructor;
  const Steps: VueConstructor;
  const Tag: VueConstructor;
  const Drawer: VueConstructor;
  const ImgPreview: VueConstructor;
  const Avatar: VueConstructor;
  const Badge: VueConstructor;
  const AutoComplete: VueConstructor;
  const Card: VueConstructor;
  const Carousel: VueConstructor;
  const Dropdown: VueConstructor;
  const Link: VueConstructor;
  const Menu: VueConstructor;
  const Notification: VueConstructor;
  const SelectPanel: VueConstructor;
}

export default BUI;
export {
  Locale,
};

