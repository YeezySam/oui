import SectionCard from "./components/SectionCard";

const sections = [
  {
    title: "Bienvenue sur GOV-AI",
    type: "texte",
    description: "GOV-AI est une intelligence artificielle développée pour faciliter l’accès aux textes officiels du Cameroun.",
  },
  {
    title: "Image + texte",
    type: "image",
    description: "Type: texte",
    image: "https://via.placeholder.com/400x200", // à remplacer par l'image réelle
  },
  {
    title: "Fonctionnalités",
    type: "texte",
  },
  {
    title: "Sanctionns",
    type: "texte",
  },
];

const Dashboard = () => {
  return (
    <div className="flex-1 p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Sections de Page 'Accueil'</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          + Nouvelle section
        </button>
      </div>
      <div className="space-y-4">
        {sections.map((section, i) => (
          <SectionCard key={i} {...section} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
