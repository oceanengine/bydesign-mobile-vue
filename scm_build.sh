#!/bin/bash

DIR=`pwd`
OUTPUT="$DIR/output"
RESOURCE="$DIR/output_resource"

VERSION=`node build/version.js`

mkdir -p $RESOURCE
mkdir -p $OUTPUT

node -v

# node_modules会在docker外挂载， package.json更新时有问题，所以每次删除
rm -rf /opt/tiger/compile_path/src/code.byted.org/ad/byted-ui-m/node_modules

# 项目启动
npm config set registry=http://bnpm.byted.org
npm i

# build
npm run build:docs

# 上传静态资源
mv docs/dist/static $RESOURCE

cd $OUTPUT
mkdir mobile
cd ../
mv docs/dist/*.html $OUTPUT/mobile
