import Card from "./Card";
import Button from "./Button";

const Main = () => {
  return (
    <main className="flex-row centrado wrap">
      <section className="flex-column centrado">
        <Card  titulo="Tarjeta 1" subtitulo="Subtitulo 1"/>
        <Button mensaje="Primera"></Button>
      </section>
      <section className="flex-column centrado">
        <Card titulo="Tarjeta 2" subtitulo="Subtitulo 2"/>
        <Button mensaje="Segunda"></Button>
      </section>
    </main>
  );
};

export default Main;
