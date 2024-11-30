import HyperText from "@/components/ui/hyper-text";
import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
    "javascript",
    "react",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "firebase",
    "express",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "solidity",
    "jira",
    "testinglibrary",
    "figma",
    "nginx",
];

export default function IconCloudDemo() {
    return (
        <div className="relative flex size-full h-screen w-screen items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}
