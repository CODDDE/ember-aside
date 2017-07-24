import Ember from 'ember';
import layout from '../templates/components/aside-backdrop';

const {
    Component,
    computed,
    String: { htmlSafe },
    get,
} = Ember;

export default Component.extend(
  {
    layout,

    progress: 0,

    attributeBindings: ["style"],
    classNames: ["content-backdrop"],

    style: computed("progress", function () {
        const progress = get(this, "progress");
        const opacity = progress / 100;
        const visibility = progress === 0 ? "hidden" : "visible";
        let transition = "none";

        if (progress === 100) {
            transition = "opacity 0.2s ease-out";
        } else if (progress === 0) {
            transition = "visibility 0s linear 0.2s, opacity 0.2s ease-out";
        }

        return htmlSafe(
            `opacity: ${opacity}; visibility: ${visibility}; transition: ${transition}`
        );
    }),

    /**
     * Clousure action meant to be paired with `aside-menu` close action
     */
    click() {},
  }
);
