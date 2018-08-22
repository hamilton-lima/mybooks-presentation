FROM golang
COPY . $GOPATH/src/books/
WORKDIR $GOPATH/src/books/
RUN go get -d -v

RUN go build -o /go/bin/books
RUN chmod +x /go/bin/books

EXPOSE 8080
ENTRYPOINT ["/go/bin/books"]
