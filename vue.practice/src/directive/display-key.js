import { checkPermission } from './utils/permission.js'
export default {
    inserted(el, binding) {
        let displayKey = binding.value;
        if (displayKey) {
            const hasPermission = checkPermission(displayKey);
            if (!hasPermission) {
                el.parentNode && el.parentNode.removeChild(el);
            }
        } else {
            // 抛出异常
            throw new Error(`You need to set a directive and add permission values.Such as: v-display-key ="'2'"`)
        }
    }
}