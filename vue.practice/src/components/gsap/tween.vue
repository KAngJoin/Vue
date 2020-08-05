<!--
 * @Descripttion: 数字补间动画 
 * @version: v1.0
 * @Author: Duk
 * @Date: 2020-07-13 22:50:04
 * @LastEditors: Duk
 * @LastEditTime: 2020-07-22 23:15:25
--> 
<template>
  <div>
    <span>{{animatedNumber}}</span>
    <br />
    <input v-model.number="number" type="number" step="20" />
  </div>
</template>
<script>
import { debounce } from "lodash";
export default {
  computed: {
    animatedNumber: function() {
      return this.auxNum.toFixed(0);
    }
  },
  watch: {
    number(newValue) {
      try {
        this.tween(this.$data, { auxNum: newValue || 0 });
      } catch (err) {
        console.log(err);
      }
    }
  },
  data() {
    return {
      auxNum: 1, // 显示值，旧值
      number: 1 // 输入值，新值
    };
  },
  mounted() {
    // let res = this.finbonacci(15);
    // console.log(res);
  },
  methods: {
    _calculate(abs, time, delay) {
      if (delay > time) {
        return {
          delay: time,
          step: abs
        };
      }
      let count = Math.ceil(time / delay); // count 多少次
      console.log(abs, time, delay, count);
      // 初始一个delay值，计算可以执行count次，如果差值ABS >= 次数count，则满足
      // 否则改变delay值，重复计算，直到满足为止。
      if (abs >= count) {
        let step = Math.ceil(abs / count);
        return {
          delay: delay,
          step: step
        };
      } else {
        delay += 10;
        return this._calculate(abs, time, delay);
      }
    },
    /**
     * @name: 数字补间动画
     * @test: test number
     * @msg: 输入整数，在一定时间内变化多次（新旧值之间的数值个数），最后将输入值赋给历史值（显示的值）。
     * @param {type}
     * @return: undefined
     */
    tween: debounce(function(targets = {}, vars = {}, duration = 0.5) {
      const KEYS = Object.keys(vars);
      if (KEYS.length === 0)
        throw Error("the second parameter object must have a tween property");
      const AUX_KEY = KEYS[0], // 中间key，用于辅助改变
        INPUT = vars[AUX_KEY], // 输入值（新）
        HIS = targets[AUX_KEY], // 显示值（旧）
        DIFF = INPUT - HIS, // 差值
        ABS = Math.abs(DIFF); // 二者之间存在多少个数字（补间数）
      if (ABS > 1) {
        const DELAY = duration * 1000; // 延时阈值
        let { delay, step } = this._calculate(ABS, DELAY, 30);
        let ended = false; // 阻止超过DELAY

        new Promise(resove => {
          // 大到小 INPUT < HIS 等价 DIFF < 0
          if (DIFF < 0) {
            let max = Math.max(INPUT, HIS);
            let MaxToMin = setInterval(function() {
              max -= step;
              if (ended || max <= INPUT) {
                clearInterval(MaxToMin);
                MaxToMin = null;
              } else {
                targets[AUX_KEY] = max;
              }
            }, delay);
          }
          // 小到大 INPUT > HIS 等价 DIFF > 0
          else {
            let min = Math.min(INPUT, HIS);
            let MinToMax = setInterval(function() {
              min += step;
              if (ended || min >= INPUT) {
                clearInterval(MinToMax);
                MinToMax = null;
              } else {
                targets[AUX_KEY] = min;
              }
            }, delay);
          }

          let timer = setTimeout(function() {
            ended = true;
            resove();
            clearTimeout(timer);
            timer = null;
          }, DELAY);
        }).then(() => {
          // 补间结束后替换为输入的值
          targets[AUX_KEY] = INPUT;
        });
      }
      // 直接替换为输入的值
      else {
        targets[AUX_KEY] = INPUT;
      }
    }, 300)
  }
};
</script>
<style>
</style>
