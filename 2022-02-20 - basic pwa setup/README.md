# Basic PWA setup with caching  
   
Source:  
* https://www.youtube.com/watch?v=sFsRylCQblw
* https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers

Description:  
Small HTML Site that can be installed as a PWA.  
Basic manifest, html, script & service worker files.  
Service worker is caching files on installation.  

Good to know:  
Lighthouse in chrome dev tools shows, if a site is ready set up to be installed as a PWA.

Workbox Required:  
* Site: https://developers.google.com/web/tools/workbox/modules/workbox-sw
* cdn: importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');
  
Create Icons for manifest file:
* npx pwa-asset-generator logo.png icons
