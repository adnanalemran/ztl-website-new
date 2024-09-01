import SecTitle from "@/components/common/SecTitle";
import React from "react";
import { PiUserSwitchFill } from "react-icons/pi";
import image from "@/utils/images/large/about.webp";
import { MdWorkspacesOutline } from "react-icons/md";
import Member from "@/components/pages/About/Member";
import jabedLargeImage from "@/utils/images/person/jabedfull.jpeg";
import adnan from "@/utils/images/employee/adnan.jpg";
import arafat from "@/utils/images/employee/arafat.jpg";
import tanvir from "@/utils/images/employee/tanver.jpg";
import Taufik from "@/utils/images/employee/Taufik.jpg";
import per1 from "@/utils/images/employee/1.png";
import per2 from "@/utils/images/employee/Chanon Dalai.png";
import per3 from "@/utils/images/employee/3.png";
import per4 from "@/utils/images/employee/4.png";
import per5 from "@/utils/images/employee/5.png";
import per6 from "@/utils/images/employee/6.png";
import per7 from "@/utils/images/employee/7.png";

const page = () => {
  return (
    <div className="min-h-100 container mx-auto lg:pt-16 pt-6 p-4 ">
      <SecTitle title="ABOUT US " subtitle="" />

      <div className="flex flex-col lg:flex-row lg:gap-16">
        <div className="w-full lg:w-1/2">
          <p className="text-justify">
            We are a software development company that specializes in creating
            custom software solutions for businesses and organizations of all
            sizes. Our team of skilled developers and designers are dedicated to
            delivering high-quality software products and services that help our
            clients achieve their goals. We are passionate about technology and
            innovation, and we are committed to helping our clients succeed in
            the digital age.
          </p>
          <div className="grid  grid-cols-2 gap-4 justify-between lg:mt-30 py-10 lg:py-0">
            <div className="flex  items-center lg:gap-4 gap-1 ">
              <div className=" text-3xl bg-primary p-3 rounded-full text-white">
                <MdWorkspacesOutline />
              </div>
              <div className="whitespace-nowrap">
                Total Operations: <div className="font-bold">10k+</div>
              </div>
            </div>
            <div className="flex  items-center lg:gap-4 gap-1 ">
              <div className=" text-3xl bg-primary p-3 rounded-full text-white">
                <MdWorkspacesOutline />
              </div>
              <div className="whitespace-nowrap">
                Total Operations: <div className="font-bold">10k+</div>
              </div>
            </div>
            <div className="flex  items-center lg:gap-4 gap-1 ">
              <div className=" text-3xl bg-primary p-3 rounded-full text-white">
                <MdWorkspacesOutline />
              </div>
              <div className="whitespace-nowrap">
                Total Operations: <div className="font-bold">10k+</div>
              </div>
            </div>{" "}
            <div className="flex  items-center lg:gap-4 gap-1 ">
              <div className=" text-3xl bg-primary p-3 rounded-full text-white">
                <MdWorkspacesOutline />
              </div>
              <div className="whitespace-nowrap">
                Total Operations: <div className="font-bold">10k+</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <img src={image.src} alt="about" className="w-full rounded-xl" />
        </div>
      </div>

      <div className="py-24">
        <div className="flex justify-between lg:gap-8 flex-col lg:flex-row items-center ">
          <div className="w-full lg:w-2/6 ">
            <img
              src={jabedLargeImage.src}
              alt="Jabed"
              className=" rounded-xl lg:w-100 w-32"
            />
          </div>
          <div className="w-full lg:w-4/6 rounded-xl ">
            <h2 className="text-end lg:text-3xl text-2xl font-bold">
              Voice of the CEO
            </h2>
            <p className="  text-justify py-8 ">
              Dear Valued Clients, Partners, and Stakeholders,
              <br />
              <br />
              As the CEO of Zaimah Technologies  , I am
              honored to lead a team of passionate professionals committed to
              driving innovation and delivering exceptional technology
              solutions. At Zaimah Technologies, we understand the rapid pace of
              change in today’s digital landscape and the challenges that
              businesses face in staying competitive. Our mission is to empower
              our clients with cutting-edge technology, ensuring they are
              well-equipped to navigate these changes and achieve sustained
              growth.
              <br />
              Our expertise in mobile application development, e-commerce
              solutions, cloud computing, and web development reflects our
              commitment to excellence. We pride ourselves on our ability to
              deliver customized solutions that meet the unique needs of each
              client, enabling them to achieve their business goals.
              <br />
              We believe in building long-term relationships based on trust,
              integrity, and mutual success. Your success is our success, and we
              are dedicated to providing the highest level of service and
              support to help you reach new heights.
              <br />
              Thank you for choosing Zaimah Technologies as your technology
              partner. We look forward to continuing our journey together and
              creating a brighter future through innovation.
            </p>
            <p className="text-end"> Jabed Akhter</p>
            <p className="text-end">
              {" "}
              CEO, Zaimah Technologies  
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl text-center font-bold">Our Team</h2>
      <p className="text-center">
        Meet the talented individuals who make up our team ... 7+
      </p>

      <div className="pt-4 pb-16 grid lg:grid-cols-4  grid-cols-1 lg:gap-4 gap-2">
        <Member name="Yusron Lateh" designation="Director" image={per1?.src} />{" "}
        <Member
          name="Chanon Dalai"
          designation="Business Advisor"
          image={per2?.src}
        />{" "}
        <Member
          name="Solah mad-adam
"
          designation="Software Engineer
"
          image={per3?.src}
        />
        <Member
          name="Azizun Usama

"
          designation="AI Engineer
"
          image={per4?.src}
        />
        <Member
          name="Rimzan Hussain
"
          designation="Senior Product Manager
"
          image={per5?.src}
        />
        <Member
          name="Laddawan Khan

"
          designation="Legal Advisor


"
          image={per6?.src}
        />
        <Member
          name="Phyu Phyu Kyaw

 "
          designation="Business Developer

"
          image={per7?.src}
        />
        <Member
          name="Arafat Hossain"
          designation="Software engineer"
          image={arafat.src}
        />
        <Member
          name="Adnan Al emran "
          designation="Software engineer"
          image={adnan.src}
        />{" "}
        <Member
          name="Md Tanvir Alam"
          designation="Software engineer"
          image={tanvir.src}
        />{" "}
        <Member
          name="Taufique Elahi
 "
          designation="Software engineer"
          image={Taufik.src}
        />
      </div>
    </div>
  );
};

export default page;
