export default function Projects(){
  const projectList = [
    {
      serialNo: 1,
      name: "ChatSphere",
      desc: "A chat application developed using MERN stack. Migh take some time during your firt visit. Please be patient.",
      link: "https://chatsphere-1-593o.onrender.com/",
      value: "Link"
    },
    {
      serialNo: 2,
      name: "File Compressor & Decompressor",
      desc: "Helps in compressing & decompressing text files using Huffman algorithm.",
      link: "https://inyodream.github.io/HuffmanCompression/",
      value: "Link"
    },
    {
      serialNo: 3,
      name: "Spam Message Detector",
      desc: "Uses the Naive Baye's algorithm to train a machine learning model on processed data & make effective predictions for spam messages.",
      link: "https://spammaildetector-z7wisdxzwr2pkwfcnoerl5.streamlit.app/",
      value: "Link"
    },
  ];
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="font-bold mx-4 mb-3 text-yellow-200 w-36 underline">My Projects :</h1>
      <ul className="project-list">
        {projectList.map((project, index) => (
          <li key={index} className="project-item">
            <h3 className="mx-4 text-yellow-200 my-2">{project.serialNo}. {project.name} -</h3>
            <p className="mx-4 my-1">{project.desc}</p>
            <a className="mx-4 text-blue-500 underline" href={project.link} target="_blank" rel="noopener noreferrer">
              {project.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
