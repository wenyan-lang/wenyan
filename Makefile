all: ide cmdline
ide:
	cd tools; node make_ide.js;
cmdline:
	cd tools; node make_cmdline.js;
clean: 
	rm -f site/ide.html; rm -f build/*