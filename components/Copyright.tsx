"use client";

import { Responsive } from "@/utils";

const Copyright = () => {
  return (
    <div className="dark:text-gray-100 dark:bg-gray-900">
      <div className={`container mx-auto px-10 md:px-20 pt-32 lg:pt-10 pb-10`}>
        <h1 className="dark:text-white text-3xl md:text-5xl pb-8 text-center">
          Copyright
        </h1>
        <Responsive />
        <div className=" bg-gray-50 p-5 dark:bg-gray-800">
          <h2 className="text-xl">© 2025 Heramb Devbhankar. All rights reserved.</h2>
          <p>
            
            The materials and content displayed on this website, including but not
            limited to text, graphics, logos, images, videos, and software, are
            the property of Heramb Devbhankar or its content suppliers and are protected
            by international copyright laws. Reproduction, modification,
            distribution, or any other form of exploitation of the materials and
            content on this website is prohibited without express written consent
            from Heramb Devbhankar.
          </p>
          <p>
            The information and materials provided on this website are for general
            informational purposes only and do not constitute professional advice.
            While Heramb Devbhankar strives to keep the information on this website
            accurate and up-to-date, we make no representations or warranties of
            any kind, express or implied, about the completeness, accuracy,
            reliability, suitability, or availability with respect to the website
            or the information, products, services, or related graphics contained
            on the website for any purpose. Any reliance you place on such
            information is therefore strictly at your own risk.
          </p>
          <p>
            In no event will Heramb Devbhankar be liable for any loss or damage including
            without limitation, indirect or consequential loss or damage, or any
            loss or damage whatsoever arising from loss of data or profits arising
            out of, or in connection with, the use of this website.
          </p>
          <p>
            Through this website, you are able to link to other websites which are
            not under the control of Heramb Devbhankar. We have no control over the
            nature, content, and availability of those sites. The inclusion of any
            links does not necessarily imply a recommendation or endorse the views
            expressed within them.
          </p>
          <p>
            Every effort is made to keep the website up and running smoothly.
            However, Heramb Devbhankar takes no responsibility for, and will not be liable
            for, the website being temporarily unavailable due to technical issues
            beyond our control.
          </p>
          <p>
            Thank you for visiting our website. We hope you find it informative
            and useful.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
