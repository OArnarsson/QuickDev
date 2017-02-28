# QuickDev
This repo was made to be able to start experimental projects in no time.

Technology used:  
<a href="https://v4-alpha.getbootstrap.com/"><img src="http://codeplus.it/uploads/bootstrap.png" alt="Bootstrap 4" width="50" height="50"/></a>
<a href="http://gulpjs.com/"><img src="http://devstickers.com/assets/img/pro/tqac.png" alt="Gulp.js" width="50" height="50"/></a>
<a href="http://sass-lang.com/"><img src="http://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png" alt="Sass" width="50" height="50"/></a>
<a href="https://www.browsersync.io/"><img src="https://browsersync.io/brand-assets/logo-red.png" alt="Browsersync" width="50" height="50"/></a>
<a href="http://npmjs.com/"><img src="https://genesisui.com/img/logos/npm.png" alt="npm" width="50" height="50"/></a>


  
    
## How to use:
Fork or clone the repository.
- Navigate to ```~/QuickDev``` and run ```npm install``` in your terminal to make sure you have all necessary dependencies. 
- Now run ```gulp sync``` to start browsersync and the gulp wacher. 
- Your ```index.html``` file should now be available at [localhost:3000](http://localhost:3000).
- The files in ```~\QuickDev\src\scss``` are watched by gulp, when a file is changed it is automatically compiled from scss to normal css, located in the ```~\QuickDev\src\css\``` folder.
- Please note that the ```index.html``` file is not watched, so when you change your html, you must manually refresh your browser.
