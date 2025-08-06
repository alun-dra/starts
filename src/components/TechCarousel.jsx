import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import ReactLogo from '../assets/react-2.svg'
import AwsLogo from '../assets/aws-2.svg'
import DockerLogo from '../assets/docker.svg'
import KubernetesLogo from '../assets/kubernetes.svg'
import AngularLogo from '../assets/angular-icon.svg'
import VueLogo from '../assets/vue-9.svg'
import JsLogo from '../assets/javascript-1.svg'
import TsLogo from '../assets/typescript-2.svg'
import JavaLogo from '../assets/java-4.svg'
import PythonLogo from '../assets/python-5.svg'

const stackLogos = [
  
  { src: AwsLogo, alt: "AWS" },
  { src: DockerLogo, alt: "Docker" },
  { src: KubernetesLogo, alt: "Kubernetes" },
  { src: ReactLogo, alt: "React" },
  { src: AngularLogo, alt: "Angular" },
  { src: VueLogo, alt: "Vue.js" },
  { src: JsLogo, alt: "JavaScript" },
  { src: TsLogo, alt: "TypeScript" },
  { src: JavaLogo, alt: "Java" },
  { src: PythonLogo, alt: "Python" },
]

export default function CarruselTecnologias() {
  return (
    <section className="bg-dark py-16 text-white relative">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-10">
          Tecnologías en las que nos centramos
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={40}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          loop
          navigation
          autoplay={{ delay: 2500 }}
          className="relative"
        >
          {stackLogos.map((logo, idx) => (
            <SwiperSlide key={idx} className="flex justify-center items-center">
              <img
                src={logo.src}
                alt={logo.alt}
                title={logo.alt}
                className="h-8 sm:h-8 md:h-10 transition duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

     <style>{`
  .swiper-button-prev,
  .swiper-button-next {
    color: #0080ff;
    width: 20px;
    height: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  .swiper-button-prev {
    left: -25px;
  }

  .swiper-button-next {
    right: -25px;
  }
`}</style>

    </section>
  )
}


