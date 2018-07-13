---
title: Behind the curtains - Gatsby, React, Styled Components
date: "2018-07-13"
featuredImage: './code_and_coffee.jpg'
---

This is my obligatory article about how this blog was made 🙄. But really, I think it's build in a very modern way and an interesting concept! 
  
<!-- end -->

In the past couple of months I've been looking into a wild variety of blog / CMS solutions: WordPress, Drupal, Ghost, Typo3.. 

None of them really suited my needs. I wanted it to have a small footprint, easy to use, not being to bloated with stuff I'll never need, modular, and I wanted to integrate some of the things I've been learning about in the past couple of months, like React, Styled Components etc. 

Last week I was fucking around on the internet, and suddenly I ran into [this GIT repository](https://github.com/RyanFitzgerald/devblog) from [Ryan Fitzgerald](https://twitter.com/ryanafitzgerald). It was like finding the holy grail!

I immediately cloned his repository, and upon opening the codebase I knew that this was _the one_.

## Installing DevBlog

If you'd also like to play around with this blog template, here's how to do it: 

### 1. First install Gatsby CLI

```bash
npm i -g gatsby cli
```

### 2. Clone the DevBlog repository

```bash
cd path/to/projects-folder
git clone https://github.com/RyanFitzgerald/devblog.git
```

### 3. Run 
Go to the folder where the DevBlog is cloned, and run:
```bash
gatsby develop
```
It will now build your project, and start a dev server on ```http://localhost:8000```. 

Now you can play around with the ```config.js``` where you can enter your credentials and so forth.

What I noticed is that every time I edit a file, I have to run the command 
```bash
gatsby build
``` 
again to see my changes take place. I'm not sure if this is a configuration issue, or a bug which consists in GatsbyJS. However, it's not a big deal and I can live with it. 

## Deploying DevBlog

Once you're content with your changes, you can very easily deploy your blog on Netlify. Netlify offers free hosting for 125k requests/month, and provides 100 hours run time/month. It's very easy to deploy your site, and will automatically rebuild the blog when you push changes to your master branch. 

To get started, just press this button: 

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/RyanFitzgerald/devblog)

It will ask you to connect to your Github account, some configurations and *boom!* You're done!

(Photo by Artem Sapegin on Unsplash)
