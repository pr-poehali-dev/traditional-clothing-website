
import { Card, CardContent } from "@/components/ui/card";

interface ClothingCardProps {
  title: string;
  description: string;
  image: string;
}

const ClothingCard = ({ title, description, image }: ClothingCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-dark/80 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ClothingCard;
