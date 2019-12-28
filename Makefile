ALLSRC = $(wildcard lib/*.js) $(wildcard src/*.js)
ALLTOOL = $(wildcard tools/*.js)

all: ide site
.PHONY: ide site clean

ide: site/ide.html
site: site/index.html

site/ide.html: ${ALLSRC} ${ALLTOOL}
	node tools/make_ide.js;

site/index.html: ${ALLSRC} ${ALLTOOL}
	node tools/make_site.js > site/index.html;

clean: 
	rm -f site/ide.html; rm -f build/*
