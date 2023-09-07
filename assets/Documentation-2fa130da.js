import{_ as s,c as i,d as o,h as t,p as n,l as r,e}from"./index-69e5a07b.js";const d={},p=a=>(n("data-v-54190f0a"),a=a(),r(),a),l={class:"card"},c=t('<h3 data-v-54190f0a>Documentation</h3><p class="bg-primary border-round p-3" data-v-54190f0a>This page covers the Vite version, for Nuxt 3 visit the <a href="https://github.com/primefaces/sakai-nuxt" class="font-bold bg-primary hover:underline" data-v-54190f0a>sakai-nuxt</a> repository instead.</p><h5 data-v-54190f0a>Getting Started</h5><p data-v-54190f0a> Sakai is an application template for Vue based on the <a href="https://github.com/vuejs/create-vue" class="font-medium text-primary hover:underline" data-v-54190f0a>create-vue</a>, the recommended way to start a <strong data-v-54190f0a>Vite-powered</strong> Vue projects. To get started, clone the <a href="https://github.com/primefaces/sakai-vue" class="font-medium text-primary hover:underline" data-v-54190f0a>repository</a> from GitHub and install the dependencies with npm or yarn. </p><pre class="app-code" data-v-54190f0a><code data-v-54190f0a> npm install </code></pre><p data-v-54190f0a>or</p><pre class="app-code" data-v-54190f0a><code data-v-54190f0a> yarn </code></pre><p data-v-54190f0a>Next step is running the application using the serve script and navigate to <i data-v-54190f0a>http://localhost:5173/</i> to view the application. That is it, you may now start with the development of your application using the Sakai template.</p><pre class="app-code" data-v-54190f0a><code data-v-54190f0a> npm run dev </code></pre><h5 data-v-54190f0a>Structure</h5><p data-v-54190f0a>Sakai consists of a couple folders, demos and layout have been separated so that you can easily remove what is not necessary for your application.</p><ul class="line-height-3" data-v-54190f0a><li data-v-54190f0a><span class="text-primary font-medium" data-v-54190f0a>src/layout</span>: Main layout files, needs to be present</li><li data-v-54190f0a><span class="text-primary font-medium" data-v-54190f0a>src/views</span>: Demo pages</li><li data-v-54190f0a><span class="text-primary font-medium" data-v-54190f0a>public/demo</span>: Assets used in demos</li><li data-v-54190f0a><span class="text-primary font-medium" data-v-54190f0a>public/layout</span>: Assets used in layout</li><li data-v-54190f0a><span class="text-primary font-medium" data-v-54190f0a>src/assets/demo</span>: Styles used in demos</li><li data-v-54190f0a><span class="text-primary font-medium" data-v-54190f0a>src/assets/layout</span>: SCSS files of the main layout</li></ul><h5 data-v-54190f0a>Menu</h5><p data-v-54190f0a>Main menu is defined at <span class="text-primary font-medium" data-v-54190f0a>src/layout/AppMenu.vue</span> file.</p><h5 data-v-54190f0a>Integration with Existing Vite Applications</h5><p data-v-54190f0a>Only the folders that are related to the layout needs to move in to your project. We&#39;ve created a short tutorial with details.</p>',16),f=p(()=>e("div",{class:"video-container"},[e("iframe",{className:"video",width:"560",height:"315",src:"https://www.youtube.com/embed/AHeSjJFR3ZE",frameborder:"0",allowfullscreen:""})],-1)),u=t(`<h5 data-v-54190f0a>PrimeVue Theme</h5><p data-v-54190f0a>Sakai theming is based on the PrimeVue theme being used. Default theme is <b data-v-54190f0a>lara-light-indigo</b>.</p><h5 data-v-54190f0a>SASS Variables</h5><p data-v-54190f0a>In case you&#39;d like to customize the main layout variables, open <b data-v-54190f0a>_variables.scss</b> file under src/layout folder. Saving the changes will be reflected instantly at your browser.</p><h6 data-v-54190f0a>src/layout/_variables.scss</h6><pre class="app-code" data-v-54190f0a>            /* General */
            <br data-v-54190f0a>
            $scale:14px; /* main font size */
            <br data-v-54190f0a>
            $borderRadius:12px; /* border radius of layout element e.g. card, sidebar */
            <br data-v-54190f0a>
            $transitionDuration:.2s; /* transition duration of layout elements e.g. sidebar, overlay menus */
        </pre>`,6),v=[c,f,u];function h(a,m){return i(),o("div",l,v)}const b=s(d,[["render",h],["__scopeId","data-v-54190f0a"]]);export{b as default};