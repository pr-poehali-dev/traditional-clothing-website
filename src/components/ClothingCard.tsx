
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ClothingCardProps {
  title: string;
  description: string;
  image: string;
}

const ClothingCard = ({ title, description, image }: ClothingCardProps) => {
  return (
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <Button 
          variant="outline" 
          className="w-full border-amber-600 text-amber-600 hover:bg-amber-50"
        >
          Подробнее
        </Button>
      </CardContent>
    </Card>
  );
};

export default ClothingCard;
