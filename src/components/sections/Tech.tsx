import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const Tech = () => {
  return (
    <>   
    
       <Header useMotion={true} {...config.sections.tech} />
      <div className="flex flex-row flex-wrap justify-center mt-20 gap-10">
        {technologies.map((technology) => (
          <div className="h-28 w-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
