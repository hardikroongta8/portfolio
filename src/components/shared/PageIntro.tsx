type pageProps = {
  title: string;
  description: string;
};

export default function PageIntro({ title, description }: pageProps) {
  return (
    <div className="font-nunito mb-5 w-4/5 text-wrap">
      <h1 className=" text-2xl mb-2 text-white font-semibold">{title}</h1>
      <p className="text-xl text-gray-400">{description}</p>
    </div>
  );
}
