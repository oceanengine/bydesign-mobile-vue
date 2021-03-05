#!/bin/bash

DIR=`pwd`
OUTPUT="$DIR/output"
VERSION=`node build/version.js`
RESOURCE="$DIR/output_resource/$VERSION"


mkdir -p $OUTPUT
mkdir -p $RESOURCE

node -v

# node_modules会在docker外挂载， package.json更新时有问题，所以每次删除
rm -rf /opt/tiger/compile_path/src/code.byted.org/ad/byted-ui-m/node_modules

# 项目启动
npm config set registry=http://bnpm.byted.org
npm i

# build
npm run build

# 上传静态资源
mv lib/bui.* lib/*.css $RESOURCE
