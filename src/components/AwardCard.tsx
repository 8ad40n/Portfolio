"use client"
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

interface AwardCardProps {
  title: string;
  associate: string;
  logoUrl: string;
  description: string;
  period: string;
  href?: string;
  badges?: readonly string[];
}

export default function AwardCard({
  title,
  associate,
  logoUrl,
  description,
  period,
  href,
  badges,
}: AwardCardProps) {
  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
    >
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={associate}
              className="object-contain"
            />
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {associate && <div className="font-sans text-xs">Associated with {associate}</div>}
          </CardHeader>
          {/* Always show the description */}
          {description && (
            <div className="mt-2 font-sans text-xs">
              {description}
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
}
