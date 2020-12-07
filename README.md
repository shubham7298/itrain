# itrain


### To generate md file, Run:
> cd server
> wecode2md ../ivt/Clustering.pptx


### Install `reavel-md`:
> npm i -g reveal-md


### Run md to html site
>  reveal-md out.md

### Custom template
(Remember: we are inside `server` directory.)
> reveal-md out.md --css main.css --template custom.html

### to generate static site
> reveal-md out.md --css main.css --template custom.html --static
This generates a `_static` folder containing static website code.

