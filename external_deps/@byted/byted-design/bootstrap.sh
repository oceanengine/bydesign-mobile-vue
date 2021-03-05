#!/bin/bash

mkdir -p /opt/tiger/toutiao/app/bui/logs/
/opt/tiger/toutiao/runtime/bin/nginxsbin/nginx-debian-8 -c /opt/tiger/toutiao/app/bui/nginx.conf -p /opt/tiger/toutiao/app/bui/ -g "daemon off; master_process on; pid /opt/tiger/toutiao/var/service/ad.fe.bui/nginx.pid;"