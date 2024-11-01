"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  //const { data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  }
  return (
    <Card>
      <CardContent className="p-5 justify-between items-center flex flex-row">
        <Image src="/logo.png" alt="FSW Barber logo" height={22} width={120} />
        <Button variant={"outline"} size={"icon"} className="h-8 w-8">
          <MenuIcon size={18} />
        </Button>
      </CardContent>
    </Card>
  );
}

export default Header