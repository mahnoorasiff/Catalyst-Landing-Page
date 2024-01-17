import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Carousel,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import { TestimonialCard } from "@/widgets/cards/testimonialCard";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1604399419919-5e7e3ff0db76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Auto Service & Repair
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Unlock the true potential of your Car....
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div> */}
          <div className="mt-32 flex flex-wrap items-center p-10">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                About Us
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
                <br />
                <br />
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </Typography>
              <Button variant="filled">read more</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-10 md:w-4/12 lg:mt-0 p-5">

              <img
                alt="Card Image"
                src="https://show.moxcreative.com/carbon/wp-content/uploads/sites/61/2023/03/mechanic-at-work.jpg"
                className="h-5/6 w-5/6 rounded-lg"
              />

              <img
                alt="Card Image"
                src="https://show.moxcreative.com/carbon/wp-content/uploads/sites/61/2023/03/service-worker-pouring-engine-oil.jpg"
                className="h-5/6 w-5/6 mt-12 mx-5 rounded-lg"
              />

            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <Card className="container mx-auto bg-gray-900 p-10">
          <PageTitle heading="What We Offer"  >
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-2 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </Card>
      </section>



      <section className="relative bg-gray-900 p-16 ">

        <div className="container p-4 flex ">

          <div className="mx-auto  w-5/12 ">
            <img
              className=""
              src="https://show.moxcreative.com/carbon/wp-content/uploads/sites/61/2023/03/mechanics-working-in-auto-service-1024x684.jpg">
            </img>
          </div>

          <div>
            <Typography variant="h2"
              className="mb-3 font-bold"
              color="white"  >
              Why Choose Us
            </Typography>
            <div className="container flex ">

              <div className="mt-28 max-w-[14rem] ">

                <Card className="overflow-hidden p-5 m-2 rounded-md ">
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      Fast Work and Service </Typography>

                  </CardBody>

                </Card>
                <Card className="p-5 m-2 rounded-md">
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      Trusted Provider </Typography>
                  </CardBody>

                </Card>
              </div>
              <div className="mt-28 max-w-[14rem]">
                <Card className="m-2 p-5 rounded-md">
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      Expert Mechanics
                    </Typography>

                  </CardBody>

                </Card>
                <Card className="m-2  p-5 rounded-md">
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      Reasonable Price
                    </Typography>
                  </CardBody>

                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-12">
        {/* card with image */}
        <Card className="w-9/12 bg-blue-gray-200 flex-row  m-auto">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/4 shrink-0 rounded-r-none"
          >
            <img
              src="https://show.moxcreative.com/carbon/wp-content/uploads/sites/61/2023/03/happy-men-in-auto-repair-service.jpg"
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody className="p-0">

            <Carousel className="rounded-md relative bg-gray-800  ">

              <div className=" grid h-full w-full place-items-center bg-gray-200">
                <TestimonialCard />
              </div>


              <div className=" grid h-full w-full place-items-center bg-gray-200">
                <TestimonialCard />
              </div>

            </Carousel>
          </CardBody>
        </Card>
      </section>

      <section className="relative">

      <div className="min-h-screen flex flex-col md:flex-row items-center">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src="https://show.moxcreative.com/carbon/wp-content/uploads/sites/61/2023/03/pretty-worker-holding-laptop-posing-in-autoservice.jpg"
          alt="Consultation Image"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Form Section */}
      
      <div className="w-full  bg-gray-900 md:w-1/2 p-9 rounded-md shadow-md">
      <Typography variant="h2"
              className="mb-5 text-start font-bold "
              color="white"  >
              Contact Us
            </Typography>
        <form className="mx-auto  w-full mt-10 lg:w-8/12">
          <div className="mb-8 flex gap-5">
            <Input variant="outlined" size="lg" label="Full Name" />
            <Input variant="outlined" size="lg" label="Email Address" />
          </div>
          <Textarea variant="outlined" size="md" label="Message" rows={8}  />
         
          <Button variant="gradient" size="lg" className="mt-8" fullWidth>
            Send Message
          </Button>
        </form>
      </div>
    </div>
      </section>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
