import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";


const BookingItem = () => {
    return (
        <Card>
            <CardContent className="p-5 flex justify-between py-0">
                <div className="flex flex-col gap-2 py-5">
                    <Badge className="bg-[#221C3D] text-primary hover:bg-[#8e16acc4] w-fit">Confirmado</Badge>
                    <h2 className="font-bold">Corte de Cabelo</h2>

                    <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                            <AvatarImage src="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png" />
                            <AvatarFallback>FC</AvatarFallback>
                        </Avatar>

                        <h3 className="text-sm">Vintage Barber</h3>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center border-l border-solid border-secondary px-3">
                    <p className="text-sm">Outubro</p>
                    <p className="text-2xl">30</p>
                    <p className="text-sm">15:32</p>

                </div>
            </CardContent>
        </Card>
    );
}

export default BookingItem