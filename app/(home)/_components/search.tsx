"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
    return (
        <div className="flex items-center gap-2">
            <Input placeholder="Pesquise por uma barbearia..."/>
            <Button variant={"default"} size={"icon"}>
                <SearchIcon size={18} />
            </Button>
        </div>
    );

}

export default Search