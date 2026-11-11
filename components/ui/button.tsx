import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-sans font-semibold tracking-[0.16em] uppercase transition-[background-color,color,border-color,transform] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        gold: "bg-gold text-ink hover:bg-gold-bright focus-visible:ring-offset-ink",
        outline:
          "border border-gold-bright/70 bg-transparent text-ivory hover:border-gold-bright hover:bg-white/10 focus-visible:ring-offset-ink",
        ink: "bg-ink text-ivory hover:bg-ink-soft focus-visible:ring-offset-ivory",
      },
      size: {
        default: "h-11 px-6 text-[0.72rem]",
        lg: "h-12 px-7 text-[0.75rem]",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
