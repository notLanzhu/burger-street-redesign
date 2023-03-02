# My take on a redesign for local burger chain
As of current time of this repository's creation, the current Burger Street website needed a face-lift. My problems with their site:
- The site is NOT mobile friendly.
- Design feels outdated in my opinion compared to the usual restaurant web page.
- Their loading time on slow 3g was timely, which could drive away impatient customers.
- Wanted to start a fun project to see if I could create an improved version in terms of performance, and work on design skill along the side.
## For creation I decided to use:
- Vite + Yarn
- React
- Libraries: (GSAP, react-scroll, react-router-dom)
- Tailwindcss
## Problems and Solutions I ran into my first frontend project
**The main issue I had was *"How can I make it so that the new webpage shows improvement in loading speeds for slower internet?"* <br/>**
I learned about a method called "code splitting" which very much helped only load what the page NEEDS, instead of loading every component at once. This combined with lazy loading of images helped the production build of the redesigned version perform in an optimised manner compared to the offical site.
![image](https://user-images.githubusercontent.com/125929776/222319610-0254e203-6f41-482f-a031-971bab01d4f4.png)
To improve our lighthouse score even further, I could compress the images possibly, and rewrite some of the code and get rid of unnecessary writing.<br/>
**Did I learn a lot from this as a first project?**<br/>
Yes. Taking time to read Documentation for libraries/technologies you plan on using really does help solve your general problems. It was a very fun experience to rummage through their Documentation and take the time to understand why what I had done originally was not working, and proceed to work on a fix for the situation.

## Screenshots uploaded show loading times of both webpages in Dev Tools Slow 3G mode.
> ### Loading time of redesigned home page files
> ![image](https://user-images.githubusercontent.com/125929776/222313555-2b984111-0c46-43c3-a72a-f47427abf6bf.png)

> ### Loading time for their official site files
> ![image](https://user-images.githubusercontent.com/125929776/222313446-16b2d831-3b4d-48b0-9b26-870d6b6b79d4.png)
> ![image](https://user-images.githubusercontent.com/125929776/222313491-aecc059c-402e-480d-9205-19b64e484dc1.png)

# TLDR:
Wanted to redesign and improve a website of a local burger chain I enjoy. I was able to learn much from taking on this project as my first.
<br/>
I think design-wise, it could use work around the edges, especially in the hero section. But for my first website, I am slightly satisfied with the results.