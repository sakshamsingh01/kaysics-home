"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";

const testimonials = [
  // Development
  {
    name: "Website Development",
    content: "Create visually stunning and responsive websites tailored to your business needs, with intuitive interfaces that drive engagement and conversions.",
    categories: [1, 2],
  },
  {
    name: "App Development",
    content: "Develop cross-platform mobile and web applications with seamless user experiences, ensuring high performance and scalability for your growing needs.",
    categories: [1, 2],
  },

  // Security
  {
    name: "Threat Intelligence",
    content: "Stay ahead of cyber threats with our real-time threat intelligence solutions, providing proactive insights to protect your digital assets.",
    categories: [1, 3],
  },
  {
    name: "Penetration Testing",
    content: "Identify and address vulnerabilities before they become risks. Our expert team conducts thorough assessments to fortify your security.",
    categories: [1, 3],
  },

  // Generative AI
  {
    name: "Content Generation",
    content: "Automate content creation with cutting-edge generative AI, producing high-quality content that aligns with your brand’s voice and style.",
    categories: [1, 4],
  },
  {
    name: "Data Analysis",
    content: "Leverage AI-driven insights to transform raw data into meaningful strategies, enhancing decision-making and operational efficiency.",
    categories: [1, 4],
  },

  // Support
  {
    name: "Technical Support",
    content: "Receive 24/7 technical support from our dedicated team, ensuring your systems are always operational and your users are supported.",
    categories: [1, 5],
  },
  {
    name: "Development Support",
    content: "Our team of experts is ready to assist you with ongoing development needs, ensuring timely updates, maintenance, and feature enhancements.",
    categories: [1, 5],
  },
];

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Don't take our word for it
          </h2>
          <p className="text-lg text-indigo-200/65">
            We provide tech-first solutions that empower decision-makers to
            build healthier and happier workspaces from anywhere in the world.
          </p>
        </div>

        <div>
          {/* Buttons */}
          <div className="flex justify-center pb-12 max-md:hidden md:pb-16">
            {/* Button components here */}
          </div>

          {/* Cards */}
          <div
            className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
            ref={masonryContainer}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <Testimonial testimonial={testimonial} category={category}>
                  {testimonial.content}
                </Testimonial>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonial({
  testimonial,
  category,
  children,
}: {
  testimonial: {
    name: string;
    content: string;
    categories: number[];
  };
  category: number;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`relative rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-sm transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]`}
    >
      <h3 className="text-lg font-semibold text-indigo-200">{testimonial.name}</h3>
      <p className="text-sm text-gray-400">{children}</p>
    </article>
  );
}
