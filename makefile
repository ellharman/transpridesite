# makefile
all: tailwindcss eleventy

tailwindcss:
	npx tailwindcss -i ./src/styles/style.css -o ./src/styles/style.out.css --watch

eleventy:
	npx @11ty/eleventy --input=./src --serve
