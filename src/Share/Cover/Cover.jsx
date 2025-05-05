import { Parallax} from 'react-parallax';

const Cover = ({ img, title, subTitle }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div>
        <div
          className="hero min-h-screen h-[600px]"
          
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-7xl font-bold uppercase">{title}</h1>
              <p className="mb-5 text-xl">
                {subTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>



  );
};

export default Cover;
