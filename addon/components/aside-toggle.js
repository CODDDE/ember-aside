import Ember from "ember";

const {
    Component,
} = Ember;
import layout from '../templates/components/aside-toggle';

export default Component.extend(
  {
    layout,

    classNameBindings: ["side"],
    classNames: ["side-menu-toggle"],

    side: "left",

    /**
     * Closure action meant ot be paired to `aside-menu` toggle action
     */
    click() {},
  }
);
