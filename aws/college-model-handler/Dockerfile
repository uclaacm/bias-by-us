FROM scratch

ADD 4d680346180109b7447621cee70278bb1951650daae0e3993c725ec846279ce4.tar.xz /
ADD 6a7447333f322f24805d73b79151fc0eab978a2eecd4f11150852ede48acb63f.tar.xz /
ADD 6a78095613dc40fb8a316fa5eb5b6fdac5a701a25fabec0218d3d79a58e85c11.tar.xz /
ADD bf0727a4e62ad22b61aefb33b2733aae8d08ec931ee9fda968aca355b87832a6.tar.xz /
ADD cd9f099e0bae3cf14cee8cc9b2c870419693533295389e46684759aa5da69ece.tar.xz /
ADD feb83fe6341edb359568a89833578f650e8428305bc5e2d3589e76e803fe6128.tar.xz /

ENV LANG=en_US.UTF-8
ENV TZ=:/etc/localtime
ENV PATH=/var/lang/bin:/usr/local/bin:/usr/bin/:/bin:/opt/bin
ENV LD_LIBRARY_PATH=/var/lang/lib:/lib64:/usr/lib64:/var/runtime:/var/runtime/lib:/var/task:/var/task/lib:/opt/lib
ENV LAMBDA_TASK_ROOT=/var/task
ENV LAMBDA_RUNTIME_DIR=/var/runtime

WORKDIR /var/task

ENTRYPOINT ["/lambda-entrypoint.sh"]