import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fadeIn, staggerContainer } from '@/lib/animations';
import { Separator } from "@/components/ui/separator";

// Import the CV PDF - we need to set this up properly in the project
// import cvPdf from "@assets/shivajiCV.pdf";

const education = [
  {
    degree: "Bachelor of Science in Physics",
    institution: "Tribhuvan University",
    location: "Kathmandu, Nepal",
    year: "2021 - Present",
    details: [
      "Focus on Gravitational Wave Analysis and Computational Physics",
      "GPA: 3.8/4.0",
      "Key coursework: Quantum Mechanics, General Relativity, Computational Physics, Mathematical Methods for Physics"
    ]
  }
];

const skills = {
  programming: ["Python", "MATLAB", "C++", "JavaScript", "HTML/CSS", "LaTeX", "SQL"],
  physics: ["Gravitational Wave Analysis", "Quantum Mechanics", "Computational Physics", "Data Analysis"],
  software: ["NumPy", "SciPy", "Pandas", "Matplotlib", "TensorFlow", "Jupyter", "Git", "Linux"],
  languages: ["English (Fluent)", "Nepali (Native)"]
};

const experiences = [
  {
    title: "Research Assistant",
    organization: "Physics Department, Tribhuvan University",
    location: "Kathmandu, Nepal",
    period: "January 2023 - Present",
    responsibilities: [
      "Assisting in gravitational wave data analysis projects",
      "Implementing signal processing algorithms for noise reduction in LIGO data",
      "Developing visualization tools for data presentation"
    ]
  },
  {
    title: "Teaching Assistant",
    organization: "Department of Physics, Tribhuvan University",
    location: "Kathmandu, Nepal",
    period: "September 2022 - December 2023",
    responsibilities: [
      "Conducted laboratory sessions for undergraduate physics students",
      "Assisted students with computational physics assignments",
      "Graded assignments and provided feedback to students"
    ]
  }
];

const certifications = [
  {
    title: "Data Analysis in Python",
    issuer: "Coursera",
    date: "December 2022"
  },
  {
    title: "Introduction to Quantum Computing",
    issuer: "edX",
    date: "July 2023"
  },
  {
    title: "Machine Learning for Physics Applications",
    issuer: "Udacity",
    date: "March 2023"
  }
];

const CVSection = () => {
  return (
    <section id="cv" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="space-y-12"
        >
          <motion.div 
            variants={fadeIn('up')}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Curriculum Vitae
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              My academic and professional journey in physics and computation
            </p>
            <div className="flex justify-center">
              <Button className="bg-[#5D3E7C] text-white hover:bg-[#FF65A3] px-8 mr-4">
                <i className="ri-download-line mr-2"></i> Download CV
              </Button>
              {/* <a href={cvPdf} target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button className="bg-transparent border border-[#5D3E7C] text-white hover:bg-[#5D3E7C]">
                  <i className="ri-eye-line mr-2"></i> View Full CV
                </Button>
              </a> */}
            </div>
          </motion.div>
          
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="bg-[#141B34] border border-[#5D3E7C] p-1 w-full flex justify-center mb-8 overflow-x-auto">
              <TabsTrigger value="education" className="data-[state=active]:bg-[#5D3E7C] data-[state=active]:text-white px-4">
                Education
              </TabsTrigger>
              <TabsTrigger value="experience" className="data-[state=active]:bg-[#5D3E7C] data-[state=active]:text-white px-4">
                Experience
              </TabsTrigger>
              <TabsTrigger value="skills" className="data-[state=active]:bg-[#5D3E7C] data-[state=active]:text-white px-4">
                Skills
              </TabsTrigger>
              <TabsTrigger value="certifications" className="data-[state=active]:bg-[#5D3E7C] data-[state=active]:text-white px-4">
                Certifications
              </TabsTrigger>
              <TabsTrigger value="courses" className="data-[state=active]:bg-[#5D3E7C] data-[state=active]:text-white px-4">
                Online Courses
              </TabsTrigger>
            </TabsList>
            
            {/* Education */}
            <TabsContent value="education" className="mt-0">
              <motion.div 
                variants={fadeIn('up')}
                className="space-y-8"
              >
                {education.map((edu, index) => (
                  <Card key={index} className="bg-[#141B34] border-[#5D3E7C] border p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                        <p className="text-lg text-gray-300">{edu.institution}</p>
                        <p className="text-gray-400">{edu.location}</p>
                      </div>
                      <p className="text-[#FF65A3] font-semibold mt-2 md:mt-0">{edu.year}</p>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                      {edu.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>
            
            {/* Experience */}
            <TabsContent value="experience" className="mt-0">
              <motion.div 
                variants={fadeIn('up')}
                className="space-y-8"
              >
                {experiences.map((exp, index) => (
                  <Card key={index} className="bg-[#141B34] border-[#5D3E7C] border p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-lg text-gray-300">{exp.organization}</p>
                        <p className="text-gray-400">{exp.location}</p>
                      </div>
                      <p className="text-[#FF65A3] font-semibold mt-2 md:mt-0">{exp.period}</p>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                      {exp.responsibilities.map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>
            
            {/* Skills */}
            <TabsContent value="skills" className="mt-0">
              <motion.div 
                variants={fadeIn('up')}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <Card className="bg-[#141B34] border-[#5D3E7C] border p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.programming.map((skill, i) => (
                      <span key={i} className="bg-[#5D3E7C] text-white px-3 py-1 rounded-md text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
                
                <Card className="bg-[#141B34] border-[#5D3E7C] border p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Physics Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.physics.map((skill, i) => (
                      <span key={i} className="bg-[#5D3E7C] text-white px-3 py-1 rounded-md text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
                
                <Card className="bg-[#141B34] border-[#5D3E7C] border p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Software & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.software.map((skill, i) => (
                      <span key={i} className="bg-[#5D3E7C] text-white px-3 py-1 rounded-md text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
                
                <Card className="bg-[#141B34] border-[#5D3E7C] border p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill, i) => (
                      <span key={i} className="bg-[#5D3E7C] text-white px-3 py-1 rounded-md text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </TabsContent>
            
            {/* Certifications */}
            <TabsContent value="certifications" className="mt-0">
              <motion.div 
                variants={fadeIn('up')}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {certifications.map((cert, index) => (
                  <Card key={index} className="bg-[#141B34] border-[#5D3E7C] border p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                    <p className="text-gray-300">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm mt-2">{cert.date}</p>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>

            {/* Online Courses */}
            <TabsContent value="courses" className="mt-0">
              <motion.div 
                variants={fadeIn('up')}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <Card className="bg-[#141B34] border-[#5D3E7C] border p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Introduction to Quantum Computing</h3>
                  <p className="text-gray-300">St. Xavier's Physics Council (SXPC-Nepal)</p>
                  <p className="text-gray-400 text-sm mt-2">13-18 April 2023</p>
                  <a 
                    href="https://github.com/Shivaji-137/my_learning_certificate/blob/main/Quantum_computing_SXPC_certificate.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF65A3] hover:text-[#5D3E7C] text-sm mt-2 inline-flex items-center"
                  >
                    <i className="ri-award-line mr-1"></i> Show Certificate
                  </a>
                </Card>
                <Card className="bg-[#141B34] border-[#5D3E7C] border p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Machine Learning with Python</h3>
                  <p className="text-gray-300">Coursera</p>
                  <p className="text-gray-400 text-sm mt-2">Feb 28 2024</p>
                  <a 
                    href="https://github.com/Shivaji-137/my_learning_certificate/blob/main/machineLearningwithPython_certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF65A3] hover:text-[#5D3E7C] text-sm mt-2 inline-flex items-center"
                  >
                    <i className="ri-award-line mr-1"></i> Show Certificate
                  </a>
                </Card>
                <Card className="bg-[#141B34] border-[#5D3E7C] border p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Data Analysis with Python</h3>
                  <p className="text-gray-300">Coursera</p>
                  <p className="text-gray-400 text-sm mt-2">March 2 2024</p>
                </Card>
                <Card className="bg-[#141B34] border-[#5D3E7C] border p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Introduction to Deep Learning and Neural Networks with Keras</h3>
                  <p className="text-gray-300">Coursera</p>
                  <p className="text-gray-400 text-sm mt-2">March 15 2024</p>
                </Card>
                <Card className="bg-[#141B34] border-[#5D3E7C] border p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Introduction to R</h3>
                  <p className="text-gray-300">Great Learning Academy</p>
                  <p className="text-gray-400 text-sm mt-2">March 2024</p>
                </Card>
                <Card className="bg-[#141B34] border-[#5D3E7C] border p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Data Visualization with R</h3>
                  <p className="text-gray-300">Great Learning Academy</p>
                  <p className="text-gray-400 text-sm mt-2">March 2024</p>
                </Card>
                <Card className="bg-[#141B34] border-[#5D3E7C] border p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Advanced Learning Algorithm</h3>
                  <p className="text-gray-300">Coursera</p>
                  <p className="text-gray-400 text-sm mt-2">July 28 2024</p>
                </Card>
                <Card className="bg-[#141B34] border-[#5D3E7C] border p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">OpenCV Bootcamp</h3>
                  <p className="text-gray-300">OpenCV University</p>
                  <p className="text-gray-400 text-sm mt-2">August 7 2024</p>
                </Card>
                <Card className="bg-[#141B34] border-[#5D3E7C] border p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">MATLAB Onramp</h3>
                  <p className="text-gray-300">MathWorks Training Services</p>
                  <p className="text-gray-400 text-sm mt-2">November 1 2024</p>
                </Card>
                <Card className="bg-[#141B34] border-[#5D3E7C] border p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Computers, Waves, Simulations</h3>
                  <p className="text-gray-300">Ludwig-Maximilians-Universität München (Coursera)</p>
                  <p className="text-gray-400 text-sm mt-2">2024-ongoing</p>
                  <p className="text-gray-300 mt-2">A Practical Introduction to Numerical Methods using Python</p>
                </Card>
                <Card className="bg-[#141B34] border-[#5D3E7C] border p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Data-driven Astronomy</h3>
                  <p className="text-gray-300">The University of Sydney (Coursera)</p>
                  <p className="text-gray-400 text-sm mt-2">2024</p>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
          
          <motion.div 
            variants={fadeIn('up')}
            className="text-center mt-12"
          >
            <p className="text-gray-300 mb-6">
              Want to discuss potential collaborations or have questions about my experience?
            </p>
            <Button className="bg-[#5D3E7C] text-white hover:bg-[#FF65A3] px-8">
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CVSection;