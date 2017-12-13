FROM naamio/naamio:0.0

LABEL authors="Phil J. Łaszkowicz <phil@fillip.pro>"

RUN mkdir -p /usr/share/naamio/pomo

COPY .build /usr/share/naamio/pomo

ENV NAAMIO_SOURCE=pomo
ENV NAAMIO_TEMPLATES=pomo/stencils/
ENV NAAMIO_PORT=8090

EXPOSE ${NAAMIO_PORT}

WORKDIR /usr/share/naamio/

ENTRYPOINT ["/usr/share/naamio/Naamio"]
