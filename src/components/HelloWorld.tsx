import style from './HelloWorld.module.css';
import { createComponent, PropType } from '@vue/composition-api';

export default createComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
    // Note that this prop must not start with on, otherwise Babel plugin will catch it and process 
    // it as an event listener and store it to setupContext.listeners.
    // For type-safety, we should use function props instead of vue listeners. The prefix "event" is
    // for consistence.
    eventClick: {
      type: (null as unknown) as PropType<(event: MouseEvent) => void>,
    }
  },
  setup(props) {
    return () => (
      props.msg
    );
  },
});
