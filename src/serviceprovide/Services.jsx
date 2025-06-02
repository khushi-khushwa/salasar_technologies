import React, { useState } from 'react'
import "./Services.css"
const Services = () => {
  const [isHovered, SetIsHovered] = useState(null);
   const [Hovered, SetHovered] = useState(null);
    const showIcons = isHovered ? 'show' : '';
     const showcontent = Hovered ? 'show' : '';
  const serviceData = [
    {
      title: "Web Development",
    shortText: "Contact Us",
    read:'Read More',
    fullText: "We craft modern, responsive websites and web apps that drive engagement and growth.",
    icon: (
      <svg fill="#0bcbe5" style={{ width: '2.4rem', height: '2.4rem' }} viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
        <path d="M63.421,2.583h-57c-2.209,0-3.838,1.544-3.838,3.753v57c0,2.209,2.629,3.247,4.838,3.247h56c2.209,0,3.162-1.038,3.162-3.247v-56C66.583,5.127,65.63,2.583,63.421,2.583z M62.583,6.583v8h-56v-8H62.583z M6.583,62.583v-46h56v46H6.583z"></path>
        
      </svg>
    ),
    },
     {
      title: "CRM",
     shortText: "Contact Us",
        read:'Read More',
    fullText: "Strengthen your customer relationships with custom CRM systems tailored to your business needs. ",
    icon: (
      <svg fill="#0bcbe5" version="1.1" style={{width: '2.4rem', height:'2.4rem'}} id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 496 496" xml:space="preserve" stroke="#0bcbe5"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M456,80h-48V68.688L339.312,0H88v80H40C17.944,80,0,97.944,0,120v288c0,22.056,17.944,40,40,40h104v32h-32v16h272v-16 h-32v-32h104c22.056,0,40-17.944,40-40V120C496,97.944,478.056,80,456,80z M344,27.312L380.688,64H344V27.312z M360,80v112H136 V48h192v32H360z M104,16h224v16H120v176h256V80h16v272H104V16z M336,480H160v-32h176V480z M480,408c0,13.232-10.768,24-24,24H40 c-13.232,0-24-10.768-24-24v-8h464V408z M480,384H16V120c0-13.232,10.768-24,24-24h48v272h320V96h48c13.232,0,24,10.768,24,24 V384z"></path> <path d="M248,64c-30.872,0-56,25.12-56,56s25.128,56,56,56s56-25.12,56-56S278.872,64,248,64z M248,160 c-22.056,0-40-17.944-40-40c0-22.056,17.944-40,40-40c22.056,0,40,17.944,40,40C288,142.056,270.056,160,248,160z"></path> <rect x="120" y="224" width="256" height="16"></rect> <rect x="120" y="256" width="256" height="16"></rect> <rect x="120" y="288" width="120" height="16"></rect> <rect x="256" y="288" width="120" height="16"></rect> <rect x="120" y="320" width="120" height="16"></rect> <rect x="256" y="320" width="120" height="16"></rect> </g> </g> </g> </g></svg>
                 
    ),
    },
     {
      title: "Video Editing",
      shortText: "Contact Us",
         read:'Read More',
    fullText: "Create videos that engage and convert. Our video editing team delivers polished, high-quality content for branding, advertising, ",
    icon: (
      <svg fill="#0bcbe5"style ={{height: '2.4rem', width:'2.4rem'}} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 491.402 491.402" xml:space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokelinecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M490.86,113.163l-0.8-6.7l-6.48-1.91c-85.26-25.11-117.45-57.86-117.73-58.155l-7.42-7.785l-7.44,7.75 c-0.244,0.252-19.177,19.418-66.048,39.646c-27.738-14.573-58.841-22.341-90.382-22.341C87.28,63.668,0,150.948,0,258.228 s87.28,194.56,194.56,194.56c88.252,0,164.666-58.795,187.629-143.468C504.841,244.012,491.022,114.528,490.86,113.163z M137.213,94.055c-11.909,13.92-22.154,32.032-30.089,53.439c-9.673-5.644-18.826-12.245-27.375-19.779 C96.407,113.043,115.847,101.542,137.213,94.055z M65.207,142.141c10.984,9.818,22.827,18.354,35.475,25.346 c-6.778,24.136-10.82,51.385-11.609,80.502H20.999C23.377,207.407,39.647,170.592,65.207,142.141z M20.999,268.468h68.074 c0.785,28.963,4.795,56.071,11.509,80.112c-12.696,7.029-24.582,15.611-35.599,25.488C39.55,345.652,23.37,308.932,20.999,268.468 z M79.501,388.517c8.578-7.587,17.764-14.235,27.477-19.916c7.954,21.569,18.256,39.801,30.235,53.801 C115.739,414.877,96.215,403.293,79.501,388.517z M184.32,430.855c-23.844-6.141-44.951-33.284-58.668-71.8 c18.422-7.946,38.209-12.554,58.668-13.738V430.855z M184.32,324.837c-22.561,1.167-44.444,5.972-64.832,14.496 c-5.711-21.492-9.182-45.562-9.945-70.864h74.777V324.837z M184.32,247.988h-74.777c0.768-25.457,4.27-49.677,10.042-71.269 c20.36,8.5,42.211,13.285,64.735,14.451V247.988z M184.32,170.69c-20.406-1.181-40.145-5.763-58.526-13.671 c13.72-38.311,34.761-65.297,58.526-71.417V170.69z M258.513,96.325c-1.232,0.436-2.499,0.869-3.758,1.302 c-0.999-1.264-1.982-2.577-3.001-3.773C254.019,94.642,256.281,95.445,258.513,96.325z M204.8,85.606 c11.486,2.964,21.261,10.417,28.958,18.78c-0.186,0.055-0.351,0.112-0.538,0.167l-6.48,1.91l-0.8,6.7 c-0.068,0.568-2.486,23.376,3.519,54.481c-8.111,1.649-16.348,2.737-24.659,3.22V85.606z M204.8,191.343 c9.936-0.518,19.784-1.793,29.472-3.801c5.611,19.231,14.688,40.203,29.129,60.446H204.8V191.343z M204.8,268.468h74.806 c-0.747,25.444-4.243,49.452-9.886,70.897c-20.41-8.546-42.322-13.359-64.919-14.528V268.468z M204.8,430.877v-85.56 c20.553,1.188,40.424,5.836,58.913,13.845C250.027,397.858,228.818,424.807,204.8,430.877z M251.094,422.918 c12.195-14.1,22.687-32.609,30.811-54.464c9.886,5.761,19.224,12.529,27.934,20.262 C292.796,403.76,272.899,415.472,251.094,422.918z M324.392,374.304c-11.146-10.031-23.181-18.745-36.053-25.851 c5.399-19.12,9.173-40.081,10.878-62.411c15.134,12.298,33.29,23.508,55.173,32.811l2.824,1.198 C349.542,340.346,338.374,358.661,324.392,374.304z M358.4,298.258c-110.28-49.215-113.76-149.275-112.6-176.105 c64.29-19.84,98.69-43.595,112.6-54.995c13.9,11.395,48.29,35.14,112.53,54.97C471.8,148.708,467.54,249.498,358.4,298.258z"></path> </g> </g> <g> <g> <path d="M432.22,141.408c-25.82-9.65-48.84-20.7-68.42-32.84l-5.4-3.345l-5.4,3.345c-19.55,12.125-42.57,23.17-68.4,32.825 l-7.77,2.905l1.23,8.21c4.92,32.65,21.96,78.015,75.22,108.725l5.12,2.95l5.11-2.95c53.3-30.72,70.34-76.075,75.26-108.71 l1.23-8.21L432.22,141.408z M358.4,240.413c-38.14-23.97-53.09-56.785-58.63-82.905c21.61-8.495,41.27-17.97,58.63-28.26 c17.38,10.3,37.05,19.785,58.66,28.275C411.52,183.633,396.57,216.433,358.4,240.413z"></path> </g> </g> </g></svg>
                  
    ),
    },
     {
      title: "SEO",
      shortText: "Contact Us",
         read:'Read More',
    fullText: "Rank higher, reach more. Our SEO strategies help you increase organic traffic, visibility, and lead generation.",
    icon: (
     <svg   height="2.6rem" width="2.6rem" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.00 512.00" xml:space="preserve" fill="#0bcbe5" stroke="#0bcbe5" strokeWidth="0.00512"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokelinecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <path className="st0" d="M435.244,391.19c32.805-41.18,52.518-93.432,52.503-150.118c0.015-66.486-27.029-126.93-70.608-170.464 C373.593,27.021,313.149-0.016,246.667,0C180.181-0.016,119.742,27.021,76.2,70.608C32.616,114.142,5.576,174.586,5.591,241.072 C5.576,307.55,32.616,367.994,76.2,411.536c43.542,43.587,103.982,70.624,170.468,70.608c50.948,0.016,98.312-15.91,137.281-42.94 L456.756,512l49.653-49.653L435.244,391.19z M378.508,372.916c-33.826,33.773-80.267,54.591-131.841,54.606 c-51.574-0.015-98.015-20.833-131.845-54.606c-33.784-33.834-54.595-80.271-54.61-131.844 c0.015-51.574,20.826-98.011,54.61-131.844c33.83-33.78,80.271-54.591,131.845-54.606c51.574,0.015,98.014,20.826,131.841,54.606 c33.791,33.833,54.602,80.271,54.617,131.844C433.11,292.646,412.299,339.082,378.508,372.916z"></path> <path className="st0" d="M155.926,235.105l-5.696-0.792c-14.558-2.058-19.782-7.117-19.782-14.555c0-8.389,6.012-14.402,16.932-14.402 c9.018,0,17.088,2.691,25.794,8.39c0.789,0.473,1.582,0.313,2.214-0.48l7.597-11.704c0.633-0.953,0.473-1.585-0.32-2.218 c-8.542-6.484-21.359-10.76-34.809-10.76c-22.156,0-36.398,12.977-36.398,32.44c0,17.877,11.712,27.852,32.44,30.694l5.696,0.792 c14.875,2.058,19.622,7.125,19.622,14.875c0,9.022-7.437,15.507-20.255,15.507c-12.024,0-22.312-5.852-29.273-11.392 c-0.632-0.632-1.581-0.632-2.214,0.16l-9.811,11.392c-0.632,0.792-0.316,1.737,0.316,2.378 c8.386,7.909,23.733,14.234,39.561,14.234c26.739,0,40.509-14.234,40.509-33.384C188.049,247.762,176.652,237.956,155.926,235.105z "></path> <path className="st0" d="M275.566,190.322h-67.408c-0.949,0-1.581,0.632-1.581,1.585v104.435c0,0.953,0.632,1.585,1.581,1.585h67.408 c0.953,0,1.585-0.632,1.585-1.585v-13.602c0-0.952-0.632-1.585-1.585-1.585h-49.368l-0.949-0.953V252.99l0.949-0.952h41.614 c0.953,0,1.586-0.633,1.586-1.586v-13.609c0-0.945-0.633-1.577-1.586-1.577h-41.614l-0.949-0.953v-26.266l0.949-0.945h49.368 c0.953,0,1.585-0.64,1.585-1.585v-13.61C277.151,190.954,276.519,190.322,275.566,190.322z"></path> <path className="st0" d="M334.448,188.584c-18.514,0-32.439,8.863-37.975,25.954c-2.218,6.645-2.85,12.658-2.85,29.589 c0,16.932,0.632,22.944,2.85,29.589c5.536,17.092,19.462,25.947,37.975,25.947c18.677,0,32.591-8.855,38.139-25.947 c2.21-6.645,2.85-12.657,2.85-29.589c0-16.932-0.64-22.944-2.85-29.589C367.039,197.447,353.124,188.584,334.448,188.584z M354.542,268.81c-3.003,8.702-9.327,14.082-20.095,14.082c-10.6,0-16.932-5.38-19.938-14.082 c-1.265-3.955-1.898-9.495-1.898-24.682c0-15.355,0.633-20.734,1.898-24.69c3.007-8.702,9.339-14.082,19.938-14.082 c10.768,0,17.092,5.38,20.095,14.082c1.265,3.955,1.904,9.335,1.904,24.69C356.447,259.315,355.807,264.854,354.542,268.81z"></path> </g> </g></svg>
                  
    ),
    },
     {
      title: " Graphic Design",
      shortText: "Contact Us",
         read:'Read More',
    fullText: "From logos to social media creatives and impactful designs tailored for digital and print platforms.",
    icon: (
     <svg fill="#0bcbe5" height="2.6rem" width="2.6rem" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 502.664 502.664" xml:space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M310.166,397.593H75.951V61.671h234.151v25.13h31.472V54.811C341.595,24.677,316.853,0,286.74,0H99.355 C69.199,0,44.522,24.677,44.522,54.811v393.02c0,30.178,24.677,54.833,54.833,54.833H286.74 c30.113,0,54.855-24.655,54.855-54.833V397.01h-31.429C310.166,397.01,310.166,397.593,310.166,397.593z M193.015,475.226 c-13.892,0-25.108-11.238-25.108-25.108c0-13.913,11.217-25.13,25.108-25.13c13.913,0,25.152,11.238,25.152,25.13 C218.167,463.988,206.929,475.226,193.015,475.226z"></path> <rect x="102.785" y="95.386" width="70.256" height="42.84"></rect> <rect x="102.785" y="205.073" width="70.256" height="42.84"></rect> <rect x="102.785" y="319.873" width="70.256" height="42.818"></rect> <path d="M422.399,223.905c-2.481-12.986-7.507-25.001-14.625-35.506l25.195-25.216l-25.734-25.648l-25.152,25.173 c-10.462-7.161-22.541-12.123-35.484-14.625v-35.7h-36.411v35.7c-12.964,2.502-24.936,7.485-35.505,14.625l-25.108-25.173 l-25.734,25.669l25.152,25.216c-7.097,10.505-12.101,22.52-14.582,35.484h-35.657v36.39h35.656 c2.481,12.921,7.507,24.936,14.603,35.484l-25.173,25.173l25.734,25.626l25.173-25.152c10.527,7.161,22.541,12.144,35.505,14.668 v35.635h36.411v-35.656c12.942-2.481,24.936-7.507,35.484-14.625l25.152,25.152l25.734-25.648l-25.195-25.173 c7.118-10.505,12.123-22.541,14.625-35.505h35.678l0,0v-36.368H422.399z M328.437,281.693c-21.894,0-39.669-17.688-39.669-39.604 c0-21.894,17.774-39.69,39.669-39.69c21.916,0,39.604,17.774,39.604,39.69C368.041,264.026,350.309,281.693,328.437,281.693z"></path> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
                  
    ),
    },
     {
      title: "Design & Analysit",
      shortText: "Contact Us",
         read:'Read More',
    fullText: "Turn data into design-driven decisions. We combine intuitive UI/UX design with performance analytics",
    icon: (
       <svg fill="#0bcbe5"height="2.6rem" width="2.6rem" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>design-solid</title> <path className="clr-i-solid clr-i-solid-path-1" d="M34.87,32.21,30,27.37V8.75L27.7,4.52a2,2,0,0,0-3.54,0L22,8.76V19.41L3.71,1.21A1,1,0,0,0,2,1.92V10H4.17v1.6H2V18H4.17v1.6H2v6.65H4.17v1.6H2v5.07a1,1,0,0,0,1,1H34.16a1,1,0,0,0,.71-1.71ZM10,26V16.94L19.07,26Zm18,2.11H24V25.68h4Zm0-4H24V9.25l1.94-3.77L28,9.26Z"></path> <rect x="0" y="0" width="36" height="36" fill-opacity="0"></rect> </g></svg>
                  
    ),
    },
  ]
  return (
 <>
  <div className="service-page-section">
<div className="shape-svg">
  <svg id="svg" viewBox="0 0 400 28" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path 
      d="M0 13.854V28h400V14.216V0.725l-4.427 1.097c-73.561 18.242-154.331 27.421-216.864 24.645C123.876 24.033 57.451 14.315 4.123 0.926 2.094 0.417 0.336 0 0.217 0 0.069 0 0 4.399 0 13.854Z" 
      fill="white" 
    />
  </svg>
</div>

     
      <div className="container-fluid" >
        <div className="row">
            <div className="col-md-12">
              <div className="contact-banner-info">
                <h1 className="text-white">Services</h1> 
                <p></p>
  
              </div>
              
            </div>
        </div>
      </div>
  </div>
  {/* <!-- serivces offer --> */}

 

<div className="services-offer">
    <div className="container">
        <div className="section-title">
            <span>what We Offer</span>
            <h2>Creative Services That Inspire</h2>
<p>From concept to completion, we deliver design and digital services that resonate with your audience and enhance your brand’s identity.</p>
        </div>
        <div className="row  ">
            <div className=" col-lg-4">
              <div className="row">
                {
                  serviceData.slice(0, 3).map((service, index) =>(
  <div  key={index} className="col-lg-12 col-md-6" >
                <div className="single-industries shadow d-flex align-items-center"  onMouseEnter={()=> SetIsHovered(index)} 
                      onMouseLeave={()=> SetIsHovered(null)}>
                    <div className="web-icon">
                    {/* <svg fill="#0bcbe5" style={{width:'2.4rem' , height:'2.4rem;'}} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 70 70" enable-background="new 0 0 70 70" xml:space="preserve" stroke="#0bcbe5"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokelinecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M63.421,2.583h-57c-2.209,0-3.838,1.544-3.838,3.753v57c0,2.209,2.629,3.247,4.838,3.247h56 c2.209,0,3.162-1.038,3.162-3.247v-56C66.583,5.127,65.63,2.583,63.421,2.583z M62.583,6.583v8h-56v-8H62.583z M6.583,62.583v-46 h56v46H6.583z"></path> <path d="M10,11.583h2c0.553,0,1-0.447,1-1s-0.447-1-1-1h-2c-0.553,0-1,0.447-1,1S9.447,11.583,10,11.583z"></path> <path d="M16,11.583h2c0.553,0,1-0.447,1-1s-0.447-1-1-1h-2c-0.553,0-1,0.447-1,1S15.447,11.583,16,11.583z"></path> <path d="M22,11.583h2c0.553,0,1-0.447,1-1s-0.447-1-1-1h-2c-0.553,0-1,0.447-1,1S21.447,11.583,22,11.583z"></path> <path d="M26.583,21.583c0-0.552-0.448-1-1-1h-14c-0.552,0-1,0.448-1,1v26c0,0.553,0.448,1,1,1h14c0.552,0,1-0.447,1-1V21.583z M24.583,43.954l-4.672-8.677l4.672-8.677V43.954z M24.084,46.583H13.599l5.243-9.736L24.084,46.583z M18.842,32.875L13.3,22.583 h11.083L18.842,32.875z M17.772,35.277l-5.189,9.638V25.641L17.772,35.277z"></path> <path d="M59.583,21.583c0-0.552-0.447-1-1-1h-28c-0.552,0-1,0.448-1,1v26c0,0.553,0.448,1,1,1h28c0.553,0,1-0.447,1-1V21.583z M31.583,23.872l11.999,11.345L31.583,46.357V23.872z M33.472,22.583h23.266L45,33.482L33.472,22.583z M44.988,36.129 l11.057,10.454H33.729L44.988,36.129z M46.406,35.229l11.177-10.377v20.944L46.406,35.229z"></path> <path d="M59.583,52.583c0-0.553-0.447-1-1-1h-47c-0.552,0-1,0.447-1,1v7c0,0.553,0.448,1,1,1h47c0.553,0,1-0.447,1-1V52.583z M57.583,58.583h-45v-5h45V58.583z"></path> </g> </g></svg> */}
                  {service.icon}
                  </div>
                  <div class="services-heading " >
                    {
                      isHovered === index ? 
                      
                     <p className='givelineheight'>{service.fullText}</p>
                    : <>
                    <h5>{service.title}</h5>
                        <p>
                          {service.read} |
                          {service.shortText}

                        </p>
                    </>
                       
                    }
                       
                    </div>
                
                    <a className="arrow-sign" href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="#e3e3e3" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
                        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
                      </svg>
                    </a>
                </div>
               </div>
                  ))
                }
              </div>
     
                 </div>
         
          <div className=" col-lg-4">
             <div className="industry-image">
                <img src="images/services/industries-img-two.png" />
             </div>
          </div>
            <div className=" col-lg-4">
              <div className="row">
                {
                  serviceData.slice(3).map((service, index) =>(
  <div  key={index} className="col-lg-12 col-md-6" >
                <div className="single-industries shadow d-flex align-items-center"  onMouseEnter={()=> SetHovered(index)} 
                      onMouseLeave={()=> SetHovered(null)}>
                    <div className="web-icon">
                    {/* <svg fill="#0bcbe5" style={{width:'2.4rem' , height:'2.4rem;'}} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 70 70" enable-background="new 0 0 70 70" xml:space="preserve" stroke="#0bcbe5"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokelinecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M63.421,2.583h-57c-2.209,0-3.838,1.544-3.838,3.753v57c0,2.209,2.629,3.247,4.838,3.247h56 c2.209,0,3.162-1.038,3.162-3.247v-56C66.583,5.127,65.63,2.583,63.421,2.583z M62.583,6.583v8h-56v-8H62.583z M6.583,62.583v-46 h56v46H6.583z"></path> <path d="M10,11.583h2c0.553,0,1-0.447,1-1s-0.447-1-1-1h-2c-0.553,0-1,0.447-1,1S9.447,11.583,10,11.583z"></path> <path d="M16,11.583h2c0.553,0,1-0.447,1-1s-0.447-1-1-1h-2c-0.553,0-1,0.447-1,1S15.447,11.583,16,11.583z"></path> <path d="M22,11.583h2c0.553,0,1-0.447,1-1s-0.447-1-1-1h-2c-0.553,0-1,0.447-1,1S21.447,11.583,22,11.583z"></path> <path d="M26.583,21.583c0-0.552-0.448-1-1-1h-14c-0.552,0-1,0.448-1,1v26c0,0.553,0.448,1,1,1h14c0.552,0,1-0.447,1-1V21.583z M24.583,43.954l-4.672-8.677l4.672-8.677V43.954z M24.084,46.583H13.599l5.243-9.736L24.084,46.583z M18.842,32.875L13.3,22.583 h11.083L18.842,32.875z M17.772,35.277l-5.189,9.638V25.641L17.772,35.277z"></path> <path d="M59.583,21.583c0-0.552-0.447-1-1-1h-28c-0.552,0-1,0.448-1,1v26c0,0.553,0.448,1,1,1h28c0.553,0,1-0.447,1-1V21.583z M31.583,23.872l11.999,11.345L31.583,46.357V23.872z M33.472,22.583h23.266L45,33.482L33.472,22.583z M44.988,36.129 l11.057,10.454H33.729L44.988,36.129z M46.406,35.229l11.177-10.377v20.944L46.406,35.229z"></path> <path d="M59.583,52.583c0-0.553-0.447-1-1-1h-47c-0.552,0-1,0.447-1,1v7c0,0.553,0.448,1,1,1h47c0.553,0,1-0.447,1-1V52.583z M57.583,58.583h-45v-5h45V58.583z"></path> </g> </g></svg> */}
                  {service.icon}
                  </div>
                  <div class="services-heading " >
                          {
                      Hovered === index ? 
                      
                     <p className='givelineheight'>{service.fullText}</p>
                    : <>
                    <h5>{service.title}</h5>
                       <p>
                          {service.read} |
                          {service.shortText}

                        </p>
                    </>
                       
                    }
                    </div>
                  
                    <a className="arrow-sign" href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="#e3e3e3" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
                        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
                      </svg>
                    </a>
                </div>
               </div>
                  ))
                }
              </div>
     
                 </div>
            </div>
            </div>
       </div>
  
 </>
  )
}

export default Services
