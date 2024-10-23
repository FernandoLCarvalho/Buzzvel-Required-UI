# Buzzvel-Required-UI
Repository for a Figma prototype created by Buzzvel FE that I'll need to reproduce using NextJs


    So the project consist in 3 main layers. The first one is a web homepage condensed into 1 single page with many components such as header, 5 sections, a container and then the footer. The second is a mobile version of the web homepage, which has the exactly same number of components, which are the header, 6 cols refering to the 5 sections and the container and last the footer. The last layer is a simple section that I will write as a single page that can be reach by clicking anywhere in the main page that have a button with the phrase "Request a Quote" writen. 

    My approach is to create the Home Page in the page.tsx inside /src/app and the section 1 page inside /src/app/pages;

    The Home Page is divided into several componentes that can be found inside /src/app/components. They are all imported inside /src/app/page.tsx; 

    There is a component that evolves all the pages that will be rendered in this project, which is /src/app/layout.tsx. It serves, as its names already says, to create and control the layout of everything that will be rendered by the app. 