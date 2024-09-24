import TopAppBar from "./ui/TopAppbar";
import Slide1 from "./ui/Slide";
import Card from "./ui/Card";

export default function Home() {
  return (
    <>
      <div>
        <TopAppBar />
        <Slide1></Slide1>
        <Card
          title="¿Quiénes somos?"
          subtitle="Veedores del estado ambiental-hídrico para la protección y preservación ayudados por la tecnología."
          bgColor="bg-emerald-400" // Puedes cambiar el color de fondo aquí
        />
        <Card
          title="Mision"
          subtitle="Nuestra misión es brindar soluciones tecnológicas innovadoras para informar el estado ambiental-hídrico para su protección y preservación ayudados con la tecnología."
          bgColor="bg-stone-700" // Puedes cambiar el color de fondo aquí
        />

        <Card
          title="Vision"
          subtitle="Establecer una empresa medio ambiental sostenible a nivel departamental, utilizando tecnología para lograr la concientización y responsabilidad ambiental-hídrica"
          bgColor="bg-yellow-600" // Puedes cambiar el color de fondo aquí
        />
        {/* Incluir otros componentes de slides */}
      </div>
    </>
  );
}
