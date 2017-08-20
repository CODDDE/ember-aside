import Ember from 'ember';
import layout from '../templates/components/aside-link-to';

const {
  get,
  LinkComponent,
} = Ember;

export default LinkComponent.extend(
  {
    layout,
    
    close() {},
    
    click() {
      get(this, "close")();
    },
  }
);

