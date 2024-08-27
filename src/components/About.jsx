import { BiLogoInstagram, BiLogoFacebook, BiLogoBehance } from 'react-icons/bi';

const About = () => {
  return (
    <div className="w-[90%] max-w-screen-2xl mx-auto text-white my-12">
      <div className="my-4 w-full">
        <h1 className="text-xl md:text-3xl">About</h1>
        <p className="md:w-[50%] text-xl mt-4 leading-10">
          I&apos;m a photographer who captures the essence of people in stunning portraits and the beauty of nature in breathtaking landscapes.
        </p>
        <p className="mt-8"><a href="" className="underline text-xl">Let&apos;s work together.</a></p>
      </div>
      <div className="w-full flex justify-center mt-8">
        <div className="flex space-x-10">
          <BiLogoInstagram size={30}/>
          <BiLogoFacebook size={30}/>
          <BiLogoBehance size={30}/>
        </div>
      </div>
    </div>
  );
};

export default About;
