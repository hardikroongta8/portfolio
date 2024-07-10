import Socials from "./Socials";

export default function Contact() {
  return (
    <div className="bg-black mb-10 px-8 flex justify-between items-end">
      <Socials />
      <div>
        <a href="mailto:hardikroongta8@gmail.com">
          <h1 className="text-white text-3xl">hardikroongta8@gmail.com</h1>
        </a>
      </div>
    </div>
  );
}
