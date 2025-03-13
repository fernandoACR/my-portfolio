import React from "react";
import {Mail } from "lucide-react";
import github from "../src/github.svg"; 
import linkedin from "../src/linkedin.svg"; 
import awsSummit from "../src/awsSummit.jpg"; 
import gqlConf from "../src/gqlConf.jpg"; 
import codeTracks from "../src/codeTracks.jpg"; 

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
    {/* Header */}
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 shadow-lg">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold">Fernando Abdias Cespedes Reyes</h1>
        <p className="text-lg text-gray-300 mt-2">
          Full-Stack Developer | React | Angular | Java | .NET
        </p>
      </div>
    </header>

  {/* Main Content */}
  <main className="max-w-6xl mx-auto p-6 space-y-12">
    {/* Career Summary */}
    <section className="text-center">
      <h2 className="text-3xl font-semibold mb-4">Career Summary</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
      I am a proactive Computer Engineer with extensive experience in software development, technical support, and system administration. 
      Proficient in programming languages and technologies including C# .NET, Java, PHP, Angular, TypeScript, JavaScript, PostgreSQL, MySQL, XML and GraphQL, I specialize in designing and developing desktop applications, websites, and RESTful APIs.
      </p>
      <br/>
    </section>

    {/* Projects Section */}
    <section>
          <h2 className="text-3xl font-semibold text-center mb-6">Projects</h2>
          <br/>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard title="Club SAAS" description="Loyalty Program for a Pharmacy Chain." link="https://www.youtube.com/watch?v=6u9l1JhBQ8Q&ab_channel=FCR-Portfolio" link2="#" />
            <ProjectCard title="MedTor" description="Dental Management Application." link="https://www.youtube.com/watch?v=g2nk599pdVs&ab_channel=FCR-Portfolio" link2="https://github.com/fernandoACR/medtor" />
            <ProjectCard title="ITventory" description="An application to manage and track IT inventory efficiently." link="#" link2="https://github.com/fernandoACR/ITventory" />
          </div>
    </section>

{/* Gallery */}
    <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Gallery</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <img src={awsSummit} alt="AWS Summit" className="mx-auto rounded-lg shadow-lg w-full h-auto" />
            <img src={gqlConf} alt="GraphQL Conference" className="mx-auto rounded-lg shadow-lg w-full h-auto" />
            <img src={codeTracks} alt="CodeTracks London, Ontario" className="mx-auto rounded-lg shadow-lg w-full h-auto" />
          </div>
    </section>
    
    {/* Contact Section */}
    <section className="text-center">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <div className="flex justify-center space-x-6 text-3xl text-gray-600">
        <ContactIcon link="https://github.com/fernandoACR" Icon={github} isImage />
        <ContactIcon link="mailto:fcespedes2624@gmail.com" Icon={Mail} />
        <ContactIcon link="https://www.linkedin.com/in/fernandocespedesve/" Icon={linkedin} isImage />
      </div>
    </section>
  </main>
</div>

  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  link2: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, link2 }) => (
  <div className="p-6 border rounded-lg space-y-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <div className="flex space-x-4">
      {link2 ? (
        <a
          href={link2}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block border p-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
        >
          Code
        </a>
      ) : (
        <span className="mt-4 inline-block border p-2 rounded bg-gray-300 text-white cursor-not-allowed">
          Code
        </span>
      )}
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block border p-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
        >
          Demo
        </a>
      ) : (
        <span className="mt-4 inline-block border p-2 rounded bg-gray-300 text-white cursor-not-allowed">
          Demo
        </span>
      )}
    </div>
  </div>
);

interface ContactIconProps {
  link: string;
  Icon: React.ElementType | string;
  isImage?: boolean;
}

const ContactIcon: React.FC<ContactIconProps> = ({ link, Icon, isImage }) => (
  <a href={link} className="text-gray-400 hover:text-black transition-colors duration-300">
    {isImage ? <img src={Icon as string} alt="icon" className="w-7 h-7" /> : <Icon size={28} />}
  </a>
);

export default Portfolio;
