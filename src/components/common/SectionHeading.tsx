import { cn } from "../../utils/cn";

type SectionHeadingProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  title,
  description,
  eyebrow,
  align = "left",
  className
}: SectionHeadingProps) {
const alignment = align === "center" ? "text-center items-center" : "text-left items-start";    

    return (
        <div className={cn("mb-10 flex flex-col gap-3", alignment, className)}>
            {eyebrow ? (
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-600">
                    {eyebrow}
                </span>
            ) : null}

            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {title}
            </h2>
            
            {description ? (
                <p className="max-w-2xl text-base leading-7 text-slate-600">
                    {description}
                </p>
            ) : null}
        </div>
    );
}