import { useRef } from "react";
import PageIntro from "./shared/PageIntro";
import Slider, { CustomArrowProps } from "react-slick";
import { projects } from "../data/projects";
import ProjectTile from "./ProjectTile";
import leftChevron from "../assets/svg/chevron-left.svg";
import rightChevron from "../assets/svg/chevron-right.svg";

function SampleNextArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  return (
    <img
      src={rightChevron}
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  return (
    <img
      src={leftChevron}
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default function ProjectsList() {
  const projectRef = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div
      id="projects"
      ref={projectRef}
      className="h-screen pt-20 px-10 md:px-32"
    >
      <PageIntro
        title="Projects"
        description="Here are a few projects I've worked on, including some developed for college that are actively used by students on campus."
      />
      <div className="w-full pt-10">
        <Slider {...settings}>
          {projects.map((e) => (
            <ProjectTile projectInfo={e} key={e.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
