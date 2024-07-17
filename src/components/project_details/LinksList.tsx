import { Link } from "../../data/projects";

export default function LinksList(props: { title: string; list: Array<Link> }) {
  return (
    <>
      {props.list.length > 0 && (
        <div className="w-fit">
          <h1 className="text-white font-bold text-lg mb-1">{props.title}</h1>
          {props.list.map((e) => (
            <div className="w-fit" key={e.url}>
              <a href={e.url}>
                <p className="mb-1">{e.title}</p>
              </a>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
