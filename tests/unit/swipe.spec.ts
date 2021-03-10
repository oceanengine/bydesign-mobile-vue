import { mount, triggerDrag, later } from '../index';
import { Swipe as SwipeNative, SwipeItem as SwipeItemNative } from '@src';
const Swipe = SwipeNative as any;
const SwipeItem = SwipeItemNative as any;

const Component = {
  template: `
  <byted-swipe ref="swipe">
    <byted-swipe-item :style="style">0</byted-swipe-item>
    <byted-swipe-item :style="style">1</byted-swipe-item>
    <byted-swipe-item :style="style">2</byted-swipe-item>
    <byted-swipe-item :style="style">3</byted-swipe-item>
  </byted-swipe>
  `,
  props: {
    loop: {
      type: Boolean,
      default: false,
    },
    touchable: {
      type: Boolean,
      default: true,
    },
    autoplay: {
      type: Number,
      default: 0,
    },
    value: {
      type: Number,
      default: 0,
    },
    initialSwipe: {
      type: Number,
      default: 0,
    },
  },
  components: {
    'byted-swipe': Swipe,
    'byted-swipe-item': SwipeItem,
  },
  data() {
    return {
      style: {
        width: '100px',
        height: '100px',
      },
    };
  },
};

describe('swipe', () => {
  test('prev and next method', async () => {
    const wrapper = mount(Component);
    const { swipe } = wrapper.vm.$refs as any;
    await later();
    await swipe.next();
    await later();
    expect(swipe.active).toEqual(1);

    swipe.previous();
    await later();
    expect(swipe.active).toEqual(0);
  });
  test('initial swipe', async () => {
    const wrapper = mount(Component);
    const { swipe } = wrapper.vm.$refs as any;
    await later();
    expect(swipe.active).toEqual(0);
    wrapper.setProps({ initialSwipe: 2 });
    await later();
    // expect(swipe.active).toEqual(2);
  });

  test('untouchable', async () => {
    const wrapper = mount({
      template: `
        <byted-swipe :touchable="false" v-model="boundValue" ref="swipe"  @change="handleChange">
          <byted-swipe-item :style="style">0</byted-swipe-item>
          <byted-swipe-item :style="style">1</byted-swipe-item>
          <byted-swipe-item :style="style">2</byted-swipe-item>
          <byted-swipe-item :style="style">3</byted-swipe-item>
        </byted-swipe>
        `,
      components: {
        'byted-swipe': Swipe,
        'byted-swipe-item': SwipeItem,
      },
      data() {
        return {
          boundValue: 0,
          style: {
            width: '100px',
            height: '100px',
          },
        };
      },
      methods: {
        handleChange() {},
      },
    }) as any;
    await later();

    const { swipe } = wrapper.vm.$refs as any;
    const track = wrapper.find('.byted-swipe__track');
    await triggerDrag(track, -100, 0);

    await later();
    expect(swipe.active).toEqual(0);
  });

  test('loop', async () => {
    const wrapper = mount({
      template: `
        <byted-swipe v-model="boundValue" ref="swipe"  @change="handleChange">
          <byted-swipe-item>0</byted-swipe-item>
          <byted-swipe-item>1</byted-swipe-item>
          <byted-swipe-item>2</byted-swipe-item>
        </byted-swipe>
        `,
      components: {
        'byted-swipe': Swipe,
        'byted-swipe-item': SwipeItem,
      },
      data() {
        return {
          boundValue: 0,
        };
      },
      methods: {
        handleChange() {},
      },
    }) as any;
    await later();

    const { swipe } = wrapper.vm.$refs as any;
    const track = wrapper.find('.byted-swipe__track');

    triggerDrag(track, -100, 0);
    expect(swipe.active).toEqual(1);

    triggerDrag(track, -100, 0);
    expect(swipe.active).toEqual(2);

    triggerDrag(track, -100, 0);
    expect(swipe.active).toEqual(3);

    triggerDrag(track, -100, 0);
    expect(swipe.active).toEqual(1);

    triggerDrag(track, 100, 0);
    expect(swipe.active).toEqual(0);

    triggerDrag(track, 100, 0);
    expect(swipe.active).toEqual(-1);

    triggerDrag(track, 100, 0);
    expect(swipe.active).toEqual(1);
  });
});
