import Socials from "./Socials";

export default function Contact() {
  return (
    <section className="grid md:items-end md:flex md:px-8 md:justify-between justify-center mb-5 gap-4">
      <Socials />
      <div>
        <a href="mailto:hardikroongta8@gmail.com">
          <h1 className="text-white text-xl md:text-3xl">
            hardikroongta8@gmail.com
          </h1>
        </a>
      </div>
    </section>
  );
}
