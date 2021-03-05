/**
 * 声明 BUI 挂在 Vue 上的插件：
 *   1. this.$message
 *   2. this.$modal
 */
import Vue from 'vue';

/**
 * BUI Message plugin
 */

interface BUIMessageFunction {
  (message: string, duration?: number): void;
}

interface BUIMessage {
  (message: string, type?: 'success' | 'error' | 'warning' | 'info', duration?: number): void;
  success: BUIMessageFunction;
  error: BUIMessageFunction;
  warning: BUIMessageFunction;
  info: BUIMessageFunction;
}

/**
 * BUI Modal plugin
 */
interface BUIModalConfigContent {
  (h?: any) : any;
}

interface BUIModalConfig {
  title: string;
  content: string | BUIModalConfigContent;
  okText?: string;
  cancelText?: string;
  onOk?: () => void;
  onCancel?: () => void;
  size?: 'small' | 'normal' | 'large';
}

interface BUIModalFunction {
  (config: BUIModalConfig): void;
}

interface BUIModal {
  info: BUIModalFunction;
  success: BUIModalFunction;
  error: BUIModalFunction;
  warning: BUIModalFunction;
  confirm: BUIModalFunction;
}

/**
 * BUI extended Vue plugins
 */

declare module "vue/types/vue" {
  interface Vue {
    readonly $message: BUIMessage;
    readonly $modal: BUIModal;
  }
}
