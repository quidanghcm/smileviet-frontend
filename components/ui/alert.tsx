import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/* ============================
   VARIANTS
============================= */
const alertVariants = cva(
    "flex items-stretch w-full gap-2 group-[.toaster]:w-(--width)",
    {
        variants: {
            variant: {
                secondary: "",
                primary: "",
                destructive: "",
                success: "",
                info: "",
                mono: "",
                warning: "",
            },
            icon: {
                primary: "",
                destructive: "",
                success: "",
                info: "",
                warning: "",
            },
            appearance: {
                solid: "",
                outline: "",
                light: "",
                stroke: "text-foreground",
            },
            size: {
                lg: "rounded-lg p-4 gap-3 text-base [&>[data-slot=alert-icon]>svg]:size-6 *:data-slot=alert-icon:mt-0.5 [&_[data-slot=alert-close]]:mt-1",
                md: "rounded-lg p-3.5 gap-2.5 text-sm [&>[data-slot=alert-icon]>svg]:size-5 *:data-slot=alert-icon:mt-0 [&_[data-slot=alert-close]]:mt-0.5",
                sm: "rounded-md px-3 py-2.5 gap-2 text-xs [&>[data-alert-icon]>svg]:size-4 *:data-slot=alert-icon:mt-0.5 [&_[data-slot=alert-close]]:mt-0.25 [&_[data-slot=alert-close]_svg]:size-3.5",
            },
        },
        defaultVariants: {
            variant: "secondary",
            appearance: "solid",
            size: "md",
        },
    }
);

/* ============================
   TYPES
============================= */

// type của Alert props
interface AlertProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
    close?: boolean;
    onClose?: () => void;
}

// type chung cho các phần tử nhỏ
interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

/* ============================
   COMPONENTS
============================= */

export function Alert({
    className,
    variant,
    size,
    icon,
    appearance,
    close = false,
    onClose,
    children,
    ...props
}: AlertProps) {
    return (
        <div
            data-slot="alert"
            role="alert"
            className={cn(alertVariants({ variant, size, icon, appearance }), className)}
            {...props}
        >
            {children}

            {close && (
                <button
                    onClick={onClose}
                    aria-label="Dismiss"
                    data-slot="alert-close"
                    className="group shrink-0 size-4 flex items-center justify-center rounded hover:bg-muted transition"
                >
                    <X className="size-4 opacity-60 group-hover:opacity-100" />
                </button>


            )}
        </div>
    );
}

export function AlertTitle({ className, children, ...props }: BaseProps) {
    return (
        <div
            data-slot="alert-title"
            className={cn("grow tracking-tight", className)}
            {...props}
        >
            {children}
        </div>
    );
}

export function AlertIcon({ className, children, ...props }: BaseProps) {
    return (
        <div
            data-slot="alert-icon"
            className={cn("shrink-0", className)}
            {...props}
        >
            {children}
        </div>
    );
}

export function AlertToolbar({ className, children, ...props }: BaseProps) {
    return (
        <div data-slot="alert-toolbar" className={cn(className)} {...props}>
            {children}
        </div>
    );
}

export function AlertDescription({ className, children, ...props }: BaseProps) {
    return (
        <div
            data-slot="alert-description"
            className={cn("text-sm [&_p]:leading-relaxed [&_p]:mb-2", className)}
            {...props}
        >
            {children}
        </div>
    );
}

export function AlertContent({ className, children, ...props }: BaseProps) {
    return (
        <div
            data-slot="alert-content"
            className={cn(
                "space-y-2 [&_[data-slot=alert-title]]:font-semibold",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
