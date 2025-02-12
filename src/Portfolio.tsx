import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
  {/* Header */}
  <header className="bg-blue-600 text-white p-6 w-full">
    <h1 className="text-4xl font-bold">Fernando Abdias Cespedes Reyes</h1>
    <p className="text-lg text-gray-300">
      Full-Stack Developer | React | Angular | Java | .NET
    </p>
  </header>

  {/* Main Content */}
  <main className="max-w-6xl mx-auto p-6 space-y-12">
    {/* Career Summary */}
    <section className="text-center">
      <h2 className="text-3xl font-semibold mb-4">Career Summary</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
      I am a proactive Computer Engineer with extensive experience in software development, technical support, and system administration. 
      Proficient in programming languages and technologies including C# .NET, Java, PHP, Angular, TypeScript, JavaScript, PostgreSQL, MySQL, and XML, I specialize in designing and developing desktop applications, websites, and RESTful APIs.
      </p>
      <br/>
    </section>

    {/* Projects Section */}
    <section>
      <h2 className="text-3xl font-semibold text-center mb-6">Projects</h2>
      <br/>
      <div className="grid gap-6 sm:grid-cols-2">
        <ProjectCard title="Club SAAS" description="Loyalty Program for a Pharmacy Chain." link="https://www.youtube.com/watch?v=6u9l1JhBQ8Q&ab_channel=FCR-Portfolio" link2="#"/>
        <ProjectCard title="MedTor" description="Dental Management Application." link="https://www.youtube.com/watch?v=g2nk599pdVs&ab_channel=FCR-Portfolio" link2="https://github.com/fernandoACR/medtor"/>
        <ProjectCard title="SICEF" description="Human Resources Management Application." link="#" link2="#"/>
        <ProjectCard title="ITventory" description="An application to manage and track IT inventory efficiently." link="#" link2="https://github.com/fernandoACR/ITventory" />
      </div>
    </section>

    {/* Contact Section */}
    <section className="text-center">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <div className="flex justify-center space-x-6 text-3xl text-gray-600">
        <ContactIcon link="https://github.com/fernandoACR" Icon={Github} />
        <ContactIcon link="mailto:fcespedes2624@gmail.com" Icon={Mail} />
        <ContactIcon link="https://www.linkedin.com/in/fernandocespedesve/" Icon={Linkedin} />
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

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link , link2 }) => (
  <div className="p-6 border rounded-lg space-x-4">
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-gray-400">{description}</p>
    <br/>
    <a
      href={link2} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="mt-4 inline-block border p-2 rounded bg-blue-500"
    >
      Code
    </a>
    <a
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="mt-4 inline-block border p-2 rounded bg-blue-500"
    >
      Demo
    </a>
  </div>
);

interface ContactIconProps {
  link: string;
  Icon: React.ElementType;
}

const ContactIcon: React.FC<ContactIconProps> = ({ link, Icon }) => (
  <div className="flex space-x-4 mb-4">
    <a href={link} className="text-gray-400 hover:text-black">
      <Icon size={28} />
    </a>
  </div>
);

export default Portfolio;
