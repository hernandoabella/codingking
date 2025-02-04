import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-cshtml";
import "prismjs/themes/prism-okaidia.css";
import { motion } from "framer-motion";
import { FaLink, FaImage, FaTable, FaVideo, FaGlobe, FaTools, FaChevronUp, FaChevronDown } from "react-icons/fa";

function Html() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const sections = [
    {
      id: "structure-web-pages",
      title: "Structure Web Pages",
      content: (
        <>
          <h3 className="text-2xl font-bold py-2">Structure Web Pages</h3>
          <ul className="list-disc pl-10">
            <li className="py-2">
              Define headings, paragraphs, and text using elements like
              <span className="rounded code bg-base-300 text-[#f92672] ml-1">
                {" "}
                &lt;h1&gt;
              </span>
              ,{" "}
              <span className="rounded code bg-base-300 text-[#f92672] ml-1">
                &lt;p&gt;
              </span>
              , and{" "}
              <span className="rounded code bg-base-300 text-[#f92672] ml-1">
                &lt;span&gt;
              </span>
              .
            </li>
            <li className="py-2">
              Create sections of a webpage with{" "}
              <span className="rounded code bg-base-300 text-[#f92672] ml-1">
                &lt;div&gt;
              </span>
              ,
              <span className="rounded code bg-base-300 text-[#f92672] ml-1">
                {" "}
                &lt;section&gt;
              </span>
              , and{" "}
              <span className="rounded code bg-base-300 text-[#f92672] ml-1">
                &lt;article&gt;
              </span>
              .
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "embed-media",
      title: "Embed Media",
      content: (
        <>
          <h3 className="text-2xl font-bold py-2">Embed Media</h3>
          <p className="pl-10">
            Use HTML elements like{" "}
            <span className="rounded code bg-base-300 text-[#f92672] ml-1">
              &lt;img&gt;
            </span>{" "}
            to embed images,{" "}
            <span className="rounded code bg-base-300 text-[#f92672] ml-1">
              &lt;audio&gt;
            </span>{" "}
            for audio, and{" "}
            <span className="rounded code bg-base-300 text-[#f92672] ml-1">
              &lt;video&gt;
            </span>{" "}
            to include videos in your web pages.
          </p>
        </>
      ),
    },
    {
      id: "create-hyperlinks",
      title: "Create Hyperlinks",
      content: (
        <>
          <h3 className="text-2xl font-bold py-2">Create Hyperlinks</h3>
          <p className="pl-10">
            Use the{" "}
            <span className="rounded code bg-base-300 text-[#f92672] ml-1">
              &lt;a&gt;
            </span>{" "}
            element to create links that navigate to other web pages or
            resources.
          </p>
        </>
      ),
    },
  ];

  const [activeSection, setActiveSection] = useState(sections[0]);

  const [activeTab, setActiveTab] = useState<number | null>(null);

  const tabs = [
    {
      id: 1,
      question: "Why Learn HTML?",
      answer:
        "Mastering HTML allows you to build the foundation of web pages, making it an essential skill for developers, designers, and anyone looking to explore web technologies.",
    },
    {
      id: 2,
      question: "What is HTML?",
      answer:
        "HTML stands for HyperText Markup Language. It is used to structure content on the web, such as headings, paragraphs, links, and images.",
    },
    {
      id: 3,
      question: "How is HTML different from CSS and JavaScript?",
      answer:
        "HTML structures content on the web, CSS styles the content, and JavaScript makes the content interactive and dynamic.",
    },
    {
      id: 4,
      question: "Do I need to know HTML to build websites?",
      answer:
        "Yes, HTML is the backbone of any website. Without it, there would be no structure for the content.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animation when component mounts
      exit={{ opacity: 0, y: -50 }} // Animation when component unmounts
      transition={{ duration: 0.5 }} // Animation duration
    >
      <div className="flex flex-col md:flex-row md:m-auto">
        <div>
          <div>

            <div className="flex flex-col md:flex-row items-center gap-10 ">
              {/* Image Section */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <img
                  src="/icons/html5-original.svg"
                  width={150}
                  height={100}
                  alt="HTML Icon"
                  className="w-24 h-24 md:w-36 md:h-36"
                />
              </div>

              {/* Text Section */}
              <div>
                <h1 className="text-3xl md:text-5xl lg:text-4xl font-extrabold mb-4 text-center md:text-left">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-600 from-orange-400">
                    HTML:
                  </span>{" "}
                  HyperText Markup Language
                </h1>
                <motion.p
                  initial={{ opacity: 0 }} // Initial animation state
                  animate={{ opacity: 1 }} // Animation when component mounts
                  transition={{ delay: 0.3 }} // Delay before animation starts
                  className="text-xl text-gray-500 md:text-left text-center mb-4"
                >
                  HTML (Hypertext Markup Language) forms the backbone of web development,
                  enabling you to structure and display content effectively on the web.
                </motion.p>

                {/* Additional Information */}
                <div className="mt-4 space-y-2">
                  <div className="text-lg">
                    <strong>Developed By:</strong>{" "}
                    <span className="text-gray-500">

                      World Wide Web Consortium (W3C; formerly)</span>
                  </div>
                  <div className="text-lg">
                    <strong>Filename Extension:</strong>{" "}
                    <span className="text-gray-500">.html, .htm</span>
                  </div>
                  <div className="text-lg">
                    <strong>Official Website:</strong>{" "}
                    <a
                      href="https://html.spec.whatwg.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 underline hover:text-orange-800"
                    >
                      https://html.spec.whatwg.org/
                    </a>
                  </div>
                  <div className="text-lg">
                    <strong>First Released:</strong>{" "}
                    <span className="text-gray-500">1993</span>
                  </div>
                  <div className="text-lg">
                    <strong>Use Case:</strong>{" "}
                    <span className="text-gray-500">
                      Structuring and presenting content on the web.
                    </span>
                  </div>
                </div>
              </div>
            </div>


            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
              <h3 className="font-extrabold text-3xl text-orange-600 mb-10  text-center">
                Main Features
              </h3>
              <ul className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Structuring Content",
                    description:
                      "Effortlessly organize content with tags like <code className='bg-gray-800 text-[#f92672] rounded px-2 py-1 text-sm'>&lt;h1&gt;</code>, <code className='bg-gray-800 text-[#f92672] rounded px-2 py-1 text-sm'>&lt;p&gt;</code>, <code className='bg-gray-800 text-[#f92672] rounded px-2 py-1 text-sm'>&lt;div&gt;</code>, <code className='bg-gray-800 text-[#f92672] rounded px-2 py-1 text-sm'>&lt;img&gt;</code>, and more.",
                    icon: <FaTools className="text-2xl text-white" />, // Icon for structuring
                  },
                  {
                    title: "Creating Links",
                    description:
                      "Enable seamless navigation between pages using the versatile <code className='bg-gray-800 text-[#f92672] rounded px-2 py-1 text-sm'>&lt;a&gt;</code> tag.",
                    icon: <FaLink className="text-2xl text-white" />, // Link icon
                  },
                  {
                    title: "Displaying Images",
                    description:
                      "Add stunning visuals to your pages with the simple <code className='bg-gray-800 text-[#f92672] rounded px-2 py-1 text-sm'>&lt;img&gt;</code> tag.",
                    icon: <FaImage className="text-2xl text-white" />, // Image icon
                  },
                  {
                    title: "Organizing Data",
                    description:
                      "Present information clearly in tables using the <code className='bg-gray-800 text-[#f92672] rounded px-2 py-1 text-sm'>&lt;table&gt;</code> tag.",
                    icon: <FaTable className="text-2xl text-white" />, // Table icon
                  },
                  {
                    title: "Embedding Multimedia",
                    description:
                      "Integrate video and audio content effortlessly into your site using <code className='bg-gray-800 text-[#f92672] rounded px-2 py-1 text-sm'>&lt;video&gt;</code> and <code className='bg-gray-800 text-[#f92672] rounded px-2 py-1 text-sm'>&lt;audio&gt;</code> tags.",
                    icon: <FaVideo className="text-2xl text-white" />, // Video icon
                  },
                  {
                    title: "SEO Optimization",
                    description:
                      "Boost your site's visibility using semantic tags like <code className='bg-gray-800 text-[#f92672] rounded px-2 py-1 text-sm'>&lt;article&gt;</code>, <code className='bg-gray-800 text-[#f92672] rounded px-2 py-1 text-sm'>&lt;nav&gt;</code>, and <code className='bg-gray-800 text-[#f92672] rounded px-2 py-1 text-sm'>&lt;section&gt;</code>.",
                    icon: <FaGlobe className="text-2xl text-white" />, // Globe icon
                  },
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex flex-col items-center text-center gap-4 p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white shadow-md">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">{feature.title}</h4>
                      <p className="text-gray-500" dangerouslySetInnerHTML={{ __html: feature.description }} />
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>


          </div>

          <div className="mt-10 flex flex-col md:flex-row gap-10">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="md:w-1/4 p-6 border rounded-lg "
            >
              <h3 className="text-2xl font-bold py-2 text-orange-600 border-b-2 border-orange-300 mb-4">
                HTML Tutorial
              </h3>
              <ol className="list-decimal pl-6 text-lg font-medium space-y-3">
                {sections.map((section) => (
                  <li
                    key={section.id}
                    className={`hover:underline cursor-pointer ${activeSection.id === section.id
                      ? "text-orange-600 font-semibold transform scale-105"
                      : "text-gray-500"
                      } transition duration-300 ease-in-out`}
                    onClick={() => setActiveSection(section)}
                  >
                    {section.title}
                  </li>
                ))}
              </ol>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="md:w-3/4 px-5 py-6   rounded-lg border"
            >
              {activeSection.content}
            </motion.div>
          </div>


        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-10 "
      >
        <h2 className="text-2xl font-bold mb-6 text-orange-600 text-center">
          HTML Extensions for VS Code
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Extension 1 */}
          <div className="flex flex-col items-center border p-4 rounded-lg">
            <div className="w-16 h-16  flex items-center justify-center mb-3">
              <img src="https://abusaidm.gallerycdn.vsassets.io/extensions/abusaidm/html-snippets/0.2.1/1514476281055/Microsoft.VisualStudio.Services.Icons.Default" alt="HTML Snippets" className="w-full h-full object-contain" />
            </div>
            <span className="font-semibold text-lg">HTML Snippets</span>
            <p className="text-center text-gray-400 text-sm mt-2">
              Adds rich HTML snippets to speed up coding and improve productivity.
            </p>
          </div>

          {/* Extension 2 */}
          <div className="flex flex-col items-center border p-4 rounded-lg">
            <div className="w-16 h-16  flex items-center justify-center mb-3">
              <img src="https://formulahendry.gallerycdn.vsassets.io/extensions/formulahendry/auto-close-tag/0.5.15/1702959502562/Microsoft.VisualStudio.Services.Icons.Default" alt="Auto Close Tag" className="w-full h-full object-contain" />
            </div>
            <span className="font-semibold text-lg">Auto Close Tag</span>
            <p className="text-center text-gray-400 text-sm mt-2">
              Automatically closes HTML tags as you type, saving time and reducing errors.
            </p>
          </div>

          {/* Extension 3 */}
          <div className="flex flex-col items-center border p-4 rounded-lg">
            <div className="w-16 h-16  flex items-center justify-center mb-3">
              <img src="https://christian-kohler.gallerycdn.vsassets.io/extensions/christian-kohler/path-intellisense/2.3.0/1599815793523/Microsoft.VisualStudio.Services.Icons.Default" alt="Path Intellisense" className="w-full h-full object-contain" />
            </div>
            <span className="font-semibold text-lg">Path Intellisense</span>
            <p className="text-center text-gray-400 text-sm mt-2">
              Autocompletes file paths in HTML documents to streamline navigation and workflow.
            </p>
          </div>

          {/* Extension 4 */}
          <div className="flex flex-col items-center border p-4 rounded-lg">
            <div className="w-16 h-16  flex items-center justify-center mb-3">
              <img src="https://ecmel.gallerycdn.vsassets.io/extensions/ecmel/vscode-html-css/2.0.12/1735740148938/Microsoft.VisualStudio.Services.Icons.Default" alt="HTML CSS Support" className="w-full h-full object-contain" />
            </div>
            <span className="font-semibold text-lg">HTML CSS Support</span>
            <p className="text-center text-gray-400 text-sm mt-2">
              Provides CSS class name suggestions within HTML files, making styling easier.
            </p>
          </div>

          {/* Extension 5 */}
          <div className="flex flex-col items-center border p-4 rounded-lg">
            <div className="w-16 h-16  flex items-center justify-center mb-3">
              <img src="https://ritwickdey.gallerycdn.vsassets.io/extensions/ritwickdey/liveserver/5.7.9/1736542717282/Microsoft.VisualStudio.Services.Icons.Default" alt="Live Server" className="w-full h-full object-contain" />
            </div>
            <span className="font-semibold text-lg">Live Server</span>
            <p className="text-center text-gray-400 text-sm mt-2">
              Launches a local development server with live reload for quick preview of changes.
            </p>
          </div>

          {/* Extension 6 */}
          <div className="flex flex-col items-center border p-4 rounded-lg">
            <div className="w-16 h-16 flex items-center justify-center mb-3">
              <img src="https://esbenp.gallerycdn.vsassets.io/extensions/esbenp/prettier-vscode/11.0.0/1723648421534/Microsoft.VisualStudio.Services.Icons.Default" alt="Prettier" className="w-full h-full object-contain" />
            </div>
            <span className="font-semibold text-lg">Prettier</span>
            <p className="text-center text-gray-400 text-sm mt-2">
              Formats your HTML code consistently, adhering to best practices and readability.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="my-10">
  <h2 className="text-2xl font-bold mb-3 text-orange-600">FAQ</h2>
  {tabs.map((tab, index) => (
    <div key={tab.id} className="collapse collapse-arrow bg-base-200">
      {/* Radio Input for Each Tab */}
      <input 
        type="radio" 
        name="my-accordion-2" 
        defaultChecked={index === 0} // First tab is checked by default
        id={`tab-${tab.id}`}
      />
      {/* Tab Title */}
      <div className="collapse-title text-xl font-medium" >
        {tab.question}
      </div>
      {/* Tab Content */}
      <div className="collapse-content">
        <p className="text-lg text-gray-500">{tab.answer}</p>
      </div>
    </div>
  ))}
</div>


      <hr className="my-10" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="rounded-lg shadow-sm"
      >
        <h2 className="text-2xl font-bold mb-3 text-orange-600">Useful Resources</h2>
        <p className="text-gray-500 text-lg mb-6">
          Here are some excellent resources to enhance your HTML learning journey. Check out these tutorials, references, and tools to level up your skills.
        </p>
        <ul className="space-y-2 list-disc ml-10">
          {[
            {
              title: "HTML Documentation",
              link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            },
            {
              title: "W3Schools HTML Tutorial",
              link: "https://www.w3schools.com/html/",
            },
            {
              title: "HTML5 Validator",
              link: "https://validator.w3.org/",
            },
            {
              title: "CSS Tricks",
              link: "https://css-tricks.com/",
            },
          ].map((resource, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.2 }}
            >
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-orange-600 hover:underline"
              >
                {resource.title}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>

    </motion.div>


  );
}

export default Html;
