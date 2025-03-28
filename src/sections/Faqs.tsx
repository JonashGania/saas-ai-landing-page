import Tag from "@/components/Tag";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What integrations are supported?",
    answer:
      "CodeFlow support VS Code, GitHub, JetBrains, Neovim, Bitbucket, and GitLab, ensuring seamless workflow integration.",
  },
  {
    question: "Do you support real-time collaboration?",
    answer:
      "Yes! Integrations like GitHub and GitLab support live collaboration and code sharing.",
  },
  {
    question: "How is CodeFlow different from other AI code completion tools?",
    answer:
      "CodeFlow runs locally for faster, private AI coding assistance and seamlessly integrates with your favorite tools.",
  },
  {
    question: "Do I need to install a plugin for integrations?",
    answer:
      "No, CodeFlow works out of the box with your favorite tools, no plugins required.",
  },
];

const Faqs = () => {
  return (
    <section className="container mx-auto py-20 px-4">
      <div className="flex flex-col justify-center items-center">
        <Tag>FAQs</Tag>
        <h2 className="text-gray-200 font-medium text-3xl sm:text-5xl lg:text-6xl mt-4 text-center max-w-[500px]">
          Questions? We've got <span className="text-violet-500">answers</span>
        </h2>

        <Accordion
          type="single"
          collapsible
          className="mt-12 sm:mt-20 max-w-xl w-full space-y-2"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-neutral-900 border border-white/15 px-4 py-2 rounded-2xl"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="flex flex-1 text-start gap-2 cursor-pointer items-center justify-between py-4 text-gray-200 transition-all [&[data-state=open]>svg]:rotate-135">
                  {faq.question}
                  <Plus
                    strokeWidth={3}
                    className="h-5 w-5 shrink-0 transition-transform duration-200 text-violet-500"
                  />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faqs;
