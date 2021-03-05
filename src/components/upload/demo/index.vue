<template>
  <div class="demo upload">
    <byted-header fixed @click-left="$router.back()">
      <span class="demo-header-icon"
        ><img
          class="img-icon"
          src="https://s2.pstatp.com/cdn/expire-1-d/byted-creative-app/static/ByDesign-logo.svg"
      /></span>
    </byted-header>
    <demo-title :title="t('name')">
      <byted-icon-module-upload theme="outline" size="20" fill="#333" />
    </demo-title>

    <demo-cell :title="t('default')">
      <byted-upload
        :action="URL"
        :before-upload="beforeUpload"
        :on-success="onSuccess"
        :on-error="onError"
        accept="image/png,image/jpeg,image/jpg"
      >
        <div class="byted-upload__upload-icon-box upload-box">
          <div v-if="showUpload && !isUploading" class="before-upload-section">
            <slot name="before-upload">
              <byted-icon-plus theme="outline" size="24" fill="#999" style="line-height: 0" />
            </slot>
          </div>
          <div v-if="isUploading" class="uploading-section">
            <slot name="uploading">
              <byted-loading />
            </slot>
          </div>
          <div
            v-if="!showUpload && !isUploading"
            class="after-upload-section"
            @click.stop="ShowPreviewImage()"
          >
            <slot name="after-upload">
              <img class="upload-img" :src="uploadedImg1" />
            </slot>
          </div>
        </div>
      </byted-upload>
    </demo-cell>

    <!-- <demo-cell :title="t('diffStatus')">
        <div class="bui-type-box">
          <byted-upload
            class="upload-image"
            :action="URL"
            :before-upload="beforeUpload2"
            :on-success="onSuccess2"
            :on-error="onError2"
            :headers="headers"
            name="Filedata"
            accept="image/jpeg,image/jpg,image/png"
          >
            <div class="image-upload-control">
              <div 
                v-if="showUpload && !uploading"
                class="before-upload-section"
              >
                <slot name="before-upload">
                  <img 
                    class="upload-icon" 
                    :src="beforeUploadImg"
                  >
                  <p class="upload-text">
                    上传图片
                  </p>
                </slot>
              </div>
              <div
                v-else-if="uploading" 
                class="uploading-section" 
                @click.stop="handleloading"
              >
                <slot name="uploading">
                  <img 
                    class="uploading-icon" 
                    src="//sf1-ttcdn-tos.pstatp.com/obj/ttfe/adfe/ad_app_lite/uploading_1583753506142.gif"
                  >
                  <p class="uploading-text">
                    上传中...
                  </p>
                </slot>
              </div>
              <div 
                v-else
                class="after-upload-section"
                @click.stop="ShowPreviewImage()"
              >
                <slot name="after-upload">
                  <img 
                    class="upload-img"
                    :src="uploadedImg"
                  >
                  <div 
                    class="delete-icon" 
                    @click.stop="handleDeleteImage()"
                  >
                    <img
                      class="img-del"
                      src="//sf1-ttcdn-tos.pstatp.com/obj/ttfe/adfe/ad_app_lite/lite-delete4_1581315530775.svg"
                    >
                  </div>
                </slot>
              </div>
            </div>
          </byted-upload>
        </div>
    </demo-cell> -->
  </div>
</template>
<script>
import { BytedIconModuleUpload, BytedIconPlus } from '@byte-design/vue-icons';
import demoTitle from '../../../../docs/site/components/DomeTitle';
import demoCell from '../../../../docs/site/components/DomeCell.vue';
export default {
  i18n: {
    'zh-CN': {
      name: '文件上传',
      default: '基础用法',
      diffStatus: '不同上传态展示',
    },
    'en-US': {
      name: 'upload',
      default: 'default',
      diffStatus: 'diff status of upload',
    },
  },
  components: {
    BytedIconModuleUpload,
    BytedIconPlus,
    demoTitle,
    demoCell,
  },
  data() {
    return {
      URL: 'https://www.mocky.io/v2/5185415ba171ea3a00704eed',
      isUploading: false,
      uploading: false,
      showUpload: true,
      beforeUploadImg:
        '//sf1-ttcdn-tos.pstatp.com/obj/ttfe/adfe/ad_app_lite/license_1582035285815.svg',
      uploadImgError: false,
      uploadedImg: '',
      uploadedImg1: '',
      headers: {
        'X-CSRFToken': 'text-csrftoken',
      },
    };
  },
  methods: {
    beforeUpload(file) {
      this.isUploading = true;
      let self = this;
      let size = file.size;
      if (size > 2 * 1024 * 1024) {
        // 如果大于2M
        console.log('图片过大，请上传低于2M的图片');
        return false;
      }
      // promise
      let promise = new Promise(function (resolve, reject) {
        let reader = new FileReader();
        reader.onload = function (e) {
          let data = e.target.result;
          self.uploadedImg1 = data;
          setTimeout(resolve, 2000);
        };
        // 以DataURL的形式读取文件:
        reader.readAsDataURL(file);
      });
      return promise;
    },
    onSuccess(data) {
      console.log(data);
      this.showUpload = false;
      console.log('图片上传成功');
      this.isUploading = false;
    },
    onError(error) {
      console.log('图片上传失败');
      this.isUploading = false;
    },
    beforeUpload2(file) {
      if (this.disabled) return false;
      this.uploading = true;
      let size = file.size;
      if (size > 10 * 1024 * 1024) {
        this.$toast({
          type: 'fail',
          duration: 3000,
          message: '请重新上传图片，仅支持10M以内的jpg 、 png、jpeg格式图片',
        });
        return false;
      }
      return true;
    },
    onSuccess2(res, file) {
      if (res && res.data) {
        if (res.data.url) {
          this.uploadedImg = res.data.url;
          this.uploading = false;
          this.showUpload = false;
          this.$toast({
            type: 'success',
            duration: 1000,
            message: '图片上传成功！',
          });
        } else {
          this.onError(res);
        }
      } else {
        this.onError(res);
      }
    },
    onError2(res) {
      this.uploading = false;
      this.showUpload = true;
      this.$toast({
        type: 'fail',
        duration: 1000,
        message: '图片上传失败',
      });
    },
    ShowPreviewImage() {
      if (this.disabled) return;
      console.log('预览大图');
    },
    handleloading() {
      this.$toast({
        type: 'info',
        duration: 3000,
        message: '上传中，请稍候',
      });
    },
    handleDeleteImage() {
      if (this.disabled) return;
      this.showUpload = true;
      this.uploadedImg = '';
    },
  },
};
</script>

<style lang="less">
.upload-image {
  width: 100%;
  height: 193px;
  background: #fff;
  & > div {
    width: 100%;
    height: 100%;
  }
}
.image-upload-control,
.before-upload-section,
.after-upload-section {
  width: 100%;
  height: 100%;
}
.upload-box {
  .uploading-section,
  .before-upload-section {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .upload-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.image-upload-control {
  .before-upload-section,
  .uploading-section {
    width: 100%;
    height: 100%;
    border: 2px dashed #e6e6e6;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    .upload-icon {
      display: block;
      width: 131px;
      height: 99px;
    }
    .uploading-icon {
      display: block;
      width: 130px;
      height: 82px;
    }
    .upload-text,
    .uploading-text {
      margin-top: 8px;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      color: #999;
    }
  }
  .after-upload-section {
    border: rem(1) solid #e6e6e6;
    border-radius: rem(8);
    position: relative;
    .upload-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .delete-icon {
      position: absolute;
      bottom: -1px;
      right: -1px;
      display: block;
      width: 20px;
      height: 20px;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 8px 0 8px 0;
      font-size: 0;
      .img-del {
        position: relative;
        width: 10px;
        height: 10px;
        top: 5px;
        left: 5px;
      }
    }
  }
  &.disabled {
    .after-upload-section {
      position: relative;
      &:after {
        content: '';
        display: block;
        position: absolute;
        left: rem(-1);
        right: rem(-1);
        top: rem(-1);
        bottom: rem(-1);
        background-color: rgba(255, 255, 255, 0.7);
      }
    }
  }
  &.error {
    .before-upload-section {
      border: rem(2) dashed #ff6767;
    }
    .after-upload-section {
      border: rem(1) solid #ff6767;
      .delete-icon {
        background-color: #ff6767;
      }
    }
  }
}
</style>
