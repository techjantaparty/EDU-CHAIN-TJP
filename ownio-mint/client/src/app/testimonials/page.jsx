"use client";
import HyperText from "@/components/ui/hyper-text";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
    {
        name: "Aarav",
        username: "@aarav",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "https://avatar.vercel.sh/aarav",
    },
    {
        name: "Isha",
        username: "@isha",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "https://avatar.vercel.sh/isha",
    },
    {
        name: "Vihaan",
        username: "@vihaan",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/vihaan",
    },
    {
        name: "Anaya",
        username: "@anaya",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/anaya",
    },
    {
        name: "Aditi",
        username: "@aditi",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/aditi",
    },
    {
        name: "Rohan",
        username: "@rohan",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/rohan",
    },
{
    name: "Aryan",
    username: "@aryan",
    body: "This is a game changer. Absolutely love it.",
    img: "https://avatar.vercel.sh/aryan",
},
{
    name: "Diya",
    username: "@diya",
    body: "Incredible experience. Highly recommend it.",
    img: "https://avatar.vercel.sh/diya",
},
{
    name: "Kabir",
    username: "@kabir",
    body: "Fantastic! Exceeded my expectations.",
    img: "https://avatar.vercel.sh/kabir",
},
{
    name: "Maya",
    username: "@maya",
    body: "A must-have for everyone. Brilliant.",
    img: "https://avatar.vercel.sh/maya",
},
{
    name: "Arjun",
    username: "@arjun",
    body: "Simply outstanding. Can't get enough of it.",
    img: "https://avatar.vercel.sh/arjun",
},
{
    name: "Sara",
    username: "@sara",
    body: "Absolutely phenomenal. Highly impressed.",
    img: "https://avatar.vercel.sh/sara",
},
{
    name: "Riya",
    username: "@riya",
    body: "Mind-blowing experience. Totally worth it.",
    img: "https://avatar.vercel.sh/riya",
},
{
    name: "Dev",
    username: "@dev",
    body: "Unbelievably good. Highly recommend.",
    img: "https://avatar.vercel.sh/dev",
},
{
    name: "Anika",
    username: "@anika",
    body: "Top-notch quality. Very satisfied.",
    img: "https://avatar.vercel.sh/anika",
},
{
    name: "Nikhil",
    username: "@nikhil",
    body: "Exceeded all my expectations. Fantastic.",
    img: "https://avatar.vercel.sh/nikhil",
},
{
    name: "Tara",
    username: "@tara",
    body: "Absolutely love it. Highly recommend.",
    img: "https://avatar.vercel.sh/tara",
},
{
    name: "Kunal",
    username: "@kunal",
    body: "Incredible product. Very happy with it.",
    img: "https://avatar.vercel.sh/kunal",
},
{
    name: "Meera",
    username: "@meera",
    body: "Outstanding experience. Will buy again.",
    img: "https://avatar.vercel.sh/meera",
},
{
    name: "Ayaan",
    username: "@ayaan",
    body: "Fantastic quality. Very impressed.",
    img: "https://avatar.vercel.sh/ayaan",
},
{
    name: "Sana",
    username: "@sana",
    body: "Highly recommend this. Brilliant.",
    img: "https://avatar.vercel.sh/sana",
},
{
    name: "Ravi",
    username: "@ravi",
    body: "Absolutely amazing. Exceeded expectations.",
    img: "https://avatar.vercel.sh/ravi",
},
{
    name: "Naina",
    username: "@naina",
    body: "Incredible experience. Will recommend.",
    img: "https://avatar.vercel.sh/naina",
},
{
    name: "Ishaan",
    username: "@ishaan",
    body: "Top quality. Very satisfied.",
    img: "https://avatar.vercel.sh/ishaan",
},
{
    name: "Leela",
    username: "@leela",
    body: "Mind-blowing product. Highly recommend.",
    img: "https://avatar.vercel.sh/leela",
},
{
    name: "Rishi",
    username: "@rishi",
    body: "Exceeded all expectations. Fantastic.",
    img: "https://avatar.vercel.sh/rishi",
},
{
    name: "Anvi",
    username: "@anvi",
    body: "Absolutely phenomenal. Very impressed.",
    img: "https://avatar.vercel.sh/anvi",
},
{
    name: "Kiran",
    username: "@kiran",
    body: "Highly recommend this. Brilliant.",
    img: "https://avatar.vercel.sh/kiran",
},
{
    name: "Aisha",
    username: "@aisha",
    body: "Outstanding experience. Will buy again.",
    img: "https://avatar.vercel.sh/aisha",
},
{
    name: "Rohit",
    username: "@rohit",
    body: "Fantastic quality. Very impressed.",
    img: "https://avatar.vercel.sh/rohit",
},
{
    name: "Zara",
    username: "@zara",
    body: "Highly recommend this. Brilliant.",
    img: "https://avatar.vercel.sh/zara",
},
{
    name: "Vikram",
    username: "@vikram",
    body: "Absolutely amazing. Exceeded expectations.",
    img: "https://avatar.vercel.sh/vikram",
},
{
    name: "Priya",
    username: "@priya",
    body: "Incredible experience. Will recommend.",
    img: "https://avatar.vercel.sh/priya",
},
{
    name: "Aman",
    username: "@aman",
    body: "Top quality. Very satisfied.",
    img: "https://avatar.vercel.sh/aman",
},
{
    name: "Neha",
    username: "@neha",
    body: "Mind-blowing product. Highly recommend.",
    img: "https://avatar.vercel.sh/neha",
},
{
    name: "Raj",
    username: "@raj",
    body: "Exceeded all expectations. Fantastic.",
    img: "https://avatar.vercel.sh/raj",
}
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export default function MarqueeDemo() {
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <HyperText
                className="text-4xl font-bold text-black dark:text-white"
                text="Prestigious Testimonials"
            />
            <Marquee pauseOnHover className="[--duration:90s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:90s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
};
