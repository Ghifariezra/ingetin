import { Badge } from "@/components/ui/badge";

export function BadgeManager({ className, children }: { className?: string; children: React.ReactNode }) {
    return (
        <Badge className={className}>
            {children}
        </Badge>
    );
}