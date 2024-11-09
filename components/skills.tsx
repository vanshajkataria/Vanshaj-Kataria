import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "amazonaws",
  "firebase",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "figma",
];

export default function Skills() {
  return (
    <>
      <div className="lg:pb-4">
        <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-black text-center">
          Skills
        </h1>
      </div>
      <div className="relative flex items-center justify-center px-6 lg:px-20 mx-auto">
        <IconCloud iconSlugs={slugs} />
      </div>
    </>
  );
}
